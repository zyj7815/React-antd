import React, { Component } from 'react';
import { Row, Col, Card, Button, Radio, Dropdown, Icon, Menu } from 'antd'
import Breadcrumb from "../layout/breadcrumbCustom";

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class ButtonUI extends Component {

    state = {
        size: 'large',
        color: 'blue',
        colorText: '蓝色',
        loading: false
    };


    handleChange = (e) => {
        this.setState({ size: e.target.value });
    }

    handleMenuClick = (e) => {
        console.log(e.item.props.children)

        this.setState({
            color: e.key,
            colorText: e.item.props.children
        });
    }

    enterLoading = () => { 
        this.setState({loading: true})

        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 2000);
    }


    render() {

        const menu = (
            <Menu onClick={this.handleMenuClick} >
                <Menu.Item key="blue">蓝色</Menu.Item>
                <Menu.Item key="orange">橙色</Menu.Item>
                <Menu.Item key="red">红色</Menu.Item>
            </Menu>
        );

        return (
            <div className="gutter-example">
                <Breadcrumb links={['首页', 'UI', '按钮']}/>
                <Row gutter={16}>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <Button type="primary">Primary</Button>
                                <Button>Default</Button>
                                <Button type="dashed">Dashed</Button>
                                <Button type="danger">Danger</Button>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <Button type="primary" shape="circle" icon="search" />
                                <Button type="primary" icon="search">Search</Button>
                                <Button shape="circle" icon="search" />
                                <Button icon="search">Search</Button>
                                <br />
                                <Button shape="circle" icon="search" />
                                <Button icon="search">Search</Button>
                                <Button type="dashed" shape="circle" icon="search" />
                                <Button type="dashed" icon="search">Search</Button>
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <RadioGroup onChange={this.handleChange} defaultValue="large">
                                    <RadioButton value="large">Large</RadioButton>
                                    <RadioButton value="default">Default</RadioButton>
                                    <RadioButton value="small">Small</RadioButton>
                                </RadioGroup>
                                <br /> <br />
                                <Button type="primary" size={this.state.size}>Primary</Button>
                            </Card>
                        </div>
                    </Col>

                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <Dropdown overlay={menu} trigger={['click']}>
                                    <Button>
                                        选择颜色 <Icon type="down" />
                                    </Button>
                                </Dropdown>
                                <Button style={{ color: this.state.color }}>
                                    {this.state.colorText}
                                </Button>

                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
                                    Click me!
                                </Button>

                            </Card>
                        </div>
                    </Col>
                </Row>

                <style>{`
                    .ant-btn {
                        margin-right: 8px;
                        margin-bottom: 12px;
                    }
                `}</style>
            </div>
        );
    }
}

export default ButtonUI;