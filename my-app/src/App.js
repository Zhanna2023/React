import { useEffect, useState } from 'react';
import styles from './app.module.css';

export const App = () => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		console.log('Первый-' + counter);

		return () => console.log('Второй-' + counter);
	}, [counter]);

	return (
		<div className={styles.app}>
			<button onClick={() => setCounter(counter + 1)}>+ 1</button>
		</div>
	);
};

/*

[
	{
	"id": "001",
	"name": "Телевизор",
	"price": 39900
	},
	{
	"id": "002",
	"name": "Смартфон",
	"price": 18900
	},
	{
	"id": "003",
	"name": "Фен",
	"price": 1749
	}
]

*/
