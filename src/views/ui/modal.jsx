import React, { Component } from 'react';
import { Row, Col, Button, Modal, Card, Notification } from 'antd'
import Breadcrumb from "../layout/breadcrumbCustom";

class MyModal extends Component {

    state = {
        visible: false,
        asyncVisible: false,
        confirmLoading: false,
    }

    componentDidMount = () => {
        setTimeout(() => {
            Modal.confirm({
                title: '提示',
                content: '当前系统占用内存过高，是否关闭无用程序？',
                onOk: this.openNotification
            })
        }, 300);
    }
    
    openNotification = () => {
        setTimeout(() => {
            Notification.open({
                message: '系统提醒',
                description: '后台程序已关闭',
            });
        }, 1000);
       
    };

    showModal = (n) => {
        switch (n) {
            case 0:
                this.setState({ visible: true })
                break;
            case 1:
                this.setState({ asyncVisible: true })
                break
            default:
                break;
        }
    }

    handleOk = () => {
        this.setState({
            visible: false,
        });
    }

    handleAsyncOk = () => {
        this.setState({ confirmLoading: true })
        setTimeout(() => {
            this.setState({
                asyncVisible: false,
                confirmLoading: false,
            });
        }, 2000);
    }

    handleCancel = (e) => {
        this.setState({
            visible: false,
            asyncVisible: false
        });
    }

    info = () => {
        Modal.info({
            title: '这是一条通知消息',
            content: (
                <div>
                    <p>服务于企业级产品的设计体系，基于确定和自然的设计价值观上的模块化解决方案，让设计者和开发者专注于更好的用户体验。</p>
                    <p>服务于企业级产品的设计体系，基于确定和自然的设计价值观上的模块化解决方案，让设计者和开发者专注于更好的用户体验。</p>
                </div>
            ),
            onOk() { },
        });
    }

    success = () => {
        Modal.success({
            title: '这是一条成功消息',
            content: '服务于企业级产品的设计体系，基于确定和自然的设计价值观上的模块化解决方案，让设计者和开发者专注于更好的用户体验。',
        });
    }

    error = () => {
        Modal.error({
            title: '这是一条错误消息',
            content: '信息错误请尽快修改！'
        })
    }

    warning = () => {
        Modal.warning({
            title: '提醒消息',
            content: '你的信息存在错误，请尽快修改！'
        })
    }

    render() {
        return (
            <div className="gutter-example">
                <Breadcrumb links={['首页', 'UI', '对话框']}/>
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <p>
                                    <Button type="primary" onClick={this.showModal.bind(this, 0)}> 打开Modal </Button>
                                    <Modal title="Basic Modal"
                                        visible={this.state.visible}
                                        onOk={this.handleOk}
                                        onCancel={this.handleCancel}>
                                        <p>Some contents...</p>
                                        <p>Some contents...</p>
                                        <p>Some contents...</p>
                                    </Modal>
                                </p>

                                <p>
                                    <Button type="dashed" onClick={this.showModal.bind(this, 1)}>异步Modal</Button>
                                    <Modal title="Title"
                                        visible={this.state.asyncVisible}
                                        onOk={this.handleAsyncOk}
                                        confirmLoading={this.state.confirmLoading}
                                        onCancel={this.handleCancel}>
                                        <p>异步加载关闭Modal</p>
                                    </Modal>
                                </p>

                                <p>
                                    <Button onClick={this.info}>Info</Button>
                                    <Button onClick={this.success}>Success</Button>
                                    <Button onClick={this.error}>Error</Button>
                                    <Button onClick={this.warning}>Warning</Button>
                                </p>

                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default MyModal;