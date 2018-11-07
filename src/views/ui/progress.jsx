import React, { Component } from 'react';
import { Row, Col, Button, Card, Progress, Tooltip } from 'antd'
import Breadcrumb from "../layout/breadcrumbCustom";

class MyProgress extends Component {

    state = {
        progress1: 5,
        progress2: 21,
        progress3: 32,
        progressStatus: 'exception'
    }

    handleStart = () => {
        let progress1 = this.state.progress1;
        let progress2 = this.state.progress2;
        let progress3 = this.state.progress3;

        this.setState({ progressStatus: 'active' })

        this.interval(progress1, 100, 'progress1')
        this.interval(progress2, 200, 'progress2')
        this.interval(progress3, 300, 'progress3')
    }

    interval = (progress, timer, key) => {
        var ins = setInterval(() => {
            progress++
            let o = {}
            let k = `${key}`;
            o[k] = progress
            this.setState(o)
            if (progress >= 100) clearInterval(ins)
        }, timer)
    }


    render() {
        return (
            <div className="gutter-example">
                <Breadcrumb links={['首页', 'UI', '进度条']}/>
                <Row gutter={16}>
                    <Col md={24} className="gutter-row" >
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <Progress percent={this.state.progress1} />
                                <Progress percent={this.state.progress2} status="active" />
                                <Progress percent={this.state.progress3} status={this.state.progressStatus} />
                                <Tooltip title="3 done / 3 in progress / 4 to do">
                                    <Progress percent={this.state.progress3} successPercent={this.state.progress1} />
                                </Tooltip>
                            </Card>
                        </div>
                    </Col>
                    <Col md={24} className="gutter-row">
                        <div className="gutter-box" >
                            <Card bordered={false}>
                                <Col md={8} className="gutter-row">
                                    <Progress type="circle" percent={this.state.progress2} status="active" />
                                </Col>
                                <Col md={8} className="gutter-row">
                                    <Progress type="circle" percent={this.state.progress1} />
                                </Col>
                                
                                <Col md={8} className="gutter-row">
                                    <Progress type="circle" percent={this.state.progress3} status={this.state.progressStatus} />
                                </Col>
                            </Card>
                        </div>
                    </Col>
                    <Col md={24} className="gutter-row" >
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <Button type="primary" onClick={this.handleStart}>开始</Button>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default MyProgress;