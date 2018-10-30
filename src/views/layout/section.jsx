import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from './header'
import RouteItems from '../../routes'

class Section extends Component {

    render() {
        return (
            <div className="main-column">
                <Header />

                <div className="section">
                    <Switch>
                        {
                            RouteItems.map((item, index) => {
                                // 有子菜单的
                                if (item.link.length === 0) {
                                    return (
                                        item.subMenu.map((subItem, subIndex) => {
                                            return <Route path={subItem.link} key={`${subItem.key}-${subIndex}`} component={subItem.component} />
                                        })
                                    )

                                }
                                else {
                                    return <Route path={item.link} key={item.link} component={item.component} />
                                }
                            })
                        }
                        <Redirect to="/main/home" />
                    </Switch>
                </div>

            </div>
        );
    }
}

export default Section;