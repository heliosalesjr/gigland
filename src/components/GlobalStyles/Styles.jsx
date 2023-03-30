import { css, Global } from '@emotion/react';
import React from 'react'

const styles =  theme => {
  return {
    html: {
      fontFamily: theme.fontFamily,
    },

    body: {
      margin: 0,
    },
    
  }
}
;

const Styles = () => {
  return (
    <Global styles={styles}/>
  )
}

export default Styles