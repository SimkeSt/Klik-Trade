/*!

=========================================================
* Black Dashboard React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

const { Chart } = require("react-chartjs-2");

let barChart = {
    data: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(72,72,176,0.1)");
    gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
    gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors

    return {
        labels: ["USA", "GER", "AUS", "UK", "RO", "BR", "SRB", "SLO", "BIH", "GR", "HR", "I", "USA", "GER", "AUS", "UK", "RO", "BR", "SRB", "SLO", "BIH", "GR", "HR", "I", "USA", "GER", "AUS", "UK", "RO", "BR", "SRB", "SLO", "BIH", "GR", "HR", "I", "USA", "GER", "AUS", "UK", "RO", "BR", "SRB", "SLO", "BIH", "GR", "HR", "I"],
        datasets: [
        {
            label: "Countries",
            fill: true,
            backgroundColor: gradientStroke,
            hoverBackgroundColor: gradientStroke,
            borderColor: "#d048b6",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [53, 20, 10, 80, 100, 45, -80, 100, -70, 80, -120, 80, 53, 20, 10, 80, 100, 45, -80, 100, -70, 80, -120, 80, 53, 20, 10, 80, 100, 45, -80, 100, -70, 80, -120, 80, 53, 20, 10, 80, 100, 45, -80, 100, -70, 80, -120, 80]
        }
        ]
    };
    },
    options: {
    maintainAspectRatio: false,
    legend: {
        display: false
    },
    tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
    },
    responsive: true,
    scales: {
        yAxes: [
        {
            gridLines: {
            drawBorder: false,
            color: "rgba(225,78,202,0.1)",
            zeroLineColor: "transparent"
            },
            ticks: {
            suggestedMin: 60,
            suggestedMax: 120,
            padding: 20,
            fontColor: "#9e9e9e"
            }
        }
        ],
        xAxes: [
        {
            gridLines: {
            drawBorder: false,
            color: "rgba(225,78,202,0.1)",
            zeroLineColor: "transparent"
            },
            ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
            }
        }
        ]
    }
    }
};

// src/views/Dashboard.js
module.exports = barChart;
