import React, { Component } from 'react';

class Home extends Component {

    constructor(props) {
        super(props);
        var arr = Object.keys(Array.apply(null, {length:100}))
        this.arr = arr
    }
    

    render() {
        return (
            <div>
                {
                    this.arr.map((e) => {
                        return <div key={e}>{e}</div>
                    })
                }                
            </div>
        );
    }
}

export default Home;