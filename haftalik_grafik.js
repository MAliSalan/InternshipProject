const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi','Pazar'],
    datasets: [{
      label: 'Ağustos günlere göre kazanç',
      data: [6733, 4342, 12434, 3234, 8564, 6346, 4234],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
const ctx2 = document.getElementById('haftalik_grafik').getContext('2d');
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

const ctx4 = document.getElementById('haftalik_grafik2').getContext('2d');
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

const ctx3 = document.getElementById('haftalik_grafik3').getContext('2d');
const myDoughnutChart3 = new Chart(ctx3, {
  type: 'doughnut',
  data: {
      labels: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi','Pazar'],
      datasets: [{
          label: 'Dataset',
          data: [6733, 4342, 12434, 3234, 8564, 6346, 4234],
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