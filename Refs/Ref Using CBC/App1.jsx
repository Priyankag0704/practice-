import React, { Component } from 'react'
import { createRef } from 'react'

export default class App1 extends Component {
    constructor(){
        super()
        this.state={
            company:"QSPIDERS"
        }
        this.spanRef=createRef()
        this.btnRef=createRef()
    }
  render() {
    return (
        <>
      <span ref={this.spanRef}>{this.state.company}</span>
      <br></br>
      <button ref={this.btnRef} onClick={()=>{
        this.setState({company:"JSPIDERS"})
        this.spanRef.current.style.color="red"
        this.spanRef.current.style.border="2px solid black"
        this.spanRef.current.style.padding="2px"
        this.spanRef.current.style.margin="2px"
        this.btnRef.current.style.color="pink"
        this.btnRef.current.style.backgroundColor="black"
        this.btnRef.current.style.borderRadius="25%"
      }}>Change</button>
      </>
    )
  }
}
