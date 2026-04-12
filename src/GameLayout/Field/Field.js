import { FieldLayout } from './FieldLayout/FieldLayout'
import PropTypes from 'prop-types'

export const Field = ({ field, playButton, resetButton }) => {
	return <FieldLayout field = {field} playButton={playButton} resetButton={resetButton} />
}

Field.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string),
	playButton: PropTypes.func,
	resetButton: PropTypes.func
}