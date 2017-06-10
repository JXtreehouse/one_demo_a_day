/**
 * Created by AlexZ33 on 19/3/17.
 */
/* 数据格式演示
 var aqiSourceData = {
	 "北京": {
		 "2017-01-01": 10,
		 "2017-01-02": 10,
		 "2017-01-03": 10,
		 "2017-01-04": 10
	 }
 };
 */

// 以下两个函数用于随机模拟生成测试数据

function getDateStr(dat) {
	var y = dat.getFullYear();
	var m = dat.getMonth() + 1;
	    m = m < 10 ? '0' + m : m; 
	var d = dat.getDate();
	    d = d < 10 ? '0' + d : d;

	return y + '-' + m + '-' + d;

}

function randomBuildData(seed) {
	var returnData = {};
	var dat = new Date("2017-01-01");
	var datStr = '';
	for (var i = 0; i < 92; i++) {
		datStr = getDateStr(dat);

		returnData[datStr] =Math.ceil(Math.random() * seed);
		dat.setDate(dat.getDate() + 1);
	}
 return returnData;
}

var aqiSourceData = {
    "北京": randomBuildData(500),
    "上海": randomBuildData(300),
    "广州": randomBuildData(200),
    "深圳": randomBuildData(100),
    "成都": randomBuildData(300),
    "西安": randomBuildData(500),
    "福州": randomBuildData(100),
    "厦门": randomBuildData(100),
    "沈阳": randomBuildData(500)
};

var colors = ['#16324a', '#24385e', '#393f65', '#4e4a67', '#5a4563', '#b38e95',
              '#edae9e', '#c1b9c2', '#bec3cb', '#9ea7bb', '#99b4ce', '#d7f0f8'];

// 用于渲染图表的数据
var chartData = {};

// 记录当前页面的表单选项


var pageState = {
    nowSelectCity: -1,
    nowGraTime: "day"
}

function getWidth(width, len) {
	var posObj = {};
	posObj.width = Math.floor(width / (len*2));
	posObj.left = Math.floor(width / len);
	posObj.offsetLeft = (width - posObj.left * (len - 1) - posObj.width) / 2;
	posObj.offsetLeft = (width - posObj.left * (len - 1) - posObj.width) / 2;
  return posObj;
}



