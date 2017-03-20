$(document).ready(function() {
    var ctx = document.getElementById("myChart");
    var test = new Chart(ctx, {
        type: 'bar',

        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            deferred: {
                yOffset: '80%',
                delay: 100
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

    var ctx2 = document.getElementById("myChart2");
    var test2 = new Chart(ctx2, {
        type: 'bar',

        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            deferred: {
                yOffset: '80%',
                delay: 100
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

    var ctx3 = document.getElementById("myChart3");
    var test3 = new Chart(ctx3, {
        type: 'bar',

        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: 'Label',
                data: [12, 19, 3, 5, 8, 3],
                backgroundColor: 'rgba(255,255,255,.3)',
                borderColor: 'rgba(255,255,255,0.5)',
                borderWidth: 1
            }]
        },

        options: {
            deferred: {
                yOffset: '80%',
                delay: 100
            },
            legend: {
                //display: none
                labels: {
                    fontColor: '#fff',
                    fontFamily: 'Roboto'
                },
            },

            scales: {
                xAxes: [{
                    display: false
                }],
                yAxes: [{
                    display: false,
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

    var ctx4 = document.getElementById("myChart4");
    var test4 = new Chart(ctx4, {
        type: 'bar',

        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: 'Label',
                data: [12, 19, 3, 5, 8, 3],
                backgroundColor: 'rgba(255,255,255,.3)',
                borderColor: 'rgba(0,0,0,0.2)',
                borderWidth: 2
            }]
        },

        options: {
            deferred: {
                yOffset: '80%',
                delay: 100
            },
            legend: {
                //display: none
                labels: {
                    fontColor: '#fff',
                    fontFamily: 'Roboto'
                },
            },

            scales: {
                xAxes: [{
                    display: false
                }],
                yAxes: [{
                    display: false,
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

    var ctx5 = document.getElementById("myChart5");
    var test5 = new Chart(ctx5, {
        type: 'bar',

        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange", "Green", "Purple", "Orange", "Blue", "Red", "Blue", "Yellow", "Green", "Purple", "Orange", "Green", "Purple", "Orange", "Blue"],
            datasets: [{
                label: 'Label',
                data: [12, 19, 3, 5, 8, 3, 6, 15, 13, 16, 12, 19, 3, 5, 8, 3, 6, 15, 13, 16],
                backgroundColor: 'rgba(255,255,255,.1)',
                borderColor: 'rgba(255,255,255,1)',
                borderWidth: 0
            }]
        },

        options: {
            deferred: {
                yOffset: '80%',
                delay: 100
            },
            tooltips: {
                enabled: false
            },
            legend: {
                display: false,
            },

            scales: {
                xAxes: [{
                    display: false
                }],
                yAxes: [{
                    display: false,
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

    var dData = function() {
      return Math.round(Math.random() * 90) + 10;
    };



    var ctx6 = document.getElementById("myChart6");
    var test6 = new Chart(ctx6, {
        type: 'bar',

        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange", "Green", "Purple", "Orange", "Blue", "Red", "Blue", "Yellow", "Green", "Purple", "Orange", "Green", "Purple", "Orange", "Blue"],
            datasets: [{
                label: 'Label',
                data: [12, 19, 3, 5, 8, 3, 6, 15, 13, 16, 12, 19, 3, 5, 8, 3, 6, 15, 13, 16],
                backgroundColor: 'rgba(255,255,255,.1)',
                borderColor: 'rgba(255,255,255,1)',
                borderWidth: 0
            }]
        },

        options: {
            deferred: {
                yOffset: '80%',
                delay: 100
            },
            tooltips: {
                enabled: false
            },
            legend: {
                display: false,
            },

            scales: {
                xAxes: [{
                    display: false
                }],
                yAxes: [{
                    display: false,
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
    var index = 0;

    setInterval(function() {
        test6.data.datasets[0].data.shift();
        test6.update(0);
        test6.data.datasets[0].data.push(Math.floor(Math.random() * 21) + 10);
        test6.update();
    }, 1200);

    var ctx7 = document.getElementById("myChart7");
    var test7 = new Chart(ctx7, {
        type: 'bar',

        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Sales',
                data: [0,0,0,0,0,0,0,0,0,0,0,0],
                backgroundColor: 'rgba(255,255,255,.3)',
                borderColor: 'rgba(255,255,255,0.5)',
                borderWidth: 1
            }]
        },

        options: {
            defaultFontColor: '#fff',
            deferred: {
                yOffset: '80%',
                delay: 100
            },
            title: {
                display: true,
                text: 'Sales Report',
                fontColor: '#fff',
                fontSize: 20,
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                padding: 20
            },
            legend: {
                display: false,
                labels: {
                    fontColor: '#fff',

                    fontFamily: 'Roboto'
                },
            },

            scales: {

                xAxes: [{
                    display: true,
                    gridLines: {
                        color: 'rgba(255,255,255,0.1)',
                        fontColor: '#fff',
                        drawOnChartArea: false,
                        zeroLineColor: 'rgba(255,255,255,.1)',
                        zeroLineWidth: 0,
                    },
                    ticks: {
                        fontColor: '#fff'
                    }
                }],
                yAxes: [{
                    display: true,
                    color: '#fff',
                    gridLines: {
                        color: 'rgba(255,255,255,0.1)',
                        fontColor: '#fff',
                        drawOnChartArea: false,
                        zeroLineColor: 'rgba(255,255,255,.1)',
                        zeroLineWidth: 0,
                    },
                    ticks: {
                        beginAtZero: true,
                        fontColor: '#fff'
                    }
                }]
            }
        }
    });

    setInterval(function() {
        setChartValue(test7, randomData(12,10,200));
    }, 2000);

    var ctx8 = document.getElementById("myChart8");
    var test8 = new Chart(ctx8, {
        type: 'bar',

        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Product 1',
                data: randomData(12,1,2000),
                backgroundColor: 'rgba(1, 188, 212, 1)',
                borderColor: 'rgba(1, 188, 212, 1)',
                borderWidth: 1
            },{
                label: 'Product 2',
                data: randomData(12,1,2000),
                backgroundColor: 'rgba(255,152,0,1)',
                borderColor: 'rgba(255,152,0,1)',
                borderWidth: 1
            },{
                label: 'Product 3',
                data: randomData(12,1,2000),
                backgroundColor: 'rgba(156, 39, 176, 1)',
                borderColor: 'rgba(156, 39, 176, 1)',
                borderWidth: 1
            }]
        },

        options: {
            defaultFontColor: '#fff',
            deferred: {
                yOffset: '80%',
                delay: 100
            },
            title: {
                display: true,
                text: 'Sales Report',
                //fontColor: '#fff',
                fontSize: 20,
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                padding: 20
            },
            legend: {
                //display: false,
                labels: {
                    //fontColor: '#fff',

                    fontFamily: 'Roboto'
                },
            },

            scales: {

                xAxes: [{
                    display: true,
                    gridLines: {
                        color: 'rgba(255,255,255,0.1)',
                        //fontColor: '#fff',
                        drawOnChartArea: false,
                        zeroLineColor: 'rgba(255,255,255,.1)',
                        zeroLineWidth: 0,
                    },
                    ticks: {
                        //fontColor: '#fff'
                    }
                }],
                yAxes: [{
                    display: true,
                    //color: '#fff',
                    gridLines: {
                        //color: 'rgba(255,255,255,0.1)',
                        //fontColor: '#fff',
                        //drawOnChartArea: false,
                        //zeroLineColor: 'rgba(255,255,255,.1)',
                        zeroLineWidth: 1,
                    },
                    ticks: {
                        beginAtZero: true,
                        //fontColor: '#fff'
                    }
                }]
            }
        }
    });

    /*setInterval(function() {
        setChartValue(test8, randomData(12,10,200));
    }, 2000);*/

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

    function setChartValue(chart, values) {
        chart.data.datasets[0].data = values;
        chart.update();
    }


    setInterval(function() {
        setChartValue(test2, randomData(6,0,20));
    }, 2000);

    setInterval(function() {
        setChartValue(test3, randomData(6,0,20));
    }, 2000);

    setInterval(function() {
        setChartValue(test4, randomData(6,0,20));
    }, 2000);

    setInterval(function() {
        setChartValue(test5, randomData(20,0,100));
    }, 100);

});
