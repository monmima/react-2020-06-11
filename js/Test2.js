// 24. Set State with this.setState
class RandomNumber extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'Initial State'
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState({
			name: Math.random()
		});
	}
	render() {
		return (
			<div>
				<button onClick={this.handleClick}>Get a random number</button>
                <div>{this.state.name}</div>
			</div>
		);
	}
};

// Final result
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <Banner />
                    <main>

                        <img src="https://vignette.wikia.nocookie.net/baldursgategame/images/6/64/Imoen_IMOEN_Portrait_BG1.png" alt="Imoen" />
                        <RandomNumber />

                    </main>
                <Banner />
            </div>
        );
    }
};

// Injection
ReactDOM.render(<MyComponent />, document.querySelector("#root"));