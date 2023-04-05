
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Layouts from '../components/Layout'
import TextField from '../components/TextField'
import { Row, Col, Table } from "antd"
import { useRouter } from 'next/router'
import type { ColumnsType, TableProps } from 'antd/es/table';
import Image from "next/image"
import { placeholder } from '../assets'
import InvestorDetailModal from '../components/InvestorDetailModal'
import { useAppDispatch } from '../app/hook'
import { getInvestorStat } from '../slices/InvestmentSlice'
import CurrencyFormat from "react-currency-format"
import moment from 'moment'

interface DataType {
  key: React.Key;
  name: string;
  type: string;
  amount: string;
  date: string;
}


function Investment() {
  const router = useRouter()
  const [detailOpen, setDetailOpen] = useState(false);
  const [investorData, setInvestorData] = useState(null);
  const dispatch = useAppDispatch()
 const [investments, setInvestments] = useState(null)

  useEffect(() => {
    dispatch(getInvestorStat()).then(data => {
      setInvestments(data?.payload?.data)
    })
  }, [])

  const handleDetailOpen = (data) => {
    setDetailOpen(true)
    setInvestorData(data)
  }
  const handleDetailClose = () => {
    setDetailOpen(false)
    setInvestorData(null)
  }

 


  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (value, rowIndex) => {
        return (
          <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => handleDetailOpen(rowIndex)}>
          <Image src={placeholder} alt='' />
          <div style={{marginLeft: '10px'}}>
           <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />
          </div>
         
       </div>
        );
      },
      width: '40%',
      responsive: ['lg'],
    },
    {
      title: 'No of Plan',
      dataIndex: 'type',
      render: (value) => {
        return (
          <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />
        );
      },
      width: '20%',
      responsive: ['lg'],
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      render: (value) => {
        return (
          <CurrencyFormat value={value} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <TextField text={`${value}`} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />} />
        );
      },
      width: '20%',
      responsive: ['lg'],
    },
    {
      title: 'Date',
      dataIndex: 'date',
      render: (value) => {
        return (
          <TextField text={moment(value).format("MMM Do YY")} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />
        );
      },
      width: '20%',
      responsive: ['lg'],
    },
  ];

  const data = investments?.results?.map(data => {
    return {
      key: data?.account?._id,
      name: data?.account?.first_name + " " + data?.account?.last_name,
      type: data?.plans?.length,
      amount: data?.account?.total_wallet_balance,
      date: data?.account?.createdAt,
      ...data
    }
  })
  

  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };


  return (
    <Layouts>
      <ComponentDiv>

        <RowBtw>
          <div>
            <TextField text='Investors analytics' fontWeight='bold' fontFamily='Mont-Bold' fontSize='22px' lineHeight='32px' />
            <TextField text='Here are your analytics details' color={'#8A8A8A'} margin='0px 0px 15px 0px' />
          </div>
        </RowBtw>
      </ComponentDiv>
      <RowBtw style={{ background: 'white', padding: '30px 48px' }}>
        <div>
          <TextField text='Total Investment' textAlign='center' color='#424242' fontFamily='Mont-SemiBold' fontSize='14px' lineHeight='34px' />
          <CurrencyFormat value={investments?.stats?.totalInvestment} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <TextField text={`${value}`} fontFamily='Mont-Bold' fontWeight='bold' fontSize={'22px'} lineHeight='34px' />} />
         
        </div>
        <div>
          <TextField text='Registerd Investors' textAlign='center' color='#C7C7C7' fontFamily='Mont-SemiBold' fontSize='14px' lineHeight='34px' />
          <TextField text={investments?.stats?.registeredInvestors} fontWeight='bold' fontFamily='Mont-Bold' fontSize='22px' lineHeight='34px' />
       
        </div>
        <div>
          <TextField text='Active Investors' textAlign='center' color='#C7C7C7' fontFamily='Mont-SemiBold' fontSize='14px' lineHeight='34px' />
          <TextField text={investments?.stats?.activeInvestors} fontWeight='bold' fontFamily='Mont-Bold' fontSize='22px' lineHeight='34px' />
        </div>
        <div>
          <TextField text='Interest Accrued' textAlign='center' color='#C7C7C7' fontFamily='Mont-SemiBold' fontSize='14px' lineHeight='34px' />
          <CurrencyFormat value={investments?.stats?.interestAccrued} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <TextField text={`${value}`} fontFamily='Mont-Bold' fontWeight='bold' fontSize={'22px'} lineHeight='34px' />} />
         
        </div>
      </RowBtw>
      <ComponentDiv>
        <Row>
          {
            investments?.planStats?.map(data => {
              return   <Col span={8}>
            <InvestmentCardOne style={{background: data?.plan === "gold" ? "#EEE9E2" : data?.plan === "diamond" ? "#E0E9F4" : "#EAE9F0"}}>
              <Sub>
                <SubMenu>
                  {/* <TextField text='Week' fontSize='8px' /> */}
                </SubMenu>
              </Sub>
              <TextField text='Investment Value' color='#1A202C' fontFamily='Mont-SemiBold' fontSize='14px' lineHeight='24px' />
                <CurrencyFormat value={data?.tatalPlanAmount} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <TextField text={`${value}`} fontWeight='bold' fontFamily='Mont-Bold' fontSize='30px' lineHeight='34px' margin='20px 0px' />} />
       
              <RowBtw>
                <div></div>
                {/* <TextField text='20%' color='#7FB519' fontFamily='Mont-SemiBold' fontSize='14px' lineHeight='34px' /> */}
                <SubMenu2>
                  <TextField text={data?.plan} textTransform="capitalize" fontWeight='bold' color='white' fontFamily='Mont-SemiBold' fontSize='10px' lineHeight='20px' />
                </SubMenu2>
              </RowBtw>
            </InvestmentCardOne>
          </Col>
            })
          }
        </Row>
        {/* <br />
        <Row>
          <Col span={12}>
            <InvestmentCardFour>
              <Sub>
                <SubMenu>
                  <TextField text='Week' fontSize='8px' />
                </SubMenu>
              </Sub>
              <TextField text='Investment Value' color='#1A202C' fontFamily='Mont-SemiBold' fontSize='14px' lineHeight='24px' />
              <TextField text='N5,000,000' fontWeight='bold' fontFamily='Mont-Bold' fontSize='30px' lineHeight='34px' margin='20px 0px' />
              <RowBtw>
                <TextField text='30%' color='#FF4423' fontFamily='Mont-SemiBold' fontSize='14px' lineHeight='34px' />
              </RowBtw>
            </InvestmentCardFour>
          </Col>

          <Col span={12}>
            <InvestmentCardFour>
              <Sub>
                <SubMenu>
                  <TextField text='Week' fontSize='8px' />
                </SubMenu>
              </Sub>
              <TextField text='Withdrawal Volume' color='#1A202C' fontFamily='Mont-SemiBold' fontSize='14px' lineHeight='24px' />
              <TextField text='N5,000,000' fontWeight='bold' fontFamily='Mont-Bold' fontSize='30px' lineHeight='34px' margin='20px 0px' />
              <RowBtw>
                <TextField text='30%' color='#FF4423' fontFamily='Mont-SemiBold' fontSize='14px' lineHeight='34px' />
              </RowBtw>
            </InvestmentCardFour>
          </Col>
        </Row> */}
        <br />
        <Row>
          <Col md={24} lg={24} xl={15}>
            <InvestmentCardFour>
              <RowBtw>
                <TextField text='Investors' fontFamily='Mont-Bold' fontWeight='700' fontSize='14px' lineHeight='34px' />
               <div style={{cursor: 'pointer'}} onClick={() => router.push('/all-investors')}>
               <TextField text='View All ' fontFamily='Mont-SemiBold' fontSize='14px' lineHeight='34px' />
               </div>
              </RowBtw>
              <Table columns={columns} dataSource={data} onChange={onChange} />
            </InvestmentCardFour>
          </Col>

          <Col md={24} lg={24} xl={9}>
            <InvestmentCardFour>
              <RowBtw>
                <TextField text='Support' fontFamily='Mont-SemiBold' fontSize='14px' lineHeight='34px' />
                <div style={{cursor: 'pointer'}} onClick={() => router.push('/all-investors')}>
                <TextField text='View All ' fontFamily='Mont-SemiBold' fontSize='14px' lineHeight='34px' />
              </div>
              </RowBtw>
           
            </InvestmentCardFour>
          </Col>
        </Row>

        <InvestorDetailModal modalOpen={detailOpen}  handleCancel={handleDetailClose} investorData={investorData} />
      </ComponentDiv>
    </Layouts>
  )
}

