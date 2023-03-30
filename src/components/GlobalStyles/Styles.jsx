import { css, Global } from '@emotion/react';
import React from 'react'

const styles = css`
    * {
        font-family: 'open-sans', sans-serif;
    }
`;

const Styles = () => {
  return (
    <Global styles={styles}/>
  )
}

export default Styles