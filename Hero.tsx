import React from 'react'
import styled from 'styled-components'
import image5 from "./Assets/1.png"
import image6 from "./Assets/2.png"
import image7 from "./Assets/3.png"
import image from "./Assets/lady.png"

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Wel>Welcome to Utiva</Wel>
          <Bol>Product School</Bol>
          <P>The Utiva Product School offers leading practices in product <br />
           management and product prototyping through an experiential <br />
            learning process.</P>
            <Box>
                <ImageHold>
                    <Card5 src={image5} />
                    <Card6 src={image6} />
                    <Card7 src={image7} />
                </ImageHold>
                <TextHold2>
                    <Up>4,000+ Learners
                    </Up>
                </TextHold2>
            </Box>
        </Left>
        
        <Right>
          <Card>
            <Img src={image} />
            <Car>
              <Circle>75%</Circle>
              <TextHold3>
                    <Up2>Course Completion Level
                    </Up2>
                    <Dowm>You have completed 7 of 12</Dowm>
                </TextHold3>
            </Car>
          </Card>
        </Right>
      </Wrapper>
      <Downc>
        <L></L>
        <R></R>
      </Downc>
    </Container>
  )
}

export default Hero
const R = styled.div`
  width: 50%;
  height: 100%;
  background-color: rgb(97, 219, 153);
`
const L = styled.div`
  width: 50%;
  height: 100%;
  background-color: #fbaf1b;
`
const Downc = styled.div`
  width: 100%;
  height: 7px;
  background-color: red;
  display: flex;
`
const Circle = styled.div`
  width: 38px;
  height: 38px;
  border: 6px solid #fbaf1b;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 13px;
  font-weight: 600;
`
const Car = styled.div`
  width: 280px;
  height: 80px;
  background-color: white;
  position: absolute;
  border-radius: 10px;
  display: flex;
  left: 330px;
  top: 175px;
  border-top-left-radius: 1px solid red;
  padding-left: 20px;
  align-items: center;
`
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Card = styled.div`
  width: 460px;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-top: 120px;
  overflow: hidden;
  margin-right: 60px;
`
const Dowm = styled.h6`
    margin: 0px;
    color: #747476;
    font-size: 11px;
    margin-right: 5px;
    margin-left: 13px;
`

const Icons = styled.div`
    color: #050794;
    font-size: 20px;
    margin-top: -5px;
`

const Up = styled.h5`
    color: white;
    display: flex;
    font-size: .875rem;
    line-height: 1.25rem;
    margin: 0px;
    margin-left: 12px;
`
const Up2 = styled.h5`
    color: black;
    display: flex;
    font-size: .775rem;
    line-height: 1.25rem;
    margin: 0px;
    margin-left: 12px;
`

const TextHold2 = styled.div`
    width: 154px;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
`
const TextHold3 = styled.div`
    width: 184px;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
`

const Card7 = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50px;
    border: 1px solid white;
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -12px;
`

const Card6 = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50px;
    border: 1px solid white;
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -12px;
`

const Card5 = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50px;
    border: 1px solid white;
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ImageHold = styled.div`
    width: 100px;
    align-items: center;
    display: flex;
`

const Box = styled.div`
    width: 680px;
    height: 40px;
    display: flex;
    margin-top: 40px;
    align-items: center;
    cursor: pointer;
    :hover{
        margin-left: -3px;
        transition: 350ms;
    }
`
const P = styled.div`
  color: #fff;
  line-height: 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  margin-top: 50px;
`
const Bol = styled.div`
  color: #fff;
  font-size: 4.9rem;
  line-height: 1;
  font-weight: 600;
  margin-top: 1rem;
`
const Wel = styled.div`
  color: #fbaf1b;
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
`
const Right = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 50%;
  position: relative;
`
const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-top: 130px;
`
const Wrapper = styled.div`
  width: 93%;
  display: flex;
`
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(75.85deg,#050794 32.4%,#1107a0 64.75%,#10a662 109.02%);
  flex-direction: column;
`