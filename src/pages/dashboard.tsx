
import React, { useEffect, useState } from 'react'
import Layouts from '../components/Layout'
import TextField from '../components/TextField'
import { Colors, Sizes } from '../utils/constant/constant'
import { Row, Col } from "antd"
import styled from 'styled-components'
import Image from 'next/image'
import { bag, cloud, equip, equipemnt, loan, wallet } from '../assets'
import { useRouter } from 'next/router'
import { useAppDispatch } from '../app/hook'
import { getProfile } from '../slices/AuthSlice'
import { getRecentActivities, getStat, getStatForDashboard } from '../slices/DashboardSlice'
import { getDueLoans } from '../slices/LoanSlice'
import CurrencyFormat from 'react-currency-format';
import moment from 'moment'



function Dashboard() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [dashboard, setDashboard] = useState(null)
  const [dueLoans, setDueLoans] = useState([])
  const [lateLoans, setLateLoans] = useState([])
  const [loanType, setLoanType] = useState("due")
  const [installerAct, setInstallerAct] = useState<any>(null)
  const [consumerAct, setConsumerAct] = useState<any>(null)
  const [actType, setActType] = useState("installer")



  useEffect(() => {
    dispatch(getStatForDashboard()).then(dd => setDashboard(dd?.payload?.data))
    dispatch(getDueLoans("due")).then(cc => setDueLoans(cc?.payload?.data))
    dispatch(getDueLoans("late")).then(cc => setLateLoans(cc?.payload?.data))
    dispatch(getRecentActivities("installer")).then(pp => setInstallerAct(pp?.payload?.data))
    dispatch(getRecentActivities("customer")).then(pp => setConsumerAct(pp?.payload?.data))
  }, [])



  return (
    <Layouts>
      <ComponentDiv>
        <TextField text='Dashboards' fontSize={'24px'} fontWeight='bold' margin='0px 0px 4px 0px' />
        <TextField text='Here are your analytics details' color={'#8A8A8A'} />

        <View>
          <Row gutter={[16, 16]}>
            <Col span={6} >
              <Card>
                <Image src={wallet} width={30} height={30} alt='' />
                <TextField text='Approved Loans' color={Colors?.gray500} fontSize={'10px'} lineHeight='20px' />
                <CurrencyFormat value={dashboard?.stats?.total_approved_loans_volume} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <TextField text={value} fontWeight='bold' fontSize={'32px'} lineHeight='34px' />} />
           
              </Card>
            </Col>
            {/* <Col span={6} >
              <Card>
                <Image src={loan} width={30} height={30} alt='' />
                <TextField text='Loan Volume' color={Colors?.gray500} fontSize={'10px'} lineHeight='20px' />
                <TextField text={`${dashboard?.stats?.total_approved_loan}M`} fontWeight='bold' fontSize={'32px'} lineHeight='34px' />
              </Card>
            </Col> */}
            <Col span={6} >
              <Card>
                <Image src={bag} width={30} height={30} alt='' />
                <TextField text='Loans Disbursed' color={Colors?.gray500} fontSize={'10px'} lineHeight='20px' />
               
                <TextField text={dashboard?.stats?.total_loans_disbursed ? dashboard?.stats?.total_loans_disbursed : 0} fontWeight='bold' fontSize={'32px'} lineHeight='34px' />
              </Card>
            </Col>
            <Col span={6} >
              <Card>
                <Image src={equipemnt} width={30} height={30} alt='' />
                <TextField text='Equipments Request' color={Colors?.gray500} fontSize={'10px'} lineHeight='20px' />
                <TextField text={dashboard?.stats?.total_equipments_requested} fontWeight='bold' fontSize={'32px'} lineHeight='34px' />
              </Card>
            </Col>
            <Col span={6} >
              <Card>
                <Image src={wallet} width={30} height={30} alt='' />
                <TextField text='MW Loaned Out' color={Colors?.gray500} fontSize={'10px'} lineHeight='20px' />
                <TextField text='105' fontWeight='bold' fontSize={'32px'} lineHeight='34px' />
              </Card>
            </Col>
            <Col span={6} >
              <Card>
                <Image src={cloud} width={30} height={30} alt='' />
                <TextField text='Saved Carbon Emission' color={Colors?.gray500} fontSize={'10px'} lineHeight='20px' />
                <TextField text='0000' fontWeight='bold' fontSize={'32px'} lineHeight='34px' />
              </Card>
            </Col>

          </Row>
        </View>

        <View>
          <Row gutter={[8, 16]}>
            <Col span={12} >
              <Card2>
                <TextField text='Recent activities' fontWeight='bold' fontSize={'16px'} lineHeight='34px' />
                {/* <View2>
                  <TextField text='Installer' fontWeight='bold' fontSize={'14px'} lineHeight='34px' />
                  <TextField text='Consumer Report' margin='0px 10px' fontSize={'14px'} color={"#C7C7C7"} lineHeight='34px' />
                </View2> */}
                   <View2>
                 <div style={{cursor: "pointer"}} onClick={() => setActType("installer")}>
                 <TextField text='Installer' fontWeight='bold' color={actType === "installer" ? "blue" : "#C7C7C7"} fontSize={'14px'} lineHeight='34px' />
                 </div>
                 <div style={{cursor: "pointer"}} onClick={() => setActType("consumer")}>
                 <TextField text='Consumer' margin='0px 10px' fontSize={'14px'} color={actType === "consumer" ? "blue" : "#C7C7C7"} lineHeight='34px' />
                  </div>
                </View2>
                {
                  actType === "consumer" && consumerAct?.notifications?.map(data => {
                    return      <View3>
                    <Div>
                      <TextField text={data?.subject} fontWeight='bold' fontSize={'13px'} lineHeight='20px' />
                      <TextField text={data?.message} fontSize={'13px'} color={"#C7C7C7"} lineHeight='20px' />
                    </Div>
                    <TextField text={data?.user_type + " Report"} fontWeight='bold' fontSize={'13px'} lineHeight='20px' />
                  </View3>
                  })
                }

