import styles from './FieldLayout.module.css'
import PropTypes from 'prop-types'

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

FieldLayout.propTypes = {
    field: PropTypes.arrayOf(PropTypes.string),
    playButton: PropTypes.func,
    resetButton: PropTypes.func
}