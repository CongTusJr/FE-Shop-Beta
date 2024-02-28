import React from 'react'
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import {WrapperButtonMore, WrapperProducts, WrapperTypeProduct} from './style';
import slider1 from "../../assets/images/slider1.png";
import slider2 from "../../assets/images/slider2.jpg";
import slider3 from "../../assets/images/slider3.png";
import slider4 from "../../assets/images/slider4.jpg";
import CardComponent from '../../components/CardComponent/CardComponent';

const HomePage = () => {
  const arr=['Điện Thoại', 'TV', 'Tủ Lạnh', 'LapTop', ]
  
  return (
    <>
      <div style={{padding:'0 120px'}}>
      <WrapperTypeProduct>
        {arr.map((item)=>{
          return(
        <TypeProduct name={item} key={item}/>
          )
        })}
      </WrapperTypeProduct>
      
    </div>
    <div className="body" style={{width:'100%', backgroundColor:'#efefef'}}>
      <div id="container" style={{height:'1000px',width:'1270px',margin:'0 auto'}}>
      <SliderComponent arrImages={[slider1,slider2,slider3,slider4]}/>
      <WrapperProducts>
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </WrapperProducts>
      <div style={{width:'100%', display:'flex', justifyContent:'center', marginTop:'10px'}}>
        <WrapperButtonMore 
          textButton="Xem thêm"
          type="outline"
          styleButton={{
            border:'1px solid rgb(255, 190, 152)',
            color:'rgb(255, 190, 152)',
            width:'240px',
            height:'38px',
            borderRadius:'4px'
          }}
          styleTextButton={{fontWeight:500}}
        />
      </div>
    </div>
    </div>
    </>
  )
}

export default HomePage