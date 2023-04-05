
import React, { useState } from 'react'
import styled from 'styled-components'
import AddLoan from '../components/AddLoan'
import Image from "next/image"
import AddUser from '../components/AddUser'
import EmptyState from '../components/EmptyState'
import Layouts from '../components/Layout'
import TextField from '../components/TextField'
import type { ColumnsType, TableProps } from 'antd/es/table';
import { useRouter } from 'next/router'
import { Row, Col, Table } from "antd"
import AddInstallation from '../components/AddInstallation'
import AddInvestment from '../components/AddInvestment'
import InvestorDetailModal from '../components/InvestorDetailModal'
import { placeholder } from '../assets'


interface DataType {
    key: React.Key;
    name: string;
    plan: string;
    balance: string;
}




function AllInvestors() {
    const [type, setType] = useState('control')
    const [detailOpen, setDetailOpen] = useState(false);
    const [investorData, setInvestorData] = useState(null);



    const handleDetailOpen = (data) => {
    setDetailOpen(true)
    setInvestorData(data)
  }
  const handleDetailClose = () => {
    setDetailOpen(false)
    setInvestorData(null)
  }
  


    const columns: ColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (value, rowIndex) => {
                var id = rowIndex?.key as number
                return (
                    <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => handleDetailOpen(rowIndex)}>
                    <Image src={placeholder} alt='' />
                    <div style={{marginLeft: '10px'}}>
                     <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />
                    </div>
                   
                 </div>
                );
            },
            width: '30%',
        },
        {
            title: 'Plan',
            dataIndex: 'plan',
            render: (value) => {
                return (
                    <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />
                );
            },
            width: '30%',
        },
        {
            title: 'Balance',
            dataIndex: 'balance',
            render: (value) => {
                return (
                    <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />
                );
            },
            width: '70%',
        },

    ];

    const data: DataType[] = [
        {
            key: '1',
            name: 'Cole Benson',
            plan: '2',
            balance: "N200,000,000",
        },
        {
            key: '2',
            name: 'Cole Benson',
            plan: '1',
            balance: "N200,000,000",
        },
        {
            key: '3',
            name: 'Cole Benson',
            plan: '5',
            balance: "N200,000,000",
        }
    ];

    const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

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
                        <TextField text='Investors' fontWeight='bold' fontFamily='Mont-Bold' fontSize='22px' lineHeight='32px' />
                    </div>
                </RowBtw>
                <Card>
                    <Table  rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }} columns={columns} dataSource={data} onChange={onChange} />
                </Card>



                <InvestorDetailModal modalOpen={detailOpen}  handleCancel={handleDetailClose} investorData={investorData} />
            </ComponentDiv>
        </Layouts>
    )
}

export default AllInvestors

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