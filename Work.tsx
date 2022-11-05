import React from 'react'
import styled from 'styled-components'
import {MdOutlineArrowRightAlt} from "react-icons/md"
import img from "./Assets/people.png"

const Work = () => {
  return (
    <Container>
        <Top>Work with us</Top>
        <P>Work with a highly motivated team of talented people and great <br />
         teammates to launch exciting products for global markets.</P>
         <Button>View openings</Button>
         <Be>Become a Utiva Trainer
            <Icons><MdOutlineArrowRightAlt /></Icons>
         </Be>
         <Image>
            <Img src={img} />
         </Image>
    </Container>
  )
}

export default Work
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Image = styled.div`
    width: 830px;
    height: 600px;
    margin-top: 60px;
    display: flex;
    border-radius: 10px;
    overflow: hidden;
`
const Be = styled.div`
    color: #050794;
    font-weight: 600;
    display: flex;
    margin-top: 30px;
`
const Icons = styled.div`
    color: #FBAF1B;
    font-size: 22px;
    margin-left: 15px;
`
const Button = styled.div`
    width: 170px;
    height: 57px;
    display: flex;
    background-color: #FBAF1B;
    border-radius: 7px;
    align-items: center;
    color: white;
    justify-content: center;
    box-shadow: rgba(251, 175, 27, 0.4) 0px 5px 40px 0px;
    margin-top: 50px;
    cursor: pointer;
`
const P =styled.div`
    line-height: 2.25rem;
    font-size: 1.25rem;
    color: #1e2027;
    text-align: center;
    margin-top: 33px;
`
const Top = styled.div`
    font-size: 3.75rem;
    line-height: 1;
    font-weight: 700;
    color: #050794;
`
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 150px;
`