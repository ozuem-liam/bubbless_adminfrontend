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

import SiteDetail from '../components/SiteDetail'
import { useAppDispatch } from '../app/hook'
import { deleteSiting, getSiting } from '../slices/SitingSlice'
import { EllipsisOutlined } from "@ant-design/icons"
import { Dropdown, Space } from 'antd';
import { Menu } from "antd"
import { trash } from '../assets'
import { toast, ToastContainer } from 'react-toastify'


interface DataType {
  key: React.Key;
  name: string;
  id: string;
  installer: string;
  installerId: string;
  status: string;
}

function Sites() {
  const router = useRouter()
  const [type, setType] = useState('equipment')
  const [detailOpen, setDetailOpen] = useState(false);
  const dispatch = useAppDispatch()
  const [searchValue, setSearchValue] = useState<string>("")
  const [sitings, setSitings] = useState<any>()

  const handleDetailClose = () => {
    setDetailOpen(false)
  }

  useEffect(() => {
    dispatch(getSiting()).then(data => setSitings(data?.payload?.data?.sitings))
  }, [])

  const filterSiting = sitings?.filter(data => data?.id?.toLowerCase().includes(searchValue?.toLowerCase()) || data?.site_name?.toLowerCase().includes(searchValue?.toLowerCase()) || data?.consumer_name?.toLowerCase().includes(searchValue?.toLowerCase()))


  const deleteSitingData = async (data) => {
    try {
      var response = await dispatch(deleteSiting(data?.id))
      if(deleteSiting.fulfilled.match(response)) {
        console.log({response})
        dispatch(getSiting()).then(data => setSitings(data?.payload?.data?.sitings))
          toast.success("Siting deleted successfully")
      }
      else {
        var errMsg = await response?.payload as string
        toast.error(errMsg)
      }
    }
    catch(e) {
      console.log([e])
    }
  }
 

  const menu = (data) => (
    <Menu
      items={[
        // {
        //   key: '1',
        //   label: (
        //     <Menudiv>
        //       <Image src={edit2} alt='' />
        //       <TextField text='Update' margin='0px 5px' color='#54A6FF' fontSize='12px' />
        //     </Menudiv>
        //   ),
        // },
        {
          key: '2',
          label: (
            <Menudiv onClick={() => deleteSitingData(data)}>
              <Image src={trash} alt='' />
              <TextField text='Delete' margin='0px 5px' color='#FF4423' fontSize='12px' />
            </Menudiv>
          )
        }
      ]}
    />
  );


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
      title: 'Installer id',
      dataIndex: 'installerId',
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
          <Colored style={{ background: value === "Active" ? "#AED6C3" : "#E0E9F4", borderRadius: "23px",width: '100px', padding: '10px' }}>
          <TextField textAlign='center' textTransform='capitalize' text={value} fontFamily='Mont-SemiBold' fontSize={'12px'} lineHeight='28px' />
        </Colored>
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
    }
  ];



  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };


  const data = filterSiting?.map((data, i) => {
    return {
      key: i,
      name: data?.site_name,
      id: data?.id,
      installer: data?.consumer_name,
      installerId: data?.installer_id,
      status: data?.is_active ? "Active" : "Inactive"
    }
  })
  
  



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
              <SearchField placeholder={'Search by name or ID'} value={searchValue} handleChange={(e) =>setSearchValue(e.target.value)} />
            </SmallDiv>
          </RowBtw>
          
          <Table columns={columns} dataSource={data} onChange={onChange} />


        </Card>

        <SiteDetail modalOpen={detailOpen} handleCancel={() => handleDetailClose()} />
      </ComponentDiv>

      <ToastContainer />
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

const Menudiv = styled.div`
  display: flex;
  align-items: center;
`