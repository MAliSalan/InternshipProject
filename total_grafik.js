const years = ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];
const profitData = [1123540, 957500, 1308700, 1265070, 1055673, 1467864, 1003452, 1150343, 1255670, 980340, 1353453];
const lossData = [-878045, -759090, -950909, -850534, -902523, -923453, -1065440, -745543, -850000, -950000, -803450];

const weekDays = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];
const augustDailyProfit = [6733, 4342, 12434, 3234, 8564, 6346, 4234];

const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos'];
const monthlyProfit2024 = [92345, 107893, 144567, 123456, 99876, 135902, 148321, 73678];

let currentLabels = years;
let currentDatasets = [
    {
        label: 'Kazanılan Para (Yıllık)',
        data: profitData,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        stack: 'Stack 0',
        type: 'bar',
        hidden: false
    },
    {
        label: 'Harcanan Para (Yıllık)',
        data: lossData,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        stack: 'Stack 0',
        type: 'bar',
        hidden: false
    },
    {
        label: 'Ağustos Günlere Göre Kazanç',
        data: augustDailyProfit,
        borderColor: 'rgba(54, 162, 235, 0.8)',
        fill: false,
        type: 'line',
        hidden: true,
        yAxisID: 'y2'
    },
    {
        label: '2024 Aylık Kazanç',
        data: monthlyProfit2024,
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
        type: 'bar',
        hidden: true
    }
];

const config = {
    type: 'bar', 
    data: {
        labels: currentLabels,
        datasets: currentDatasets
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Total Analiz'
            },
            legend: {
                onClick: function(e, legendItem, legend) {
                    const index = legendItem.datasetIndex;
                    const chart = legend.chart;
                    
                    if (index === 2) {
                        chart.data.labels = weekDays;
                        chart.data.datasets.forEach((dataset, i) => {
                            dataset.hidden = i !== 2;
                        });
                    } else if (index === 3) {
                        chart.data.labels = months;
                        chart.data.datasets.forEach((dataset, i) => {
                            dataset.hidden = i !== 3;
                        });
                    } else { 
                        chart.data.labels = years;
                        chart.data.datasets.forEach((dataset, i) => {
                            dataset.hidden = i >= 2;  
                        });
                    }

                    chart.update();
                }
            }
        },
        responsive: true,
        scales: {
            x: {
                stacked: true
            },
            y: {
                stacked: true
            },
            y2: { 
                position: 'right',
                beginAtZero: true,
                grid: {
                    drawOnChartArea: false
                }
            }
        }
    }
};
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);


const ctx4 = document.getElementById('total_grafik2').getContext('2d');
const myDoughnutChart4 = new Chart(ctx4, {
  type: 'doughnut',
  data: {
      labels: ['Meze', 'Acı Biber Turşus', 'Kelle Paça Çorbası'],
      datasets: [{
          label: 'Dataset',
          data: [120, 280, 300],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      }]
  },
  options: {
      responsive: true,
      plugins: {
          legend: {
              display: false,
          },
          tooltip: {
              callbacks: {
                  label: function(context) {
                      const dataset = context.dataset;
                      const dataIndex = context.dataIndex;
                      const value = dataset.data[dataIndex];
                      const total = dataset.data.reduce((acc, val) => acc + val, 0);
                      const percentage = ((value / total) * 100).toFixed(2);

                      return `${context.label}: ${percentage}%`;
                  }
              }
          }
      }
  }
});

