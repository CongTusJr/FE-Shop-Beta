import React from 'react'
import {Badge, Col} from 'antd'
import Search from 'antd/lib/transfer/search'
import {WrapperHeader,WrapperTextHeader,WrapperHeaderAccount,WrapperHeaderCart} from './style'
import {UserOutlined,CaretDownOutlined,ShoppingCartOutlined} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const HeaderComponent = () => {
    const navigate=useNavigate()
    const handlenavigateLogin =()=>{
        navigate('/sign-in')
    }
    const handlenavigateHome=()=>{
        navigate('/')
    }
  return (
    <div>
        <WrapperHeader>
            <Col span={4}>
                <WrapperTextHeader onClick={handlenavigateHome}>CongTusJr</WrapperTextHeader>
            </Col>
            <Col span={12}>
            <Search 
                placeholder="Tìm kiếm..." 
                // onSearch={onSearch} 
                enterButton
            />
            </Col>
            <Col span={7} style={{display:'flex',justifyContent:'space-between', paddingLeft:20}}>
                <WrapperHeaderCart style={{display:'flex',alignItems:'center'}}>
                    <Badge count={4} size='small'>
                        <ShoppingCartOutlined style={{fontSize:33, color:'#fff'}}/>
                    </Badge>
                    <span style={{ fontSize:18}}>Giỏ hàng</span>
                </WrapperHeaderCart>
                <WrapperHeaderAccount>
                    <UserOutlined style={{fontSize:'30px'}}/>
                    <div onClick={handlenavigateLogin} style={{cursor:'pointer'}}>
                        <span>Đăng nhập/Đăng ký</span>
                        <div>
                        <span>Tài khoản</span>
                        <CaretDownOutlined />
                        </div>
                    </div>
                </WrapperHeaderAccount>
            </Col>
        </WrapperHeader>
    </div>
  )
}

export default HeaderComponent