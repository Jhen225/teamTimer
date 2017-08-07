import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component{

    render(){
        return(
            <div>
                Hello, electron!
            </div>
        )
    }
}

ReactDOM.render( <App/>, document.getElementById('root'));