import { useContext, useState } from "react"
import styled from "styled-components"
import { loginContext } from "../../store/LoginStore"
import { Card } from "../Layout/Card"
import { Aside } from "../UI/Aside"
import { H2, H3 } from "../UI/Headings"
import { Main } from "../UI/Main"
import { FaRegUser } from "react-icons/fa";
import { ChartData, Data } from "../../utils/chart-data"
import Charts from "../Layout/Charts"
import { ListItem, UL } from "../UI/Lists"


const DashboardContainer = styled.div`
    /* display: flex; */
    height: 100vh;
    max-width: 90%;
    position: relative;


`

const DashboardMenu = styled(Aside)<{ isShow: boolean}>`
    position: absolute;
    top: 0;
    left: 0;
    width: ${props => props.isShow ? '250px' : '0'};
    height: 100%;
    background-color: #3B82F6;
    color: #FAFAFA;
    transition: all 0.5s;

    display: flex;
    flex-direction: column;
    gap: 3rem;
`

const DashboardMenuContainer = styled.div`
    display: flex;
    flex-direction: column;

`
const DashboardMenuNav = styled(UL)`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const DashboardMain = styled(Main)<{ isShow: boolean}>`
    margin-left: ${props => props.isShow ? '250px' : '0'};
    display: flex;
    flex-direction: column;
    gap: 3rem;
`

const DashboardGrid = styled.div`
    gap: 1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* grid-template-rows: repeat(2, auto); */
`
const BarChart = styled(Card)`
    grid-column: 1 / span 2;
`

const PieChart = styled(Card)`
    /* grid-column: 3; */
`

const CardContainer = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`

const CardContents = styled.div`
    display: flex;
    flex-direction: column;
`

const Dashboard = () =>{
    const [isShow, setIsShow] = useState(false)

    const loginCtx = useContext(loginContext)
    const [chartData, setChartData] = useState({
        labels: Data.map(v => v.year),
        datasets: [
            {
              label: 'Popularity of colours',
              data: Data.map(v => v.userGain),
              // you can set indiviual colors for each bar
              backgroundColor: [
                '#BBDEFB',
                '#EF9A9A',
                '#80CBC4',
              ],
              borderWidth: 1,
            }
        ]
    })

    console.log(chartData)
    return (
        <DashboardContainer>
           {isShow && (
             <DashboardMenu isShow={isShow}>
                <H2 onClick={() =>{
                    setIsShow(prev => !prev)
                }}>User</H2>
        
                <DashboardMenuContainer>
                    <DashboardMenuNav>
                        <ListItem>
                            <H3>Dashboard</H3>
                        </ListItem>
                        <ListItem>
                            <H3>User Management</H3>
                        </ListItem>
                        <ListItem>
                            <H3>Settings</H3>
                        </ListItem>
                    </DashboardMenuNav>
                </DashboardMenuContainer>
                <H2 onClick={() =>{
                    loginCtx.loginHandler()
                }}>Logout</H2>
            </DashboardMenu>
           )}
            <DashboardMain isShow={isShow}>
                <H2 onClick={() =>{
                    setIsShow(prev => !prev)
                }}>Test</H2>
                <DashboardGrid>
                    <Card>
                        <CardContainer>
                            <FaRegUser size='2rem' />
                            <CardContents>
                                <H2>Users</H2>
                                <p>123,123</p>
                            </CardContents>
                        </CardContainer>
                    </Card>
                    <Card>
                    <CardContainer>
                            <FaRegUser size='2rem' />
                            <CardContents>
                                <H2>Users</H2>
                                <p>123,123</p>
                            </CardContents>
                        </CardContainer>
                    </Card>
                    <Card>
                        <CardContainer>
                            <FaRegUser size='2rem' />
                            <CardContents>
                                <H2>Users</H2>
                                <p>123,123</p>
                            </CardContents>
                        </CardContainer>
                    </Card>
                    <BarChart>
                        <CardContainer>
                           <Charts type="bar" data={chartData} />
                        </CardContainer>
                    </BarChart>
                    {/* <PieChart>
                        <CardContainer>
                           <Charts type="bar" data={chartData} />
                        </CardContainer>
                    </PieChart> */}
                    <PieChart>
                        <CardContainer>
                           <Charts type="pie" data={chartData} />
                        </CardContainer>
                    </PieChart>
                </DashboardGrid>
            </DashboardMain>
        </DashboardContainer>
    )
}

export default Dashboard