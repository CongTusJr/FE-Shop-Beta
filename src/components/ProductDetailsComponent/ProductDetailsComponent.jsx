import React from 'react'
import {Col, Image, Row} from 'antd'
import imageProduct from '../../assets/images/test.webp'
import imageProductSmall from '../../assets/images/imagesmall.webp'
import { MinusOutlined,  PlusOutlined,  StarFilled } from '@ant-design/icons'
import { WrapperAddressProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell } from './style'
import ButtonComponent from '../ButtonComponent/ButtonComponent'


const ProductDetailsComponent = () => {
    const onChange=()=>{}
  return (
    <Row>
        <Col span={7} style={{padding:'16px', background:'#fff', borderRadius:'15px', left:'20px'}}>
            <Image src={imageProduct} alt='image product' preview={false} />
            <Row style={{paddingTop:'10px', justifyContent:'space-between'}}>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={imageProductSmall} alt='image small' preview={false} style={{width:'65px'}}/>
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={imageProductSmall} alt='image small' preview={false}style={{width:'65px'}}/>
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={imageProductSmall} alt='image small' preview={false}style={{width:'65px'}}/>
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={imageProductSmall} alt='image small' preview={false}style={{width:'65px'}}/>
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={imageProductSmall} alt='image small' preview={false}style={{width:'65px'}}/>
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={imageProductSmall} alt='image small' preview={false}style={{width:'65px'}}/>
                </WrapperStyleColImage>
            </Row>
        </Col>
        <Col span={16} style={{padding:'16px', background:'#fff', borderRadius:'15px', marginLeft:'20px', left:'20px'}}>
            <WrapperStyleNameProduct>Sách Đi Tìm Lẽ Sống (Tái Bản )</WrapperStyleNameProduct>
            <div>
                <StarFilled style={{fontSize:'12px',color:'rgb(253,216,54)' }} />
                <StarFilled style={{fontSize:'12px',color:'rgb(253,216,54)' }} />
                <StarFilled style={{fontSize:'12px',color:'rgb(253,216,54)' }} />
                <WrapperStyleTextSell> | Đã bán: 1000+</WrapperStyleTextSell>
            </div>
            <WrapperPriceProduct>
                <WrapperPriceTextProduct>199.000 vnđ</WrapperPriceTextProduct>
            </WrapperPriceProduct>
            <WrapperAddressProduct>
                <span>Giao đến </span>
                <span className="address">Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội </span> - 
                <span className="change-address"> Đổi địa chỉ</span>
            </WrapperAddressProduct>
            <div style={{margin:'10px 0 20px', padding:'10px 0', borderTop:'1px solid #e5e5e5', borderBottom:'1px solid #e5e5e5'}}>
                <div>Số lượng</div>
                <div style={{padding:'10px 15px'}}>
                    <ButtonComponent
                        size={20}
                        styleButton={{width:'30px', padding:'0 7px', marginRight:'4px'}}
                        icon={<MinusOutlined style={{color:'grey', fontSize:'15px'}}/>}
                    />
                    <WrapperInputNumber defaultValue={3} onChange={onChange} className="no-spinner" style={{width:'50px',marginRight:'4px'}} />
                    <ButtonComponent
                        size={20}
                        styleButton={{width:'30px', padding:'0 7px'}}
                        icon={<PlusOutlined style={{color:'#808080', fontSize:'15px'}}/>}
                    />
                </div>
            </div>
            <div style={{display:'flex', justifyContent:'center', gap:'12px'}}>
                    <ButtonComponent
                        size={40}
                        styleButton={{
                            background:'rgb(255, 190, 152)',
                            height:'48px',
                            width:'220px',
                            border:'none',
                            borderRadius:'5px'
                        }}
                        textButton={'Mua ngay'}
                        styleTextButton={{color:'#fff', fontSize:'15px', fontWeight:'700'}}
                    />
                    <ButtonComponent
                        size={40}
                        styleButton={{
                            background:'#fff)',
                            height:'48px',
                            width:'220px',
                            borderColor:'rgb(255, 190, 152)',
                            borderRadius:'5px'
                        }}
                        textButton={'Thêm vào giỏ hàng'}
                        styleTextButton={{color:'rgb(255, 190, 152)', fontSize:'15px'}}
                    />
                </div>
        </Col>
    </Row>
  )
}

export default ProductDetailsComponent