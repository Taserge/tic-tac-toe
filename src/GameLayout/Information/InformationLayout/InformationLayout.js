import styles from './InformationLayout.module.css'

export const InformationLayout = ({ isDraw, isGameEnded, currentPlayer }) => {
    if (isDraw) {
        return <div className={styles.information}>{`Ничья`}</div>
    } else {
        if(isGameEnded === true) {
            return <div className={styles.information}>{`Победа: ${currentPlayer}`}</div>
        } else {
            return <div className={styles.information}>{`Ходит: ${currentPlayer}`}</div>
        }
    }
}