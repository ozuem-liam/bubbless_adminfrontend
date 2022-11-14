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
import AddEquipmentModal from '../components/AddEquipmentModal'


interface DataType {
  key: React.Key;
  type: string;
  name: string;
  brand: string;
  price: string;
}

interface DataType2 {
  key: React.Key;
  type: string;
  vottage: string;
}

function List() {
  const router = useRouter()
  const [type,setType] = useState('equipment')
  const [equipOpen, setEquipOpen] = useState(false);
  const [applianceOpen, setApplianceOpen] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);


  const handleEuipClose = () => {
    setEquipOpen(false)
  }

  const handleApplianceClose = () => {
    setApplianceOpen(false)
  }
  const handleDetailClose = () => {
    setDetailOpen(false)
  }


  const columns: ColumnsType<DataType> = [
    {
      title: 'Type',
      dataIndex: 'type',
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
      title: 'Name',
      dataIndex: 'name',
      render: (value) => {
        return (
          <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />
        );
      },
      width: '30%',
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
      render: (value) => {
        return (
          <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />
        );
      },
      width: '20%',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      render: (value) => {
        return (
          <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />
        );
      },
      width: '20%',
    }
  ];

  const columns2: ColumnsType<DataType2> = [
    {
      title: 'Type',
      dataIndex: 'type',
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
      title: 'Vottage',
      dataIndex: 'vottage',
      render: (value) => {
        return (
          <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />
        );
      },
      width: '30%',
    }
  ];

  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  const onChange2: TableProps<DataType2>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  const data: DataType[] = [
    {
      key: '1',
      type: 'Cole Benson',
      name: 'SolarEdge Hybrid 24KVA Sola...',
      brand: "SolarEdge",
      price: "N1,000,000"
    },
    {
      key: '2',
      type: 'Cole Benson',
      name: 'SolarEdge Hybrid 24KVA Sola...',
      brand: "SolarEdge",
      price: "N1,000,000"
    },
    {
      key: '3',
      type: 'Cole Benson',
      name: 'SolarEdge Hybrid 24KVA Sola...',
      brand: "SolarEdge",
      price: "N1,000,000"
    }
  ];

  const data2: DataType2[] = [
    {
      key: '1',
      type: 'Medium - Television Set',
      vottage: "N1,000,000"
    },
    {
      key: '2',
      type: 'Big - Refridgerator',
      vottage: "N1,000,000"
    },
    {
      key: '3',
      type: 'Big - Refridgerator',
      vottage: "N1,000,000"
    }
  ];

  return (
    <Layouts>
      <ComponentDiv>

        <RowBtw>
          <TextField text='Equipment' fontWeight='bold' fontFamily='Mont-Bold' fontSize='22px' lineHeight='32px' />
          <div>
            <NoButtonTextColored> + New Appliance</NoButtonTextColored>
            <ButtonTextColored onClick={() => setEquipOpen(true)}> + New Equipment</ButtonTextColored>
          </div>
        </RowBtw>

        <Card>
          <RowBtw> 
            <RowStart>
              <div onClick={() => setType('equipment')} style={{cursor: 'pointer'}}>
                <TextField text='Equipment' color={type === "equipment" ? 'black' : '#C7C7C7'} fontFamily={type === "equipment" ? 'Mont-Bold' : 'Mont-SemiBold'} fontSize='14px' lineHeight='20px' />
              </div>
              <div onClick={() => setType('appliances')} style={{cursor: 'pointer'}}>
                <TextField text='Appliances' color={type === "appliances" ? 'black' : '#C7C7C7'} fontFamily={type === "appliances" ? 'Mont-Bold' : 'Mont-SemiBold'} fontSize='14px' lineHeight='20px' />
              </div>
            </RowStart>
            <SmallDiv>
              <SearchField placeholder={'Search by name, email or ID'} />
            </SmallDiv>
          </RowBtw>
         {
          type === "equipment" &&  <Table columns={columns} dataSource={data} onChange={onChange} />
         }

{
          type === "appliances" &&  <Table columns={columns2} dataSource={data2} onChange={onChange2} />
         }
        </Card>

        <AddEquipmentModal modalOpen={equipOpen} handleCancel={() => handleEuipClose()} />
      </ComponentDiv>
    </Layouts>
  )
}

export default List

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