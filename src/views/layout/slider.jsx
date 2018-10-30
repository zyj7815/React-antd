import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'
import RouteItems from '../../routes'

const SubMenu = Menu.SubMenu;


class Slider extends Component {

    constructor(props) {
        super(props);

        this.rootSubmenuKeys = RouteItems.map((e) => {
            return e.link.length === 0 ? e.key : ''
        })

        let defaultRouteKey = this.props.defaultRouter.split('/')[1]
        this.state = {
            openKeys: [defaultRouteKey],
        };
    }
    


    onOpenChange = (openKeys) => {
        // console.log(openKeys)
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            // 关闭菜单
            this.setState({ openKeys });
        } else {
            // 打开菜单
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }

    render() {
        return (
            <div className="main-column">
                <Menu
                    defaultSelectedKeys={[this.props.defaultRouter]}
                    mode="inline"
                    theme="dark"
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}>
                    {
                        RouteItems.map((item, index) => {
                            // 有子菜单的
                            if(item.link.length === 0) {
                                return (
                                    <SubMenu key={item.key} title={<span><Icon type={item.icon} /><span>{item.title}</span></span>}>
                                        {
                                            item.subMenu.map((subItem, subIndex) => {
                                                return(
                                                    <Menu.Item key={subItem.link} >
                                                        <Link to={subItem.link}>{subItem.title}</Link>
                                                    </Menu.Item>
                                                )
                                            })
                                        }
                                    </SubMenu>
                                )
                            }
                            else {
                                return (
                                    <Menu.Item key={item.link} >
                                        <Link to={item.link}></Link>
                                        <Icon type={item.icon} />
                                        <span>{item.title}</span>
                                    </Menu.Item>
                                )
                            }
                         })
                     }


                     {/* <Menu.Item key="1" >
                        <Link to=""></Link>
                        <Icon type="pie-chart" />
                        <span>首页</span>
                    </Menu.Item>
                    <SubMenu key="sub-ui" title={<span><Icon type="mail" /><span>UI</span></span>}>
                        <Menu.Item key="sub-ui-1" >
                            <Link to="/">按钮</Link>
                        </Menu.Item>
                        <Menu.Item key="sub-ui-2">进度条</Menu.Item>
                        <Menu.Item key="sub-ui-3">对话框</Menu.Item>
                        <Menu.Item key="sub-ui-4">通知提醒框</Menu.Item>
                        <Menu.Item key="sub-ui-5">标签页</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>动画</span></span>}>
                        <Menu.Item key="30">Option 5</Menu.Item>
                        <Menu.Item key="21">Option 6</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="setting" /><span>表格</span></span>}>
                        <Menu.Item key="30">Option 9</Menu.Item>
                        <Menu.Item key="31">Option 10</Menu.Item>
                        <Menu.Item key="32">Option 11</Menu.Item>
                        <Menu.Item key="33">Option 12</Menu.Item>
                    </SubMenu>  */}

                </Menu>
            </div>
        );
    }
}

export default Slider;