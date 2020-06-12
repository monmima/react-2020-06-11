/**
 * The following line would be necessary with "npx create-react-dom".
 */
// import React from 'react';

class LinkInList extends React.Component {
    render() {
        return (
            <li>
                <a href={this.props.url} title={this.props.text} >{this.props.text}</a>
            </li>
        );
    }
}

/**
 * The following line would be necessary with "npx create-react-dom".
 */
// export default Banner;