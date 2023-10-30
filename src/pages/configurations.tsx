
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import AddLoan from '../components/AddLoan'
import AddUser from '../components/AddUser'
import EmptyState from '../components/EmptyState'
import Layouts from '../components/Layout'
import TextField from '../components/TextField'
import type { ColumnsType, TableProps } from 'antd/es/table';
import { useRouter } from 'next/router'
import { Row, Col, Table, Menu } from "antd"
import AddInstallation from '../components/AddInstallation'
import AddInvestment from '../components/AddInvestment'
import { useAppDispatch } from '../app/hook'
import { createConfigLoan, deleteConfigLoan, getConfigLoan } from '../slices/OrderSlice'
import { toast, ToastContainer } from 'react-toastify'
import { EllipsisOutlined } from "@ant-design/icons"
import { Dropdown, Space } from 'antd';
import { createInstallerCosting, deleteInstallerCosting, getInstallerCosting } from '../slices/VendorSlice'
import { createInvestorCosting, getInvestorCosting } from '../slices/InvestmentSlice'
import CurrencyFormat from "react-currency-format"


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
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [loanPeriods, setLoanPeriods] = useState(null)
  const [installerCostings, setInstallerCosting] = useState(null)
  const [investmentCostings, setInvestmentCosting] = useState(null)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    dispatch(getConfigLoan()).then(dd => setLoanPeriods(dd?.payload?.data))
    dispatch(getInstallerCosting()).then(dd => setInstallerCosting(dd?.payload?.data))
    dispatch(getInvestorCosting()).then(dd => setInvestmentCosting(dd?.payload?.data))
  }, [])



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

  const deleteLoan = async (data) => {
    setLoading(true)
     try {
        var response = await dispatch(deleteConfigLoan(data?.key))
        if(deleteConfigLoan.fulfilled.match(response)){
          setLoading(false)
          dispatch(getConfigLoan()).then(dd => setLoanPeriods(dd?.payload?.data))
          toast.success("Loan period deleted successfully")
          handleLoanClose()
        }
        else {
          setLoading(false)
          toast.error("Unable to delete loan period")
        }
     }
     catch(e) {
      console.log(e)
      setLoading(false)
     }
  }

  const deleteInstaller = async (data) => {
    setLoading(true)
    try {
       var response = await dispatch(deleteInstallerCosting(data?.key))
       if(deleteInstallerCosting.fulfilled.match(response)){
         setLoading(false)
         dispatch(getInstallerCosting()).then(dd => setInstallerCosting(dd?.payload?.data))
         toast.success("Installer costing deleted successfully")
         handleLoanClose()
       }
       else {
         setLoading(false)
         toast.error("Unable to delete Installer costing")
       }
    }
    catch(e) {
     console.log(e)
     setLoading(false)
    }
  }

  const menu = (data) => (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <Menudiv onClick={() => deleteLoan(data)}>
              <TextField text='Delete' margin='0px 5px' color='#54A6FF' fontSize='12px' />
            </Menudiv>
          ),
        },

      ]}
    />
  );

  const menu2 = (data) => (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <Menudiv onClick={() => deleteInstaller(data)}>
              <TextField text='Delete' margin='0px 5px' color='#54A6FF' fontSize='12px' />
            </Menudiv>
          ),
        },

      ]}
    />
  );

 


  const columns: ColumnsType<DataType> = [
    {
      title: 'Number',
      dataIndex: 'number',
      render: (value, rowIndex) => {
        var id = rowIndex?.key as number
        return (
          <div style={{ cursor: 'pointer' }}>
            <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />
          </div>
        );
      },
      width: '20%',
    },
    {
      title: 'Period',
      dataIndex: 'period',
      render: (value) => {
        return (
          <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />
        );
      },
      width: '20%',
    },
    {
      title: 'Interest Rate',
      dataIndex: 'interest_rate',
      render: (value) => {
        return (
          <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />
        );
      },
      width: '20%',
    },
    {
      title: 'Minimum Value',
      dataIndex: 'min_value',
      render: (value) => {
        return (
          <CurrencyFormat value={value} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <TextField text={`${value}`} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />} />
         
        );
      },
      width: '20%',
    },
    {
      title: 'Maximum Value',
      dataIndex: 'max_value',
      render: (value) => {
        return (
          <CurrencyFormat value={value} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <TextField text={`${value}`} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />} />
        
        );
      },
      width: '20%',
    },
    {
      title: 'Action',
      dataIndex: '',
      render: (value) => {
        return (
          <Dropdown overlay={menu(value)}>
          <EllipsisOutlined />
        </Dropdown>
        );
      },
      width: '20%',
    },

  ];

  const columnsInvestor: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (value, rowIndex) => {
        var id = rowIndex?.key as number
        return (
          <div style={{ cursor: 'pointer' }}>
            <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />
          </div>
        );
      },
      width: '20%',
    },
    {
      title: 'Number',
      dataIndex: 'number',
      render: (value, rowIndex) => {
        var id = rowIndex?.key as number
        return (
          <div style={{ cursor: 'pointer' }}>
            <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />
          </div>
        );
      },
      width: '20%',
    },
    {
      title: 'Period',
      dataIndex: 'period',
      render: (value) => {
        return (
          <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />
        );
      },
      width: '20%',
    },
    {
      title: 'Interest Rate',
      dataIndex: 'interest_rate',
      render: (value) => {
        return (
          <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />
        );
      },
      width: '20%',
    },
    {
      title: 'Minimum Value',
      dataIndex: 'min_value',
      render: (value) => {
        return (
          <CurrencyFormat value={value} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <TextField text={`${value}`} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />} />
         
        );
      },
      width: '20%',
    },
    {
      title: 'Maximum Value',
      dataIndex: 'max_value',
      render: (value) => {
        return (
          <CurrencyFormat value={value} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <TextField text={`${value}`} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />} />
         
        );
      },
      width: '20%',
    }

  ];

  const columnInstaller: ColumnsType<DataType> = [
    {
      title: 'Cost Name',
      dataIndex: 'name',
      render: (value, rowIndex) => {
        var id = rowIndex?.key as number
        return (
          <div style={{ cursor: 'pointer' }}>
            <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />
          </div>
        );
      },
      width: '20%',
    },
    {
      title: 'Cost type',
      dataIndex: 'cost_type',
      render: (value) => {
        return (
          <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />
        );
      },
      width: '20%',
    },
    {
      title: 'Value',
      dataIndex: 'value',
      render: (value) => {
        return (
          <CurrencyFormat value={value} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <TextField text={`${value}`} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />} />
         
        );
      },
      width: '20%',
    },
    {
      title: 'Action',
      dataIndex: '',
      render: (value) => {
        return (
          <Dropdown overlay={menu2(value)}>
          <EllipsisOutlined />
        </Dropdown>
        );
      },
      width: '20%',
    },

  ];
  const data = loanPeriods?.map(data => {
    return {
      key: data._id,
      number: data?.number,
      period: data?.period,
      interest_rate: data?.interest_rate,
      min_value: data?.min_value,
      max_value: data?.max_value,
      ...data
    }
  })

  const dataInvestor = investmentCostings?.map(data => {
    return {
      key: data._id,
      name: data?.name,
      number: data?.number,
      period: data?.period,
      interest_rate: data?.interest_rate,
      min_value: data?.min_value,
      max_value: data?.max_value,
      ...data
    }
  })


  const dataInstaller = installerCostings?.map(data => {
    return {
      key: data._id,
      name: data?.name,
      cost_type: data?.cost_type,
      value: data?.value,
      ...data
    }
  })


  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };


  const handleLoanSubmit = async (data) => {
     setLoading(true)
     try {
        var response = await dispatch(createConfigLoan(data))
        if(createConfigLoan.fulfilled.match(response)){
          setLoading(false)
          dispatch(getConfigLoan()).then(dd => setLoanPeriods(dd?.payload?.data))
          toast.success("Loan period created successfully")
          handleLoanClose()
        }
        else {
          setLoading(false)
          toast.error("Unable to create loan period")
        }
     }
     catch(e) {
      console.log(e)
      setLoading(false)
     }
  }

  const handleInstallationSubmit = async (data) => {
    setLoading(true)
    try {
       var response = await dispatch(createInstallerCosting(data))
       if(createInstallerCosting.fulfilled.match(response)){
         setLoading(false)
         dispatch(getInstallerCosting()).then(dd => setInstallerCosting(dd?.payload?.data))
         toast.success("Installer cost created successfully")
         handleInstallationClose()
       }
       else {
         setLoading(false)
         toast.error("Unable to create Installer cost")
       }
    }
    catch(e) {
     console.log(e)
     setLoading(false)
    }
  }

  const handleInvestmentSubmit = async (data) => {
    setLoading(true)
    try {
       var response = await dispatch(createInvestorCosting(data))
       if(createInvestorCosting.fulfilled.match(response)){
         setLoading(false)
         dispatch(getInvestorCosting()).then(dd => setInvestmentCosting(dd?.payload?.data))
         toast.success("Investor plan created successfully")
         setIsSuccess(true)
         handleInvestmentClose()
       }
       else {
        var errMsg = response?.payload as string
         setLoading(false)
         toast.error(errMsg)
       }
    }
    catch(e) {
     console.log(e)
     setLoading(false)
    }
  }


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
              <Table columns={columnInstaller} dataSource={dataInstaller} onChange={onChange} />
            </Card>
          </div>
        }

        {
          type === "plan" && <div>
            <RowEnd>
              <ButtonTextColored onClick={() => setInvestmentOpen(true)}>+ Add investment plan</ButtonTextColored>
            </RowEnd>
            <Card>
              <Table columns={columnsInvestor} dataSource={dataInvestor} onChange={onChange} />
            </Card>
          </div>
        }


        <AddUser modalOpen={userOpen} handleCancel={() => handleUserClose()} />
        <AddLoan modalOpen={loanOpen} handleCancel={() => handleLoanClose()} isLoading={loading} handleLoanSubmit={(data) => handleLoanSubmit(data)} />
        <AddInstallation modalOpen={installationOpen} handleCancel={() => handleInstallationClose()} isLoading={loading} handleInstallationSubmit={(data) => handleInstallationSubmit(data)} />
        <AddInvestment modalOpen={investmentOpen} handleCancel={() => handleInvestmentClose()} isLoading={loading} handleInvestmentSubmit={(data) => handleInvestmentSubmit(data)} isSuccess={isSuccess} />
      </ComponentDiv>
      <ToastContainer />
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
const Menudiv = styled.div`
  display: flex;
  align-items: center;
`