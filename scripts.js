document.addEventListener('DOMContentLoaded', function () {
    fetch('eve.json')
        .then(response => response.json())
        .then(data => {
            const processedData = processData(data);
            createSeverityChart(processedData);
            createCategoryChart(processedData);
            createProtocolChart(processedData);
        });

    function processData(data) {
        const severityCount = {};
        const categoryCount = {};
        const protocolCount = {};

        data.forEach(entry => {
            const severity = entry.alert.severity;
            const category = entry.alert.category;
            const protocol = entry.proto;

            severityCount[severity] = (severityCount[severity] || 0) + 1;
            categoryCount[category] = (categoryCount[category] || 0) + 1;
            protocolCount[protocol] = (protocolCount[protocol] || 0) + 1;
        });

        return { severityCount, categoryCount, protocolCount };
    }

    function createSeverityChart(data) {
        const ctx = document.getElementById('chart1').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Object.keys(data.severityCount),
                datasets: [{
                    label: 'Severity Count',
                    data: Object.values(data.severityCount),
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: 'white'
                        }
                    }
                }
            }
        });
    }

    function createCategoryChart(data) {
        const ctx = document.getElementById('chart2').getContext('2d');
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: Object.keys(data.categoryCount),
                datasets: [{
                    label: 'Category Count',
                    data: Object.values(data.categoryCount),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: {
                            color: 'white'
                        }
                    }
                }
            }
        });
    }

    function createProtocolChart(data) {
        const ctx = document.getElementById('chart3').getContext('2d');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: Object.keys(data.protocolCount),
                datasets: [{
                    label: 'Protocol Count',
                    data: Object.values(data.protocolCount),
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: {
                            color: 'white'
                        }
                    }
                }
            }
        });
    }
});
const labels = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
const data = {
  labels: labels,
  datasets: [{
      label: 'Network Traffic',
      data: [30, 40, 35, 45, 50, 60, 65, 70, 75, 80, 85, 90, 95, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
};

// Create the bar chart
const config = {
  type: 'bar',
  data: data,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Network Traffic Bar Chart'
      }
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Time'
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Traffic (GB)'
        }
      }
    }
  }
};

// Get the canvas context and create the bar chart
const trafficBarChart = new Chart(
  document.getElementById('trafficBarChart'),
  config
);
document.addEventListener('DOMContentLoaded', function () {
    fetch('eve.json')
        .then(response => response.json())
        .then(data => {
            const processedData = processData(data);
            createSeverityChart(processedData);
            createCategoryChart(processedData);
            createProtocolChart(processedData);
            createTrafficChart(processedData);
        });

    function processData(data) {
        const severityCount = {};
        const categoryCount = {};
        const protocolCount = {};
        const trafficData = {};

        data.forEach(entry => {
            const severity = entry.alert.severity;
            const category = entry.alert.category;
            const protocol = entry.proto;
            const timestamp = new Date(entry.timestamp).toLocaleString();

            severityCount[severity] = (severityCount[severity] || 0) + 1;
            categoryCount[category] = (categoryCount[category] || 0) + 1;
            protocolCount[protocol] = (protocolCount[protocol] || 0) + 1;
            trafficData[timestamp] = (trafficData[timestamp] || 0) + 1;
        });

        return { severityCount, categoryCount, protocolCount, trafficData };
    }

    function createSeverityChart(data) {
        const ctx = document.getElementById('severityChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Object.keys(data.severityCount),
                datasets: [{
                    label: 'Severity Count',
                    data: Object.values(data.severityCount),
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: 'white'
                        }
                    },
                    x: {
                        ticks: {
                            color: 'white'
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: 'white'
                        }
                    }
                }
            }
        });
    }

    function createCategoryChart(data) {
        const ctx = document.getElementById('categoryChart').getContext('2d');
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: Object.keys(data.categoryCount),
                datasets: [{
                    label: 'Category Count',
                    data: Object.values(data.categoryCount),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: {
                            color: 'white'
                        }
                    }
                }
            }
        });
    }

    function createProtocolChart(data) {
        const ctx = document.getElementById('protocolChart').getContext('2d');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: Object.keys(data.protocolCount),
                datasets: [{
                    label: 'Protocol Count',
                    data: Object.values(data.protocolCount),
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: {
                            color: 'white'
                        }
                    }
                }
            }
        });
    }

    function createTrafficChart(data) {
        const ctx = document.getElementById('trafficChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Object.keys(data.trafficData),
                datasets: [{
                    label: 'Network Traffic',
                    data: Object.values(data.trafficData),
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: 'white'
                        }
                    },
                    x: {
                        ticks: {
                            color: 'white'
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: 'white'
                        }
                    }
                }
            }
        });
    }
});
var xyValues = [
    {x:50, y:7},
    {x:60, y:8},
    {x:70, y:8},
    {x:80, y:9},
    {x:90, y:9},
    {x:100, y:9},
    {x:110, y:10},
    {x:120, y:11},
    {x:130, y:14},
    {x:140, y:14},
    {x:150, y:15}
  ];
  
  new Chart("myChart", {
    type: "scatter",
    data: {
      datasets: [{
        pointRadius: 4,
        pointBackgroundColor: "rgb(0,0,255)",
        data: xyValues
      }]
    },
    options: {
      legend: {display: false},
      scales: {
        xAxes: [{ticks: {min: 40, max:160}}],
        yAxes: [{ticks: {min: 6, max:16}}],
      }
    }
  });