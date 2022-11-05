import React from 'react'
import styled from 'styled-components'
import GlobalImage from './GlobalImage'
import image from "./Assets/mayowa.png"
import image2 from "./Assets/Charles.png"
import image3 from "./Assets/Eniola.png"
import image4 from "./Assets/Ferdinand.png"
import {AiFillLinkedin} from "react-icons/ai"

const Success = () => {
  return (
    <Container>
        <Bold>Success Stories</Bold>
        <P>What our students are saying about their learning experience</P>
        <Image>
            <GlobalImage image={image}
                nam="Mayowa"
            />
            <GlobalImage image={image2}
                nam="Charles"
            />
            <GlobalImage image={image3}
                nam="Eniola"
            />
            <GlobalImage image={image4}
                nam="Ferdinand"
            />
        </Image>
        <Card>
            <ImageHold>
                <Img src={image} />
            </ImageHold>
            <Right>
                <Up>
                    <Ma>Mayowa Hambolu</Ma>
                </Up>
                <Da>Data Fellow</Da>
                <Pah>I was looking for something a little more than a training, a school I could count on for my <br />
                 continuous skill and professional development. Utiva kept coming up so I jumped in. I <br />
                  went through the Data Accelerator program and then the ‘Big Data with Python’ <br />
                   program. I am now a Data Scientist and Consultant.</Pah>
                   <Icon>
                    <AiFillLinkedin />
                   </Icon>
            </Right>

        </Card>
    </Container>
  )
}

export default Success
const Icon = styled.div`
    color: #050794;
    font-size: 25px;
    margin-top: 15px;
`
const Pah = styled.div`
    line-height: 1.5rem;
    font-size: .9375rem;
    color: #565656;
    margin-top: 15px;
`
const Da = styled.div`
    font-size: .875rem;
    line-height: 1.25rem;
    margin-top: -17px;

`
const Ma = styled.div`
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 600;
`
const Up = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: column;
`
const Right = styled.div`
    width: 600px;
    display: flex;
    flex-direction: column;
`
const ImageHold = styled.div`
    width: 230px;
    height: 220px;
`
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Card = styled.div`
    width: 65%;
    display: flex;
    justify-content: space-between;
    margin-top: 70px;
`
const Image = styled.div`
    width: 45%;
    display: flex;
    justify-content: space-between;
`

const P = styled.div`
    font-size: 1.25rem;
    line-height: 1.75rem;
    margin-top: 2rem;
    font-weight: 400;
`

const Bold = styled.div`
    font-size: 3.75rem;
    line-height: 1;
    font-weight: 700;
    color: #050794;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 100px;
    justify-content: center;
    align-items: center;
`