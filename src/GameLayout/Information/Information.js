import { InformationLayout } from './InformationLayout/InformationLayout'

export const Information = ({ isDraw, isGameEnded, currentPlayer }) => {
    return <InformationLayout isDraw={isDraw} isGameEnded={isGameEnded} currentPlayer={currentPlayer}/>
}