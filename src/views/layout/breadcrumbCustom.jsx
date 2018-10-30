import React, { Component } from 'react';
import { Breadcrumb } from "antd";

import "../../assets/style/main.less"

class BreadcrumbCustom extends Component {

    render() {
        return (
            <div className="custon-breadcrumb">
                <Breadcrumb>
                    {
                        this.props.links.map((e, i) => {
                            return <Breadcrumb.Item key={i}>{e}</Breadcrumb.Item>
                        })
                    }
                </Breadcrumb>
            </div>
        );
    }
}

export default BreadcrumbCustom;            