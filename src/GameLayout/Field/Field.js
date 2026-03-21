import { FieldLayout } from './FieldLayout/FieldLayout'

export const Field = ({ field, playButton, resetButton }) => {
	return <FieldLayout field = {field} playButton={playButton} resetButton={resetButton} />
}