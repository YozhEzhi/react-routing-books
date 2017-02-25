import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div className="mdl-layout mdl-layout--no-drawer-button mdl-layout--fixed-header">
                <header className="mdl-layout__header">
                    <div className="mdl-layout__header-row">
                        <span className="mdl-layout-title">LibraryJS</span>
                        <span className="mdl-layout-spacer"></span>
                        <nav className="mdl-navigation">
                            <a href="/" className="mdl-navigation__link">Главная</a>
                            <a href="/about" className="mdl-navigation__link">О проекте</a>
                            <a href="/books" className="mdl-navigation__link">Книги</a>
                        </nav>
                    </div>
                </header>

                <main className="mdl-layout__content">
                    
                </main>
            </div>
        );
    }
}

export default App;