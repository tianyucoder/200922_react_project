import React, { Component } from 'react'
import { NavBar, InputItem,Button } from 'antd-mobile';
import './index.less'

export default class Login extends Component {
	render() {
		return (
			<div>
				{/* 顶部导航区 */}
				<NavBar mode="light">手机验证码登录</NavBar>
				{/* 内容区 */}
				<div className="login-wraper">
					{/* 手机号输入区 */}
					<InputItem
						clear
						placeholder="请输入手机号"
					/>
					{/* 验证码输入区 */}
					<div className="code-group">
						<InputItem
							clear
							placeholder="6位验证码"
						/>
						<button className="get-code-btn">获取验证码</button>
					</div>
					{/* 登录按钮 */}
					<Button type="primary">登录</Button>
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
