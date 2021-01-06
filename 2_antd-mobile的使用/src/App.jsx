import React, { Component } from 'react'
import {Button} from 'antd-mobile';

export default class App extends Component {
	render() {
		return (
			<div>
				<Button>点我1</Button>
				<Button type="primary">点我2</Button>
			</div>
		)
	}
}
