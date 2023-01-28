import { Modal } from 'antd';
import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import { received, send, user } from '../assets';
import Button from './Button';
import TextField from './TextField';
import TextInput from './TextInput';





function InvestorDetailModal({ modalOpen, handleCancel, investorData }) {
    return (
        <Modals title="Investor details" open={modalOpen} onCancel={handleCancel} footer={null}>
            <RowDiv>
                <Image src={user} alt='' />
                <Div>
                    <TextField text='Name' color='#424242' fontSize='16px' lineHeight='20px' fontFamily='Mont-Bold' />
                    <TextField text={investorData?.account?.first_name + " " + investorData?.account?.last_name} color='#424242' fontSize='16px' lineHeight='20px' fontFamily='Mont-Bold' />
                    <TextField text='Email' margin='20px 0px 0px 0px' color='#424242' fontSize='16px' lineHeight='20px' fontFamily='Mont-Bold' />
                    <TextField text={investorData?.account?.email} color='#424242' fontSize='16px' lineHeight='20px' fontFamily='Mont-Bold' />
                </Div>
            </RowDiv>

            <RowStart>
                <MenuDiv>
                    <TextField text='Total balance' color='#424242' fontFamily='Mont-Regular' fontWeight='700' fontSize='16px' lineHeight='20px' />
                    <TextField text={`N${investorData?.account?.total_wallet_balance}`} color='#242424' fontFamily='Mont-Bold' fontWeight='700' fontSize='32px' lineHeight='34px' />
                </MenuDiv>
                <MenuDiv>
                    <TextField text='No. of plans' color='#424242' fontFamily='Mont-Regular' fontWeight='700' fontSize='16px' lineHeight='20px' />
                    <TextField text={investorData?.type} color='#242424' fontFamily='Mont-Bold' fontWeight='700' fontSize='32px' lineHeight='34px' />
                </MenuDiv>
            </RowStart>
            <hr />
            <TextField text='Plans' margin='0px 0px 10px 0px' color=' #C7C7C7' fontFamily='Mont-SemiBold' fontWeight='400' fontSize='16px' lineHeight='20px' />
           {
            investorData?.plans?.map(data => {
                return <RowBtw>
                <TextField text='Golden Goose' color=' #DB846C' fontFamily='Mont-SemiBold' fontWeight='400' fontSize='16px' lineHeight='20px' />
                <RowDiv>
                    <TextField text={`N${data?.amount}`} color=' #90A3BF' fontFamily='Mont-SemiBold' fontWeight='400' fontSize='16px' lineHeight='20px' />
                    <TextField text={data?.investment_start_date} margin='0px 10px' color=' #90A3BF' fontFamily='Mont-SemiBold' fontWeight='400' fontSize='16px' lineHeight='20px' />
                </RowDiv>
            </RowBtw>
            })
           }
            <br/>
            <hr />
            <br/>
            <TextField text='Transaction history' margin='0px 0px 10px 0px' color=' #C7C7C7' fontFamily='Mont-SemiBold' fontWeight='400' fontSize='16px' lineHeight='20px' />
            <RowBtwNoColor>
                <RowDiv2>
                    <Image src={received} alt='' />
                   <div style={{marginLeft: '10px'}}>
                   <TextField text='Credit account' color='#040815' font-family='Mont-SemiBold' fontWeight='700' fontSize='16px' lineHeight='20px' />
                    <TextField text='12th September, 2022 12:03:98' fontSize='8px' />
                   </div>
                </RowDiv2>
                <TextField text='N20,000,000' color='#040815' font-family='Mont-SemiBold' fontWeight='700' fontSize='16px' lineHeight='20px' />
            </RowBtwNoColor>
            <RowBtwNoColor>
                <RowDiv2>
                    <Image src={send} alt='' />
                   <div style={{marginLeft: '10px'}}>
                   <TextField text='Withdrawal' color='#040815' font-family='Mont-SemiBold' fontWeight='700' fontSize='16px' lineHeight='20px' />
                    <TextField text='12th September, 2022 12:03:98' fontSize='8px' />
                   </div>
                </RowDiv2>
                <TextField text='N20,000,000' color='#040815' font-family='Mont-SemiBold' fontWeight='700' fontSize='16px' lineHeight='20px' />
            </RowBtwNoColor>
            <br/>
            <hr />
            <br/>
            <TextField text='Other Information' margin='0px 0px 10px 0px' color=' #C7C7C7' fontFamily='Mont-SemiBold' fontWeight='400' fontSize='16px' lineHeight='20px' />
            <RowStart>
                <MenuDiv>
                    <TextField text='Signup date' color='#242424' font-family='Mont-SemiBold' fontWeight='700' fontSize='16px' lineHeight='20px'/>
                    <TextField text={investorData?.account?.createdAt} color='#242424' font-family='Mont-SemiBold' fontWeight='700' fontSize='10px' lineHeight='20px' />
                </MenuDiv>
                <MenuDiv>
                <TextField text='Last seen' font-family='Mont-SemiBold' fontWeight='700' fontSize='16px' lineHeight='20px' />
                    <TextField text={investorData?.account?.last_login} color='#242424' font-family='Mont-SemiBold' fontWeight='700' fontSize='10px' lineHeight='20px' />
                    </MenuDiv>
            </RowStart>
        </Modals>
    )
}

export default InvestorDetailModal

const Modals = styled(Modal)`

`
const RowDiv = styled.div`
    display: flex;
`
const RowDiv2 = styled.div`
    display: flex;
    align-items: center;
`
const RowBtw = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #FFF0EC;
    border-radius: 4px;
    padding: 15px;
    margin-bottom: 10px;
`

const RowBtwNoColor = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`

const RowStart = styled.div`
display: flex;
margin: 20px 0px;
 `
const Div = styled.div`
    margin-left: 15px;
`

const MenuDiv = styled.div`
   width: 48%;
`

