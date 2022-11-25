import { useContext, useState } from "react"
import styled from "styled-components"
import { loginContext } from "../../store/LoginStore"
import { Card } from "../Layout/Card"
import { Aside } from "../UI/Aside"
import { H2 } from "../UI/Headings"
import { Main } from "../UI/Main"
import { FaRegUser } from "react-icons/fa";
import { ChartData, Data } from "../../utils/chart-data"
import Charts from "../Layout/Charts"


const DashboardContainer = styled.div`
    /* display: flex; */
    height: 100vh;
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

`
const DashboardMain = styled(Main)<{ isShow: boolean}>`
    margin-left: ${props => props.isShow ? '250px' : '0'};
`

const DashboardGrid = styled.div`
    gap: 1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row: auto;
`
const CardGrid = styled(Card)`
    grid-column: 1 / span 2;
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
                }}>Menu</H2>
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
                    <CardGrid>
                        <CardContainer>
                           <Charts type="bar" data={chartData} />
                        </CardContainer>
                    </CardGrid>
                    <Card>
                        <CardContainer>
                           <Charts type="pie" data={chartData} />
                        </CardContainer>
                    </Card>


                </DashboardGrid>
            </DashboardMain>
        </DashboardContainer>
    )
}

export default Dashboard