
import React, { useState } from 'react'
import styled from 'styled-components'
import Layouts from '../components/Layout'
import TextField from '../components/TextField'
import { Row, Col, Table } from "antd"
import { useRouter } from 'next/router'
import type { ColumnsType, TableProps } from 'antd/es/table';
import Image from "next/image"
import { placeholder } from '../assets'
import InvestorDetailModal from '../components/InvestorDetailModal'


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


  const handleDetailClose = () => {
    setDetailOpen(false)
  }


  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (value, rowIndex) => {
        var id = rowIndex?.key as number
        return (
          <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => setDetailOpen(true)}>
          <Image src={placeholder} alt='' />
          <div style={{marginLeft: '10px'}}>
           <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />
          </div>
         
       </div>
        );
      },
      width: '30%',
      responsive: ['lg'],
    },
    {
      title: 'Type',
      dataIndex: 'type',
      render: (value) => {
        return (
          <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />
        );
      },
      width: '30%',
      responsive: ['lg'],
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      render: (value) => {
        return (
          <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />
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
          <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />
        );
      },
      width: '20%',
      responsive: ['lg'],
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      name: 'Cole Benson',
      type: "Plan 1",
      amount: 'N1,250,000',
      date: "23-05-2022",
      
    },
    {
      key: '2',
      name: 'Cole Benson',
      type: "Plan 2",
      amount: 'N1,250,000',
      date: "23-05-2022",
      
    },
    {
      key: '3',
      name: 'Cole Benson',
      type: "Plan 3",
      amount: 'N1,250,000',
      date: "23-05-2022",
      
    },
  ];

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
          <TextField text='N22,000,000' fontWeight='bold' fontFamily='Mont-Bold' fontSize='22px' lineHeight='34px' />
        </div>
        <div>
          <TextField text='Registerd Investors' textAlign='center' color='#C7C7C7' fontFamily='Mont-SemiBold' fontSize='14px' lineHeight='34px' />
          <TextField text='200' fontWeight='bold' fontFamily='Mont-Bold' fontSize='22px' lineHeight='34px' />
        </div>
        <div>
          <TextField text='Active Investors' textAlign='center' color='#C7C7C7' fontFamily='Mont-SemiBold' fontSize='14px' lineHeight='34px' />
          <TextField text='200' fontWeight='bold' fontFamily='Mont-Bold' fontSize='22px' lineHeight='34px' />
        </div>
        <div>
          <TextField text='Interest Accrued' textAlign='center' color='#C7C7C7' fontFamily='Mont-SemiBold' fontSize='14px' lineHeight='34px' />
          <TextField text='N5,000,000' fontWeight='bold' fontFamily='Mont-Bold' fontSize='22px' lineHeight='34px' />
        </div>
      </RowBtw>
      <ComponentDiv>
        <Row>
          <Col span={8}>
            <InvestmentCardOne>
              <Sub>
                <SubMenu>
                  <TextField text='Week' fontSize='8px' />
                </SubMenu>
              </Sub>
              <TextField text='Investment Value' color='#1A202C' fontFamily='Mont-SemiBold' fontSize='14px' lineHeight='24px' />
              <TextField text='N5,000,000' fontWeight='bold' fontFamily='Mont-Bold' fontSize='30px' lineHeight='34px' margin='20px 0px' />
              <RowBtw>
                <TextField text='20%' color='#7FB519' fontFamily='Mont-SemiBold' fontSize='14px' lineHeight='34px' />
                <SubMenu2>
                  <TextField text='Plan 1' fontWeight='bold' color='white' fontFamily='Mont-SemiBold' fontSize='10px' lineHeight='20px' />
                </SubMenu2>
              </RowBtw>
            </InvestmentCardOne>
          </Col>
          <Col span={8}>
            <InvestmentCardTwo>
              <Sub>
                <SubMenu>
                  <TextField text='Week' fontSize='8px' />
                </SubMenu>
              </Sub>
              <TextField text='Investment Value' color='#1A202C' fontFamily='Mont-SemiBold' fontSize='14px' lineHeight='24px' />
              <TextField text='N5,000,000' fontWeight='bold' fontFamily='Mont-Bold' fontSize='30px' lineHeight='34px' margin='20px 0px' />
              <RowBtw>
                <TextField text='20%' color='#7FB519' fontFamily='Mont-SemiBold' fontSize='14px' lineHeight='34px' />
                <SubMenu3>
                  <TextField text='Plan 2' fontWeight='bold' color='white' fontFamily='Mont-SemiBold' fontSize='10px' lineHeight='20px' />
                </SubMenu3>
              </RowBtw>
            </InvestmentCardTwo>
          </Col>
          <Col span={8}>
            <InvestmentCardThree>
              <Sub>
                <SubMenu>
                  <TextField text='Week' fontSize='8px' />
                </SubMenu>
              </Sub>
              <TextField text='Investment Value' color='#1A202C' fontFamily='Mont-SemiBold' fontSize='14px' lineHeight='24px' />
              <TextField text='N5,000,000' fontWeight='bold' fontFamily='Mont-Bold' fontSize='30px' lineHeight='34px' margin='20px 0px' />
              <RowBtw>
                <TextField text='20%' color='#7FB519' fontFamily='Mont-SemiBold' fontSize='14px' lineHeight='34px' />
                <SubMenu4>
                  <TextField text='Plan 3' fontWeight='bold' color='white' fontFamily='Mont-SemiBold' fontSize='10px' lineHeight='20px' />
                </SubMenu4>
              </RowBtw>
            </InvestmentCardThree>
          </Col>
        </Row>
        <br />
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
        </Row>
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
              <Table columns={columns} dataSource={data} onChange={onChange} />
            </InvestmentCardFour>
          </Col>
        </Row>

        <InvestorDetailModal modalOpen={detailOpen}  handleCancel={handleDetailClose} />
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
  width: 45px;
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