import React, { Component } from 'react';
import { Row, Col, Card } from 'antd' 
import BasicTableComponent from './basicTableComponent';

class BasicTable extends Component {
    render() {
        return (
            <div className="gutter-example">
                <Row gutter={12}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card bordered={false} title="基础表格">
                                <BasicTableComponent />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default BasicTable;