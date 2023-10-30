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

import AddInstaller from '../components/AddInstaller'
import { placeholder } from '../assets'
import { useAppDispatch } from '../app/hook'
import { getInstaller } from '../slices/VendorSlice'
import { Email } from '@material-ui/icons'
import { Dropdown, Space, Menu } from 'antd';
import { EllipsisOutlined } from "@ant-design/icons"


interface DataType {
  key: React.Key;
  name: string;
  consumer: number;
  site: number;
  equipment: number;
  status: string,
  email: string
}



function Installer() {
  const router = useRouter()
  const [type,setType] = useState('equipment')
  const [installerOpen, setInstallerOpen] = useState(false);
  const dispatch = useAppDispatch()
 const [installer, setInstaller] = useState([])
 const [search, setSearch] = useState("")




  const handleInstallerClose = () => {
    setInstallerOpen(false)
    dispatch(getInstaller()).then(data => setInstaller(data?.payload?.data?.result))
  }


  useEffect(() => {
    dispatch(getInstaller()).then(data => setInstaller(data?.payload?.data?.result))
  }, [])



  const menu = (data) => (
    <Menu
      items={[
        {
          key: '1',
          
        },

      ]}
    />
  );



  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (value, rowIndex) => {
        var id = rowIndex?.key as number
        return (
          <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => router.push(`/installer-detail/${id}`)}>
             {
              rowIndex?.image?.length < 1 ?
              <Image src={placeholder} alt=''  />
              :  <img src={rowIndex?.image} alt='' width={40} height={40} style={{borderRadius: "50%"}} />
             }
            
             <div style={{marginLeft: '10px'}}>
              <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />
              <TextField text={rowIndex?.email} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' margin='-5px 0px 0px 0px' color='#90A3BF' />
             </div>
            
          </div>
        );
      },
      width: '40%',
    },
    {
      title: 'Consumer',
      dataIndex: 'consumer',
      render: (value) => {
        return (
          <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />
        );
      },
      width: '20%',
    },
    {
      title: 'Site',
      dataIndex: 'site',
      render: (value) => {
        return (
          <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />
        );
      },
      width: '20%',
    },
    // {
    //   title: 'Equipment',
    //   dataIndex: 'equipment',
    //   render: (value) => {
    //     return (
    //       <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />
    //     );
    //   },
    //   width: '20%',
    // },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (value) => {
        return (
          <Colored style={{ background: value === "Approved" ? "#AED6C3"  : "#FFD96B", borderRadius: "23px",width: '100px', padding: '10px' }}>
          <TextField textAlign='center' textTransform='capitalize' text={value} fontFamily='Mont-SemiBold' fontSize={'12px'} lineHeight='28px' />
        </Colored>
        );
      },
      width: '20%',
    },
    // {
    //   title: '',
    //   dataIndex: '',
    //   render: (value) => {
    //     return (
    //       <Dropdown overlay={menu(value)}>
    //       <EllipsisOutlined />
    //     </Dropdown>
    //     );
    //   },
    //   width: '20%',
    // }
  ];



  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };


  const filterInstaller = installer?.filter(data => data?.account.first_name.toLowerCase().includes(search.toLowerCase()) || data?.account?.last_name.toLowerCase().includes(search.toLowerCase())) 

  const data = filterInstaller?.map(dd => {
    return  {
      key: dd?.account?._id,
      image: dd?.account?.company_logo,
      name: dd?.account?.last_name + " " + dd?.account?.first_name,
      email: dd?.account?.email,
      consumer: dd?.customers?.length,
      site: dd?.sitings?.length,
      status: dd?.account?.status,
      ...dd
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
          <TextField text='Installers' fontWeight='bold' fontFamily='Mont-Bold' fontSize='22px' lineHeight='32px' />
          <TextField text='Here are your analytics details' color={'#8A8A8A'} margin='0px 0px 15px 0px' />
          </div>
          
          <div>
            <ButtonTextColored onClick={() => setInstallerOpen(true)}> + New Installer</ButtonTextColored>
          </div>
        </RowBtw>

        <Card>
          <RowBtw> 
            <RowStart>
              <div style={{cursor: 'pointer'}}>
                <TextField text='Installers' color={type === "equipment" ? 'black' : '#C7C7C7'} fontFamily={type === "equipment" ? 'Mont-Bold' : 'Mont-SemiBold'} fontSize='14px' lineHeight='20px' />
              </div>
            </RowStart>
            <SmallDiv>
              <SearchField  value={search} handleChange={(e) => setSearch(e.target.value)} placeholder={'Search by name, email or ID'} />
            </SmallDiv>
          </RowBtw>

         <Table  rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }} columns={columns} dataSource={data} onChange={onChange} />



        </Card>

        <AddInstaller modalOpen={installerOpen} handleCancel={() => handleInstallerClose()} />

      </ComponentDiv>
    </Layouts>
  )
}

export default Installer

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