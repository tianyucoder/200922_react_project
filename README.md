### 1.antd的按需引入+自定主题
			1.安装依赖：yarn add react-app-rewired customize-cra babel-plugin-import less less-loader
			2.修改package.json
					....
						"scripts": {
							"start": "react-app-rewired start",
							"build": "react-app-rewired build",
							"test": "react-app-rewired test",
							"eject": "react-scripts eject"
						},
					....
			3.根目录下创建config-overrides.js
					//配置具体的修改规则
					const { override, fixBabelImports,addLessLoader} = require('customize-cra');
					module.exports = override(
						fixBabelImports('import', {
							libraryName: 'antd',
							libraryDirectory: 'es',
							style: true,
						}),
						addLessLoader({
							lessOptions:{
								javascriptEnabled: true,
								modifyVars: { '@primary-color': 'green' },
							}
						}),
					);
				4.备注：不用在组件里亲自引入样式了，即：import 'antd/dist/antd.css'应该删掉

### 2.antd-mobile的使用
			1.安装依赖：yarn add react-app-rewired customize-cra babel-plugin-import less less-loader
			2.修改package.json
					....
						"scripts": {
							"start": "react-app-rewired start",
							"build": "react-app-rewired build",
							"test": "react-app-rewired test",
							"eject": "react-scripts eject"
						},
					....
			3.根目录下创建config-overrides.js
					//配置具体的修改规则
					const { override, fixBabelImports,addLessLoader } = require('customize-cra');
					module.exports = override(
						fixBabelImports('import', {
							libraryName: 'antd-mobile', //对哪个库进行按需引入
							libraryDirectory: 'es', //要按需引入的这个库，使用的是哪种模块化规范
							style: true, //对哪种文件进行按需引入
						}),
						addLessLoader({
							lessOptions:{
								javascriptEnabled: true, //允许js修改antd的less文件
								modifyVars: { 
									'@brand-primary': 'green',
									'@brand-primary-tap' :'rgb(0, 95, 0)'
								},
							}
						}),
					);
				4.备注：不用在组件里亲自引入样式了

### 3.antd-mobile的使用
		具体适配方案，见文档【vue_react脚手架rem适配.md】