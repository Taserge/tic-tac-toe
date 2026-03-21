import { Field } from './Field/Field'
import { Information } from './Information/Information'
import styles from './GameLayout.module.css'

export const GameLayout = ({ isDraw, isGameEnded, currentPlayer, field, playButton, resetButton }) => {
    return (
        <div className={styles.game}>
            <h1 className={styles.title}>Крестики - Нолики</h1>

            <Information isDraw={isDraw} isGameEnded={isGameEnded} currentPlayer={currentPlayer}/>

            <Field field = {field} playButton = {playButton} resetButton={resetButton}/>
        </div>
    )
}