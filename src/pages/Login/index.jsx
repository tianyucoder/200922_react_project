import React, { Component } from 'react'
import { NavBar, InputItem,Button,Toast } from 'antd-mobile';
import {phoneReg,codeReg} from '../../config/reg'
import './index.less'


export default class Login extends Component {
	state = {
		phone:'', //存储手机号
		code:'' //存储验证码
	}
	//登录按钮的回调
	login = ()=>{
		const {phone,code} = this.state
		if(!phone) return Toast.fail('请输入合法的手机号',2)
		else if(!code) return Toast.fail('请输入合法的验证码',2)
		console.log(`发起登录请求，手机号为${phone}，验证码为${code}`)
	}
	//保存用户输入的数据
	saveData = (type)=>{
		return (value)=>{
			if(type === 'phone' && !phoneReg.test(value)) value = ''
			else if(type === 'code' && !codeReg.test(value)) value = ''
			this.setState({[type]:value})
		}
	}
	render() {
		return (
			<div>
				{/* 顶部导航区 */}
				<NavBar mode="light">手机验证码登录</NavBar>
				{/* 内容区 */}
				<div className="login-wraper">
					{/* 手机号输入区 */}
					<InputItem
						onChange={this.saveData('phone')}
						clear
						placeholder="请输入手机号"
					/>
					{/* 验证码输入区 */}
					<div className="code-group">
						<InputItem
							onChange={this.saveData('code')}
							clear
							placeholder="6位验证码"
						/>
						<button className="get-code-btn">获取验证码</button>
					</div>
					{/* 登录按钮 */}
					<Button type="primary" onTouchEnd={this.login}>登录</Button>
					{/* 底部说明区域 */}
					<div className="footer">
						未注册的手机号，验证后会自动创建硅谷账号，登录即代表您同意
						<a href="http://www.atguigu.com">《硅谷隐私政策》</a>
					</div>
				</div>
			</div>
		)
	}
}
