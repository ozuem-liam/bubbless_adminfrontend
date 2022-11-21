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

import SiteDetail from '../components/SiteDetail'


interface DataType {
  key: React.Key;
  name: string;
  id: string;
  installer: string;
  status: string;
}

function Sites() {
  const router = useRouter()
  const [type, setType] = useState('equipment')
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
          <div style={{ cursor: 'pointer' }} onClick={() => setDetailOpen(true)}>
            <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />
          </div>
        );
      },
      width: '30%',
    },
    {
      title: 'ID',
      dataIndex: 'id',
      render: (value) => {
        return (
          <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />
        );
      },
      width: '30%',
    },
    {
      title: 'Installer name',
      dataIndex: 'installer',
      render: (value) => {
        return (
          <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />
        );
      },
      width: '20%',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (value) => {
        return (
          <Colored style={{ background: value === "Request" ? "#E0E9F4" : value === "Procurred" ? "#E0E9F4": value === "Delivered" ? "#AED6C3" : "", borderRadius: "23px",width: '100px', padding: '10px' }}>
          <TextField textAlign='center' textTransform='capitalize' text={value} fontFamily='Mont-SemiBold' fontSize={'12px'} lineHeight='28px' />
        </Colored>
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
      name: 'Cole Benson',
      id: 'SolarEdge Hybrid 24KVA Sola...',
      installer: "SolarEdge",
      status: "N1,000,000"
    },
    {
      key: '2',
      name: 'Cole Benson',
      id: 'SolarEdge Hybrid 24KVA Sola...',
      installer: "SolarEdge",
      status: "N1,000,000"
    },
    {
      key: '3',
      name: 'Cole Benson',
      id: 'SolarEdge Hybrid 24KVA Sola...',
      installer: "SolarEdge",
      status: "N1,000,000"
    },
  ];



  return (
    <Layouts>
      <ComponentDiv>

        <div>
          <TextField text='Sites' fontWeight='bold' fontFamily='Mont-Bold' fontSize='22px' lineHeight='32px' />
          <TextField text='Here are your analytics details' color={'#8A8A8A'} margin='0px 0px 15px 0px' />
        </div>

        <Card>
          <RowBtw>
            <RowStart>
              <div style={{ cursor: 'pointer' }}>
                <TextField text='Sites' color={type === "equipment" ? 'black' : '#C7C7C7'} fontFamily={type === "equipment" ? 'Mont-Bold' : 'Mont-SemiBold'} fontSize='14px' lineHeight='20px' />
              </div>
            </RowStart>
            <SmallDiv>
              <SearchField placeholder={'Search by name, email or ID'} />
            </SmallDiv>
          </RowBtw>
          
          <Table columns={columns} dataSource={data} onChange={onChange} />


        </Card>

        <SiteDetail modalOpen={detailOpen} handleCancel={() => handleDetailClose()} />
      </ComponentDiv>
    </Layouts>
  )
}

export default Sites

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
  padding-top: 20px;
  padding-left: 24px;
  padding-right: 10px;
  margin-bottom: 20px;
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

const NoButtonTextColored = styled.button`
    background: transparent;
    width: 200px;
    padding: 10px;
    font-size: 14px;
    color: black;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-family: Mont-Bold;
    font-weight: 900;
    border: 1px solid black;
    border-radius: 8px;
    margin-left: 20px;
`

const SmallDiv = styled.div`
  width: 300px;
`

const RowStart = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
  align-items: center;
`

const Colored = styled.div`

`