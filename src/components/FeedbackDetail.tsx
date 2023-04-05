import { Modal } from 'antd'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useAppDispatch } from '../app/hook'
import { getFeedbackSubject } from '../slices/FeedbackSlice'
import TextField from './TextField'

function FeedbackDetail({ modalOpen, handleCancel, info }) {
const dispatch = useAppDispatch()
const [data, setData] = useState(null)

useEffect(() => {
    setData(null)
    const payload = {
        installerId: info?.installer_id,
        customerId: info?.customer_id,
    }
    dispatch(getFeedbackSubject(payload)).then(dd => setData(dd?.payload?.data?.feedbacks))
}, [info])

  return (
    <Modals title="Report details" open={modalOpen} onCancel={handleCancel} footer={null}>
      <Div>
        <TextField text='Consumer' fontWeight='bold' />
        <Subdiv>
          <TextField text={info?.customer_name} fontWeight='bold' />
        </Subdiv>
      </Div>
      <Div>
        <TextField text='Installer' fontWeight='bold' />
        <Subdiv>
          <TextField text={info?.installer_name} fontWeight='bold' />
        </Subdiv>
      </Div>
      <Div>
        <TextField text='Date' fontWeight='bold' />
        <Subdiv>
          <TextField text={info?.date} fontWeight='bold' />
        </Subdiv>
      </Div>
      <Div>
        <TextField text='Status' fontWeight='bold' />
        <Subdiv>
          <TextField text={info?.status} fontWeight='bold' />
        </Subdiv>
      </Div>
        {
            data?.map((item, i) => {
                return item?.message?.length > 0 && (
                    <div style={{display: "flex", justifyContent: i % 2 == 0 ? "left" : "right"}}>
                        <Mindiv style={{background: i % 2 == 0 ? "#F5F5F5" : "#E0E9F4"}}>
                        <TextField text={item?.message} />
                    </Mindiv> 
                    </div>
                   
                )
            })
        }
    </Modals>
  )
}

export default FeedbackDetail

const Modals = styled(Modal)`

`

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0px;
`

const Subdiv = styled.div`
  width: 50%;
`
const Mindiv = styled.div`
    padding: 10px;
    margin: 10px 0px;
    width: 300px;
    border-radius: 10px;
`