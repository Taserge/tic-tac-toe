import styles from './FieldLayout.module.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export const FieldLayout = ({ field, playButton, resetButton }) => {
	const isGameEnded = useSelector((state) => state.isGameEnded);
	const isDraw = useSelector((state) => state.isDraw);

	return (
		<div className={styles.field}>
			{field.map((btn, index) => (
				<button
					key={index}
					className={styles.button}
					onClick={() => playButton(index)}
					disabled={btn !== '' || isGameEnded || isDraw}
				>
					{btn}
				</button>
			))}
			<button className={styles.buttonReset} onClick={resetButton}>
				Reset
			</button>
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string),
	playButton: PropTypes.func,
	resetButton: PropTypes.func,
};
