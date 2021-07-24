import CartTable from "../components/CartTable";
import { useCartContext } from "../context/Store";
const Cart = () => {
  const [cart, checkoutUrl] = useCartContext();
  return (
    <div className="container text-center">
      <h1 className="text-3xl pt-3"> Your Cart </h1>
      <CartTable cart={cart} />
      <div className="py-4">
        <button className="bg-blue-500 rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600">
          <a href={checkoutUrl}>Proceed to checkout</a>
        </button>
      </div>
    </div>
  );
};

export default Cart;
