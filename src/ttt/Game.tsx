import * as React from 'react';
import {Board} from './Board';
import {ValueState} from './model';
import {mayBeWinner} from './pure';

type Props = {}
type State = { history: ValueState[][], winner: ValueState, xIsNext: boolean, step: number }

export class Game extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            history: [Array(9).fill(null)],
            step: 0,
            winner: null,
            xIsNext: true
        }
    }

    public render(): React.ReactNode {
        const status = this.state.winner && `Winner: ${this.state.winner}`
            || `Next turn is ${this.state.xIsNext ? 'X' : 'O'}`;
        const moves = this.state.history.map((step, move) => {
            const desc = move ? `Move to step ${move}` : 'Move to start';
            return (
                <li key={move}>
                    <button onClick={() => this.moveTo(move)}>{desc}</button>
                </li>)
        });
        return (
            <div className="game">
                <div className="game-board">
                    <div className="status">
                        {status}
                    </div>
                    <Board squares={this.state.history[this.state.step]}
                           onSelect={this.onSelect.bind(this)}/>
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        )
    }

    private onSelect(id: number) {
        const latestState = this.state.history[this.state.history.length - 1];
        if (this.state.winner || latestState[id]) {
            return;
        }
        const nextState: ValueState[] = latestState.map(
            (aSquare, idx) => id === idx ? this.state.xIsNext && 'X' || 'O' : aSquare);
        this.setState({
            history: [...this.state.history, nextState],
            step: this.state.history.length,
            winner: mayBeWinner(nextState),
            xIsNext: !this.state.xIsNext
        });
    }

    private moveTo(step: number) {
        this.setState({step})
    }
}