//   React: Render a Class Component to the DOM

class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
            <div>
                <h1>Types of Food:</h1>
                {/* change code below this line */}
                <Fruits/>
                <Vegetables/>
                {/* change code above this line */}
            </div>
        );
    }
};
