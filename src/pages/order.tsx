
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Layouts from '../components/Layout'
import TextField from '../components/TextField'
import { Colors } from '../utils/constant/constant'
import { Row, Col, Table } from "antd"
import Image from 'next/image'
import CurrencyFormat from "react-currency-format"
import type { ColumnsType, TableProps } from 'antd/es/table';
import { useRouter } from 'next/router'
import { useAppDispatch } from '../app/hook'
import { getOrder, getOrderStat } from '../slices/OrderSlice'
import moment from 'moment'


interface DataType {
  key: React.Key;
  consumer: string;
  amount: string;
  date: string;
  status: string;
}

interface DataType3 {
  key: React.Key;
  consumer: string;
  amount: string;
  date: string;
  status: string;
}

interface DataType2 {
  key: React.Key;
  consumer: string;
  amount: string;
  date: string;
  approvedBy: string;
}

function Order() {
  const [type, setType] = useState('request')
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [approvedOrder, setApprovedOrders] = useState<any>()
  const [pendingOrders, setPendingOrders] = useState<any>()
  const [rejectedOrders, setRejectedOrders] = useState<any>()
  const [orderStat, setOrderStat] = useState<any>()

  useEffect(() => {
    dispatch(getOrderStat()).then(dd => {
      setOrderStat(dd?.payload?.data)
    })
    dispatch(getOrder("approved")).then(dd => {
      setApprovedOrders(dd?.payload?.data)
    })
    dispatch(getOrder("rejected")).then(dd => {
      setRejectedOrders(dd?.payload?.data)
    })
    dispatch(getOrder("pending")).then(dd => {
      setPendingOrders(dd?.payload?.data)
    })
  }, [])


  const columns: ColumnsType<DataType> = [
    {
      title: 'Consumer',
      dataIndex: 'consumer',
      render: (value, rowIndex) => {
        var id = rowIndex?.key as number
        return (
          <div style={{cursor: 'pointer'}} onClick={() => router.push(`/order-details/${id}`)}>
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
          <CurrencyFormat value={value} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />} />
            
        );
      },
      width: '30%',
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
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (value) => {
        return (
          <Colored style={{ background: value === "pending" ? "#FFE488" : "", borderRadius: value === "pending" ? "43px" : "none", width: '100px', padding: '10px' }}>
            <TextField textAlign='center' color='white' textTransform='capitalize' text={value} fontFamily='Mont-SemiBold' fontSize={'12px'} lineHeight='28px' />
          </Colored>
        );
      },
      width: '40%',
    },
  ];

  const columns3: ColumnsType<DataType> = [
    {
      title: 'Consumer',
      dataIndex: 'consumer',
      render: (value, rowIndex) => {
        var id = rowIndex?.key as number
        return (
          <div style={{cursor: 'pointer'}} onClick={() => router.push(`/order-details/${id}`)}>
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
          <CurrencyFormat value={value} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />} />
        );
      },
      width: '30%',
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
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (value) => {
        return (
          <Colored style={{ background: value === "rejected" ? "red" : "", borderRadius: value === "rejected" ? "43px" : "43px",width: '100px', padding: '10px' }}>
            <TextField textAlign='center' color='white' textTransform='capitalize' text={value} fontFamily='Mont-SemiBold' fontSize={'12px'} lineHeight='28px' />
          </Colored>
        );
      },
      //   {
      //     text: 'London',
      //     value: 'London',
      //   },
      //   {
      //     text: 'New York',
      //     value: 'New York',
      //   },
      // ],
      // onFilter: (value: string, record) => record.address.startsWith(value),
      // filterSearch: true,
      width: '40%',
    },
  ];

  const columns2: ColumnsType<DataType2> = [
    {
      title: 'Consumer',
      dataIndex: 'consumer',
      render: (value, rowIndex) => {
        var id = rowIndex?.key as number
        return (
          <div style={{cursor: 'pointer'}} onClick={() => router.push(`/order-details/${id}`)}>
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
          <CurrencyFormat value={value} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />} />
        );
      },
      width: '30%',
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
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (value) => {
        return (
          <Colored style={{ background: value === "approved" ? "green" : "red", borderRadius: value === "approved" ? "43px" : "43px",width: '100px', padding: '10px' }}>
            <TextField textAlign='center' color='white' textTransform='capitalize' text={value} fontFamily='Mont-SemiBold' fontSize={'12px'} lineHeight='28px' />
          </Colored>
        );
      },
      width: '40%',
    },
  ];


  const data = pendingOrders?.orders?.map(pp => {
    return {
      key: pp?.id,
      consumer: pp?.first_name + " " + pp?.last_name,
      amount: pp?.order_amount,
      date: pp?.createdAt,
      status: pp?.status,
      ...pp
    }
  })
  

  const data3 = rejectedOrders?.orders?.map(pp => {
    return {
      key: pp?.id,
      consumer: pp?.first_name + " " + pp?.last_name,
      amount: pp?.order_amount,
      date: pp?.createdAt,
      status: pp?.status,
      ...pp
    }
  })


  const data2 = approvedOrder?.orders?.map(pp => {
    return {
      key: pp?.id,
      consumer: pp?.first_name + " " + pp?.last_name,
      amount: pp?.order_amount,
      date: pp?.createdAt,
      status: pp?.status,
      ...pp
    }
  })

  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  const onChange2: TableProps<DataType2>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  const onChange3: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <Layouts>
    <ComponentDiv>
    <TextField text='Orders' fontSize={'24px'} fontWeight='bold' margin='0px 0px 4px 0px' />
      <TextField text='Here are your analytics details' color={'#8A8A8A'} />
      <View>
        <Row gutter={[16, 16]}>
          <Col span={8} >
            <Card>
              <TextField text='All' fontFamily='Mont-Bold' color={'#596780'} fontSize={'16px'} lineHeight='24px' />
              <RowBtw>
                <TextField text='Number' color={"#C7C7C7"} fontSize={'16px'} lineHeight='34px' />
                <TextField text={orderStat?.all_orders?.count ? orderStat?.all_orders?.count : 0} fontWeight='bold' fontSize={'20px'} lineHeight='34px' />
              </RowBtw>
              <RowBtw>
                <TextField text='Volume' color={"#C7C7C7"} fontSize={'16px'} lineHeight='34px' />
                <CurrencyFormat value={orderStat?.all_orders?.volume ? orderStat?.all_orders?.volume : 0} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <TextField text={value} fontWeight='bold' fontSize={'20px'} lineHeight='34px' />} />
              </RowBtw>
            </Card>
          </Col>
          <Col span={8} >
            <Card>
              <TextField text='Approved' fontFamily='Mont-Bold' color={'#596780'} fontSize={'16px'} lineHeight='24px' />
              <RowBtw>
                <TextField text='Number' color={"#C7C7C7"} fontSize={'16px'} lineHeight='34px' />
                <TextField text={orderStat?.approved_orders?.count ? orderStat?.approved_orders?.count : 0} fontWeight='bold' fontSize={'20px'} lineHeight='34px' />
              </RowBtw>
              <RowBtw>
                <TextField text='Volume' color={"#C7C7C7"} fontSize={'16px'} lineHeight='34px' />
                <CurrencyFormat value={orderStat?.approved_orders?.volume ? orderStat?.approved_orders?.volume : 0} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <TextField text={value} fontWeight='bold' fontSize={'20px'} lineHeight='34px' />} />
              </RowBtw>
            </Card>
          </Col>
          <Col span={8} >
            <Card>
              <TextField text='Rejected' fontFamily='Mont-Bold' color={'#596780'} fontSize={'16px'} lineHeight='24px' />
              <RowBtw>
                <TextField text='Number' color={"#C7C7C7"} fontSize={'16px'} lineHeight='34px' />
                <TextField text={orderStat?.rejected_orders?.count ? orderStat?.rejected_orders?.count : 0} fontWeight='bold' fontSize={'20px'} lineHeight='34px' />
              </RowBtw>
              <RowBtw>
                <TextField text='Volume' color={"#C7C7C7"} fontSize={'16px'} lineHeight='34px' />
                <CurrencyFormat value={orderStat?.rejected_orders?.volume ? orderStat?.rejected_orders?.volume : 0} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <TextField text={value} fontWeight='bold' fontSize={'20px'} lineHeight='34px' />} />
              </RowBtw>
            </Card>
          </Col>
        </Row>
      </View>

      <Card2>
        <MiniRowBtw>
          <div onClick={() => setType('request')} style={{cursor: 'pointer'}}>
            <TextField text='Requests' color={type === 'request' ? "#424242" : "#8A8A8A"}  fontSize={'14px'} lineHeight='20px' fontWeight={type === 'request' ? "bold" : "normal"} margin='0px 0px 4px 0px' />
          </div>
          <div onClick={() => setType('approved')} style={{cursor: 'pointer'}}>
            <TextField text='Approved' color={type === 'approved' ? "#424242" : "#8A8A8A"} fontWeight={type === 'approved' ? "bold" : "normal"} fontSize={'14px'} lineHeight='20px' />
          </div>
          <div onClick={() => setType('rejected')} style={{cursor: 'pointer'}}>
            <TextField text='Rejected' color={type === 'rejected' ? "#424242" : "#8A8A8A"} fontWeight={type === 'rejected' ? "bold" : "normal"} fontSize={'14px'} lineHeight='20px' />
          </div>
        </MiniRowBtw>
        {
          type === "request" && <Table columns={columns} dataSource={data} onChange={onChange} />

        }
         {
          type === "approved" && <Table columns={columns2} dataSource={data2} onChange={onChange2} />
          
        }
         {
          type === "rejected" && <Table columns={columns3} dataSource={data3} onChange={onChange3} />
          
        }
      </Card2>
    </ComponentDiv>
    </Layouts>
  )
}

export default Order

const Card = styled.div`
  background: white;
  border-radius: 12px;
  height: 147px;
  padding-top: 20px;
  padding-left: 24px;
  padding-right: 10px;
`
const View = styled.div`
  margin-top: 26px;
`

const RowBtw = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px;
`


const MiniRowBtw = styled.div`
width: 400px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 0px;
`



const Card2 = styled.div`
  background: white;
  border-radius: 12px;
  height: 600px;
  padding-top: 20px;
  padding-left: 24px;
  padding-right: 10px;
  margin-top: 20px;
  margin-bottom: 50px;
  overflow-y: scroll;
  ::-webkit-scrollbar{display: none}
`

const Colored = styled.div`

`
const ComponentDiv = styled.div`
  padding-left: 48px; 
  padding-top: 18px; 
  padding-right: 40px;
`