/**
 * The following line would be necessary with "npx create-react-dom".
 */
// import React from 'react';

class Link extends React.Component {
    render() {
        return (
            <a href={this.props.url} title={this.props.text} >{this.props.text}</a>
        );
    }
}

/**
 * The following line would be necessary with "npx create-react-dom".
 */
// export default Banner;