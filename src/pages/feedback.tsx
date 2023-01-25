import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Layouts from '../components/Layout'
import TextField from '../components/TextField'
import { Colors } from '../utils/constant/constant'
import { Row, Col, Table } from "antd"
import { useRouter } from 'next/router'
import Image from "next/image"
import type { ColumnsType, TableProps } from 'antd/es/table';
import SearchField from '../components/SearchField'
import AddEquipmentModal from '../components/AddEquipmentModal'
import AddEquipmentApplianceModal from '../components/AddEquipmentApplianceModal'
import EquipmentDetail from '../components/EquipmentDetail'
import AddInstaller from '../components/AddInstaller'
import { placeholder } from '../assets'
import { useAppDispatch } from '../app/hook'
import { getFeedback } from '../slices/FeedbackSlice'
import { Dropdown, Space, Menu } from 'antd';
import { EllipsisOutlined } from "@ant-design/icons"
import FeedbackDetail from '../components/FeedbackDetail'




interface DataType {
  key: React.Key;
  name: string;
  consumer: string;
  date: string;
  status: string
}



function Feedback() {
  const router = useRouter()
  const [type,setType] = useState('equipment')
  const [installerOpen, setInstallerOpen] = useState(false);
  const [feedbacks, setFeedbacks] = useState(null)
  const dispatch = useAppDispatch()
  const [detatilInfo, setDetailInfo] = useState(null)
  const [detailOpen, setDetailOpen] = useState(false);

  const handleDetailOpen = (data) => {
    setDetailOpen(true)
    setDetailInfo(data)
  }

  const handleDetailClose = () => {
    setDetailOpen(false)
  }


  useEffect(() => {
    dispatch(getFeedback()).then(pp => setFeedbacks(pp?.payload?.data))
  }, [])


  const handleInstallerClose = () => {
    setInstallerOpen(false)
  }



  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (value, rowIndex) => {
        var id = rowIndex?.installer_id as number
        return (
          <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => handleDetailOpen(rowIndex)}>
             {
              !rowIndex?.customer_image ? 
              <Image src={placeholder}  alt=''/>
              :
              <Images src={rowIndex?.customer_image } alt='' />
             }
             <div style={{marginLeft: '10px'}}>
              <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />
             </div>
            
          </div>
        );
      },
      width: '30%',
    },
    {
      title: 'Installer name',
      dataIndex: 'consumer',
      render: (value, rowIndex) => {
        return (
          <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} >
            {
              !rowIndex?.installer_image ? 
              <Image src={placeholder}  alt=''/>
              :
              <Images src={rowIndex?.installer_image } alt='' />
             }
          <div style={{marginLeft: '10px'}}>
           <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />
          </div>
         
       </div>
        );
      },
      width: '30%',
    },
    {
      title: 'Message',
      dataIndex: 'message',
      render: (value) => {
        return (
          <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />
        );
      },
      width: '20%',
    },
    // {
    //   title: 'Date',
    //   dataIndex: 'updatedAt',
    //   render: (value) => {
    //     return (
    //       <TextField text={new Date(value)} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />
    //     );
    //   },
    //   width: '20%',
    // },
    {
      title: '',
      dataIndex: '',
      render: (value) => {
        return (
          <EllipsisOutlined />
        );
      },
      width: '20%',
    }
  ];



  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };



  const data = feedbacks?.map(data => {
    return {
      key: data?._id,
      installer_image: data?.installer_image,
      installer_id: data?.installer_id,
      name: data?.installer_name,
      consumer: data?.customer_name,
      consumer_image: data?.consumer_image,
      date: "23-06-22",
      status: 'Approved',
      ...data
    }
  })
  



  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <Layouts>
      <ComponentDiv>

        <RowBtw>
          <div>
          <TextField text='Report' fontWeight='bold' fontFamily='Mont-Bold' fontSize='22px' lineHeight='32px' />
          <TextField text='Here are your analytics details' color={'#8A8A8A'} margin='0px 0px 15px 0px' />
          </div>
          
        </RowBtw>

        <Card>
          <RowBtw> 
            <RowStart>
              <div style={{cursor: 'pointer'}}>
                <TextField text='All Feedback' color={type === "equipment" ? 'black' : '#C7C7C7'} fontFamily={type === "equipment" ? 'Mont-Bold' : 'Mont-SemiBold'} fontSize='14px' lineHeight='20px' />
              </div>
            </RowStart>
          </RowBtw>

         <Table columns={columns} dataSource={data} onChange={onChange} />



        </Card>

        <AddInstaller modalOpen={installerOpen} handleCancel={() => handleInstallerClose()} />
        <FeedbackDetail modalOpen={detailOpen} handleCancel={() => handleDetailClose()} info={detatilInfo}  />
      </ComponentDiv>
    </Layouts>
  )
}

export default Feedback

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

const Images = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`