import React, { Component } from 'react'
import _ from 'lodash'
export default class Encrypt extends Component {
    state={
        value:''
    }
    onDeb=_.debounce((value)=>{
        console.log(`value`, value)
    },1000)
    onChange=(e)=>{
        let {value}=e.target
        this.setState({value:value})
        this.onDeb(value)
    }
    render() {
        return (
            <div>
                <input onChange={this.onChange} value={this.state.value}/>
            </div>
        )
    }
}
