import { useContext, useEffect, useState } from "react";
import {
  AuthContext,
  CartContext,
  OrderContext,
} from "../../../Context Provider/CreateContext";
import {
  createOrderData,
  listenToUserOrders,
  writeOrderByID,
} from "./orderService";

export default function OrderProvider({ children }) {
  const [orderData, setOrderData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { currentUser } = useContext(AuthContext);
  const { cart } = useContext(CartContext);

  useEffect(() => {
    const loadData = async () => {
      if (!currentUser?.uid) {
        setOrderData(null);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        await listenToUserOrders(currentUser.uid, setOrderData, setError);
        return orderData;
      } catch (err) {
        console.log("get order data by id error: ", error);
        setError(err);
        throw err;
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [currentUser]);

  const createOrder = async (orderData) => {
    if (!currentUser?.uid) throw new Error("User not authenticated");
    const userID = currentUser.uid;
    try {
      const newOrder = await createOrderData(userID, cart, orderData);
      return newOrder;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const writeOrderDataByID = async (orderData) => {
    if (!currentUser?.uid) {
      throw new Error("User is not authenticated ");
    }

    const userID = currentUser.uid;
    try {
      const updatedData = await writeOrderByID(userID, orderData);
      return updatedData;
    } catch (error) {
      setError(error.message);
      throw new Error(error);
    }
  };

  return (
    <OrderContext.Provider
      value={{ orderData, loading, error, writeOrderDataByID, createOrder }}
    >
      {children}
    </OrderContext.Provider>
  );
}
