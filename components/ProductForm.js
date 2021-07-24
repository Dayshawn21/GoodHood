import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCartContext, useAddToCartContext } from "../context/Store";
import ProductImage from "./ProductImage";

const ProductForm = ({ title, handle, variants, setVariantPrice, mainImg }) => {
  const [quantity, setQuantity] = useState(1);
  const [variantId, setVariantId] = useState(variants[0].node.id);
  const [variant, setVariant] = useState(variants[0]);
  const isLoading = useCartContext()[2];
  const addToCart = useAddToCartContext();
  const [selectedImage, setSelectedImage] = useState(0);

  function handleSizeChange(e) {
    setVariantId(e);
    // send back size change
    const selectedVariant = variants.filter((v) => v.node.id === e).pop();
    setVariantPrice(selectedVariant.node.price);

    // update variant
    setVariant(selectedVariant);
  }

  async function handleAddToCart() {
    const varId = variant.node.id;
    // update store context
    if (quantity !== "") {
      addToCart({
        productTitle: title,
        productHandle: handle,
        productImage: mainImg,
        variantId: varId,
        variantPrice: variant.node.price,
        variantTitle: variant.node.title,
        variantQuantity: quantity,
      });
    }
  }

  function updateQuantity(e) {
    if (e === "") {
      setQuantity("");
    } else {
      setQuantity(Math.floor(e));
    }
  }

  return (
    <div className="w-full">
      <div className="flex justify-start space-x-2 w-full">
        <div className="flex flex-col items-start space-y-1 flex-grow-0">
          <label className="text-gray-500 text-base">Qty.</label>
          <input
            type="number"
            inputMode="numeric"
            id="quantity"
            name="quantity"
            min="1"
            step="1"
            value={quantity}
            onChange={(e) => updateQuantity(e.target.value)}
            className="text-gray-900 form-input border border-gray-300 w-16 rounded-sm focus:border-palette-light focus:ring-palette-light"
          />
        </div>
        <div className="flex flex-col items-start space-y-1 flex-grow pb-2">
          <label className="text-gray-500 text-base">Size</label>
          <select
            id="size-selector"
            name="size-selector"
            onChange={(event) => handleSizeChange(event.target.value)}
            value={variantId}
            className="form-select border border-gray-300 rounded-sm w-full text-gray-900 focus:border-palette-light focus:ring-palette-light"
          >
            {variants.map((item) => (
              <option id={item.node.id} key={item.node.id} value={item.node.id}>
                {item.node.title}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        className="bg-blue-500 rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600"
        aria-label="cart-button"
        onClick={handleAddToCart}
      >
        Add To Cart
        <FontAwesomeIcon icon={faShoppingCart} className="w-5 ml-2" />
      </button>
    </div>
  );
};

export default ProductForm;
