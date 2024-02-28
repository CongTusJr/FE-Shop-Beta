import React from 'react'
import { WrapperContent, WrapperLableText, WrapperTextPrice, WrapperTextvalue } from './style'
import { Checkbox, Rate } from 'antd'

const NavBarComponent = () => {
    const onChange =()=>{}
    const renderContent=(type,options)=>{
        switch(type){
            case 'text':
                return options.map((option)=>{
                    return( 
                    <WrapperTextvalue>{option}</WrapperTextvalue>
                    )
                })
            case 'checkbox':
                return <Checkbox.Group style={{ width: '100%',display:'flex', flexDirection:'column',gap:'12px' }} onChange={onChange}>
                    {options.map((option)=>{
                        return (
                            <Checkbox value={option.value}>{option.label}</Checkbox>
                        )
                    })}
                </Checkbox.Group>
            case 'star':
                return options.map((option)=>{
                    return (
                    <div style={{display:'flex'}}>
                        <Rate style={{fontSize:'12px'}} disabled defaultValue={option} />
                        <span> { `từ ${option} sao`}</span>
                    </div>
                    )
                })
                case 'price':
                    return options.map((option)=>{
                        return (
                        <WrapperTextPrice>{option}</WrapperTextPrice>
                        )
                    })
            default:
                return{}
        }
    }
  return (
    <div>
        <WrapperLableText>Lable</WrapperLableText>
        <WrapperContent>
            {renderContent('text',['Tủ lạnh', 'TV', 'Điện thoại', 'Máy Giặt'])}
        </WrapperContent>
        <WrapperContent>
            {renderContent('checkbox',[
                {value:'a', label:'A'},
                {value:'b', label:'B'},
            ])}
        </WrapperContent>
        <WrapperContent>
            {renderContent('star',[3,4,5])}
        </WrapperContent>
        <WrapperContent>
            {renderContent('price',['Dưới 40.000','40.000 - 60.000 ', 'Trên 60.000',])}
        </WrapperContent>
    </div>
  )
}

export default NavBarComponent