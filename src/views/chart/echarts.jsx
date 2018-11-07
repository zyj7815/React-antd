import React, { Component } from 'react';
import { Row, Col, Card } from 'antd'
import EchartPie from './echartPie'
import EchartLine from './echartLine'
import EchartBar from './echartBar'
import Breadcrumb from '../layout/breadcrumbCustom'

class Echart extends Component {
    render() {
        return (
            <div className="gutter-example">
                <Breadcrumb links={['首页', '图表', 'echart']}/>
                <Row gutter={16}>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <EchartPie />
                            </Card>
                        </div>
                    </Col>

                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <EchartLine />
                            </Card>
                        </div>
                    </Col>

                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <EchartBar />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Echart;          