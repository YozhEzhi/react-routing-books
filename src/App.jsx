import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Toolbar from './components/Toolbar';
import Content from './components/Content';
import About from './pages/About';
import Book from './pages/Book';
import Books from './pages/Books';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import NotFound from './pages/NotFound';
import PrivateRoute from './components/PrivateRoute';
import Sidenav from './components/Sidenav';

class App extends Component {
    state = {
        user: null,
    }

    login = user => {
        this.setState({ user }, () => this.props.history.push('/books'));
    }

    logout = () => {
        this.setState({ user: null }, () => this.props.history.push('/'));
    }

    render() {
        const {books, topics} = this.props;
        const {user} = this.state;

        return (
            <div className="app">
                <Toolbar user={user} />
                
                <Content>
                    <Route path="/books" render={() => <Sidenav topics={topics} />} />

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />

                        <Route path="/login" render={() => <Login onLogin={this.login} />} />
                        <Route path="/logout" render={() => <Logout onLogout={this.logout} />} />

                        <PrivateRoute exact path="/books/:topic?" user={user} component={Books} data={books} />
                        <PrivateRoute path="/books/:topic/:book" user={user} component={Book} data={books} />

                        <Route component={NotFound} />
                    </Switch>
                </Content>
            </div>
        );
    }
}

export default withRouter(App);
