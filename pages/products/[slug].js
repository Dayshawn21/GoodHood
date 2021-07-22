import React, { useState, useEffect } from "react";

import client from "../../shopify/shopify";
import Image from "next/image";
import Select from "react-dropdown-select";

const parseData = (data) => {
  return JSON.parse(JSON.stringify(data));
};
const getDataFromStorage = (key) => {
  const storage = window.localStorage;
  return JSON.parse(storage.getItem(key));
};
const setDataToStorage = (key, data) => {
  const storage = window.localStorage;
  storage.setItem(key, JSON.stringify(data));
};

const Product = ({ product }) => {
  const [amount, setAmount] = useState(1);
  const [checkout, setCheckout] = useState(null);
  const [checkoutHasItem, setCheckoutHasItem] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const variant = product.variants[0];
  console.log(selectedVariant);
  console.log(product);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const tempCheckout = getDataFromStorage("checkout");
      if (tempCheckout) {
        tempCheckout.lineItems &&
          tempCheckout.lineItems.forEach((lineItem) => {
            if (lineItem.title === product.title) {
              setAmount(lineItem.quantity);
              setCheckoutHasItem(true);
            }
          });
        setCheckout(tempCheckout);
        console.log("this is useEffect log ==>", tempCheckout);
      }
    }
  }, []);

  const addItemToCart = async () => {
    try {
      let checkoutTemp = null;
      if (getDataFromStorage("checkout")) {
        checkoutTemp = getDataFromStorage("checkout");
      } else {
        checkoutTemp = await client.checkout.create();
      }

      let checkout = parseData(checkoutTemp);
      const checkoutId = checkout.id;

      const lineItemsToAdd = [
        {
          variantId: variant.id,

          quantity: amount,
          customAttributes: [],
        },
      ];

      checkout = await client.checkout.addLineItems(checkoutId, lineItemsToAdd);
      console.log(parseData(checkout));
      setCheckout(parseData(checkout));
      setDataToStorage("checkout", checkout);
      setCheckoutHasItem(true);
    } catch (error) {
      console.log(error);
    }
  };
  const updateCheckout = async () => {
    try {
      const [lineItem] = checkout.lineItems.filter(
        (lineItem) => lineItem.title === product.title
      );
      const checkoutId = checkout.id;
      const lineItemToUpdate = [
        {
          id: lineItem.id,
          quantity: amount,
        },
      ];
      console.log(lineItemToUpdate, checkoutId);
      const tempCheckout = await client.checkout.updateLineItems(
        checkoutId,
        lineItemToUpdate
      );
      setDataToStorage("checkout", tempCheckout);
    } catch (error) {
      console.log(error);
    }
  };
  const options = product.variants.map(({ id, title, values }) => ({
    value: title,
    label: title,
  }));

  return (
    <div key={product.id} className="py-3 md:grid grid-cols-2 container">
      <div className="items-center">
        <Image
          width="400"
          height="400"
          src={product.images[selectedImage].src}
        />
        <ul className="flex">
          {product.images.map((image, index) => {
            return (
              <li
                style={{ cursor: "pointer" }}
                key={index}
                onClick={() => setSelectedImage(index)}
              >
                <Image width="150" height="150" src={image.src} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="py-4">
        <h1 className="extrabold text-3xl">{product.title}</h1>
        {/* <h1 className="text-2xl py-3">${variant.priceV2.amount}</h1> */}
        <h1 className="text-base">{product.description}</h1>

        <div className="py-4 ">
          <h3>Size/Color</h3>
          <Select
            defaultValue={selectedVariant}
            onChange={(selectedVariant) => setSelectedVariant(selectedVariant)}
            options={options}
          />
        </div>

        <div class="flex flex-wrap">
          <div class="flex">
            <input
              type="text"
              value={amount}
              value={amount}
              onChange={() => setAmount(amount + 1)}
              class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
              text-gray-600 placeholder-gray-400 "
            />
          </div>
          <div class="flex flex-col">
            <button
              class="text-white text-center text-md font-semibold rounded-tr-md px-1 bg-blue-500 focus:bg-gray-600 focus:outline-none border border-gray-800 focus:border-gray-600"
              value={amount}
              onClick={(e) => setAmount(amount + 1)}
            >
              +
            </button>
            <button
              class="text-white text-center text-md font-semibold rounded-br-md px-1 bg-blue-500 focus:bg-gray-600 focus:outline-none border border-gray-800 focus:border-gray-600"
              value={amount}
              onClick={(e) => setAmount(amount - 1)}
            >
              -
            </button>
          </div>
          <button
            className="bg-blue-500 ml-4 rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600"
            onClick={!checkoutHasItem ? addItemToCart : updateCheckout}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { slug } = context.params;
  const product = await client.product.fetchByHandle(slug);

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
};

export default Product;
