import React from 'react';
import ReactDOM from 'react-dom';










class App extends React.Component {
    constructor() {
        super();
        this.state = ({
            inputText: '',
        })
    }



    divide = () => {
        this.setState({
            inputText: this.state.inputText += '/'
        })
    };

    clear =() => {
        this.setState({
            inputText: this.state.inputText = ''
        })
    };

    number0 =() => {
        this.setState({
            inputText: this.state.inputText += '0'
        })
    };

    number1 =() => {
        this.setState({
            inputText: this.state.inputText += '1'
        })
    };

    number2 =() => {
        this.setState({
            inputText: this.state.inputText += '2'
        })
    };

    number3 =() => {
        this.setState({
            inputText: this.state.inputText += '3'
        })
    };

    number4 =() => {
        this.setState({
            inputText: this.state.inputText += '4'
        })
    };

    number5 =() => {
        this.setState({
            inputText: this.state.inputText += '5'
        })
    };

    number6 =() => {
        this.setState({
            inputText: this.state.inputText += '6'
        })
    };

    number7 =() => {
        this.setState({
            inputText: this.state.inputText += '7'
        })
    };
    number8 =() => {
        this.setState({
            inputText: this.state.inputText += '8'
        })
    };
    number9 =() => {
        this.setState({
            inputText: this.state.inputText += '9'
        })
    };
    multiplication = () => {
        this.setState({
            inputText: this.state.inputText += '*'
        })
    };
    subtraction = () => {
        this.setState({
            inputText: this.state.inputText += '-'
        })
    };

    addition = () => {
        this.setState({
            inputText: this.state.inputText += '+'
        })
    };

    dot = () => {
        this.setState({
            inputText: this.state.inputText += '.'
        })
    };

    count = () => {
        this.setState({
            inputText: eval(this.state.inputText)
        })
    }

    render() {
        console.log(this.props.restur1)
        console.log(this.state.inputText)
        return(<div id="main-site">
            <input type="text" id="count" placeholder="0" disabled="disabled" value={this.state.inputText}></input>
                <div className="Calculator">
                    <div className="button clean">
                        <button onClick={this.clear}>C</button>
                    </div>
                    <div className="button">
                        <button onClick={this.divide}>/</button>
                    </div>
                    <div className="button">
                        <button onClick={this.number7}>7</button>
                    </div>
                    <div className="button">
                        <button onClick={this.number8}>8</button>
                    </div>
                    <div className="button">
                        <button onClick={this.number9}>9</button>
                    </div>
                    <div className="button">
                        <button onClick={this.multiplication}>*</button>
                    </div>
                    <div className="button">
                        <button onClick={this.number4}>4</button>
                    </div>
                    <div className="button">
                        <button onClick={this.number5}>5</button>
                    </div>
                    <div className="button">
                        <button onClick={this.number6}>6</button>
                    </div>
                    <div className="button">
                        <button onClick={this.subtraction}>-</button>
                    </div>
                    <div className="button">
                        <button onClick={this.number1}>1</button>
                    </div>
                    <div className="button">
                        <button onClick={this.number2}>2</button>
                    </div>
                    <div className="button">
                        <button onClick={this.number3}>3</button>
                    </div>
                    <div className="button">
                        <button onClick={this.addition}>+</button>
                    </div>
                    <div className="button">
                        <button onClick={this.dot}>.</button>
                    </div>
                    <div className="button">
                        <button onClick={this.number0}>0</button>
                    </div>
                    <div className="button result">
                        <button onClick={this.count}>=</button>
                    </div>
                </div>
        </div>)
    }
}
ReactDOM.render(
        <App resturl='siema'/>,
        document.querySelector('#app')
);