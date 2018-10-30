import React, { Component } from 'react';
import { Row, Col, Button, Card, notification, Modal, Icon } from 'antd'
import Breadcrumb from "../layout/breadcrumbCustom";

class Notification extends Component {

    openBasicNotify = () => {
        notification.open({
            message: '基本',
            description: '最简单的用法，4.5 秒后自动关闭。'
        })
    }

    openNotificationWithState = (type) => {
        notification[type]({
            message: '通知标题',
            description: '这是通知的内容。这是通知的内容。这是通知的内容。',
        });
    }


    openNotificationIcon = () => {
        notification.open({
            message: '通知标题',
            description: '这是通知的内容。这是通知的内容。这是通知的内容。',
            icon: <Icon type="smile" style={{ color: '#3def' }} />
        })
    }


    openNotificationStyle = () => {
        notification.open({
            message: '通知标题',
            description: '这是通知的内容。这是通知的内容。这是通知的内容。',
            style: {
                backgroundColor: 'palevioletred',
                color: "#f4f4f4",
                boxShadow: '3px 3px 40px 3px #444'
            }
        })
    }

    openNotificationBtn = () => {
        const key = `open${Date.now()}`;
        const btn = (
            <Button type="primary" size="small" onClick={this.close}>
                确认
            </Button>
        );
        notification.open({
            message: '通知标题',
            description: '有条消息要告诉你',
            key,
            btn,
        })
    }

    close = () => {
        Modal.success({
            title: '这是一条成功消息',
            content: '服务于企业级产品的设计体系，基于确定和自然的设计价值观上的模块化解决方案，让设计者和开发者专注于更好的用户体验。',
        });
    }

    render() {
        return (
            <div className="gutter-example">
                <Breadcrumb links={['首页', 'UI', '通知提醒框']}/>
                <Row gutter={16}>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <Button type="primary" onClick={this.openBasicNotify}>最简单的用法</Button>
                            </Card>
                        </div>
                    </Col>

                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <Button type="primary" onClick={() => this.openNotificationWithState('success')}>
                                    成功
                                </Button>
                                <Button type="primary" onClick={() => this.openNotificationWithState('info')}>
                                    信息
                                </Button>
                                <Button type="primary" onClick={() => this.openNotificationWithState('warning')}>
                                    警告
                                </Button>
                                <Button type="primary" onClick={() => this.openNotificationWithState('error')}>
                                    错误
                                </Button>
                            </Card>
                        </div>
                    </Col>

                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <Button type="primary" onClick={this.openNotificationIcon}>自定义图标</Button>
                            </Card>
                        </div>
                    </Col>

                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <Button type="primary" onClick={this.openNotificationStyle}>自定义通知样式</Button>
                            </Card>
                        </div>
                    </Col>

                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <Button type="primary" onClick={this.openNotificationBtn}>带按钮的通知</Button>
                            </Card>
                        </div>
                    </Col>

                </Row>
            </div>
        );
    }
}

export default Notification;