import React from 'react';
import ReactDOM from 'react-dom';




class App extends React.Component {
    state = { inputText: '' };


    handleStartClick = () => {
        this.setState({
            inputText: this.state.inputText,
        })
    };

    render() {
        return(<div id="main-site">
            <input type="text" id="count" placeholder="0" disabled="disabled" value={this.state.inputText}></input>
                <div className="Calculator">
                    <div className="button clean">
                        <button onClick={() => this.handleStartClick(this.state.inputText = '')}>C</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleStartClick(this.state.inputText += '/')}>/</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleStartClick(this.state.inputText += '7')}>7</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleStartClick(this.state.inputText += '8')}>8</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleStartClick(this.state.inputText += '9')}>9</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleStartClick(this.state.inputText += '*')}>*</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleStartClick(this.state.inputText += '4')}>4</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleStartClick(this.state.inputText += '5')}>5</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleStartClick(this.state.inputText += '6')}>6</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleStartClick(this.state.inputText += '-')}>-</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleStartClick(this.state.inputText += '1')}>1</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleStartClick(this.state.inputText += '2')}>2</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleStartClick(this.state.inputText += '3')}>3</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleStartClick(this.state.inputText += '+')}>+</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleStartClick(this.state.inputText += '.')}>.</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleStartClick(this.state.inputText += '0')}>0</button>
                    </div>
                    <div className="button result">
                        <button onClick={() => this.handleStartClick(this.state.inputText = eval(this.state.inputText))}>=</button>
                    </div>
                </div>
        </div>)
    }
}
ReactDOM.render(
        <App/>,
        document.querySelector('#app')
);