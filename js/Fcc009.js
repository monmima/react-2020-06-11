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

// React: Create a Component with Composition of other components
// for eg - 
/*return (
    <App>
      <Navbar />
      <Dashboard />
      <Footer />
    </App>
    )
*/

const ChildComponent = () => {
    return (
        <div>
            <p>I am the child</p>
        </div>
    );
  };

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>I am the parent</h1>
                { /* change code below this line */ }
                <ChildComponent/>

                { /* change code above this line */ }
            </div>
        );
    }
};

/**
 * The following line would be necessary with "npx create-react-dom".
 */
// export default Banner;
