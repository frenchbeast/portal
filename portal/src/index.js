import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {MenuItems} from './res/menu';
import * as serviceWorker from './serviceWorker';

import { Layout, Menu, Breadcrumb, Icon, version } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class FrenchbeastPortal extends React.Component {
    state = {
        collapsed: false,
        pageContent: <span>Hello World</span>,
        pageBreadCrumb: [
            {text: 'Home', link: '/'},
        ]
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    onClickMenu = (item, key, keyPath, domEvent) => {
        console.debug(item, key, keyPath, domEvent);
    };

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    BeastCorp
                </Header>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={this.onClickMenu}>
                        <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span>Option 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="desktop" />
                            <span>Option 2</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="user" /><span>User</span></span>}>
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="team" /><span>Team</span></span>}>
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9">
                            <Icon type="file" />
                            <span>About</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        {this.state.pageBreadCrumb.map(item => <Breadcrumb.Item key={item.text}>{item.text}</Breadcrumb.Item>)}
                    </Breadcrumb>
                    {this.state.pageContent}
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED {version}</Footer>
            </Layout>
        );
    }
}

ReactDOM.render(<FrenchbeastPortal />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
