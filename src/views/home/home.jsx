import React, { Component } from 'react';
import { Button } from 'antd';

class Home extends Component {

    constructor(props) {
        super(props);
        var arr = Object.keys(Array.apply(null, {length:10}))
        this.state = {
            arr: arr
        } 
    }
    
    handleResever() {
        console.log(this.state.arr)
        var ss = [...this.state.arr].reverse();
        this.setState({
            arr: ss
        })

    }

    render() {
        return (
            <div>
                <Button onClick={this.handleResever.bind(this)}>反序</Button>
                {
                    this.state.arr.map((e, index) => {
                        return (
                            <div key={e}>
                                <input type="text" name="" id=""/>
                            </div>
                        )
                    })
                }                
            </div>
        );
    }
}

export default Home;