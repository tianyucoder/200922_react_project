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

### 4.登录组件静态

### 5.登录组件校验

### 6.开启服务器
			 1.在C盘根目录下，创建data文件夹，其中包含：db、log两个文件夹
			 2.启动本机MongoDB-----使用命令：mongod
			 3.使用studio-3T测试连接数据库，若可以连接，进入下一步
			 4.启动案例服务器----react案例_server



