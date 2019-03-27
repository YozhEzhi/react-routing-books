import React from 'react';

class Logout extends React.Component {
    componentWillMount() {
        this.props.onLogout();
    }

    render() {
        return null;
    }
}

export default Logout;