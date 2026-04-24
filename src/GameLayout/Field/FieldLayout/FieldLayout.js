import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Component } from 'react';

// export const FieldLayout = ({ field, playButton, resetButton }) => {
// 	const isGameEnded = useSelector((state) => state.isGameEnded);
// 	const isDraw = useSelector((state) => state.isDraw);

// 	return (
// 		<div className={styles.field}>
// 			{field.map((btn, index) => (
// 				<button
// 					key={index}
// 					className={styles.button}
// 					onClick={() => playButton(index)}
// 					disabled={btn !== '' || isGameEnded || isDraw}
// 				>
// 					{btn}
// 				</button>
// 			))}
// 			<button className={styles.buttonReset} onClick={resetButton}>
// 				Reset
// 			</button>
// 		</div>
// 	);
// };

export class FieldLayoutClass extends Component {
	render() {
		const { isGameEnded, isDraw } = this.props;
		return (
			<div className='flex justify-center mb-6'>
				<div className='grid grid-cols-3 gap-4'>
					{this.props.field.map((btn, index) => (
						<button
							key={index}
							className='aspect-square w-20 rounded-xl bg-slate-800 border border-slate-600 text-3xl font-bold text-white flex items-center justify-center transition hover:bg-slate-700 active:scale-95 disabled:opacity-50'
							onClick={() => this.props.playButton(index)}
							disabled={btn !== '' || isGameEnded || isDraw}
						>
							{btn}
						</button>
					))}
					<button
						className='col-span-3 mt-4 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 active:scale-95'
						onClick={this.props.resetButton}
					>
						Reset
					</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	isGameEnded: state.isGameEnded,
	isDraw: state.isDraw,
});

export const FieldLayout = connect(mapStateToProps)(FieldLayoutClass);

// FieldLayout.propTypes = {
// 	field: PropTypes.arrayOf(PropTypes.string),
// 	playButton: PropTypes.func,
// 	resetButton: PropTypes.func,
// };

FieldLayoutClass.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string),
	playButton: PropTypes.func,
	resetButton: PropTypes.func,
};
