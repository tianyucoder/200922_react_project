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