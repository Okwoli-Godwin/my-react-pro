import React from 'react'
import styled from 'styled-components'

interface Props {
        image: string
        nam: string
     }
const GlobalImage: React.FC<Props> = ({image, nam}) => {

    
  return (
    <Card>
        <ImageC>
            <Image src={image} />
        </ImageC>
        <N>{nam}</N>
    </Card>
  )
}

export default GlobalImage
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const N = styled.div`
    font-size: 1rem;
    line-height: 1.5rem;
    margin-top: 1rem;
    font-weight: 600;
`

const ImageC = styled.div`
    width: 110px;
    height: 110px;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`

const Card = styled.div`
    width: 200px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 60px;
`