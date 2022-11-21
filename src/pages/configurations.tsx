
import React, { useState } from 'react'
import styled from 'styled-components'
import AddLoan from '../components/AddLoan'
import AddUser from '../components/AddUser'
import EmptyState from '../components/EmptyState'
import Layouts from '../components/Layout'
import TextField from '../components/TextField'
import type { ColumnsType, TableProps } from 'antd/es/table';
import { useRouter } from 'next/router'
import { Row, Col, Table } from "antd"
import AddInstallation from '../components/AddInstallation'
import AddInvestment from '../components/AddInvestment'


interface DataType {
  key: React.Key;
  consumer: string;
  amount: string;
  date: string;
  status: string;
}




function Configuration() {
  const [type, setType] = useState('control')
  const [userOpen, setUserOpen] = useState(false)
  const [loanOpen, setLoanOpen] = useState(false)
  const [installationOpen, setInstallationOpen] = useState(false)
  const [investmentOpen, setInvestmentOpen] = useState(false)
  const router = useRouter()

  const handleLoanClose = () => {
    setLoanOpen(false)
  }

  const handleUserClose = () => {
    setUserOpen(false)
  }

  const handleInstallationClose = () => {
    setInstallationOpen(false)
  }

  const handleInvestmentClose = () => {
    setInvestmentOpen(false)
  }


  const columns: ColumnsType<DataType> = [
    {
      title: 'Consumer',
      dataIndex: 'consumer',
      render: (value, rowIndex) => {
        var id = rowIndex?.key as number
        return (
          <div style={{ cursor: 'pointer' }} onClick={() => router.push(`/loan-details/${id}`)}>
            <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />
          </div>
        );
      },
      width: '30%',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      render: (value) => {
        return (
          <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />
        );
      },
      width: '30%',
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
    },

  ];

  const data: DataType[] = [
    {
      key: '1',
      consumer: 'Cole Benson',
      amount: 'N1,250,000',
      date: "23-05-2022",
      status: "pending"
    },
    {
      key: '2',
      consumer: 'Cole Benson',
      amount: 'N1,250,000',
      date: "23-05-2022",
      status: "pending"
    },
    {
      key: '3',
      consumer: 'Cole Benson',
      amount: 'N1,250,000',
      date: "23-05-2022",
      status: "pending"
    }
  ];

  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };


  return (
    <Layouts>
      <ComponentDiv>

        <RowBtw>
          <div>
            <TextField text='Configurations' fontWeight='bold' fontFamily='Mont-Bold' fontSize='22px' lineHeight='32px' />
            <TextField text='Here are your analytics details' color={'#8A8A8A'} margin='0px 0px 15px 0px' />
          </div>
        </RowBtw>
        <RowStart style={{ borderBottom: "1px solid #D1D1D1" }}>
          <div style={{ cursor: 'pointer', borderBottom: type === "control" ? '3px solid #FFC268' : 'none' }} onClick={() => setType("control")}>
            <TextField text='Access Control' color={type === "control" ? 'black' : '#C7C7C7'} fontFamily={type === "control" ? 'Mont-Bold' : 'Mont-SemiBold'} fontSize='14px' lineHeight='20px' />
          </div>
          <div style={{ cursor: 'pointer', borderBottom: type === "loan" ? '3px solid #FFC268' : 'none' }} onClick={() => setType("loan")}>
            <TextField text='Loan Period' color={type === "loan" ? 'black' : '#C7C7C7'} fontFamily={type === "loan" ? 'Mont-Bold' : 'Mont-SemiBold'} fontSize='14px' lineHeight='20px' />
          </div>
          <div style={{ cursor: 'pointer', borderBottom: type === "cost" ? '3px solid #FFC268' : 'none' }} onClick={() => setType("cost")}>
            <TextField text='Installation Cost' color={type === "cost" ? 'black' : '#C7C7C7'} fontFamily={type === "cost" ? 'Mont-Bold' : 'Mont-SemiBold'} fontSize='14px' lineHeight='20px' />
          </div>
          <div style={{ cursor: 'pointer', borderBottom: type === "plan" ? '3px solid #FFC268' : 'none' }} onClick={() => setType("plan")}>
            <TextField text='Investment Plan' color={type === "plan" ? 'black' : '#C7C7C7'} fontFamily={type === "plan" ? 'Mont-Bold' : 'Mont-SemiBold'} fontSize='14px' lineHeight='20px' />
          </div>
        </RowStart>

        {
          type === "control" && <Card>
            <EmptyState header="Add a new admin and grant privileges" isBtn={true} btnTitle='Add user' handleClick={() => setUserOpen(true)} />
          </Card>
        }

        {
          type === "loan" && <div>
            <RowEnd>
              <ButtonTextColored onClick={() => setLoanOpen(true)}>+ Add loan period</ButtonTextColored>
            </RowEnd>
            <Card>
              <Table columns={columns} dataSource={data} onChange={onChange} />
            </Card>
          </div>
        }

        {
          type === "cost" && <div>
            <RowEnd>
              <ButtonTextColored onClick={() => setInstallationOpen(true)}>+ Add installation cost</ButtonTextColored>
            </RowEnd>
            <Card>
              <Table columns={columns} dataSource={data} onChange={onChange} />
            </Card>
          </div>
        }

        {
          type === "plan" && <div>
            <RowEnd>
              <ButtonTextColored onClick={() => setInvestmentOpen(true)}>+ Add investment plan</ButtonTextColored>
            </RowEnd>
            <Card>
              <Table columns={columns} dataSource={data} onChange={onChange} />
            </Card>
          </div>
        }


        <AddUser modalOpen={userOpen} handleCancel={() => handleUserClose()} />
        <AddLoan modalOpen={loanOpen} handleCancel={() => handleLoanClose()} />
        <AddInstallation modalOpen={installationOpen} handleCancel={() => handleInstallationClose()} />
        <AddInvestment modalOpen={investmentOpen} handleCancel={() => handleInvestmentClose()} />
      </ComponentDiv>
    </Layouts>
  )
}

export default Configuration

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
const RowStart = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
`

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding-top: 20px;
  padding-left: 24px;
  padding-right: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`

const RowEnd = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
margin: 10px 0px;
`


const ButtonTextColored = styled.button`
    background: #FFC268;
    width: 200px;
    padding: 12px;
    font-size: 14px;
    color: black;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-family: Mont-Bold;
    font-weight: 900;
    border-radius: 8px;
    margin-left: 20px;
`