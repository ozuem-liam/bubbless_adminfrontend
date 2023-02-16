
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { info, loan, more, pic, square, star } from '../../assets'
import Button from '../../components/Button'
import Layouts from '../../components/Layout'
import TextField from '../../components/TextField'
import Image from 'next/image'
import { Colors } from '../../utils/constant/constant'
import { Row, Col } from "antd"
import TextInput from '../../components/TextInput'
import { useRouter } from 'next/router'
import { useAppDispatch } from '../../app/hook'
import { getLoan, getUserLoanDetail, updateLoanStatus } from '../../slices/LoanSlice'
import { toast } from 'react-toastify'
import CurrencyFormat from "react-currency-format"




function loanDetails() {
  const [type, setType] = useState('kyc')
  const router = useRouter()
  const [loanDetail, setLoanDetail] = useState<any>()
  const dispatch = useAppDispatch()
  const id = router?.query?.id as string

  useEffect(() => {

    dispatch(getUserLoanDetail(id)).then(pp => setLoanDetail(pp?.payload?.data))

  }, [id])


  const updateStatus = async(data) => {
    const payload = {
      id: id,
      status: data
    }
    try {
      var response = await dispatch(updateLoanStatus(payload))
      console.log({response})
      if(updateLoanStatus.fulfilled.match(response)){
        toast.success("Status updated successfully")
        dispatch(getUserLoanDetail(id)).then(pp => setLoanDetail(pp?.payload?.data))
      }
      else {
        var errMsg = response?.payload as string
        toast.error(errMsg)
      }
    }
    catch(e) {
      console.log({e})
    }
  }



  return (
    <Layouts>
      <ComponentDiv>
        <View>
          <TextField text='Loans details' fontWeight='bold' fontFamily='Mont-Bold' fontSize='22px' lineHeight='34px' />
          <Div>
            {
              loanDetail?.loan?.status === "approved" ? <ButtonText onClick={() => updateStatus("rejected")}>Decline</ButtonText>
              : <ButtonTextColored onClick={() => updateStatus("approved")}>Approved</ButtonTextColored>
            }
           
          </Div>
        </View>
      </ComponentDiv>
      <Hr />
      <ComponentDiv2>
        <ContainDiv>
          <Contain>
            <div>
              <TextField text='Loan Amount' textAlign='center' color='#C7C7C7' fontFamily='Mont-SemiBold' fontSize='14px' lineHeight='34px' />
              <CurrencyFormat value={loanDetail?.loan?.loan_amount} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'22px'} lineHeight='34px' />} />
           
            </div>
            <EmptyContain></EmptyContain>
            <div>
              <TextField text='Loan Amount' textAlign='center' color='#C7C7C7' fontFamily='Mont-SemiBold' fontSize='14px' lineHeight='34px' />
              <CurrencyFormat value={loanDetail?.loan?.loan_amount} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'22px'} lineHeight='34px' />} />
           
            </div>
          </Contain>
          <RowContain>
            <Sub>
              <TextField text='Consumer Credit Report' fontSize={'10px'} color={'#54A6FF'} />
              <Image src={square} alt='' />
              <Image src={more} alt='' />
            </Sub>
          </RowContain>
        </ContainDiv>
      </ComponentDiv2>
      <Hr />
      <ComponentDiv2>
        <Sub2>
          <Image src={info} alt='' />
          <TextField text='Use the diffenent tabs below to assess the infomation about the consumer to determine loan worthiness' color={'#000000'} margin='10px 10px' />
        </Sub2>
      </ComponentDiv2>
      <Hr />
      <ComponentDiv2>
        <RowDiv>
          <div onClick={() => setType('kyc')} style={{ cursor: 'pointer' }}>
            <TextField text='KYC' textAlign='center' color={type === 'kyc' ? "#424242" : "#8A8A8A"} fontSize={'14px'} lineHeight='20px' fontWeight={type === 'kyc' ? "bold" : "normal"} fontFamily='Mont-SemiBold' />
          </div>
          <div onClick={() => setType('payment')} style={{ cursor: 'pointer' }}>
            <TextField text='Payment Plan' textAlign='center' color={type === 'payment' ? "#424242" : "#8A8A8A"} fontSize={'14px'} lineHeight='20px' fontWeight={type === 'payment' ? "bold" : "normal"} fontFamily='Mont-SemiBold' />
          </div>
          <div onClick={() => setType('equipment')} style={{ cursor: 'pointer' }}>
            <TextField text='Equipment Details' textAlign='center' color={type === 'equipment' ? "#424242" : "#8A8A8A"} fontSize={'14px'} lineHeight='20px' fontWeight={type === 'equipment' ? "bold" : "normal"} fontFamily='Mont-SemiBold' />
          </div>
          <div onClick={() => setType('installer')} style={{ cursor: 'pointer' }}>
            <TextField text='Installer information' textAlign='center' color={type === 'installer' ? "#424242" : "#8A8A8A"} fontSize={'14px'} lineHeight='20px' fontWeight={type === 'installer' ? "bold" : "normal"} fontFamily='Mont-SemiBold' />
          </div>
          <div onClick={() => setType('history')} style={{ cursor: 'pointer' }}>
            <TextField text='Request history' textAlign='center' color={type === 'history' ? "#424242" : "#8A8A8A"} fontSize={'14px'} lineHeight='20px' fontWeight={type === 'history' ? "bold" : "normal"} fontFamily='Mont-SemiBold' />
          </div>
        </RowDiv>
      </ComponentDiv2>
      <Hr />
      {
        type === "kyc" && <ComponentDiv2>
          <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Row1>
              <TextInput label={'First name'} value={loanDetail?.customer?.first_name} />
              <TextInput label={'Last name'} value={loanDetail?.customer?.last_name} />
              <TextInput label={'Email'} value={loanDetail?.customer?.email} />
              <TextInput label={'Phone number'} value={loanDetail?.customer?.phone} />
              {/* <TextInput label={'Income'} value={''} /> */}
              <TextInput label={'BVN'} value={loanDetail?.loan?.bvn} />
              <TextInput label={'Business name'} value={loanDetail?.installer?.business_name} />
              <TextInput label={'Business Address'} value={loanDetail?.installer?.address}  />
            </Row1>
            <Row2>
              <MenuDiv>
                <Img src={ loanDetail?.loan?.profile_image?.length > 1 ? loanDetail?.loan?.profile_image : "https://res.cloudinary.com/doouwbecx/image/upload/v1659633074/1_ktfkhp.png"} alt='' />

                <SubmitDiv>
                  <SubmitDiv2>
                    <TextField text='Submitted documents' fontSize={'14px'} lineHeight='20px' fontWeight='bold' fontFamily='Mont-SemiBold' />
                  </SubmitDiv2>
                  <Box>
                  <a href={loanDetail?.loan?.bank_statement} target="_blank">
                    <Sub3>
                      <div style={{ width: '80%' }}>
                        <TextField text='Bank Statement' fontSize={'10px'} color={'#54A6FF'} />
                      </div>
                      <Image src={square} alt='' />
                      <Image src={more} alt='' />
                    </Sub3>
                    </a>
                    <Sub3>
                      <div style={{ width: '80%' }}>
                        <TextField text='Identification' fontSize={'10px'} color={'#54A6FF'} />
                      </div>
                      <Image src={square} alt='' />
                      <Image src={more} alt='' />
                    </Sub3>
                
                  </Box>
                </SubmitDiv>
              </MenuDiv>
            </Row2>
          </Container>
        </ComponentDiv2>
      }

      {
        type === "payment" && <ComponentDiv2>
          <Payment>
            <RowBtw>
              <RowStart>
                <Image src={star} alt='' />
                <div style={{ marginLeft: '10px' }}>
                  <TextField text={`${loanDetail?.loan?.payment_plan?.length} months`} fontSize='20px' lineHeight='21px' fontFamily='Mont-Bold' />
                  <TextField text='Interest rate @ 3%' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' margin='5px 0px 0px 0px' />
                </div>
              </RowStart>
              <div>
                <CurrencyFormat value={loanDetail?.loan?.loan_amount / loanDetail?.loan?.payment_plan?.length} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <TextField text={`${value} months`} fontFamily='Mont-SemiBold' fontSize={'20px'} lineHeight='21px' />} />
           
                <CurrencyFormat value={loanDetail?.loan?.loan_amount} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <TextField text={`Total ${value}`} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='17px' />} />
           
              </div>
            </RowBtw>
          </Payment>
          <Payment>
            <TextField text={`${loanDetail?.loan?.payment_plan?.length} months plan repayment breakdown`} fontSize='16px' lineHeight='19px' fontFamily='Mont-Bold' />
            <Hr2 />
            <TextField text='Payment schedule' fontSize='16px' lineHeight='19px' fontFamily='Mont-Bold' />
            {
              React.Children.toArray(
                loanDetail?.loan?.payment_plan?.map((data, i) => {
                  return (
                    <RowBtw style={{ marginTop: '15px' }}>
                       <div style={{width: "100px"}}>
                    <TextField text={`Month ${i + 1}`} fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
                       </div>
                    <CurrencyFormat value={data?.monthly_payout} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <TextField text={value} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='17px' />} />
                    <div style={{width: "100px"}}>
                    <TextField text={data?.payment_status} fontSize='14px' textTransform='capitalize' lineHeight='17px' fontFamily='Mont-SemiBold' />
                  </div>
                  </RowBtw>
                  )
                })
              )
            }
      
          </Payment>
        </ComponentDiv2>
      }

      {
        type === "equipment" && <ComponentDiv2>
          <Payment>
            <TextField text='Details of equipment' margin='0px 0px 30px 0px' fontSize='16px' lineHeight='19px' fontFamily='Mont-Bold' />

            <table>
              <tr style={{ height: '50px' }}>
                <th style={{ width: '150px' }}> <TextField text='Equipment' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' /></th>
                <th style={{ width: '150px' }}>
                  <TextField text='Quantity' fontSize='14px' textAlign='center' lineHeight='17px' fontFamily='Mont-SemiBold' />
                </th>
                <th style={{ width: '150px' }}>
                  <TextField text='Price' textAlign='right' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
                </th>
              </tr>
              {
               loanDetail?.equipmentRequest?.map(data => {
                return  <tr style={{ height: '50px' }}>
                <td style={{ width: '150px' }}>
                  <TextField text={data?.name} fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
                </td>
                <td style={{ width: '150px' }}>
                  <TextField text={data?.quantity} fontSize='14px' textAlign='center' lineHeight='17px' fontFamily='Mont-SemiBold' />
                </td>
                <td style={{ width: '150px' }}>
                  <CurrencyFormat value={data?.price} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <TextField text={value} textAlign='right' fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='17px' />} />
                </td>
              </tr>
               })
              }

            </table>

            <Hr2 />
            <TextField text='Energy Summary' fontSize='12px' lineHeight='18px' fontFamily='Mont-Bold' />
            <Hr3 />
            
            <RowBtw style={{ marginTop: '15px' }}>
              <TextField text='Total Watt (Peak Load)' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
              <CurrencyFormat value={loanDetail?.sizing?.total_watts} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <TextField text={`${value}W`} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />} />
         
            </RowBtw>
            <RowBtw style={{ marginTop: '15px' }}>
              <TextField text='Total Watt Hour / day' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
              <CurrencyFormat value={loanDetail?.sizing?.total_watts_per_hour} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <TextField text={`${value}W`} fontFamily='Mont-SemiBold' fontSize={'14px'} lineHeight='28px' />} />
         

            </RowBtw>
          </Payment>
        </ComponentDiv2>
      }

      {
        type === "installer" && <ComponentDiv2>
          <Payment>
            <RowBtw style={{ marginTop: '25px' }}>
              <TextField text='Name' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
              <TextField text={loanDetail?.installer?.last_name + " " + loanDetail?.installer?.first_name} fontSize='14px' lineHeight='17px' fontFamily='Mont-Bold' />

            </RowBtw>
            <RowBtw style={{ marginTop: '25px' }}>
              <TextField text='ID' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
              <TextField text={loanDetail?.installer?._id} fontSize='14px' lineHeight='17px' fontFamily='Mont-Bold' />

            </RowBtw>
            <RowBtw style={{ marginTop: '25px' }}>
              <TextField text='Address' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
              <TextField text={loanDetail?.installer?.address} fontSize='14px' lineHeight='17px' fontFamily='Mont-Bold' />

            </RowBtw>
            <RowBtw style={{ marginTop: '25px' }}>
              <TextField text='Email' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
              <TextField text={loanDetail?.installer?.email} fontSize='14px' lineHeight='17px' fontFamily='Mont-Bold' />

            </RowBtw>
            <RowBtw style={{ marginTop: '25px' }}>
              <TextField text='Phone No' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
              <TextField text={loanDetail?.installer?.phone} fontSize='14px' lineHeight='17px' fontFamily='Mont-Bold' />

            </RowBtw>
            {/* <RowBtw style={{ marginTop: '25px' }}>
              <TextField text='Rate' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
              <TextField text='N10,000 per hour' fontSize='14px' lineHeight='17px' fontFamily='Mont-Bold' />

            </RowBtw> */}
          </Payment>
        </ComponentDiv2>
      }


      {
        type === "history" && <ComponentDiv2>
          <TextField text='Total loan application (1) ' fontSize='16px' fontWeight='700' lineHeight='22px' fontFamily='Mont-SemiBold' margin='0px 0px 0px 25px' />
          <Payment>
            <RowBtw style={{ marginTop: '25px' }}>
              <TextField text='Name' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
              <TextField text={loanDetail?.installer?.last_name + " " + loanDetail?.installer?.first_name} fontSize='14px' lineHeight='17px' fontFamily='Mont-Bold' />

            </RowBtw>
            <RowBtw style={{ marginTop: '25px' }}>
              <TextField text='ID' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
              <TextField text={loanDetail?.installer?._id} fontSize='14px' lineHeight='17px' fontFamily='Mont-Bold' />

            </RowBtw>
            <RowBtw style={{ marginTop: '25px' }}>
              <TextField text='Address' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
              <TextField text={loanDetail?.installer?.address} fontSize='14px' lineHeight='17px' fontFamily='Mont-Bold' />

            </RowBtw>
            <RowBtw style={{ marginTop: '25px' }}>
              <TextField text='Email' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
              <TextField text={loanDetail?.installer?.email} fontSize='14px' lineHeight='17px' fontFamily='Mont-Bold' />

            </RowBtw>
            <RowBtw style={{ marginTop: '25px' }}>
              <TextField text='Phone No' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
              <TextField text={loanDetail?.installer?.phone} fontSize='14px' lineHeight='17px' fontFamily='Mont-Bold' />

            </RowBtw>
            {/* <RowBtw style={{ marginTop: '25px' }}>
              <TextField text='Rate' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
              <TextField text='N10,000 per hour' fontSize='14px' lineHeight='17px' fontFamily='Mont-Bold' />

            </RowBtw> */}
          </Payment>
        </ComponentDiv2>
      }
    </Layouts>
  )
}