export default Investment

const ComponentDiv = styled.div`
  padding-left: 48px; 
  padding-top: 18px; 
  padding-right: 40px;
`

const RowBtw = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

const InvestmentCardOne = styled.div`
background: #EAE9F0;
border-radius: 8px;
padding: 20px;
width: 98%;
`
const EmptyData = styled.div`
  height: 50px;
`
const InvestmentCardTwo = styled.div`
background: #EEE9E2;
border-radius: 8px;
padding: 20px;
width: 98%;
`

const InvestmentCardThree = styled.div`
background: #E0E9F4;
border-radius: 8px;
padding: 20px;
width: 98%;
`
const InvestmentCardFour = styled.div`
background: white;
border-radius: 8px;
padding: 20px;
width: 98%;
`

const Sub = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`

const SubMenu = styled.div`
  background: #F8F8F8;
  border: 0.5px solid #D1D1D1;
  border-radius: 5px;
  width: 40px;
  display: flex;
  justify-content: center;
`

const SubMenu2 = styled.div`
background: #5D54B2;
border-radius: 25px;
  min-width: 45px;
  max-width: 100px;
  padding: 0px 10px;
  display: flex;
  justify-content: center;
`

const SubMenu3 = styled.div`
background:  #73572F;
border-radius: 25px;
  width: 45px;
  display: flex;
  justify-content: center;
`

const SubMenu4 = styled.div`
background: #596780;
border-radius: 25px;
  width: 45px;
  display: flex;
  justify-content: center;
`