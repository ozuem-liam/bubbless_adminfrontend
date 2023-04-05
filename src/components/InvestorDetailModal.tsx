import { Modal } from 'antd';
import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import { received, send, user } from '../assets';
import Button from './Button';
import TextField from './TextField';
import TextInput from './TextInput';
import CurrencyFormat from "react-currency-format"
import moment from 'moment';




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
                  
                    <CurrencyFormat value={investorData?.account?.total_wallet_balance} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <TextField text={`${value}`} fontFamily='Mont-Bold' fontSize={'32px'} lineHeight='34px' />} />
         
                </MenuDiv>
                <MenuDiv>
                    <TextField text='No. of plans' color='#424242' fontFamily='Mont-Regular' fontWeight='700' fontSize='16px' lineHeight='20px' />
                    <TextField text={investorData?.type} color='#242424' fontFamily='Mont-Bold' fontWeight='700' fontSize='32px' lineHeight='34px' />
                </MenuDiv>
            </RowStart>
            {
                investorData?.plans?.length > 0 && <>
                <hr />
                <TextField text='Plans' margin='0px 0px 10px 0px' color=' #C7C7C7' fontFamily='Mont-SemiBold' fontWeight='400' fontSize='16px' lineHeight='20px' />
                </>
            }
          
           {
            investorData?.plans?.map(data => {
                return <RowBtw>
                <TextField text='Golden Goose' color=' #DB846C' fontFamily='Mont-SemiBold' fontWeight='400' fontSize='16px' lineHeight='20px' />
                <RowDiv>
                    <CurrencyFormat value={data?.amount} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <TextField text={`${value}`} fontFamily='Mont-SemiBold' color=' #90A3BF' fontSize={'16px'} lineHeight='20px' />} />
         
                    <TextField text={moment(data?.investment_start_date).format("MMM Do YY")} margin='0px 10px' color=' #90A3BF' fontFamily='Mont-SemiBold' fontWeight='400' fontSize='16px' lineHeight='20px' />
                </RowDiv>
            </RowBtw>
            })
           }
          
            {
                investorData?.account?.transactionhistories?.length > 0 && <>
                  <br/>
            <hr />
            <br/>
                 <TextField text='Transaction history' margin='0px 0px 10px 0px' color=' #C7C7C7' fontFamily='Mont-SemiBold' fontWeight='400' fontSize='16px' lineHeight='20px' />
                </>
            }
            
            {
                investorData?.account?.transactionhistories?.map(data => {
                    return      <RowBtwNoColor>
                    <RowDiv2>
                        {
                            data?.transaction_type === "payments" ?  <Image src={received} alt='' /> :  <Image src={send} alt='' />
                        }
    
                       <div style={{marginLeft: '10px'}}>
                       <TextField text={data?.transaction_type} color='#040815' textTransform='capitalize' font-family='Mont-SemiBold' fontWeight='700' fontSize='16px' lineHeight='20px' />
                        <TextField text={moment(data?.createdAt).format("MMM Do YY")} fontSize='8px' />
                       </div>
                    </RowDiv2>
                
                    <CurrencyFormat value={data?.amount} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <TextField text={`${value}`} color='#040815' font-family='Mont-SemiBold' fontWeight='700' fontSize='16px' lineHeight='20px' />} />
       
                </RowBtwNoColor>
                })
            }
  
            <br/>
            <hr />
            <br/>
            <TextField text='Other Information' margin='0px 0px 10px 0px' color=' #C7C7C7' fontFamily='Mont-SemiBold' fontWeight='400' fontSize='16px' lineHeight='20px' />
            <RowStart>
                <MenuDiv>
                    <TextField text='Signup date' color='#242424' font-family='Mont-SemiBold' fontWeight='700' fontSize='16px' lineHeight='20px'/>
                    <TextField text={moment(investorData?.account?.createdAt).format("MMM Do YY")} color='#242424' font-family='Mont-SemiBold' fontWeight='700' fontSize='10px' lineHeight='20px' />
                </MenuDiv>
                <MenuDiv>
                <TextField text='Last seen' font-family='Mont-SemiBold' fontWeight='700' fontSize='16px' lineHeight='20px' />
                    <TextField text={moment(investorData?.account?.last_login).format("MMM Do YY")} color='#242424' font-family='Mont-SemiBold' fontWeight='700' fontSize='10px' lineHeight='20px' />
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
    width: 60%;
`

const MenuDiv = styled.div`
   width: 48%;
`