export default loanDetails

const ComponentDiv = styled.div`
  padding-left: 48px;
  padding-top: 18px; 
  padding-right: 40px;
  padding-bottom: 10px;
  background: white;
`

const ComponentDiv2 = styled.div`
  background: white;
  padding: 10px;
`

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`
const EmptyDiv = styled.div`
  width: 50px;
`

const View = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background: white;
`

const ButtonText = styled.button`
    background: red;
    width: 100%;
    padding: 10px;
    font-size: 14px;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-family: Mont-Bold;
    font-weight: 900;
    border: 1px solid #D1D1D1;
    border-radius: 8px;
`

const ButtonTextColored = styled.button`
    background: #FFC268;
    width: 100%;
    padding: 10px;
    font-size: 14px;
    color: black;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-family: Mont-Bold;
    font-weight: 900;
    border-radius: 8px;
`
const Contain = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 50%;
`
const EmptyContain = styled.div`
  width: 100px;
`

const ContainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 97%;
  padding: 20px;
`
const RowContain = styled.div`

`
const Sub = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 250px;
padding: 10px;
background: #F0F5FA;
`
const Sub3 = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
padding: 10px;
background: #F0F5FA;
margin-bottom: 10px;
`

const Sub2 = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
width: 93%;
margin: auto 10px auto 30px;
padding: 10px;
background: #F5F5F5;
`

const Hr = styled.hr`
  margin: 0px;
  background: #E0E9F4;
