import { useState } from "react";
import { Button, CircularProgress, Alert } from "@mui/material";
import { createRazorPayOptions ,isRazorpayLoaded} from "../utils/razorpayConfig";

export default function RazorpayButton({ 
  amount, 
  userDetails, 
  onSuccess, 
  onError,
  disabled = false 
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePayment = async () => {
    try {
      setLoading(true);
      setError(null);

      // Check if Razorpay is loaded
      if (!isRazorpayLoaded()) {
        throw new Error(
          "Razorpay SDK not loaded. Please refresh the page and try again."
        );
      }

      // Validate amount
      if (!amount || amount <= 0) {
        throw new Error("Invalid payment amount");
      }

      // Create Razorpay options
      const options = createRazorPayOptions({
        amount: amount,
        currency: "INR",
        name: "Shopcart - Ecommerce Website",
        description: "Order Payment",
        userDetails: userDetails,
        
        // Success callback
        onSuccess: (response) => {
          console.log("Payment successful:", response);
          setLoading(false);
          
          // Pass payment response to parent component
          if (onSuccess) {
            onSuccess({
              paymentId: response.razorpay_payment_id,
            //   orderId: response.razorpay_order_id,
            //   signature: response.razorpay_signature,
            });
          }
        },
        
        // Failure callback
        onFailure: (errorData) => {
          console.log("Payment failed:", errorData);
          setLoading(false);
          setError(errorData.error || "Payment was cancelled");
          
          if (onError) {
            onError(errorData);
          }
        },
        
        // Theme
        theme: {
          color: "#1976d2", // Match your app's primary color
        },
      });

      // Initialize Razorpay
      const razorpay = new window.Razorpay(options);

      // Handle payment failure
      razorpay.on("payment.failed", function (response) {
        console.error("Payment failed:", response.error);
        setLoading(false);
        setError(response.error.description || "Payment failed");
        
        if (onError) {
          onError({
            error: response.error.description,
            reason: response.error.reason,
          });
        }
      });

      // Open Razorpay payment modal
      razorpay.open();

    } catch (err) {
      console.error("Error initiating payment:", err);
      setError(err.message || "Failed to initiate payment");
      setLoading(false);
      
      if (onError) {
        onError({ error: err.message });
      }
    }
  };

  return (
    <>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      <Button
        variant="contained"
        color="primary"
        onClick={handlePayment}
        disabled={loading || disabled}
        fullWidth
        sx={{ py: 1.5 }}
      >
        {loading ? (
          <>
            <CircularProgress size={20} sx={{ mr: 1, color: "white" }} />
            Processing Payment...
          </>
        ) : (
          `Pay ₹${amount?.toFixed(2) || 0}`
        )}
      </Button>
    </>
  );
}