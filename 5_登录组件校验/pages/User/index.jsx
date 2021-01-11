import React, { Component } from 'react'

export default class User extends Component {
	demo1 = ()=>{
		console.log('你点了按钮1--click')
	}
	demo2 = ()=>{
		console.log('你点了按钮2--touch')
	}
	render() {
		return (
			<div>
				我是User组件
				<button disabled={true} onClick={this.demo1}>点我1--click</button>
				<button disabled={true} onTouchEnd={this.demo2}>点我2--touch</button>
			</div>
		)
	}
}
