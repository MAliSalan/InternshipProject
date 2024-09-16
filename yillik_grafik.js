const labels = ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];
        const profitData = [1123540, 957500, 1308700, 1265070, 1055673, 1467864, 1003452, 1150343, 1255670,  980340, 1353453];
        const lossData = [-878045, -759090, -950909, -850534,  -902523,  -923453, -1065440, -745543, -850000, -950000, -803450];

        const data = {
            labels: labels,
            datasets: [
                {
                    label: 'Kazanılan Para',
                    data: profitData,
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    stack: 'Stack 0',
                },
                {
                    label: 'Harcanan Para',
                    data: lossData,
                    backgroundColor: 'rgba(255, 99, 132, 0.6)',
                    stack: 'Stack 0',
                }
            ]
        };

        const config = {
            type: 'bar',
            data: data,
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: 'Son 10 Yıllık Kar Zarar Analizi'
                    },
                },
                responsive: true,
                scales: {
                    x: {
                        stacked: true
                    },
                    y: {
                        stacked: true
                    }
                }
            }
        };

        const myChart = new Chart(
            document.getElementById('myChart'),
            config
        );
const ctx2 = document.getElementById('yillik_grafik').getContext('2d');
const myDoughnutChart = new Chart(ctx2, {
  type: 'doughnut',
  data: {
      labels: ['Adana Kebap', 'Lahmacun', 'Kıymalı Pide(1.5 porsiyon)'],
      datasets: [{
          label: 'Dataset',
          data: [121340, 22340, 812730],
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

const ctx4 = document.getElementById('yillik_grafik2').getContext('2d');
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

const ctx3 = document.getElementById('yillik_grafik3').getContext('2d');
const myDoughnutChart3 = new Chart(ctx3, {
  type: 'doughnut',
  data: {
      labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran','Temmuz','Ağustos'],
      datasets: [{
          label: 'Dataset',
          data: [13000, 23412, 9374, 2341, 2112, 6346, 4234,2123],
          backgroundColor: ['#41f1b6', '#ffbb55', '#7380ec'],
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