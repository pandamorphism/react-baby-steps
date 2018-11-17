import * as React from 'react';
import {ValueState} from './model';
import {Square} from './Square';

type State = {
    squares: ValueState[]
};
type Props = { squares: ValueState[], onSelect: (id: number) => void };

export class Board extends React.Component<Props, State> {
    public render(): React.ReactNode {

        return (
            <div>
                {/* todo: Definitely should be Loop here*/}
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }


    private renderSquare(id: number) {
        return <Square onClick={this.props.onSelect} value={{id, state: this.props.squares[id]}}/>
    }
}