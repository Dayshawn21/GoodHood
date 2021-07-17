import { useEffect, useState } from "react";
import Image from "next/image";
import client from "../shopify/shopify";
const getDataFromStorage = (key) => {
  const storage = window.localStorage;
  return JSON.parse(storage.getItem(key));
};
const setDataToStorage = (key, data) => {
  const storage = window.localStorage;
  storage.setItem(key, JSON.stringify(data));
};
const parseData = (data) => {
  return JSON.parse(JSON.stringify(data));
};

const Cart = () => {
  const [checkout, setCheckout] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkout = getDataFromStorage("checkout");
      console.log(checkout);
      if (checkout) {
        client.checkout.fetch(checkout.id).then((response) => {
          setCheckout(response);
        });
      }
    }
  }, []);
  const removeItemFromCart = async (check, item) => {
    console.log("im here", check);
    const checkoutId = check.id;
    const lineItemIdsToRemove = [item.id];

    // Remove an item from the checkout
    const checkout = await client.checkout.removeLineItems(
      checkoutId,
      lineItemIdsToRemove
    );
    setDataToStorage("checkout", checkout);
    setCheckout(parseData(checkout));
  };
  console.log({ checkout });
  if (!checkout) {
    return (
      <div>
        <h1>Your Cart</h1>
        <p>You dont have any item in your cart</p>
      </div>
    );
  }
  return (
    <div className="container text-center">
      <h1 className="text-3xl"> Your Cart </h1>
      <ul>
        {checkout &&
          checkout.lineItems.map((item) => {
            return (
              <div className="flex items-center ">
                <div>
                  <Image
                    width="200"
                    height="200"
                    src={item.variant.image.src}
                  />
                </div>
                <div className="text-center items-center">
                  <h1>{item.title}</h1>
                  <p>${item.variant.price}</p>
                  <p>{item.quantity}</p>
                  <p>{item.variant.title}</p>
                </div>
                <button onClick={() => removeItemFromCart(checkout, item)}>
                  {" "}
                  remove{" "}
                </button>
              </div>
            );
          })}
      </ul>

      <a href={checkout.webUrl}>Proceed to checkout </a>
    </div>
  );
};

export default Cart;
