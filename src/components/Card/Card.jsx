import React from 'react'
import styled from '@emotion/styled'

const StylizedDiv = styled.div`
    padding: ${props => props.theme.spacing.l};
    background: ${props => props.theme.colors.secondary.a};
    border: 2px solid;
    border-color: ${props => props.theme.colors.primary.a};
    border-radius: ${props => props.theme.spacing.s};
`

const Card = ({children}) => {
  return (
    <StylizedDiv>
        {children}
    </StylizedDiv>
  )
}

export default Card