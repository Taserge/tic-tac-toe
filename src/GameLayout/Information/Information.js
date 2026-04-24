import { InformationLayoutClass } from './InformationLayout/InformationLayout';
import PropTypes from 'prop-types';
import { Component } from 'react';

// export const Information = ({ isDraw, isGameEnded, currentPlayer }) => {
// 	return (
// 		<InformationLayoutClass
// 			isDraw={isDraw}
// 			isGameEnded={isGameEnded}
// 			currentPlayer={currentPlayer}
// 		/>
// 	);
// };

export class InformationClass extends Component {
	render() {
		const { isDraw, isGameEnded } = this.props;
		return (
			<InformationLayoutClass
				isDraw={isDraw}
				isGameEnded={isGameEnded}
				currentPlayer={this.props.currentPlayer}
			/>
		);
	}
}

InformationClass.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
};

// Information.propTypes = {
// 	isDraw: PropTypes.bool,
// 	isGameEnded: PropTypes.bool,
// 	currentPlayer: PropTypes.string,
// };
