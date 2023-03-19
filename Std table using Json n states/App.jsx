import React, { Component } from 'react'
import JSON from "./stduser.json"
import Std from "./Std.jsx";

export default class App extends Component {
    constructor(){
        super()
        this.state={
            json:JSON 
        }
    }
  render() {
    return (
        <div>
      <Std data={this.state.json}/>
      </div>
    )
  }
}
