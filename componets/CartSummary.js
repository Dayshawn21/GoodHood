import { useCartState } from '../context/cart';
import { useModalDispatch } from '../context/model';

function CartSummary() {
	const { total_unique_items } = useCartState();
	const { openModal } = useModalDispatch();

	return (
		<button className='appearance-none focus:outline-none' onClick={openModal}>
			<i class='fas fa-shopping-cart'></i> ({total_unique_items})
		</button>
	);
}

export default CartSummary;
