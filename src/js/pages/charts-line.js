$(document).ready(function() {
    var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Product 1",
                data: randomData(7, 0, 100),
                backgroundColor: 'rgba(244, 67, 55, .6)',
            },
            {
                label: "Product 2",
                data: randomData(7, 0, 100),
                backgroundColor: 'rgba(76, 175, 81, .6)',
            },
            {
                label: "Product 3",
                data: randomData(7, 0, 100),
                backgroundColor: 'rgba(255, 152, 0, .6)',
            }
        ]
    };

    var options = {
        responsive: true,
        scales: {
            xAxes : [{
                gridLines : {
                    display: false
                }
            }],
            yAxes: [{
                stacked: true
            }]
        }
    };

    var ctx = document.getElementById("myChart");
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });

    var data2 = {
        labels: randomData(200, 0, 10),
        datasets: [
            {
                label: 'System Load',
                data: randomData(200, 100, 150),
                pointBorderColor: 'rgba(0,0,0,0)',
                pointBackgroundColor: 'rgba(0,0,0,0)',
                //borderColor: 'rgba(40, 44, 52, .5) ',
                backgroundColor: 'rgba(3, 169, 244, .6) ',
            },
        ]
    };

    var options2 = {
        responsive: true,

        scales: {
            xAxes : [{
                display: false,
                gridLines : {
                    display: false
                }
            }],
            yAxes: [{
                stacked: true,
                //display: false,
                ticks: {
                    beginAtZero: true,
                    max: 200
                }
            }]
        }
    };

    var ctx2 = document.getElementById("myChart2");
    var myLineChart2 = new Chart(ctx2, {
        type: 'line',
        data: data2,
        options: options2
    });

    var data3 = {
        labels: randomData(50, 0, 10),
        datasets: [
            {
                label: 'System Load',
                data: randomData(50, 100, 150),
                pointBorderColor: 'rgba(0,0,0,0)',
                pointBackgroundColor: 'rgba(0,0,0,0)',
                borderColor: 'rgba(255,255,255, .5) ',
                borderWidth: 1,
                backgroundColor: 'rgba(255,255,255, .2) ',
            },
        ]
    };

    var options3 = {
        responsive: true,

        legend: {
            display: false,
            labels: {
                fontColor: '#fff',

                fontFamily: 'Roboto'
            },
        },

        scales: {
            xAxes : [{
                display: false,
                gridLines : {
                    display: false
                }
            }],
            yAxes: [{
                stacked: true,
                display: false,
                ticks: {
                    beginAtZero: true,
                    max: 200,
                    display: false,
                }
            }]
        }
    };

    var ctx3 = document.getElementById("myChart3");
    var myLineChart3 = new Chart(ctx3, {
        type: 'line',
        data: data3,
        options: options3
    });

    var data4 = {
        labels: randomData(20, 0, 10),
        datasets: [
            {
                label: 'System Load',
                data: randomData(20, 0, 20),
                pointBorderColor: 'rgba(0,0,0,0)',
                pointBackgroundColor: 'rgba(0,0,0,0)',
                borderColor: 'rgba(255,255,255, .5) ',
                borderWidth: 1,
                backgroundColor: 'rgba(255,255,255, .2) ',
            },
        ]
    };

    var options4 = {
        responsive: true,

        legend: {
            display: false,
            labels: {
                fontColor: '#fff',

                fontFamily: 'Roboto'
            },
        },

        scales: {
            xAxes : [{
                display: false,
                gridLines : {
                    display: false
                }
            }],
            yAxes: [{
                stacked: true,
                display: false,
                ticks: {
                    beginAtZero: true,
                    display: false,
                }
            }]
        }
    };

    var ctx4 = document.getElementById("myChart4");
    var myLineChart4 = new Chart(ctx4, {
        type: 'line',
        data: data4,
        options: options4
    });

    var data5 = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Line One",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40],
                spanGaps: false,
            },
            {
                label: "Line Two",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(154,0,0,0.4)",
                borderColor: "rgba(154,0,0,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(154,0,0,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(154,0,0,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40],
                spanGaps: false,
            }
        ]
    };

    var ctx5 = document.getElementById("myChart5");
    var myLineChart5 = new Chart(ctx5, {
        type: 'line',
        data: data5,
        options: options
    });

    function addPoint(chart, value) {
        chart.data.datasets[0].data.push(value);
    }

    function removePoint(chart) {
        chart.data.datasets[0].data.shift();
    }

    function moveChart(chart, newData) {
        chart.data.labels.splice(0, 1);
        chart.data.datasets[0].data.splice(0, 1);

        chart.data.labels.push(randNum(0,10));
        chart.data.datasets[0].data.push(newData);

        chart.update(0);
    }

    function moveFlowChart(chart, newData) {
        chart.data.labels.splice(0, 1);
        chart.data.datasets[0].data.splice(0, 1);

        //chart.update(0);

        chart.data.labels.push(randNum(0,10));
        chart.data.datasets[0].data.push(newData);

        chart.update();
    }

    setInterval(function() {
        moveChart(myLineChart2, randNum(100,150));
    }, 50);

    setInterval(function() {
        moveChart(myLineChart3, randNum(100,150));
    }, 500);

    setInterval(function() {
        moveFlowChart(myLineChart4, randNum(0,20));
    }, 1000);

    function randNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function randomData(num, min, max) {
        result = [];
        num = typeof num !== 'undefined' ? num : 5;
        min = typeof min !== 'undefined' ? min : 0;
        max = typeof max !== 'undefined' ? max : 10;
        for (var i = 0; i < num; i++) {
            result.push(randNum(min, max));
        }
        return result;
    }
});
