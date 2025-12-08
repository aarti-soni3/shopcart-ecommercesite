const getRazorPayKeyID = () => {
  return "rzp_test_RoidoY4kLEivf9";
//   const keyId = import.meta.env.VITE_RAZORPAY_KEY_ID;

//   console.log(import.meta.env.VITE_RAZORPAY_KEY_ID);
//   console.log(keyId);

//   if (!keyId) {
//     console.error("Razorpay Key ID not found in environment variables");
//     return null;
//   }

//   return keyId;
};

const convertToPaise = (amount) => {
  return Math.round(amount * 100);
};

//TODO: used
export const createRazorPayOptions = ({
  amount,
  currency = "INR",
  name = "ShopCart - Ecommerce Website",
  description = "Shopping Products",
  userDetails,
  onSuccess,
  onFailure,
  theme = { color: "#3399cc" },
}) => {
  const keyID = getRazorPayKeyID();

  if (!keyID) {
    throw new Error("Razorpay Key ID is not configured");
  }

  const options = {
    key: keyID,
    amount: convertToPaise(amount),
    currency: currency,
    name: name,
    description: description,
    handler: function (response) {
      console.log("Payment Successful", response);

      if (onSuccess) {
        onSuccess(response);
      }
    },
    prefill: {
      name: userDetails?.fullName || "Guest",
      email: userDetails?.email || "",
      phone: userDetails?.phone || "",
    },
    modal: {
      ondismiss: function () {
        console.log("Payment popup closed");
        if (onFailure) {
          onFailure({ error: "Payment cancelled by user" });
        }
      },
    },

    theme: theme,

    notes: {
      customer_name: userDetails?.fullName || "Guest",
      customer_email: userDetails?.email || "",
    },
  };

  return options;
};

// Check if Razorpay is loaded
export const isRazorpayLoaded = () => {
  return typeof window !== "undefined" && window.Razorpay !== undefined;
};

// Load Razorpay script dynamically (alternative to adding in HTML)
export const loadRazorpayScript = () => {
  return new Promise((resolve, reject) => {
    // Check if already loaded
    if (isRazorpayLoaded()) {
      resolve(true);
      return;
    }

    // Create script element
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    script.onload = () => {
      console.log("Razorpay script loaded successfully");
      resolve(true);
    };

    script.onerror = () => {
      console.error("Failed to load Razorpay script");
      reject(new Error("Failed to load Razorpay SDK"));
    };

    document.body.appendChild(script);
  });
};
