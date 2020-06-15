// 42. Render Conditionally from Props
class Results extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { fiftyFifty } = this.props;
        return (
            <h1>
                {
                /* change code here */
                    fiftyFifty ? "You win!" : "you lose!"
                }
            </h1>
        )
    };
};
  
class GameOfChance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            counter: this.state.counter + 1 // change code here
        });
    }

    render() {
        let expression = Math.random() > .5; // change code here
        return (
            <div>
                <button onClick = {this.handleClick}>Play Again</button>
                { /* change code below this line */ }
                <Results fiftyFifty = {expression} />
                { /* change code above this line */ }
                <p>{'Turn: ' + this.state.counter}</p>
            </div>
        );
    }
};

ReactDOM.render(<GameOfChance />, document.getElementById('challenge-node'));