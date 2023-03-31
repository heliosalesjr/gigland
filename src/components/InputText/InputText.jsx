import React from 'react'
import styled from '@emotion/styled';

const LabelStyle = styled.label `
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
`

const InputStyle = styled.input `
    display: block;
    width: 100%;
    box-sizing: border-box;
    margin-top: ${props => props.theme.spacing.xs};
    margin-bottom: ${props => props.theme.spacing.s};
    background: ${props => props.theme.colors.white};
    border: 1px solid #373737;
    border-radius: ${props => props.theme.spacing.s};
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
`

const InputText = ( {label}) => {
  return (
    <LabelStyle>
        {label}
        <InputStyle type="text"/>
    </LabelStyle>
  )
}

export default InputText