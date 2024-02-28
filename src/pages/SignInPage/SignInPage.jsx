import React, { useEffect, useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import imageLogo from '../../assets/images/logoLogin.png'
import { Image } from 'antd'
import { useNavigate } from 'react-router-dom'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
import * as UserService from '../../services/UserService'
import { useMutationHooks } from '../../hooks/useMutationHook'
import Loading from '../../components/LoadingComponent/Loading'
import { jwtDecode } from 'jwt-decode'

const SignInPage = () => {
  const navigate=useNavigate()
  const mutation = useMutationHooks(
    data => UserService.loginUser(data)
  )
  const {data, isPending, isSuccess} =mutation
  useEffect(()=>{
    if(isSuccess){
      navigate('/')
      localStorage.setItem('access_token', data?.access_token)
      if(data?.access_token){
        const decoded = jwtDecode(data?.access_token)
        console.log(decoded)
        if(decoded?.id){
          handleGetDetailsUser(decoded?.id, data?.access_token)
        }
      }
    }
  },[isSuccess])

  const handleGetDetailsUser = async(id, token)=>{
    const res = await UserService.getDetailUser(id, token)
    console.log('res', res)
  }
  console.log(mutation)
  // console.log(isSuccess)

  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const handleNavigateSignUp=()=>{
  navigate('/sign-up')
  }
  const [isShowPassword, setIsShowPassword] = useState(false)

  const handleOnchangeEmail=(value)=>{
    setEmail(value)
  }
  const handleOnchangePasword=(value)=>{
    setPassword(value)
  }
  const handleSignIn =()=>{
    mutation.mutate({
      email,
      password
    })
    // console.log('sign-in', email, password)
  }
  return (
    <div style={{display:'flex', alignItems:'center',justifyContent:'center',background:'rgba(0,0,0,0.53)',height:'100vh'}}>
      <div style={{display:'flex',width:'800px', height:'445px', borderRadius:'6px',background:'#fff'}}>
        <WrapperContainerLeft>
          <h1 style={{margin:0}}>Xin chào,</h1>
          <p>Nhập email và mật khẩu tài khoản của bạn</p>
          <InputForm style={{marginBottom:'15px'}} placeholder='abc@gmail.com' value={email} handleOnchange={handleOnchangeEmail}/>
          <div style={{position:'relative'}}>
            <span 
            onClick={()=>setIsShowPassword(!isShowPassword)}
            style={{
              zIndex:10,
              position:'absolute',
              top:'7px',
              right:'8px',
              cursor:'pointer'
            }}>{
              isShowPassword?(
                <EyeFilled/>
              ):(
                <EyeInvisibleFilled/>
              )
            }
            </span>
            <InputForm placeholder="Password" type={isShowPassword? "text" : "password"} value={password} handleOnchange={handleOnchangePasword}/>
          </div>
          {data?.status==='ERR' && <span style={{color:'red'}}>{data?.message}</span>}
          <Loading isPending={isPending}>
            <ButtonComponent
              disabled={!email.length || !password.length}
              onClick={handleSignIn}
              size={40}
              styleButton={{
                  background:'rgb(255, 190, 152)',
                  height:'40px',
                  width:'100%',
                  border:'none',
                  borderRadius:'5px',
                  margin:'15px 0 10px'
              }}
              textButton={'Đăng nhập'}
              styleTextButton={{color:'#fff', fontSize:'15px', fontWeight:'700'}}
              ></ButtonComponent>
            </Loading>
            <p><WrapperTextLight>Quên mật khẩu?</WrapperTextLight></p>
            <p style={{margin:0}}>Chưa có tài khoản? <WrapperTextLight onClick={handleNavigateSignUp} style={{cursor:'pointer'}}>Tạo tài khoản</WrapperTextLight></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
            <Image src={imageLogo} preview={false} alt='image-logo' height='203px' width='203px'/>
            <h4>Mua sắm tại CongTusJr</h4>
        </WrapperContainerRight>
      </div>
    </div>
  )
}

export default SignInPage