import { fromImagetoUrl, API_URL } from '../utils/urls';
import {
	Row,
	Col,
	Image,
	ListGroup,
	Card,
	Button,
	Form,
} from 'react-bootstrap';
export default function Product({ name, price, media }) {
	return (
		<div>
			<Image src={media.source} alt={name} fluid />
			<div className='card-body text-center'>
				<h3>{name}</h3>
				<p>{price.formatted_with_symbol}</p>
				<a href='#' className='btn btn-primary btn-lg'>
					Buy
				</a>
			</div>
		</div>
	);
}
