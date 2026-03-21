import styles from './FieldLayout.module.css'

export const FieldLayout = ({ field, playButton, resetButton }) => {
    return (
        <div className={styles.field}>
            {field.map((btn, index) => (
                <button key = {index} className={styles.button} onClick={() => playButton(index)} disabled={btn !== ''}>
                    {btn}
                </button>
            ))}
            <button className={styles.buttonReset} onClick={resetButton}>Reset</button>
        </div>
    )
}