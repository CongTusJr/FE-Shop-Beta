import React from 'react'
import { WrapperinputStyle } from './style'

const InputForm = (props) => {
    const{placeholder='Số điện thoại', handleOnchange, value, ...rests} = props
    const handleOnchangeInput=(e)=>{
      // props.handleOnchange=(e.target.value)
      const value=e.target.value
      handleOnchange(value);
    }
  return (
    <WrapperinputStyle placeholder={placeholder} value={value} {...rests} onChange={handleOnchangeInput}/>
  )
}

export default InputForm