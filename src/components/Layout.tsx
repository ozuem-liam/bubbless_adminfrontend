import { Layout, Menu, Dropdown } from 'antd';
import React from 'react';
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import TextField from './TextField';
import Image from 'next/image'
import { arrowDown, bag, config, dashboard, equip, equipemnt, feedback, loan, logo1, logout, notification, people, placeholder, site, startUp, walletMinus } from '../assets';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const { Header, Footer, Sider, Content } = Layout;

const items: MenuProps['items'] = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
}));



const Layouts = ({ children }) => {
    const router = useRouter()
    const pathname = router?.pathname

    const menu = (
        <Menu>
            <Menu.Item>item 1</Menu.Item>
            <Menu.Item>item 2</Menu.Item>
        </Menu>
    );

    const sideMenu = [
        {
            id: 1,
            name: 'Dashboard',
            route: '/dashboard',
            icon: dashboard,
        },
        {
            id: 2,
            name: 'Loan',
            route: '/loan',
            icon: walletMinus,
        },
        {
            id: 3,
            name: 'Equipment',
            route: '/equipment',
            icon: equip,
        },
        {
            id: 4,
            name: 'Sites',
            route: '/sites',
            icon: site,
        },
        {
            id: 5,
            name: 'Installers',
            route: '/installers',
            icon: people,
        },
        {
            id: 6,
            name: 'Investment',
            route: '/investment',
            icon: startUp,
        },
        {
            id: 7,
            name: 'Feedback',
            route: '/feedback',
            icon: feedback,
        },
    ]

    const sideBottom = [
        {
            id: 1,
            name: 'Configurations',
            route: '/configurations',
            icon: config,
        },
        {
            id: 2,
            name: 'Log Out',
            route: 'logout',
            icon: logout,
        }
    ]

    return (
        <>
            <Layout hasSider>
                <Sider
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        background: 'white',
                        borderRight: '1px solid #F3F5F7',
                        boxShadow: ' 1px 0px 0px #E6EAEE',
                    }}
                >
                    <Container>
                        <Image src={logo1} alt='logo' />
                        <Menudiv>
                            {
                                sideMenu?.map(({ name, icon, route, id }) => {
                                    return (
                                        <Subdiv key={id} onClick={() => router.push(route)} style={{ background: pathname === route ? "#FFC268" : "white", borderRadius: pathname === route ? "10px" : "0" }}>
                                            <Image src={icon} alt='' />
                                            <TextField text={name} margin='0px 0px 0px 14px' />
                                        </Subdiv>
                                    )
                                })
                            }
                        </Menudiv>
                        <Menudiv2>
                            {
                                sideBottom?.map(({ name, icon, route, id }) => {
                                    return (
                                        <Subdiv key={id} onClick={() => router.push(route)} style={{ background: pathname === route ? "#FFC268" : "white", borderRadius: pathname === route ? "10px" : "0" }}>
                                            <Image src={icon} alt='' />
                                            <TextField text={name} margin='0px 0px 0px 14px' />
                                        </Subdiv>
                                    )
                                })
                            }
                        </Menudiv2>
                    </Container>
                </Sider>
                <Layout className="site-layout" style={{ marginLeft: 200 }}>
                    <Header style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', background: 'white' }}>
                        <Div>
                            <Image src={notification} alt='notification' />
                        </Div>
                        <Div2>
                            <Image src={placeholder} alt='placeholder' />
                        </Div2>
                        <Div3>
                            <TextField text='John Doe' />
                        </Div3>
                        <Dropdown overlay={menu}>
                            <Image src={arrowDown} alt='arrowDown' />
                        </Dropdown>
                    </Header>
                    <Content style={{ paddingLeft: '48px', paddingTop: '18px' }}>
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </>
    )
};

export default Layouts

const Container = styled.div`
    padding-top: 22px;
    padding-left: 15px;
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
`
const Menudiv = styled.div`
    padding-top: 22px;
    margin-top: 30px;
    flex: 6;
`
const Menudiv2 = styled.div`
    flex: 3;

`


const Subdiv = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 6px;
    margin-right: 6px;
    cursor: pointer;
`

const Div = styled.div`
    border: 1px solid #424242;
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 10px;
`

const Div2 = styled.div`
    margin: 0px 10px;
`

const Div3 = styled.div`
    margin: 0px 10px;
`