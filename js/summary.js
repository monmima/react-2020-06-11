const List = (props) => {
    return <p>{props.tasks.join(", ")}</p>
};

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>Array as props</h3>
                <List tasks = { ["test", "test2"] } />

                <h3>Default props</h3>
                <MyDefaultProps />
                <MyDefaultProps items = {"test"} />
                <MyDefaultProps items = {10} />

            </div>
        );
    }
};

const MyDefaultProps = (props) => {
    return (
        <div>
            <p>Shopping Cart Component: {this.props.items}</p>
        </div>
    )
};

// Greeting.propTypes = {
//     name: PropTypes.string
//   };

MyDefaultProps.propTypes = {
    // quantity should be of type number
    // here proptypes start with Capital P
    items: PropTypes.number
};

MyDefaultProps.defaultProps = {
    items: 0
};

ReactDOM.render(<App />, document.getElementById('challenge-node'));