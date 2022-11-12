import React, { useState } from 'react'
import styled from 'styled-components'
import Layouts from '../components/Layout'
import TextField from '../components/TextField'
import { Colors } from '../utils/constant/constant'
import { Row, Col, Table } from "antd"
import Image from 'next/image'
import { useRouter } from 'next/router'

import type { ColumnsType, TableProps } from 'antd/es/table';
import SearchField from '../components/SearchField'


interface DataType {
  key: React.Key;
  consumer: string;
  amount: string;
  date: string;
  status: string;
}

function Equipment() {
  const router = useRouter()

  const columns: ColumnsType<DataType> = [
    {
      title: 'Consumer',
      dataIndex: 'consumer',
      render: (value, rowIndex) => {
        var id = rowIndex?.key as number
        return (
          <div style={{cursor: 'pointer'}} onClick={() => router.push(`/loan-details/${id}`)}>
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
    }
  ];

  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

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

  return (
    <Layouts>
      <ComponentDiv>
       
        <RowBtw>
           <TextField text='Equipment' fontWeight='bold' fontFamily='Mont-Bold' fontSize='22px' lineHeight='32px' />
           <ButtonTextColored> + New Equipment</ButtonTextColored>
        </RowBtw>

        <Card>
          <RowBtw>
            <TextField text='List' fontFamily='Mont-Bold' fontSize='14px' lineHeight='20px' />
             <SmallDiv>
             <SearchField placeholder={'Search by name, email or ID'} />
             </SmallDiv>
          </RowBtw>
          <Table columns={columns} dataSource={data} onChange={onChange} />
        </Card>
      </ComponentDiv>
    </Layouts>
  )
}

export default Equipment

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

const Card = styled.div`
  background: white;
  border-radius: 12px;
  height: 147px;
  padding-top: 20px;
  padding-left: 24px;
  padding-right: 10px;
`

const ButtonTextColored = styled.button`
    background: #FFC268;
    width: 200px;
    padding: 10px;
    font-size: 14px;
    color: black;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-family: Mont-Bold;
    font-weight: 900;
    border-radius: 8px;
`

const SmallDiv = styled.div`
  width: 300px;
`