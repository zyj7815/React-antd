import React, { Component } from 'react';
import { Row, Col, Card } from 'antd' 
import SimpleTable from './simpleTable';
import SelectTable from './selectTable'

class BasicTable extends Component {

    render() {
        return (
            <div className="gutter-example">
                <Row gutter={12}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card bordered={false} title="基础表格">
                                <SimpleTable />
                            </Card>
                        </div>
                    </Col>
                    
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card bordered={false} title="可勾选表格">
                                <SelectTable />
                            </Card>
                        </div>
                    </Col>

                </Row>
            </div>
        );
    }
}

export default BasicTable;