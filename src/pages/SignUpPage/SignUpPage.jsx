import React, { useEffect, useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight, WrapperTextNote } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import imageLogo from '../../assets/images/logoLogin.png'
import { Image } from 'antd'
import { useNavigate } from 'react-router-dom'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
import * as UserService from '../../services/UserService'
import { useMutationHooks } from '../../hooks/useMutationHook'
import Loading from '../../components/LoadingComponent/Loading'
import * as message from '../../components/Message/Message'

const SignUpPage = () => {
  const [isShowPassword, setIsShowPassword] =useState(false)
  const [isShowConfirmPassword, setIsShowConfirmPassword] =useState(false)

  const navigate=useNavigate()
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const [confirmPassword, setConfirmPassword]=useState('')

  const handleOnchangeEmail=(value)=>{
    setEmail(value)
  }
  
  const mutation = useMutationHooks(
    data => UserService.signupUser(data)
  )
  const { data, isPending, isSuccess, isError } = mutation

  useEffect(() => {
    if (isSuccess) {
      message.success()
      handleNavigateSignIn()
    } else if (isError) {
      message.error()
    }
  }, [isSuccess, isError])

  const handleOnchangePasword=(value)=>{
    setPassword(value)
  }
  const handleOnchangeConfrimPasword=(value)=>{
    setConfirmPassword(value)
  }
  const handleNavigateSignIn=()=>{
    navigate('/sign-in')
  }
  const handleSignUp = () => {
    mutation.mutate({ email, password, confirmPassword })
  }
  return (
    <div style={{display:'flex', alignItems:'center',justifyContent:'center',background:'rgba(0,0,0,0.53)',height:'100vh'}}>
      <div style={{display:'flex',width:'800px', height:'445px', borderRadius:'6px',background:'#fff'}}>
        <WrapperContainerLeft>
          <h1 style={{margin:0}}>Tạo tài khoản,</h1>
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
            </span><InputForm placeholder="Password" type={isShowPassword? "text" : "password"} value={password} handleOnchange={handleOnchangePasword}/>
          </div>
          <div style={{position:'relative', marginTop:'15px'}}>
            <span 
            onClick={()=>setIsShowConfirmPassword(!isShowConfirmPassword)}
            style={{
              zIndex:10,
              position:'absolute',
              top:'7px',
              right:'8px',
              cursor:'pointer'
            }}>{
              isShowConfirmPassword?(
                <EyeFilled/>
              ):(
                <EyeInvisibleFilled/>
              )
            }
            </span><InputForm placeholder="Confirm password" type={isShowConfirmPassword? "text" : "password"} value={confirmPassword} handleOnchange={handleOnchangeConfrimPasword}/>
          </div>
          {data?.status==='ERR' && <span style={{color:'red'}}>{data?.message}</span>}
          <Loading isPending={isPending}>
            <ButtonComponent
              disabled={!email.length || !password.length || !confirmPassword.length}
              onClick={handleSignUp}
              size={40}
              styleButton={{
                  background:'rgb(255, 190, 152)',
                  height:'40px',
                  width:'100%',
                  border:'none',
                  borderRadius:'5px',
                  margin:'15px 0 10px'
                  
              }}
              textButton={'Đăng ký'}
              styleTextButton={{color:'#fff', fontSize:'15px', fontWeight:'700'}}
              />
          </Loading>
            <p style={{margin:0}}>Bạn đã có tài khoản? <WrapperTextLight onClick={handleNavigateSignIn}>Đăng nhập</WrapperTextLight></p>
            <p style={{fontSize: '12px',
              color: 'rgb(120, 120, 120)',
              lineHeight:' 16px',
              textAlign: 'start',}}>Bằng việc tiếp tục, bạn đã đọc và đồng ý với <WrapperTextNote>điều khoản sử dụng</WrapperTextNote> và <WrapperTextNote>Chính sách bảo mật thông tin cá nhân</WrapperTextNote> của CongTusJr</p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
            <Image src={imageLogo} preview={false} alt='image-logo' height='203px' width='203px'/>
            <h4>Mua sắm tại CongTusJr</h4>
        </WrapperContainerRight>
      </div>
    </div>
  )
}

export default SignUpPage