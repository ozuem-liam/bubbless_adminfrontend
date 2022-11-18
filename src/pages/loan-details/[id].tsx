
import React, { useState } from 'react'
import styled from 'styled-components'
import { info, more, pic, square, star } from '../../assets'
import Button from '../../components/Button'
import Layouts from '../../components/Layout'
import TextField from '../../components/TextField'
import Image from 'next/image'
import { Colors } from '../../utils/constant/constant'
import { Row, Col } from "antd"
import TextInput from '../../components/TextInput'





function loanDetails() {
  const [type, setType] = useState('kyc')



  return (
    <Layouts>
      <ComponentDiv>
        <View>
          <TextField text='Loans details' fontWeight='bold' fontFamily='Mont-Bold' fontSize='22px' lineHeight='34px' />
          <Div>
            <ButtonText>Decline</ButtonText>
            <EmptyDiv></EmptyDiv>
            <ButtonTextColored>Approved</ButtonTextColored>
          </Div>
        </View>
      </ComponentDiv>
      <Hr />
      <ComponentDiv2>
        <ContainDiv>
          <Contain>
            <div>
              <TextField text='Loan Amount' textAlign='center' color='#C7C7C7' fontFamily='Mont-SemiBold' fontSize='14px' lineHeight='34px' />
              <TextField text='N200,000' fontWeight='bold' fontFamily='Mont-Bold' fontSize='22px' lineHeight='34px' />
            </div>
            <EmptyContain></EmptyContain>
            <div>
              <TextField text='Loan Amount' textAlign='center' color='#C7C7C7' fontFamily='Mont-SemiBold' fontSize='14px' lineHeight='34px' />
              <TextField text='N200,000' fontWeight='bold' fontFamily='Mont-Bold' fontSize='22px' lineHeight='34px' />
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
              <TextInput label={'First name'} value={''} />
              <TextInput label={'Last name'} value={''} />
              <TextInput label={'Email'} value={''} />
              <TextInput label={'Phone number'} value={''} />
              <TextInput label={'Income'} value={''} />
              <TextInput label={'BVN'} value={''} />
              <TextInput label={'Business name'} value={''} />
              <TextInput label={'Business Address'} value={''} />
            </Row1>
            <Row2>
              <MenuDiv>
                <Img src={"https://res.cloudinary.com/doouwbecx/image/upload/v1659633074/1_ktfkhp.png"} alt='' />

                <SubmitDiv>
                  <SubmitDiv2>
                    <TextField text='Submitted documents' fontSize={'14px'} lineHeight='20px' fontWeight='bold' fontFamily='Mont-SemiBold' />
                  </SubmitDiv2>
                  <Box>
                    <Sub3>
                      <div style={{ width: '80%' }}>
                        <TextField text='Consumer Credit Report' fontSize={'10px'} color={'#54A6FF'} />
                      </div>
                      <Image src={square} alt='' />
                      <Image src={more} alt='' />
                    </Sub3>
                    <Sub3>
                      <div style={{ width: '80%' }}>
                        <TextField text='Consumer Credit Report' fontSize={'10px'} color={'#54A6FF'} />
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
                  <TextField text='3 months' fontSize='20px' lineHeight='21px' fontFamily='Mont-Bold' />
                  <TextField text='Interest rate @ 3%' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' margin='5px 0px 0px 0px' />
                </div>
              </RowStart>
              <div>
                <TextField text='N85,000/month' fontSize='20px' lineHeight='21px' fontFamily='Mont-Bold' />
                <TextField text='Total: 87,500' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' margin='5px 0px 0px 0px' />
              </div>
            </RowBtw>
          </Payment>
          <Payment>
            <TextField text='3 months plan repayment breakdown' fontSize='16px' lineHeight='19px' fontFamily='Mont-Bold' />
            <Hr2 />
            <TextField text='Payment schedule' fontSize='16px' lineHeight='19px' fontFamily='Mont-Bold' />
            <RowBtw style={{ marginTop: '15px' }}>
              <TextField text='Month one' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
              <TextField text='N85,000.00' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
            </RowBtw>
            <RowBtw style={{ marginTop: '15px' }}>
              <TextField text='Month two' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
              <TextField text='N85,000.00' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
            </RowBtw>
            <RowBtw style={{ marginTop: '15px' }}>
              <TextField text='Month month' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
              <TextField text='N85,000.00' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
            </RowBtw>
            <RowBtw style={{ marginTop: '15px', background: '#E0E9F4', padding: '10px 5px' }}>
              <TextField text='Total' fontSize='14px' lineHeight='17px' fontFamily='Mont-Bold' />
              <TextField text='N85,000.00' fontSize='14px' lineHeight='17px' fontFamily='Mont-Bold' />
            </RowBtw>
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
                  <TextField text='Hour on per day' textAlign='right' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
                </th>
              </tr>
              <tr style={{ height: '50px' }}>
                <td style={{ width: '150px' }}>
                  <TextField text='Equipment' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
                </td>
                <td style={{ width: '150px' }}>
                  <TextField text='12' fontSize='14px' textAlign='center' lineHeight='17px' fontFamily='Mont-SemiBold' />
                </td>
                <td style={{ width: '150px' }}>
                  <TextField text='12H' fontSize='14px' textAlign='right' lineHeight='17px' fontFamily='Mont-SemiBold' />
                </td>
              </tr>
              <tr style={{ height: '50px' }}>
                <td style={{ width: '150px' }}>
                  <TextField text='Equipment' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
                </td>
                <td style={{ width: '150px' }}>
                  <TextField text='12' fontSize='14px' textAlign='center' lineHeight='17px' fontFamily='Mont-SemiBold' />
                </td>
                <td style={{ width: '150px' }}>
                  <TextField text='12H' fontSize='14px' textAlign='right' lineHeight='17px' fontFamily='Mont-SemiBold' />
                </td>
              </tr>
              <tr style={{ height: '50px' }}>
                <td style={{ width: '150px' }}>
                  <TextField text='Equipment' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
                </td>
                <td style={{ width: '150px' }}>
                  <TextField text='12' fontSize='14px' textAlign='center' lineHeight='17px' fontFamily='Mont-SemiBold' />
                </td>
                <td style={{ width: '150px' }}>
                  <TextField text='12H' fontSize='14px' textAlign='right' lineHeight='17px' fontFamily='Mont-SemiBold' />
                </td>
              </tr>
              <tr style={{ height: '50px' }}>
                <td style={{ width: '150px' }}>
                  <TextField text='Equipment' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
                </td>
                <td style={{ width: '150px' }}>
                  <TextField text='12' fontSize='14px' textAlign='center' lineHeight='17px' fontFamily='Mont-SemiBold' />
                </td>
                <td style={{ width: '150px' }}>
                  <TextField text='12H' fontSize='14px' textAlign='right' lineHeight='17px' fontFamily='Mont-SemiBold' />
                </td>
              </tr>
            </table>

            <Hr2 />
            <TextField text='Energy Summary' fontSize='12px' lineHeight='18px' fontFamily='Mont-Bold' />
            <Hr3 />
            <RowBtw style={{ marginTop: '15px' }}>
              <TextField text='Total Watt (Peak Load)' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
              <TextField text='1200W' fontSize='14px' lineHeight='17px' fontFamily='Mont-Bold' />

            </RowBtw>
            <RowBtw style={{ marginTop: '15px' }}>
              <TextField text='Total Watt Hour / day' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
              <TextField text='1200W' fontSize='14px' lineHeight='17px' fontFamily='Mont-Bold' />

            </RowBtw>
            <RowBtw style={{ marginTop: '15px' }}>
              <TextField text='Kilowat Hours /  month' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
              <TextField text='75000KW' fontSize='14px' lineHeight='17px' fontFamily='Mont-Bold' />

            </RowBtw>
          </Payment>
        </ComponentDiv2>
      }

      {
        type === "installer" && <ComponentDiv2>
          <Payment>
            <RowBtw style={{ marginTop: '25px' }}>
              <TextField text='Name' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
              <TextField text='Installer name' fontSize='14px' lineHeight='17px' fontFamily='Mont-Bold' />

            </RowBtw>
            <RowBtw style={{ marginTop: '25px' }}>
              <TextField text='ID' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
              <TextField text='10101010101' fontSize='14px' lineHeight='17px' fontFamily='Mont-Bold' />

            </RowBtw>
            <RowBtw style={{ marginTop: '25px' }}>
              <TextField text='Address' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
              <TextField text='Site Address' fontSize='14px' lineHeight='17px' fontFamily='Mont-Bold' />

            </RowBtw>
            <RowBtw style={{ marginTop: '25px' }}>
              <TextField text='Email' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
              <TextField text='email@installer.com' fontSize='14px' lineHeight='17px' fontFamily='Mont-Bold' />

            </RowBtw>
            <RowBtw style={{ marginTop: '25px' }}>
              <TextField text='Phone No' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
              <TextField text='0810000000' fontSize='14px' lineHeight='17px' fontFamily='Mont-Bold' />

            </RowBtw>
            <RowBtw style={{ marginTop: '25px' }}>
              <TextField text='Rate' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
              <TextField text='N10,000 per hour' fontSize='14px' lineHeight='17px' fontFamily='Mont-Bold' />

            </RowBtw>
          </Payment>
        </ComponentDiv2>
      }


      {
        type === "history" && <ComponentDiv2>
          <TextField text='Total loan application (1) ' fontSize='16px' fontWeight='700' lineHeight='22px' fontFamily='Mont-SemiBold' margin='0px 0px 0px 25px' />
          <Payment>
            <RowBtw style={{ marginTop: '25px' }}>
              <TextField text='Name' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
              <TextField text='Installer name' fontSize='14px' lineHeight='17px' fontFamily='Mont-Bold' />

            </RowBtw>
            <RowBtw style={{ marginTop: '25px' }}>
              <TextField text='ID' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
              <TextField text='10101010101' fontSize='14px' lineHeight='17px' fontFamily='Mont-Bold' />

            </RowBtw>
            <RowBtw style={{ marginTop: '25px' }}>
              <TextField text='Address' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
              <TextField text='Site Address' fontSize='14px' lineHeight='17px' fontFamily='Mont-Bold' />

            </RowBtw>
            <RowBtw style={{ marginTop: '25px' }}>
              <TextField text='Email' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
              <TextField text='email@installer.com' fontSize='14px' lineHeight='17px' fontFamily='Mont-Bold' />

            </RowBtw>
            <RowBtw style={{ marginTop: '25px' }}>
              <TextField text='Phone No' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
              <TextField text='0810000000' fontSize='14px' lineHeight='17px' fontFamily='Mont-Bold' />

            </RowBtw>
            <RowBtw style={{ marginTop: '25px' }}>
              <TextField text='Rate' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
              <TextField text='N10,000 per hour' fontSize='14px' lineHeight='17px' fontFamily='Mont-Bold' />

            </RowBtw>
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
  width: 300px;
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
    background: white;
    width: 100%;
    padding: 10px;
    font-size: 14px;
    color: black;
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