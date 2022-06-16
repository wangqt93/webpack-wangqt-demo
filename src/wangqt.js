import React,{Component} from "react";

import reactDom from "react-dom";


class App extends Component {

    render(){
        
        return(
            <div style={{width: 200,height: 200,border:'1px solid red'}}>App</div>
        )
    }
}






reactDom.render(<App></App>,document.querySelector('#app'))
