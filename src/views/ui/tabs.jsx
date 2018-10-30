import React, { Component } from 'react';
import { Row, Col, Card, Tabs, Icon, Radio } from "antd";
import Breadcrumb from "../layout/breadcrumbCustom";

class TabsCustom extends Component {

    state = {
        mode: "top"
    }

    handleModeChange = (e) => {
        const mode = e.target.value;
        this.setState({ mode })
    }


    callback = (e) => {
        console.log(e)
    }

    render() {
        const TabPane = Tabs.TabPane;

        return (
            <div className="gutter-exmaple">
                <Breadcrumb links={['首页', 'UI', '标签页']}/>
                <Row gutter={16}>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="基本-默认选中第一项" bordered={false}>
                                <Tabs defaultActiveKey="1" onChange={this.callback}>
                                    <TabPane tab="首页" key="1">首页信息</TabPane>
                                    <TabPane tab="动态" key="2">动态信息</TabPane>
                                    <TabPane tab="设置" key="3">设置</TabPane>
                                </Tabs>
                            </Card>
                        </div>
                    </Col>

                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="禁用某一项" bordered={false}>
                                <Tabs defaultActiveKey="1" onChange={this.callback}>
                                    <TabPane tab="首页" key="1">首页信息</TabPane>
                                    <TabPane tab="动态" key="2" disabled>动态信息</TabPane>
                                    <TabPane tab="设置" key="3">设置</TabPane>
                                </Tabs>
                            </Card>
                        </div>
                    </Col>

                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="带图标的Tab" bordered={false}>
                                <Tabs defaultActiveKey="1" onChange={this.callback} style={{ height: 170 }}>
                                    <TabPane tab={<span><Icon type="home" />首页</span>} key="1">首页信息</TabPane>
                                    <TabPane tab={<span><Icon type="setting" />设置</span>} key="2">设置</TabPane>
                                </Tabs>
                            </Card>
                        </div>
                    </Col>

                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="滑动标签，可以左右、上下滑动，容纳更多标签" bordered={false}>
                                <Radio.Group
                                    onChange={this.handleModeChange}
                                    value={this.state.mode}>

                                    <Radio.Button value="top">Horizontal</Radio.Button>
                                    <Radio.Button value="left">Vertical</Radio.Button>
                                </Radio.Group>
                                <Tabs
                                    defaultActiveKey="1"
                                    tabPosition={this.state.mode}
                                    style={{ height: 140 }}>
                                    <TabPane tab="Tab 1" key="1">Content of tab 1</TabPane>
                                    <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
                                    <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
                                    <TabPane tab="Tab 4" key="4">Content of tab 4</TabPane>
                                    <TabPane tab="Tab 5" key="5">Content of tab 5</TabPane>
                                    <TabPane tab="Tab 6" key="6">Content of tab 6</TabPane>
                                    <TabPane tab="Tab 7" key="7">Content of tab 7</TabPane>
                                    <TabPane tab="Tab 8" key="8">Content of tab 8</TabPane>
                                    <TabPane tab="Tab 9" key="9">Content of tab 9</TabPane>
                                    <TabPane tab="Tab 10" key="10">Content of tab 10</TabPane>
                                    <TabPane tab="Tab 11" key="11">Content of tab 11</TabPane>
                                </Tabs>
                            </Card>
                        </div>
                    </Col>

                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="卡片式页签" bordered={false}>
                                <Tabs onChange={this.callback} type="card">
                                    <TabPane tab="首页" key="1">首页信息</TabPane>
                                    <TabPane tab="动态" key="2">动态信息</TabPane>
                                    <TabPane tab="设置" key="3">设置</TabPane>
                                </Tabs>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default TabsCustom;