import React, { Component } from 'react';
import { Row, Col, Card } from 'antd'
import ExpandedTable from './expandedTable'
import FixedTable from './fixedTable'

class AdvancedTable extends Component {
    render() {
        return (
            <div className="gutter-example">
                <Row gutter={12}>
                <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card bordered={false} title="固定头部">
                                <FixedTable />
                            </Card>
                        </div>
                    </Col>

                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card bordered={false} title="可展开">
                                <ExpandedTable />
                            </Card>
                        </div>
                    </Col>

                </Row>
            </div>
        );
    }
}

export default AdvancedTable;