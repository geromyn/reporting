$(document).ready(function() {
  var options = {
          chart: {
            renderTo: 'cpu',
            marginRight: 130,
            zoomType: 'xy'
          },
          title: {
            text: 'Consumo CPU %',
            x: -20 //center
          },
          subtitle: {
            text: '- Ultimas 24 horas; --Ultimas 24 horas semana pasada',
            x: -20
          },
          credits: {
            enabled: false
          },
          xAxis: {
            //type: 'datetime',
            tickPixelInterval: 150,
            crosshair: true,
            categories: []
          },
          yAxis: [{ //tiempo de respuesta
            labels: {
              format: '{value} %'
            },
            title: {
              text: 'CPU %'
            }
          }],
          tooltip: {
              shared: true
          },
          legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
              borderWidth: 1,
              itemStyle:{
                  fontSize: "10px"
                }

          },
          plotOptions: {
              line: {
                marker: {
                  enabled: false,
                  symbol: 'circle',
                  radius: 1,
                  states : {
                    hover: {enabled: true}
                  }
                }
              }
          },
          /*series: []*/
          series: [{
            name: 'lpsrn302 last',
            color: 'rgba(4,38,253,1)',
            type: 'column',
            data:[]
          },{
            name: 'lpsrv301 last',
            color: 'rgba(4,129,255,1)',
            type: 'column',
            data:[]
          },{
            name: 'lpsrv302 last',
            color: 'rgba(95,173,251,1)',
            type: 'column',
            data:[]
          },{
            name: 'lpsrv303 last',
            color: 'rgba(80,209,250,1)',
            type: 'column',
            data:[]
          },{
            name: 'lpsrn301 last',
            color: 'rgba(4,38,253,1)',
            type: 'column',
            data:[]
          },{
            name: 'lpsrv304 last',
            color: 'rgba(4,129,255,1)',
            type: 'column',
            data:[]
          },{
            name: 'lpsrv319 last',
            color: 'rgba(95,173,251,1)',
            type: 'column',
            data:[]
          },{
            name: 'lpsrv320 last',
            color: 'rgba(80,209,250,1)',
            type: 'column',
            data:[]
          },{
            name: 'lpsrv321 last',
            color: 'rgba(4,38,253,1)',
            type: 'column',
            data:[]
          },{
            name: 'lpsrn302 now',
            color: 'rgba(4,38,253,1)',
            type: 'line',
            data:[]
          },{
            name: 'lpsrv301 now',
            color: 'rgba(4,129,255,1)',
            type: 'line',
            data:[]
          },{
            name: 'lpsrv302 now',
            color: 'rgba(95,173,251,1)',
            type: 'line',
            data:[]
          },{
            name: 'lpsrv303 now',
            color: 'rgba(80,209,250,1)',
            type: 'line',
            data:[]
          },{
            name: 'lpsrn301 now',
            color: 'rgba(4,38,253,1)',
            type: 'line',
            data:[]
          },{
            name: 'lpsrv304 now',
            color: 'rgba(4,129,255,1)',
            type: 'line',
            data:[]
          },{
            name: 'lpsrv319 now',
            color: 'rgba(95,173,251,1)',
            type: 'line',
            data:[]
          },{
            name: 'lpsrv320 now',
            color: 'rgba(80,209,250,1)',
            type: 'line',
            data:[]
          },{
            name: 'lpsrv321 now',
            color: 'rgba(4,38,253,1)',
            type: 'line',
            data:[]
          }]
      }

      $.getJSON("php/ASO/particulares/cpuParticualres.php", function(json) {
        options.xAxis.categories = json[0]['data'];
        options.series[0].data = json[1]['data'];
        options.series[1].data = json[2]['data'];
        options.series[2].data = json[3]['data'];
        options.series[3].data = json[4]['data'];
        options.series[4].data = json[5]['data'];
        options.series[5].data = json[6]['data'];
        options.series[6].data = json[7]['data'];
        options.series[7].data = json[8]['data'];
        options.series[8].data = json[9]['data'];
        options.series[9].data = json[10]['data'];
        options.series[10].data = json[11]['data'];
        options.series[11].data = json[12]['data'];
        options.series[12].data = json[13]['data'];
        options.series[13].data = json[14]['data'];
        options.series[14].data = json[15]['data'];
        options.series[15].data = json[16]['data'];
        options.series[16].data = json[17]['data'];
        options.series[17].data = json[18]['data'];

        chart = new Highcharts.Chart(options);
      });
  });
