import { Layout, Menu, Dropdown, Badge } from 'antd';
import React, { useEffect, useState } from 'react';
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    LaptopOutlined, NotificationOutlined, UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import TextField from './TextField';
import Image from 'next/image'
import { arrowDown, arrowLeft, bag, config, dashboard, equip, equipemnt, feedback, loan, logo1, logout, notification, people, placeholder, site, startUp, walletMinus } from '../assets';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import secureLocalStorage from 'react-secure-storage';
import { useAppDispatch, useAppSelector } from '../app/hook';
import { getProfile, userState } from '../slices/AuthSlice';





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
    const [open, setOpen] = useState(false)
    const {account, stats} = useAppSelector(userState)
    const dispatch = useAppDispatch()

    var user: any = secureLocalStorage.getItem('user')
    var userInfo = JSON.parse(user)

 
    useEffect(() => {
        dispatch(getProfile())
    }, [])


    const menu = (
        <Menu>
            <Menu.Item>item 1</Menu.Item>
            <Menu.Item>item 2</Menu.Item>
        </Menu>
    );

    const logOut = () => {
        secureLocalStorage.clear()
        return router.push('/')
    }

    const sideMenu = [
        {
            id: 1,
            name: 'Dashboard',
            route: '/',
            secondRoute: '/loan-activities' || '/dashboard',
            icon: dashboard,
        },
        {
            id: 2,
            name: 'Loan',
            route: '/loan',
            secondRoute: '/loan-details',
            icon: walletMinus,
        },
        {
            id: 3,
            name: 'Equipment',
            route: '/equipment',
            icon: equip,
            sub: [
                {
                    name: 'List',
                    route: '/list'
                },
                {
                    name: 'Request',
                    route: '/request'
                }

            ]
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
            secondRoute: '/installer-detail',
        },
        {
            id: 6,
            name: 'Investment',
            route: '/investment',
            icon: startUp,
            secondRoute: '/all-investors'
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
                        <div style={{ cursor: 'pointer' }} onClick={() => router.push('/')}>
                            <Image src={logo1} alt='logo' />
                        </div>

                        <Menudiv>
                            {
                                sideMenu?.map(({ name, icon, route, id, secondRoute, sub }) => {
                                    return (
                                        <div>
                                            <Subdiv key={id} onClick={name === "Equipment" ? () => setOpen(!open) : () => router.push(route)} style={{
                                                background: pathname === "equipment" ? "white" : (pathname === route || pathname.includes(secondRoute) && pathname !== "equipment") ? "#FFC268" : "white", borderRadius: (pathname === route || pathname.includes(secondRoute)) ? "10px" : pathname === "equipment" ? "0" : "0"
                                            }}>
                                                <Image src={icon} alt='' />
                                                <TextField text={name} margin='0px 0px 0px 14px' />
                                            </Subdiv>
                                            {
                                                sub && open && sub?.map((dd, i) => {
                                                    return <Subdiv2 key={i} onClick={() => router.push(dd?.route)} style={{ background: (pathname === dd?.route || pathname.includes(dd?.route)) ? "#FFC268" : "white", borderRadius: (pathname === dd?.route || pathname.includes(dd?.route)) ? "10px" : "0" }}>
                                                        <TextField text={dd?.name} margin='0px 0px 0px 14px' textTransform='capitalize' />
                                                    </Subdiv2>
                                                })
                                            }

                                        </div>
                                    )
                                })
                            }
                        </Menudiv>
                        <Menudiv2>
                            {
                                sideBottom?.map(({ name, icon, route, id }) => {
                                    return (
                                        <Subdiv key={id} onClick={route === "logout" ? () => logOut() : () => router.push(route)} style={{ background: pathname === route ? "#FFC268" : "white", borderRadius: pathname === route ? "10px" : "0" }}>
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
                    <MenuDiv>
                        <Sub style={{ cursor: 'pointer' }} onClick={() => router.back()}>
                            <Image src={arrowLeft} alt='arrow-left' />
                        </Sub>
                        <Header style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', background: 'white' }}>

                            <Div>
                                <Badge count={account?.notifications?.length}>
                                    <Image src={notification} alt='notification' />
                                </Badge>
                            </Div>

                            <Div2>
                                <Image src={placeholder} alt='placeholder' />
                            </Div2>
                            <Div3>
                                <TextField text={account?.first_name + " " + account?.last_name} />
                            </Div3>
                            <Dropdown overlay={menu}>
                                <Image src={arrowDown} alt='arrowDown' />
                            </Dropdown>
                        </Header>
                    </MenuDiv>
                    <Content>
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


const Subdiv2 = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 6px;
    margin: 10px 15px;
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

const MenuDiv = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 background: white;
`

const Sub = styled.div`
    margin-left: 45px;
`