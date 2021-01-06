import React, { Component } from 'react'
import {Button,DatePicker,Input } from 'antd'
import { SearchOutlined,WechatOutlined } from '@ant-design/icons';

const {RangePicker} = DatePicker

export default class App extends Component {
	render() {
		return (
			<div>
				<Button>点我2</Button>
				<Button type="primary"style={{backgroundColor:'green'}}>点我3</Button>
				<Button type="danger">点我4</Button>
				<Button type="primary" shape="circle" icon={<SearchOutlined />} />
				<Button type="primary" size="large" shape="circle" icon={<WechatOutlined />} />
				<RangePicker />
				<Input placeholder="请输入内容"/>
			</div>
		)
	}
}
