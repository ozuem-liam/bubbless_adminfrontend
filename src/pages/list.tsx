import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Layouts from '../components/Layout'
import TextField from '../components/TextField'
import { Colors } from '../utils/constant/constant'
import { Row, Col, Table, Menu } from "antd"
import Image from 'next/image'
import { useRouter } from 'next/router'

import type { ColumnsType, TableProps } from 'antd/es/table';
import SearchField from '../components/SearchField'
import AddEquipmentModal from '../components/AddEquipmentModal'
import AddEquipmentApplianceModal from '../components/AddEquipmentApplianceModal'
import EquipmentDetail from '../components/EquipmentDetail'
import { useAppDispatch } from '../app/hook'
import { createAppliance, deleteAppliance, getAppliance, updateAppliance } from '../slices/ApplianceSlice'
import { toast, ToastContainer } from 'react-toastify'
import { createEquipment, deleteEquipment, getEquipment, updateEquipment } from '../slices/EquipmentSlice'
import { EllipsisOutlined } from "@ant-design/icons"
import { Dropdown, Space } from 'antd';
import { edit2, trash } from '../assets'
import CurrencyFormat from "react-currency-format"



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
  const [type, setType] = useState('equipment')
  const [equipOpen, setEquipOpen] = useState(false);
  const [applianceOpen, setApplianceOpen] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);
  const dispatch = useAppDispatch()
  const [applaince, setAppliance] = useState<any>()
  const [equipment, setEquipment] = useState<any>()
  const [loader, setLoader] = useState(false)
  const [search, setSearch] = useState("")
  const [detatilInfo, setDetailInfo] = useState(null)
  const [selectedData, setSelectedData] = useState<any>()
  const [selectedDataEquip, setSelectedDataEquip] = useState<any>()

  const handleDetailOpen = (data) => {
    setDetailOpen(true)
    setDetailInfo(data)
  }

  useEffect(() => {
    dispatch(getAppliance()).then(dd => setAppliance(dd?.payload?.data?.appliances))
    dispatch(getEquipment()).then(dd => setEquipment(dd?.payload?.data?.equipments))
  }, [])

  const handleEuipClose = () => {
    setEquipOpen(false)
    setSelectedDataEquip(null)
  }

  const openEditEquipment = (data) => {
    setEquipOpen(true)
    setSelectedDataEquip(data)
  }

  const openEditAppliance = (data) => {
    setApplianceOpen(true)
    setSelectedData(data)
  }

  const handleApplianceClose = () => {
    setApplianceOpen(false)
    setSelectedData(null)
  }
  const handleDetailClose = () => {
    setDetailOpen(false)
    setDetailInfo(null)
  }

  const handleFormSubmit = async (data) => {
    setLoader(true)
    const payload = {
      name: data?.name,
      watts: parseInt(data?.watts)
    }

    try {
      var response = await dispatch(createAppliance(payload))
      if (createAppliance.fulfilled.match(response)) {
        toast.success(response?.payload?.message)
        dispatch(getAppliance()).then(dd => setAppliance(dd?.payload?.data?.appliances))
        handleApplianceClose()
        setLoader(false)
      }
      else {
        var errMsg = response?.payload as string
        toast.error(errMsg)
        setLoader(false)
      }
    }
    catch (e) {
      console.log({ e })
      setLoader(false)
    }
  }

  const handleEditSubmit = async (data) => {
    setLoader(true)
    const payload = {
      name: data?.name,
      watts: parseInt(data?.watts),
      id: selectedData?.key
    }

    try {
      var response = await dispatch(updateAppliance(payload))
      if (updateAppliance.fulfilled.match(response)) {
        toast.success(response?.payload?.message)
        dispatch(getAppliance()).then(dd => setAppliance(dd?.payload?.data?.appliances))
        handleApplianceClose()
        setLoader(false)
      }
      else {
        var errMsg = response?.payload as string
        toast.error(errMsg)
        setLoader(false)
      }
    }
    catch (e) {
      console.log({ e })
      setLoader(false)
    }
  }

  const deleteApplainceField = async (data) => {
    setLoader(true)
    try {
      var response = await dispatch(deleteAppliance(data?.key))
      if (deleteAppliance.fulfilled.match(response)) {
        toast.success(response?.payload?.message)
        dispatch(getAppliance()).then(dd => setAppliance(dd?.payload?.data?.appliances))
        setLoader(false)
      }
      else {
        var errMsg = response?.payload as string
        toast.error(errMsg)
        setLoader(false)
      }
    }
    catch (e) {
      console.log({ e })
      setLoader(false)
    }
  }

  const handleFormSubmit2 = async (data, file) => {
    if(!file) {
      toast.error("File upload is required")
      return;
    }
    setLoader(true)
    const payload = {
      equipment_type: data?.equipment_type,
      name: data?.name,
      brand: data?.brand,
      price: parseInt(data?.price),
      secification_file: file?.fileUrl,
      description: data?.description
    }

    try {
      var response = await dispatch(createEquipment(payload))
      if (createEquipment.fulfilled.match(response)) {
        toast.success(response?.payload?.message)
        dispatch(getEquipment()).then(dd => setEquipment(dd?.payload?.data?.equipments))
        handleEuipClose()
        setLoader(false)
      }
      else {
        var errMsg = response?.payload as string
        toast.error(errMsg)
        setLoader(false)
      }
    }
    catch (e) {
      console.log({ e })
      setLoader(false)
    }
  }

  const deleteEquimentField = async (data) => {
    setLoader(true)
    try {
      var response = await dispatch(deleteEquipment(data?.key))
      if (deleteEquipment.fulfilled.match(response)) {
        toast.success(response?.payload?.message)
        dispatch(getEquipment()).then(dd => setEquipment(dd?.payload?.data?.equipments))
        setLoader(false)
      }
      else {
        var errMsg = response?.payload as string
        toast.error(errMsg)
        setLoader(false)
      }
    }
    catch (e) {
      console.log({ e })
      setLoader(false)
    }
  }

  const handleEquipmentUpdate = async (data, file) => {
    if(!file) {
      toast.error("File upload is required")
      return;
    }
    setLoader(true)
    const payload = {
      equipment_type: data?.equipment_type,
      name: data?.name,
      brand: data?.brand,
      price: parseInt(data?.price),
      secification_file: file?.fileUrl,
      description: data?.description,
      id: selectedDataEquip.key
    }


    try {
      var response = await dispatch(updateEquipment(payload))
      if (updateEquipment.fulfilled.match(response)) {
        toast.success(response?.payload?.message)
        dispatch(getAppliance()).then(dd => setAppliance(dd?.payload?.data?.appliances))
        handleEuipClose()
        setLoader(false)
      }
      else {
        var errMsg = response?.payload as string
        toast.error(errMsg)
        setLoader(false)
      }
    }
    catch (e) {
      console.log({ e })
      setLoader(false)
    }
  }

  const menu = (data) => (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <Menudiv onClick={() => openEditEquipment(data)}>
              <Image src={edit2} alt='' />
              <TextField text='Update' margin='0px 5px' color='#54A6FF' fontSize='12px' />
            </Menudiv>
          ),
        },
        {
          key: '2',
          label: (
            <Menudiv onClick={() => deleteEquimentField(data)}>
              <Image src={trash} alt='' />
              <TextField text='Delete' margin='0px 5px' color='#FF4423' fontSize='12px' />
            </Menudiv>
          )
        }
      ]}
    />
  );

  const menu2 = (data) => (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <Menudiv onClick={() => openEditAppliance(data)}>
              <Image src={edit2} alt='' />
              <TextField text='Update' margin='0px 5px' color='#54A6FF' fontSize='12px' />
            </Menudiv>
          ),
        },
        {
          key: '2',
          label: (
            <Menudiv onClick={() => deleteApplainceField(data)}>
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
      title: 'Type',
      dataIndex: 'type',
      render: (value, rowIndex) => {
        var id = rowIndex?.key as number
        return (
          <div style={{ cursor: 'pointer' }} onClick={() => handleDetailOpen(rowIndex)}>
            <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />
          </div>
        );
      },
      width: '20%',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      render: (value) => {
        return (
          <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />
        );
      },
      width: '20%',
    },
    {
      title: 'Description',
      dataIndex: 'description',
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
          <CurrencyFormat value={value} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />} />
         
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

  const columns2: ColumnsType<DataType2> = [
    {
      title: 'Type',
      dataIndex: 'type',
      render: (value, rowIndex) => {
        var id = rowIndex?.key as number
        return (
          <div style={{ cursor: 'pointer' }}>
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
          <CurrencyFormat value={value} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />} />
        );
      },
      width: '30%',
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
    }
  ];



  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  const onChange2: TableProps<DataType2>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  const filterEquip = equipment?.filter(data => data?.name.toLowerCase().includes(search.toLowerCase()))
  const filterAppliance = applaince?.filter(data => data?.name.toLowerCase().includes(search.toLowerCase()))


  const data: DataType[] = filterEquip?.map(data => {
    return {
      key: data?._id,
      type: data?.equipment_type,
      name: data?.name,
      description: data?.description,
      brand: data?.brand,
      price: data?.price,
      ...data
    }
  })

  const data2: DataType2[] = filterAppliance?.map((data, i) => {
    return {
      key: data?._id,
      type: data?.name,
      vottage: data?.watts,
      ...data
    }
  })


  return (
    <Layouts>
      <ComponentDiv>

        <RowBtw>
          <TextField text='Equipment' fontWeight='bold' fontFamily='Mont-Bold' fontSize='22px' lineHeight='32px' />
          <div>
            <NoButtonTextColored onClick={() => setApplianceOpen(true)}> + New Appliance</NoButtonTextColored>
            <ButtonTextColored onClick={() => setEquipOpen(true)}> + New Equipment</ButtonTextColored>
          </div>
        </RowBtw>

        <Card>
          <RowBtw>
            <RowStart>
              <div onClick={() => setType('equipment')} style={{ cursor: 'pointer' }}>
                <TextField text='Equipment' color={type === "equipment" ? 'black' : '#C7C7C7'} fontFamily={type === "equipment" ? 'Mont-Bold' : 'Mont-SemiBold'} fontSize='14px' lineHeight='20px' />
              </div>
              <div onClick={() => setType('appliances')} style={{ cursor: 'pointer' }}>
                <TextField text='Appliances' color={type === "appliances" ? 'black' : '#C7C7C7'} fontFamily={type === "appliances" ? 'Mont-Bold' : 'Mont-SemiBold'} fontSize='14px' lineHeight='20px' />
              </div>
            </RowStart>
            <SmallDiv>
              <SearchField placeholder={'Search by name'} value={search} handleChange={(e) => setSearch(e.target.value)} />

            </SmallDiv>
          </RowBtw>
          {
            type === "equipment" && <Table columns={columns} dataSource={data} onChange={onChange} />
          }

          {
            type === "appliances" && <Table columns={columns2} dataSource={data2} onChange={onChange2} />
          }
        </Card>

        <AddEquipmentModal modalOpen={equipOpen} handleCancel={() => handleEuipClose()} handleEditSubmit={(info, file) => handleEquipmentUpdate(info, file)} handleFormSubmit={(info, file) => handleFormSubmit2(info, file)} loader={loader} edit={selectedDataEquip} />
        <AddEquipmentApplianceModal modalOpen={applianceOpen} handleCancel={() => handleApplianceClose()} handleEditSubmit={(info) => handleEditSubmit(info)} handleFormSubmit={(info) => handleFormSubmit(info)} loader={loader} edit={selectedData} />
        <EquipmentDetail modalOpen={detailOpen} handleCancel={() => handleDetailClose()} info={detatilInfo} />
      </ComponentDiv>

      <ToastContainer position='top-center' />
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

const Menudiv = styled.div`
  display: flex;
  align-items: center;
`