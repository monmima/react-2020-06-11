/**
 * The following line would be necessary with "npx create-react-dom".
 */
// import React from 'react';

// React: Create a React Component
// The other way to define a React component is with the ES6 class syntax. 
/*class has a constructor defined within it that calls super().
It uses super() to call the constructor of the parent class,
in this case React.Component.
The constructor is a special method used during the initialization of objects that are created with the class keyword.
It is best practice to call a component's constructor with super, and pass props to both. 
This makes sure the component is initialized properly. 
For now, know that it is standard for this code to be included. 
Soon you will see other uses for the constructor as well as props. */

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        // change code below this line
        return(
            <div>
                <h1>Hello React!</h1>
            </div>
        );
        // change code above this line
    }
};

/**
 * The following line would be necessary with "npx create-react-dom".
 */
// export default Banner;
