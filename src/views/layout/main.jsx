import React, { Component } from 'react'
import Slider from './slider'
import Section from './section'
import '../../assets/style/main.less'

class Main extends Component {

    render() {
        return (
            <div className="main-view">
                <Slider defaultRouter={this.props.location.pathname} />
                <Section />
            </div>
        );
    }
}

export default Main;