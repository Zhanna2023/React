import { useEffect, useState } from 'react';
import styles from './app.css';

export const App = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch('httt:/')
			.then((loadeData) => loadeData.json())
			.then((loadeProducts) => {
				setProducts(loadeProducts);
			});
	}, []);

	return (
		<div className={styles.app}>
			{products.map(({ id, name, price }) => (
				<div кеу={id}>
					{name} - {price} руб
				</div>
			))}
		</div>
	);
};
