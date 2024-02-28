import React from 'react'
import { StylenameProduct, WrapperCardText, WrapperDiscountText, WrapperPriceText, WrapperReportText, WrapperStyleTextSell } from './style'
import { StarFilled } from '@ant-design/icons'
import logo from '../../assets/images/logo.png'
import { useNavigate } from 'react-router-dom';

const CardComponent = () => {
    
  const navigate=useNavigate()
    const handlenavigateCard=()=>{
        navigate('/product-details')
      }
  return (
    <WrapperCardText
        hoverable
        headStyle={{width:'200px', height:'200px'}}
        style={{ width: 200 }}
        bodyStyle={{padding:'10px'}}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        onClick={handlenavigateCard}
    >
        <img 
            src={logo} 
            style={
                {width:'68px',
                height:'14px', 
                position:'absolute', 
                top:-1, 
                left:-1,
                }}/>
        <StylenameProduct >Iphone 15 ProMax</StylenameProduct>
        <WrapperReportText>
            <span style={{marginRight:'4px'}}>
            <span>4.96</span> <StarFilled style={{fontSize:'12px',color:'rgb(253,216,54)' }} />
            </span>
            <WrapperStyleTextSell> | Đã bán: 1000+</WrapperStyleTextSell>
        </WrapperReportText>
        <WrapperPriceText>
            <span style={{marginRight:'8px'}}>
                1.000.000 vnđ
            </span>
            <WrapperDiscountText>
                -5%
            </WrapperDiscountText>
        </WrapperPriceText>

  </WrapperCardText>
  )
}

export default CardComponent