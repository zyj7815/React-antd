/**
 * Created by hao.cheng on 2017/4/13.
 */
import React, { Component } from 'react';
import { Card, Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const residences = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake',
        }],
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
        }],
    }],
}];

class BasicForms extends Component {

    state = {
        confirmDirty: false,
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    checkPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('您输入的两个密码不一致!!');
        } else {
            callback();
        }
    };

    checkPhoneNumber = (rule, value, callback) => {
        if (!(/^1[3-9]\d{9}$/.test(value))) {
            callback('手机号码格式有误');
        } else {
            callback();
        }
    }

    checkConfirm = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 14,
                    offset: 8,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select className="icp-selector" style={{ width: '70px' }}>
                <Option value="86">+86</Option>
            </Select>
        );
        return (
            <Card title="注册表单" bordered={false}>
                <Row>
                    <Col md={18}>

                        <Form onSubmit={this.handleSubmit}>
                            <FormItem {...formItemLayout} label="邮箱" hasFeedback>
                                {getFieldDecorator('email', {
                                    rules: [{
                                        type: 'email', message: '请输入合理的邮箱地址!',
                                    }, {
                                        required: true, message: '请输入邮箱地址!',
                                    }],
                                })(
                                    <Input />
                                )}
                            </FormItem>

                            <FormItem {...formItemLayout} label="密码" hasFeedback>
                                {getFieldDecorator('password', {
                                    rules: [{
                                        required: true, message: '请输入密码!',
                                    }, {
                                        validator: this.checkConfirm,
                                    }],
                                })(
                                    <Input type="password" />
                                )}
                            </FormItem>

                            <FormItem {...formItemLayout} label="确认密码" hasFeedback>
                                {getFieldDecorator('confirm', {
                                    rules: [{
                                        required: true, message: '请确认你的密码!',
                                    }, {
                                        validator: this.checkPassword,
                                    }],
                                })(
                                    <Input type="password" onBlur={this.handleConfirmBlur} />
                                )}
                            </FormItem>

                            <FormItem {...formItemLayout}
                                label={(
                                    <span>
                                        昵称&nbsp;
                                <Tooltip title="别人怎么称呼你?">
                                            <Icon type="question-circle-o" />
                                        </Tooltip>
                                    </span>
                                )}
                                hasFeedback>
                                {getFieldDecorator('nickname', {
                                    rules: [{ required: true, message: '请输入昵称!', whitespace: true }],
                                })(
                                    <Input />
                                )}
                            </FormItem>

                            <FormItem {...formItemLayout} label="常住地址">
                                {getFieldDecorator('residence', {
                                    initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                                    rules: [{ type: 'array', required: true, message: '请选择你的常住地址!' }],
                                })(
                                    <Cascader options={residences} />
                                )}
                            </FormItem>

                            <FormItem {...formItemLayout} label="电话号码">
                                {getFieldDecorator('phone', {
                                    rules: [
                                        { required: true, message: '请输入你的电话号码!' },
                                        { validator: this.checkPhoneNumber }
                                    ],
                                })(
                                    <Input addonBefore={prefixSelector} />
                                )}
                            </FormItem>

                            <FormItem {...formItemLayout} label="验证码" extra="我们必须确认你不是机器人.">
                                <Row gutter={8}>
                                    <Col span={12}>
                                        {getFieldDecorator('captcha', {
                                            rules: [{ required: true, message: '请输入你获取的验证码!' }],
                                        })(
                                            <Input />
                                        )}
                                    </Col>
                                    <Col span={12}>
                                        <Button>获取验证码</Button>
                                    </Col>
                                </Row>
                            </FormItem>
                            <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
                                {getFieldDecorator('agreement', {
                                    valuePropName: 'checked',
                                })(
                                    <Checkbox>我已经阅读过 <a href="javascript:;">协议</a></Checkbox>
                                )}
                            </FormItem>
                            <FormItem {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit">注册</Button>
                            </FormItem>
                        </Form>

                    </Col>
                </Row>

            </Card>
        )
    }
}

const BasicForm = Form.create()(BasicForms);

export default BasicForm;