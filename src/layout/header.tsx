import * as React from 'react';
/* tslint:disable:interface-over-type-literal */
type Props = { name: string };


const Header: React.FunctionComponent<Partial<Props>> = props => (
    <h1>Hello, {props.name} Welcome to React TS</h1>
);

Header.defaultProps = {
    name: 'world',
};

export default Header;