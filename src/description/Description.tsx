import * as React from 'react';

type Props = { countBy: number };
type State = { count: number };

export class Description extends React.Component<Props, State> {
    public static defaultProps: Partial<Props> = {countBy: 1};
    public state: State = {count: 0};

    public increase = () => {
        const countBy = this.props.countBy!;
        const count = this.state.count + countBy;
        this.setState({count});
    };


    public render(): React.ReactNode {
        return (
            <div>
                <p>My favorite number is {this.state.count}</p>
                <button onClick={this.increase}>Increase</button>
            </div>
        );
    }
}