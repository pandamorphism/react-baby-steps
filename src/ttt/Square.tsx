import * as React from 'react';
import {SquareState} from './model';

type Props = { value: SquareState, onClick: (id: number) => void } ;

export const Square: React.FunctionComponent<Props> = props => (
    <button className="square" onClick={() => props.onClick(props.value.id)}>
        {props.value.state}
    </button>);