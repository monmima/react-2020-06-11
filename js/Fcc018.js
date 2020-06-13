//   React: Review Using Props with Stateless Functional Components

/* VERY IMPORTANT NOTE BELOW */
// Except for the last challenge, you've been passing props to stateless functional components. These components act like pure functions. They accept props as input and return the same view every time they are passed the same props. You may be wondering what state is, and the next challenge will cover it in more detail. Before that, here's a review of the terminology for components.

// A stateless functional component is any function you write which accepts props and returns JSX. A stateless component, on the other hand, is a class that extends React.Component, but does not use internal state (covered in the next challenge). Finally, a stateful component is any component that does maintain its own internal state. You may see stateful components referred to simply as components or React components.

// A common pattern is to try to minimize statefulness and to create stateless functional components wherever possible. This helps contain your state management to a specific area of your application. In turn, this improves development and maintenance of your app by making it easier to follow how changes to state affect its behavior.

class CampSite extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Camper/>
            </div>
        );
    }
};

// change code below this line
const Camper = (props) => {
    return(
        <div>
            <p>{props.name}</p>
        </div>
    );
}

Camper.defaultProps = {
    name: "CamperBot"
};

Camper.propTypes = {
    name: PropTypes.string.isRequired
}