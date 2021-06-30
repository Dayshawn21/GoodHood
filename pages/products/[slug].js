import React, { useState, useEffect } from "react";
import { fromImagetoUrl, API_URL } from "../../utils/urls";
import client from "../../shopify/shopify";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.scss";
import { Dropdown, DropdownButton } from "react-bootstrap";

const Product = ({ product, checkout }) => {
  const [amount, setAmount] = useState(1);
  const [isCheckoutHasItem, setIsCheckoutHasItem] = useState();
  const [selectedVariant, setSelectedVariant] = useState("");
  const [selectedImage, setSelectedImage] = useState(0);
  const variant = product.variants[0];

  console.log(product);

  const addItemsToAdd = () => {
    const checkoutId = checkout.id;
    const lineItemsToAdd = [
      {
        variantId: variant.id,
        quantity: amount,
        customAttributes: [],
      },
    ];

    client.checkout
      .addLineItems(checkoutId, lineItemsToAdd)
      .then((checkout) => {
        console.log(JSON.parse(JSON.stringify(checkout)));
        console.log(checkout.lineItems);
      });
  };

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
        <h1 className="text-2xl py-3">${variant.priceV2.amount}</h1>
        <h1 className="text-base">{product.description}</h1>
        <div className="py-4 ">
          {product.options.map(({ name, id, values }) => {
            return (
              <label className="mr-3">
                {name}:
                <div className="inline-block relative ">
                  <select className="  block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    {values &&
                      values.map(({ i, value }) => (
                        <option key={i}>{value}</option>
                      ))}
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </label>
            );
          })}
        </div>

        <input
          type="number"
          className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
          text-gray-600 placeholder-gray-400 
          outline-none"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          className="bg-blue-500 ml-4 rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600"
          onClick={addItemsToAdd}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { slug } = context.params;
  const product = await client.product.fetchByHandle(slug);
  const checkout = await client.checkout.create();

  return {
    props: {
      // products,
      // podcasts,
      product: JSON.parse(JSON.stringify(product)),
      checkout: JSON.parse(JSON.stringify(checkout)),
    },
  };
};

export default Product;