`
const Hr3 = styled.hr`
  margin: 10px 0px 0px 0px;
  background: #E0E9F4;
`
const Hr2 = styled.hr`
  margin: 30px 0px 10px 0px;
  background: #E0E9F4;
`

const RowDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  margin: 0px auto;
  background: white;
`

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`

const MenuDiv = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: flex-end;
  // align-items: flex-end;
  width: 100%;
  padding-top: 30px;
`

const Img = styled.img`
  width: 50%;
  height: 200px;

  @media screen and (max-width: 1100px) {
    width: 70%;
    height: 200px;
  }
`

const SubmitDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 50px;
`

const SubmitDiv2 = styled.div`
  width: 370px;

  @media screen and (max-width: 1100px) {
    width: 350px;
  }

`

const Box = styled.div`
border: 1px solid #D1D1D1;
border-radius: 12px;
width: 50%;
padding: 20px;
margin-top: 10px;
height: 280px;

@media screen and (max-width: 1100px) {
  width: 70%;
  height: 200px;
}
`

const Payment = styled.div`
  border: 1px solid gray;
  border-radius: 10px;
  padding: 30px;
  width: 500px;
  margin-left: 25px;
  margin-top: 20px;
`

const RowBtw = styled.div`
  display: flex;
  justify-content: space-between;
`
const RowStart = styled.div`
display: flex;
`

const Row1 = styled.div`
width: 48%;
`

const Row2 = styled.div`
width: 48%;
`