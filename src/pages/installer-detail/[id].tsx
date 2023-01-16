import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import AddInstaller from '../../components/AddInstaller';
import Layouts from '../../components/Layout'
import TextField from '../../components/TextField'
import Image from 'next/image'
import { more, square } from '../../assets';
import { Row, Col } from 'antd';
import { getInstaller } from '../../slices/InstallerSlice';
import { useRouter } from 'next/router';
import { useAppDispatch } from '../../app/hook';


function InstallerDetail() {
    const [installerOpen, setInstallerOpen] = useState(false);
    const [type, setType] = useState('information')
    const router = useRouter()
    const [InstallerDetail, setInstallerDetail] = useState(null)
    const id = router?.query?.id as string
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(getInstaller()).then(data => {
            const filt = data?.payload?.data?.accounts?.find(data => data._id === id);
            if(filt){
                setInstallerDetail(filt)
            }
        })
      }, [id])


    const handleInstallerClose = () => {
        setInstallerOpen(false)
    }

    return (
        <Layouts>
            <ComponentDiv>

                <RowBtw>
                    <div>
                        <TextField text='Installer details' fontWeight='bold' fontFamily='Mont-Bold' fontSize='22px' lineHeight='32px' />
                        <TextField text='Here are your analytics details' color={'#8A8A8A'} margin='0px 0px 15px 0px' />
                    </div>

                    <div>
                        <ButtonTextColored onClick={() => setInstallerOpen(true)}> + New Installer</ButtonTextColored>
                    </div>
                </RowBtw>

                <Card>
                    <RowStart>
                        <div style={{ cursor: 'pointer' }} onClick={() => setType("information")}>
                            <TextField text='Information' color={type === "information" ? 'black' : '#C7C7C7'} fontFamily={type === "information" ? 'Mont-Bold' : 'Mont-SemiBold'} fontSize='14px' lineHeight='20px' />
                        </div>
                        <div style={{ cursor: 'pointer' }} onClick={() => setType("site")}>
                            <TextField text='List of sites' color={type === "site" ? 'black' : '#C7C7C7'} fontFamily={type === "site" ? 'Mont-Bold' : 'Mont-SemiBold'} fontSize='14px' lineHeight='20px' />
                        </div>
                        <div style={{ cursor: 'pointer' }} onClick={() => setType("consumer")}>
                            <TextField text='Lists of consumers' color={type === "consumer" ? 'black' : '#C7C7C7'} fontFamily={type === "consumer" ? 'Mont-Bold' : 'Mont-SemiBold'} fontSize='14px' lineHeight='20px' />
                        </div>
                        <div style={{ cursor: 'pointer' }} onClick={() => setType("equipment")}>
                            <TextField text='List of requested equipments' color={type === "equipment" ? 'black' : '#C7C7C7'} fontFamily={type === "equipment" ? 'Mont-Bold' : 'Mont-SemiBold'} fontSize='14px' lineHeight='20px' />
                        </div>
                    </RowStart>
                    <hr />

                   {
                    type === "information" &&  <Card>
                    <RowStart2>
                        <ComponentDiv2>
                            <Payment>
                                <RowBtw style={{ marginTop: '25px' }}>
                                    <TextField text='Name' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
                                    <TextField text={InstallerDetail?.first_name + " " + InstallerDetail?.last_name} fontSize='14px' lineHeight='17px' fontFamily='Mont-Bold' />

                                </RowBtw>
                                <RowBtw style={{ marginTop: '25px' }}>
                                    <TextField text='ID' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
                                    <TextField text={InstallerDetail?._id} fontSize='14px' lineHeight='17px' fontFamily='Mont-Bold' />

                                </RowBtw>
                                <RowBtw style={{ marginTop: '25px' }}>
                                    <TextField text='Address' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
                                    <TextField text={InstallerDetail?.address} fontSize='14px' lineHeight='17px' fontFamily='Mont-Bold' />

                                </RowBtw>
                                <RowBtw style={{ marginTop: '25px' }}>
                                    <TextField text='Email' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
                                    <TextField text={InstallerDetail?.email} fontSize='14px' lineHeight='17px' fontFamily='Mont-Bold' />

                                </RowBtw>
                                <RowBtw style={{ marginTop: '25px' }}>
                                    <TextField text='Phone No' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
                                    <TextField text={InstallerDetail?.phone} fontSize='14px' lineHeight='17px' fontFamily='Mont-Bold' />

                                </RowBtw>
                                {/* <RowBtw style={{ marginTop: '25px' }}>
                                    <TextField text='Rate' fontSize='14px' lineHeight='17px' fontFamily='Mont-SemiBold' />
                                    <TextField text='N10,000 per hour' fontSize='14px' lineHeight='17px' fontFamily='Mont-Bold' />

                                </RowBtw> */}
                            </Payment>
                        </ComponentDiv2>
                        <Menu>
                            <Sub3>
                                <Image src={square} alt='' />
                                <div style={{ width: '70%' }}>
                                    <TextField text='CAC Certificate' color={'#596780'} />
                                </div>
                                <Image src={more} alt='' />
                            </Sub3>
                            <Sub3>
                                <Image src={square} alt='' />
                                <div style={{ width: '70%' }}>
                                    <TextField text='CAC Certificate' color={'#596780'} />
                                </div>
                                <Image src={more} alt='' />
                            </Sub3>
                            <Sub3>
                                <Image src={square} alt='' />
                                <div style={{ width: '70%' }}>
                                    <TextField text='COREN Certificate' color={'#596780'} />
                                </div>
                                <Image src={more} alt='' />
                            </Sub3>
                            <Sub3>
                                <Image src={square} alt='' />
                                <div style={{ width: '70%' }}>
                                    <TextField text='Bank Statement' color={'#596780'} />
                                </div>
                                <Image src={more} alt='' />
                            </Sub3>
                            <Sub3>
                                <Image src={square} alt='' />
                                <div style={{ width: '70%' }}>
                                    <TextField text='REAN fee receipt' color={'#596780'} />
                                </div>
                                <Image src={more} alt='' />
                            </Sub3>
                            <Sub3>
                                <Image src={square} alt='' />
                                <div style={{ width: '70%' }}>
                                    <TextField text='Tax Clearance' color={'#596780'} />
                                </div>
                                <Image src={more} alt='' />
                            </Sub3>
                        </Menu>
                    </RowStart2>
                    <br/>
                    <br/>
                    <ButtonTextColored>Create account</ButtonTextColored>
                    <br/>
                    <br/>
                </Card>
                   }



                </Card>

                <AddInstaller modalOpen={installerOpen} handleCancel={() => handleInstallerClose()} />
            </ComponentDiv>
        </Layouts>
    )
}

export default InstallerDetail

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


const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding-top: 20px;
  padding-left: 24px;
  padding-right: 10px;
  margin-bottom: 20px;
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
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
`

const RowStart2 = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 10px 30px;
`

const Colored = styled.div`

`

const Payment = styled.div`
  border: 1px solid gray;
  border-radius: 10px;
  padding: 30px;
  width: 500px;

  @media screen and (max-width: 1200px){
    width: 300px;
  }
`

const ComponentDiv2 = styled.div`
  background: white;
  padding: 10px;
`

const Menu = styled.div`
    width: 300px;
    margin-left: 50px;

`

const Sub3 = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
padding: 10px;
background: #F3F5F7;
margin-bottom: 10px;
`