import React, { Component } from "react";
  
class PersonCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age:this.props.age
        };}
        render(){
return(<h1>this.props.firstname</h1>)
        
    }
    }
export default PersonCard;