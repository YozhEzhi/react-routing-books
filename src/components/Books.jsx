import React from 'react';

function Books() {
    return (
        <section className="content books">
            <div className="mdl-tabs">
                <div className="mdl-tabs__tab-bar">
                    <a href="/books/javascript" className="mdl-tabs__tab">JavaScript</a>
                    <a href="/books/react" className="mdl-tabs__tab">React</a>
                    <a href="/books/angular" className="mdl-tabs__tab">Angular</a>
                </div>
                
                <div className="mdl-tabs__panel">
                    
                </div>
            </div>
        </section>
    );
}

export default Books;