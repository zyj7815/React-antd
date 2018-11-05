import React, { Component } from 'react';
import { Row, Col } from "antd";
import Breadcrumb from "../layout/breadcrumbCustom";
import Regist from './registForm'

class BasicForm extends Component {
    render() {
        return (
            <div className="gutter-example">
                <Breadcrumb links={['首页', '表单', '基础表单']}/>
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Regist />
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default BasicForm;