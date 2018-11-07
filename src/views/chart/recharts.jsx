import React, { Component } from 'react';
import { Row, Col, Card } from 'antd'
import Breadcrumb from '../layout/breadcrumbCustom'

class Rechart extends Component {
    render() {
        return (
            <div className="gutter-example">
            <Breadcrumb links={['首页', '图表', 'rchart']}/>
            <Row gutter={16}>
                <Col className="gutter-row" md={12}>
                    <div className="gutter-box">
                        <Card bordered={false}>
                        </Card>
                    </div>
                </Col>

                <Col className="gutter-row" md={12}>
                    <div className="gutter-box">
                        <Card bordered={false}>
                        </Card>
                    </div>
                </Col>

                <Col className="gutter-row" md={24}>
                    <div className="gutter-box">
                        <Card bordered={false}>
                        </Card>
                    </div>
                </Col>
            </Row>
        </div>
        );
    }
}

export default Rechart;