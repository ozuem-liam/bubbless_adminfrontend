import React, { useEffect, useState } from 'react'
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
import AddEquipmentApplianceModal from '../components/AddEquipmentApplianceModal'
import EquipmentDetail from '../components/EquipmentDetail'
import { useAppDispatch } from '../app/hook'
import { getEquipmentRequest } from '../slices/EquipmentSlice'


interface DataType {
  key: React.Key;
  name: string;
  supplier: string;
  type: string;
  price: string;
  status: string;
}


function Request() {
  const router = useRouter()
  const [type,setType] = useState('request')
  const [equipOpen, setEquipOpen] = useState(false);
  const [applianceOpen, setApplianceOpen] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);
  const [detatilInfo, setDetailInfo] = useState(null)
  const dispatch = useAppDispatch()
  const [requested, setRequested] = useState([])
  const [procured, setProcured] = useState([])
  const [delivered, setDelivered] = useState([])
  const [search, setSearch] = useState("")


  useEffect(() => {
    dispatch(getEquipmentRequest("Requested")).then(oo => setRequested(oo?.payload?.data))
    dispatch(getEquipmentRequest("Procured")).then(oo => setProcured(oo?.payload?.data))
    dispatch(getEquipmentRequest("Delivered")).then(oo => setDelivered(oo?.payload?.data))
  }, [])


  const filterProc = procured?.filter(data => data?.name.toLowerCase().includes(search.toLowerCase()))
  const filterDeliver = delivered?.filter(data => data?.name.toLowerCase().includes(search.toLowerCase()))
  const filterRequest = requested?.filter(data => data?.name.toLowerCase().includes(search.toLowerCase()))


  const handleDetailClose = () => {
    setDetailOpen(false)
    setDetailInfo(null)
  }
  const handleDetailOpen = (data) => {
    setDetailOpen(true)
    setDetailInfo(data)
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (value, rowIndex) => {
        var id = rowIndex?.key as number
        return (
          <div>
            <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />
          </div>
        );
      },
      width: '30%',
    },
    {
      title: 'Supplier',
      dataIndex: 'supplier',
      render: (value) => {
        return (
          <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />
        );
      },
      width: '30%',
    },
    {
      title: 'Type',
      dataIndex: 'type',
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
        }
    }
  ];



  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };



  const data = filterRequest?.map(data => {
    return  {
      key: data._id,
      name: data?.name,
      supplier: data?.supplier,
      type: data?.equipment_type,
      price: `N${data?.price}`,
      status: data?.status
    }
  })
  

  const data2 = filterProc?.map(data => {
    return  {
      key: data._id,
      name: data?.name,
      supplier: data?.supplier,
      type: data?.equipment_type,
      price: `N${data?.price}`,
      status: data?.status
    }
  })
 
  const data3 = filterDeliver?.map(data => {
    return  {
      key: data._id,
      name: data?.name,
      supplier: data?.supplier,
      type: data?.equipment_type,
      price: `N${data?.price}`,
      status: data?.status
    }
  })


  return (
    <Layouts>
      <ComponentDiv>

        <RowBtw>
          <TextField text='Equipment' fontWeight='bold' fontFamily='Mont-Bold' fontSize='22px' lineHeight='32px' />
        </RowBtw>

        <Card>
          <RowBtw> 
            <RowStart>
              <div onClick={() => setType('request')} style={{cursor: 'pointer'}}>
                <TextField text='Request' color={type === "request" ? 'black' : '#C7C7C7'} fontFamily={type === "request" ? 'Mont-Bold' : 'Mont-SemiBold'} fontSize='14px' lineHeight='20px' />
              </div>
              <div onClick={() => setType('procured')} style={{cursor: 'pointer'}}>
                <TextField text='Procured' color={type === "procured" ? 'black' : '#C7C7C7'} fontFamily={type === "procured" ? 'Mont-Bold' : 'Mont-SemiBold'} fontSize='14px' lineHeight='20px' />
              </div>
              <div onClick={() => setType('delivered')} style={{cursor: 'pointer'}}>
                <TextField text='Delivered' color={type === "delivered" ? 'black' : '#C7C7C7'} fontFamily={type === "delivered" ? 'Mont-Bold' : 'Mont-SemiBold'} fontSize='14px' lineHeight='20px' />
              </div>
            </RowStart>
            <SmallDiv>
              <SearchField placeholder={'Search by name, email or ID'} value={search} handleChange={(e) => setSearch(e.target.value)} />
            </SmallDiv>
          </RowBtw>
         {
          type === "request" &&  <Table columns={columns} dataSource={data} onChange={onChange} />
         }

{
          type === "procured" &&  <Table columns={columns} dataSource={data2} onChange={onChange} />
         }
         {
          type === "delivered" &&  <Table columns={columns} dataSource={data3} onChange={onChange} />
         }
        </Card>

        <EquipmentDetail  modalOpen={detailOpen} handleCancel={() => handleDetailClose()} info={detatilInfo}  />
      </ComponentDiv>
    </Layouts>
  )
}

export default Request

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