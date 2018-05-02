import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            inputText: '',
            result: 0
        }
    }


    handleStartClick = value => {
        this.setState(prevState => ({
            inputText: prevState.inputText + value,
        }))
    };

    count = () => {
        this.setState({
            inputText: eval(this.state.inputText)
        })
    };

    clean = () => {
        this.setState({
            inputText: ''
        })
    }

    render() {
        return(<div id="main-site">
            <input type="text" id="count" placeholder="0" disabled="disabled" value={this.state.inputText}></input>
                <div className="Calculator">
                    <div className="button clean">
                        <button onClick={this.clean}>C</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleStartClick('/')}>/</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleStartClick('7')}>7</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleStartClick('8')}>8</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleStartClick('9')}>9</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleStartClick('*')}>*</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleStartClick('4')}>4</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleStartClick('5')}>5</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleStartClick('6')}>6</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleStartClick('-')}>-</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleStartClick('1')}>1</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleStartClick('2')}>2</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleStartClick('3')}>3</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleStartClick('+')}>+</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleStartClick('.')}>.</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleStartClick('0')}>0</button>
                    </div>
                    <div className="button result">
                        <button onClick={this.count}>=</button>
                    </div>
                </div>
        </div>)
    }
}
ReactDOM.render(
        <App/>,
        document.querySelector('#app')
);