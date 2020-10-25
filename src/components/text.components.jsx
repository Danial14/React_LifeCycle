import React from 'react';
import {Component} from 'react';
export class LifeCycle extends Component{
    constructor(){
        super();
        console.log("constructor");
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
    render(){
        console.log("render");
        return (<p>{this.props.naMe}</p>);
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate");
        console.log(nextProps);
        return this.props.naMe !== nextProps.naMe;
    }
}