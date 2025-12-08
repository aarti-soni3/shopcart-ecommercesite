import {
  equalTo,
  onValue,
  orderByChild,
  query,
  ref,
  set,
} from "firebase/database";
import { database } from "../../firebaseConfig";
import { nanoid } from "nanoid";

export const ORDER_PATH = "orders";

export const listenToUserOrders = (userID, callback, errorCallback) => {
  try {
    const orderRef = ref(database, ORDER_PATH);
    const userOrderQuery = query(
      orderRef,
      orderByChild("userId"),
      equalTo(userID)
    );

    const unsubscribe = onValue(
      userOrderQuery,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          console.log(data);
          callback(data);
        } else {
          callback(null);
        }
      },
      (error) => {
        console.log("listen to order error : ", error);
        if (errorCallback) errorCallback(error);
      }
    );

    return unsubscribe;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createOrderData = async (userID, cartData, orderData) => {
  try {
    const newOrder = getProcessedOrderData(userID, cartData, orderData);
    const orderID = newOrder.orderId;
    await writeOrderByID(orderID, newOrder);
    return newOrder;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getProcessedOrderData = (userID, cartData, orderData) => {
  const newOrderData = {
    orderId: nanoid(),
    userId: userID,
    userDetails: {
      fullName: orderData.fullName,
      email: orderData.email,
      phone: orderData.phone,
      address: {
        address: orderData.address.address,
        city: orderData.address.city,
        state: orderData.address.state,
        country: orderData.address.country,
        postalCode: orderData.address.postalCode,
      },
    },
    cart: {
      products: cartData.products,
      total: cartData.total,
      discountedTotal: cartData.discountedTotal,
      totalProducts: cartData.totalProducts,
      totalQuantity: cartData.totalQuantity,
    },
    paymentId: orderData.paymentId || "",
    paymentMethod: orderData.paymentMethod,
    orderStatus: "pending",
    createdAt: new Date().toISOString(),
  };

  return newOrderData;
};

export const writeOrderByID = async (orderID, orderData) => {
  const db = database;
  console.log(orderData);
  await set(ref(db, ORDER_PATH + "/" + orderID), orderData);
  return orderData;
};
