import { FieldLayout } from './FieldLayout/FieldLayout';
import PropTypes from 'prop-types';
import { Component } from 'react';

// export const Field = ({ field, playButton, resetButton }) => {
// 	return (
// 		<FieldLayoutClass field={field} playButton={playButton} resetButton={resetButton} />
// 	);
// };

export class FieldClass extends Component {
	render() {
		return (
			<FieldLayout
				field={this.props.field}
				playButton={this.props.playButton}
				resetButton={this.props.resetButton}
			/>
		);
	}
}

// Field.propTypes = {
// 	field: PropTypes.arrayOf(PropTypes.string),
// 	playButton: PropTypes.func,
// 	resetButton: PropTypes.func,
// };

FieldClass.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string),
	playButton: PropTypes.func,
	resetButton: PropTypes.func,
};
