
import React from 'react'
import styled from 'styled-components'
import Layouts from '../components/Layout'
import TextField from '../components/TextField'



function LoanActivities() {
    return (
        <Layouts>
           <ComponentDiv>
           <TextField text='Loan Activities' fontWeight='bold' margin='0px 0px 20px 0px' />
            <Card>
                <div style={{ cursor: 'pointer' }}>
                    <TextField text='Loan activities' fontWeight='bold' fontSize={'16px'} lineHeight='34px' />
                </div>

                <View>
                    <TextField text='Due' fontWeight='bold' fontSize={'16px'} lineHeight='34px' />
                    <TextField text='Overdue' margin='0px 70px' fontSize={'16px'} color={"#C7C7C7"} lineHeight='34px' />
                </View>

                <Table>
                    <Tr>
                        <Th>
                            <TextField text='Consumer' fontFamily='Mont-SemiBold' color='#C7C7C7' />
                        </Th>
                        <Th></Th>
                        <Th>
                            <TextField text='Consumer' fontFamily='Mont-SemiBold' color='#C7C7C7' />
                        </Th>
                        <Th></Th>
                        <Th>
                            <TextField text='Consumer' fontFamily='Mont-SemiBold' color='#C7C7C7' />
                        </Th>

                        <Th></Th>
                        <Th></Th>
                    </Tr>
                    <Tr>
                        <Td>
                            <TextField text='Paul Smith' fontFamily='Mont-SemiBold' />
                        </Td>
                        <Td></Td>
                        <Td>
                            <TextField text='23rd, Nov 2022' fontFamily='Mont-SemiBold' />
                        </Td>
                        <Td></Td>
                        <Td>
                            <TextField text='N205,000,000' fontFamily='Mont-SemiBold' />
                        </Td>

                        <Td></Td>
                        <Td></Td>
                    </Tr>
                    <Tr>
                        <Td>
                            <TextField text='Paul Smith' fontFamily='Mont-SemiBold' />
                        </Td>
                        <Td></Td>
                        <Td>
                            <TextField text='23rd, Nov 2022' fontFamily='Mont-SemiBold' />
                        </Td>
                        <Td></Td>
                        <Td>
                            <TextField text='N205,000,000' fontFamily='Mont-SemiBold' />
                        </Td>

                        <Td></Td>
                        <Td></Td>
                    </Tr>
                </Table>

            </Card>
           </ComponentDiv>
        </Layouts>
    )
}

export default LoanActivities

const Card = styled.div`
  background: white;
  border-radius: 12px;
  height: 600px;
  padding-top: 20px;
  padding-left: 24px;
  padding-right: 10px;
  margin-bottom: 50px;
  overflow-y: scroll;
  ::-webkit-scrollbar{display: none}
`

const View = styled.div`
  display: flex;
  border-bottom: 1px solid #E0E9F4;
`

const Table = styled.table`
width: 100%;
`

const Tr = styled.tr`
    border-bottom: 1px solid #E0E9F4;
    width: 100%;
`

const Th = styled.th`
padding: 10px 0px;
width: 300px;
color: #C7C7C7;
`

const Td = styled.td`
padding: 10px 0px;
width: 300px;
color: #C7C7C7;
`
const ComponentDiv = styled.div`
  padding-left: 48px; 
  padding-top: 18px; 
  padding-right: 40px;
`