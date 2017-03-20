$(document).ready(function() {
    var data = {
        labels: [
            "Red",
            "Blue",
            "Yellow"
        ],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
    };

    var options = {

    };

    var ctx1 = document.getElementById("myChart1");
    var myChart1 = new Chart(ctx1, {
        type: 'pie',
        data: data,
        options: options
    });

    var ctx2 = document.getElementById("myChart2");
    var myChart2 = new Chart(ctx2, {
        type: 'doughnut',
        data: data,
        options: options
    });

    var data2 = {
        labels: [
            "Red",
            "Blue",
            "Yellow"
        ],
        datasets: [
            {
                data: randomData(5, 0, 100),
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#9c27b0",
                    "#4caf51",
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#9c27b0",
                    "#4caf51",
                ]
            }]
    };

    var options2 = {
        legend: {
            display: false,
        },
    };

    var ctx3 = document.getElementById("myChart3");
    var myChart3 = new Chart(ctx3, {
        type: 'pie',
        data: data2,
        options: options2
    });

    var ctx4 = document.getElementById("myChart4");
    var myChart4 = new Chart(ctx4, {
        type: 'doughnut',
        data: data2,
        options: options2
    });

    var data3 = {
        datasets: [{
            data: [
                11,
                16,
                7,
                3,
                14
            ],
            backgroundColor: [
                "#FF6384",
                "#4BC0C0",
                "#FFCE56",
                "#9c27b0",
                "#36A2EB"
            ],
            label: 'My dataset' // for legend
        }],
        labels: [
            "Red",
            "Green",
            "Yellow",
            "Grey",
            "Blue"
        ]
    };

    var ctx5 = document.getElementById("myChart5");
    var myChart5 = new Chart(ctx5, {
        type: 'polarArea',
        data: data3,
        options: {}
    });

    var data4 = {
    datasets: [
        {
            label: 'First Dataset',
            data: [
                {
                    x: randNum(0, 20),
                    y: randNum(0, 40),
                    r: randNum(5, 20)
                },
                {
                    x: randNum(0, 20),
                    y: randNum(0, 40),
                    r: randNum(5, 20)
                },
                {
                    x: randNum(0, 20),
                    y: randNum(0, 40),
                    r: randNum(5, 20)
                },
                {
                    x: randNum(0, 20),
                    y: randNum(0, 40),
                    r: randNum(5, 20)
                },
                {
                    x: randNum(0, 20),
                    y: randNum(0, 40),
                    r: randNum(5, 20)
                },
                {
                    x: randNum(0, 20),
                    y: randNum(0, 40),
                    r: randNum(5, 20)
                },
                {
                    x: randNum(0, 20),
                    y: randNum(0, 40),
                    r: randNum(5, 20)
                },
                {
                    x: randNum(0, 20),
                    y: randNum(0, 40),
                    r: randNum(5, 20)
                },
                {
                    x: randNum(0, 20),
                    y: randNum(0, 40),
                    r: randNum(5, 20)
                },
                {
                    x: randNum(0, 20),
                    y: randNum(0, 40),
                    r: randNum(5, 20)
                },
                {
                    x: randNum(0, 20),
                    y: randNum(0, 40),
                    r: randNum(5, 20)
                },
                {
                    x: randNum(0, 20),
                    y: randNum(0, 40),
                    r: randNum(5, 20)
                },
                {
                    x: randNum(0, 20),
                    y: randNum(0, 40),
                    r: randNum(5, 20)
                },
                {
                    x: randNum(0, 20),
                    y: randNum(0, 40),
                    r: randNum(5, 20)
                },
                {
                    x: randNum(0, 20),
                    y: randNum(0, 40),
                    r: randNum(5, 20)
                },
                {
                    x: randNum(0, 20),
                    y: randNum(0, 40),
                    r: randNum(5, 20)
                },
                {
                    x: randNum(0, 20),
                    y: randNum(0, 40),
                    r: randNum(5, 20)
                },
                {
                    x: randNum(0, 20),
                    y: randNum(0, 40),
                    r: randNum(5, 20)
                },
                {
                    x: randNum(0, 20),
                    y: randNum(0, 40),
                    r: randNum(5, 20)
                },
                {
                    x: randNum(0, 20),
                    y: randNum(0, 40),
                    r: randNum(5, 20)
                },
                {
                    x: randNum(0, 20),
                    y: randNum(0, 40),
                    r: randNum(5, 20)
                },
                {
                    x: randNum(0, 20),
                    y: randNum(0, 40),
                    r: randNum(5, 20)
                },
                {
                    x: randNum(0, 20),
                    y: randNum(0, 40),
                    r: randNum(5, 20)
                },
                {
                    x: randNum(0, 20),
                    y: randNum(0, 40),
                    r: randNum(5, 20)
                },
                {
                    x: randNum(0, 20),
                    y: randNum(0, 40),
                    r: randNum(5, 20)
                },
            ],
            backgroundColor:"#FF6384",
            hoverBackgroundColor: "#FF6384",
        }]
};

    var ctx6 = document.getElementById("myChart6");
    var myChart6 = new Chart(ctx6, {
        type: 'bubble',
        data: data4,
        options: {}
    });

    var data5 = {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [
            {
                label: "User 1",
                backgroundColor: "rgba(79,181,198,0.2)",
                borderColor: "rgba(79,181,198,1)",
                pointBackgroundColor: "rgba(79,181,198,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(79,181,198,1)",
                data: [65, 59, 90, 81, 56, 55, 40]
            },
            {
                label: "User 2",
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                pointBackgroundColor: "rgba(255,99,132,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(255,99,132,1)",
                data: [28, 48, 40, 19, 96, 27, 100]
            },
            {
                label: "User 3",
                backgroundColor: "rgba(100,150,0,0.2)",
                borderColor: "rgba(100,150,0,1)",
                pointBackgroundColor: "rgba(100,150,0,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(100,150,132,1)",
                data: [randNum(0,100), randNum(0,100), randNum(0,100), randNum(0,100), randNum(0,100), randNum(0,100), randNum(0,100),]
            }
        ]
    };

    var ctx7 = document.getElementById("myChart7");
    var myChart7 = new Chart(ctx7, {
        type: 'radar',
        data: data5,
        options: {}
    });

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
