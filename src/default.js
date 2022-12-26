import React, {Component} from "react";

export default class DefaultProps extends Component{
    render()
    {
        return(
            <div>
                <h1>Hi {this.props.name}</h1>
                <h1>Don't make noise</h1>
            </div>
        )
    }
    DefaultPropsdefaultProps ={name:"ADS "}
}