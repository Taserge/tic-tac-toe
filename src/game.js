import { useState } from 'react';
import styles from './app.module.css';
import { GameLayout } from './GameLayout/GameLayout'
import PropTypes from 'prop-types'

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X')
	const [isGameEnded, setIsGameEnded] = useState(false)
	const [isDraw, setIsDraw] = useState(false)
	const [field, setField] = useState([
		'', '', '',
  		'', '', '',
  		'', '', '',
	])
	

	const winner = (field) => {
		const WIN_PATTERNS = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8],
		[0, 3, 6], [1, 4, 7], [2, 5, 8],
		[0, 4, 8], [2, 4, 6]
		]
		for (let i = 0; i < WIN_PATTERNS.length; i++) {
			const [a, b, c] = WIN_PATTERNS[i]
			if (field[a] !== '' &&
				field[a] === field[b] &&
				field[a] === field[c]
			) {
				return field[a]
			}
		}
		return null
	}

	const draw = (field) => {
		for (let i = 0; i < field.length; i++) {
			if (field[i] === '') {
				return false
			}
		} return true
	}

	const playButton = (index) => {
		if (field[index] !== '' || isGameEnded) {
			return
		}
		field[index] = currentPlayer
		setField(field)
		const winField = winner(field)
		if (winField) {
			return setIsGameEnded(true)
		} else if(draw(field)) {
			return setIsDraw(true)
		}
		setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X')
	}

	const resetButton = () => {
		setField([
			'', '', '',
  			'', '', '',
  			'', '', '',
		])
		setIsDraw(false)
		setIsGameEnded(false)
		setCurrentPlayer('X')
	}

	return (
		<GameLayout 
			currentPlayer={currentPlayer} 
			isGameEnded={isGameEnded} 
			isDraw={isDraw} 
			field={field}
			playButton={playButton}
			resetButton={resetButton}
		/>
	)
}

GameLayout.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
	field: PropTypes.arrayOf(PropTypes.string),
	playButton: PropTypes.func,
	resetButton: PropTypes.func
}