{
                  actType === "installer" && installerAct?.notifications?.map(data => {
                    return      <View3>
                    <Div>
                      <TextField text={data?.subject} fontWeight='bold' fontSize={'13px'} lineHeight='20px' />
                      <TextField text={data?.message} fontSize={'13px'} color={"#C7C7C7"} lineHeight='20px' />
                    </Div>
                    <TextField text={data?.user_type + " Report"} fontWeight='bold' fontSize={'13px'} lineHeight='20px' />
                  </View3>
                  })
                }

              </Card2>
            </Col>
            <Col span={12} >
              <Card2>
                <div>
                  <TextField text='Loan activities' fontWeight='bold' fontSize={'16px'} lineHeight='34px' />
                </div>

                <View2>
                 <div style={{cursor: "pointer"}} onClick={() => setLoanType("due")}>
                 <TextField text='Due' fontWeight='bold' color={loanType === "due" ? "blue" : "#C7C7C7"} fontSize={'14px'} lineHeight='34px' />
                 </div>
                 <div style={{cursor: "pointer"}} onClick={() => setLoanType("late")}>
                 <TextField text='Overdue' margin='0px 10px' fontSize={'14px'} color={loanType === "late" ? "blue" : "#C7C7C7"} lineHeight='34px' />
                  </div>
                </View2>
                {
                  loanType === "due" && dueLoans?.map(data => {
                    return (
                      <View3>
                      <Div>
                        <TextField text={data?.customer_name} fontWeight='bold' fontSize={'13px'} lineHeight='20px' />
                        <TextField text={moment(data?.data?.due_date).format("MMM Do YY")} fontSize={'13px'} color={"#C7C7C7"} lineHeight='20px' />
                      </Div>
                      <CurrencyFormat value={data?.data?.monthly_payout} displayType={'text'} thousandSeparator={true} prefix={'₦'} />
            
                    </View3>
                    )
                  })
                }

{
                  loanType === "late" && lateLoans?.map(data => {
                    return (
                      <View3>
                      <Div>
                        <TextField text={data?.customer_name} fontWeight='bold' fontSize={'13px'} lineHeight='20px' />
                        <TextField text={moment(data?.data?.due_date).format("MMM Do YY")} fontSize={'13px'} color={"#C7C7C7"} lineHeight='20px' />
                      </Div>
                      <CurrencyFormat value={data?.data?.monthly_payout} displayType={'text'} thousandSeparator={true} prefix={'₦'} />
            
                    </View3>
                    )
                  })
                }
  
              </Card2>
            </Col>
          </Row>
        </View>

      </ComponentDiv>
    </Layouts>
  )
}

export default Dashboard

const ComponentDiv = styled.div`
  padding-left: 48px; 
  padding-top: 18px; 
  padding-right: 40px;
`

const Card = styled.div`
  background: white;
  border-radius: 12px;
  height: 147px;
  padding-top: 20px;
  padding-left: 24px;
  padding-right: 10px;
`
const View = styled.div`
  margin-top: 26px;
`
const View2 = styled.div`
  display: flex;
  border-bottom: 1px solid #E0E9F4;
`
const View3 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  padding: 15px 0px;

  @media screen and (max-width: 1200px){
    width: 100%;
  }
`
const Card2 = styled.div`
  background: white;
  border-radius: 12px;
  height: 400px;
  padding-top: 20px;
  padding-left: 24px;
  padding-right: 10px;
  margin-bottom: 50px;
  overflow-y: scroll;
  ::-webkit-scrollbar{display: none}
`

const Div = styled.div`

`