import * as React from 'react';
import './App.css';
import Header from './layout/header';
import logo from './logo.svg';
import {Game} from './ttt/Game';

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <Header name="React"/>
                </header>
                {/*<Description countBy={3}/>*/}
                <Game/>
            </div>
        );
    }
}

export default App;
