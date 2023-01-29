const colors = [
				{
					type: 'linear',
					x: 0,
					x2: 1,
					y: 0,
					y2: 0,
					colorStops: [{ offset: 0, color: '#23D67D' }, { offset: 0.5, color: '#23D67D' }, { offset: 0.5, color: '#0BBE65' }, { offset: 1, color: '#0BBE65' }]
				},
				{
					type: 'linear',
					x: 0,
					x2: 1,
					y: 0,
					y2: 0,
					colorStops: [{ offset: 0, color: '#F0F3F5' }, { offset: 0.5, color: '#F0F3F5' }, { offset: 0.5, color: '#E6E9EB' }, { offset: 1, color: '#E6E9EB' }]
				},
 
			];
			const data=[
{value:10, 
itemStyle: { normal: { color: {
					type: 'linear',
					x: 0,
					x2: 1,
					y: 0,
					y2: 0,
					colorStops: [{ offset: 0, color: '#95D611' }, { offset: 0.5, color: '#95D611' }, { offset: 0.5, color: '#68950B' }, { offset: 1, color: '#68950B' }]
				}, } }
},
{value:10, 
itemStyle: { normal: { color: {
					type: 'linear',
					x: 0,
					x2: 1,
					y: 0,
					y2: 0,
					colorStops: [{ offset: 0, color: '#2BD6D6' }, { offset: 0.5, color: '#2BD6D6' }, { offset: 0.5, color: '#1B8B8B' }, { offset: 1, color: '#1B8B8B' }]
				}, } }
},
{value:10, 
itemStyle: { normal: { color: {
					type: 'linear',
					x: 0,
					x2: 1,
					y: 0,
					y2: 0,
					colorStops: [{ offset: 0, color: '#FAE684' }, { offset: 0.5, color: '#FAE684' }, { offset: 0.5, color: '#AB8F06' }, { offset: 1, color: '#AB8F06' }]
				}, } }
},
];
			let barWidth = 40;
			const bottomData = [
{value:1, 
itemStyle: { normal: { color: {
					type: 'linear',
					x: 0,
					x2: 1,
					y: 0,
					y2: 0,
					colorStops: [{ offset: 0, color: '#95D611' }, { offset: 0.5, color: '#95D611' }, { offset: 0.5, color: '#68950B' }, { offset: 1, color: '#68950B' }]
				}, } }
},
{value:1, 
itemStyle: { normal: { color: {
					type: 'linear',
					x: 0,
					x2: 1,
					y: 0,
					y2: 0,
					colorStops: [{ offset: 0, color: '#2BD6D6' }, { offset: 0.5, color: '#2BD6D6' }, { offset: 0.5, color: '#1B8B8B' }, { offset: 1, color: '#1B8B8B' }]
				}, } }
},
{value:1, 
itemStyle: { normal: { color: {
					type: 'linear',
					x: 0,
					x2: 1,
					y: 0,
					y2: 0,
					colorStops: [{ offset: 0, color: '#FAE684' }, { offset: 0.5, color: '#FAE684' }, { offset: 0.5, color: '#AB8F06' }, { offset: 1, color: '#AB8F06' }]
				}, } }
},
];
			const topdata = [200,200,200];
			const topdata1 = [190,190,190];
            option = {
         tooltip:{show:false},
				xAxis: [
					{
						data: ["周一","周二","周三"],
						axisTick: { show: false },
						axisLine: { show: false },
						// axisLabel: { show: false },
					
					}
				],
				grid: {
					top: 30,
					left: 50,
					right: 20,
					bottom: 30
				},
				yAxis: {
				  axisLabel: { show: false },
					axisLine: { show: false },
					axisTick: { show: false },
					splitLine: { show: false }
				},
				series: [
					{
						z: 1,
						name: '数据一',
						type: 'bar',
						barWidth: barWidth,
						data: data,
						stack: 'equal',
						label: {
                  show: true, //开启显示
                  position: 'top', //在上方显示
                  textStyle: { //数值样式
                    color :'#000',
                    fontSize: 14,
                  },
                  offset:[0,-2]
                },
            emphasis: {disabled:true},
						itemStyle: { normal: { color: colors[0] } }
					},
					{
						z: 1,
						name: '数据二',
						type: 'bar',
						barWidth: barWidth,
						data: topdata1,
						stack: 'equal',
						label: { show: false },
						emphasis: {disabled:true},
						itemStyle: { normal: { color: colors[1] } }
					},
					{
						z: 2,
						name: '底部',
						type: 'pictorialBar',
						symbolPosition: 'end',
						data: data,
						symbol: 'diamond',
						label: { show: false },
						symbolOffset: [0, '-50%'],
						symbolSize: [barWidth, 10],
						emphasis: {disabled:true},
						itemStyle: { normal: { color: colors[1] } }
					},
					{
						z: 2,
						name: '底部',
						type: 'pictorialBar',
						symbolPosition: 'end',
						data:topdata,
						symbol: 'diamond',
						label: { show: false },
						symbolOffset: [0, '-50%'],
						symbolSize: [barWidth, 10],
						emphasis: {disabled:true},
						itemStyle: { normal: { color:'#E6E9EB' } }
					},
					{
						z: 2,
						name: '底部',
						type: 'pictorialBar',
						symbolPosition: 'end',
						data:[
{value:10, 
itemStyle: { normal: { color: '#CAEA88', } }
},
{value:10, 
itemStyle: { normal: { color: '#95EAEA', } }
},
{value:10, 
itemStyle: { normal: { color: '#FAE684', } }
},
],
						symbol: 'diamond',
						label: { show: false },
						symbolOffset: [0, '-50%'],
						symbolSize: [barWidth, 10],
						emphasis: {disabled:true},
						itemStyle: { normal: { color:'#23D67D' } }
					},
					{
						z: 2,
						name: '底部',
						type: 'pictorialBar',
						data: bottomData,
						symbol: 'diamond',
						label: { show: false },
						symbolOffset: [0, '50%'],
						symbolSize: [barWidth, 10],
						emphasis: {disabled:true},
						itemStyle: { normal: { color: colors[0] } }
					},
				]
};
