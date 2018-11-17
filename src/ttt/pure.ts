import {ValueState} from './model';

export const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

export const mayBeWinner: (squares: ValueState[]) => 'X' | 'O' | null = squares => {
    for (const [id1, id2, id3] of winCombinations) {
        const a = squares[id1];
        const b = squares[id2];
        const c = squares[id3];
        const weHaveAWinner = a === b && b === c && a !== null ? a : null;
        if (weHaveAWinner !== null) {
            return weHaveAWinner;
        }
    }
    return null;
};