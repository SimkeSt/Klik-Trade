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
import React from "react";
import { Helmet } from "react-helmet";
import classNames from "classnames";
// react plugin used to create charts
import { Bar } from "react-chartjs-2";

// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col,
    ButtonGroup,
    Button
} from "reactstrap";


export default function Dashboard(props) {
    const colors = {
        success: "#00e147",
        danger: "#ff274f",
        info: "#fd5d93"
    }

    const labels = [53,-34,31,14,-78,59,-40,44,-41,-32,19,0,76,-13,33,99,-54,-35,48,-24,68,25,-28,11,-88,51,22,-86,9,-52,69,-98,74,61,87,-7,73,15,63,-3,97,60,-23,16,38,-26,80,64,-17,39,-58,-4,-36,57,-89,-94,-5,65,-18,93,10,-67,85,72,-55,96,-91,75,81,-100,-43,-77,-30,-66,-56,27,-49,46,-8,-45,29,-92,84,6,-2,-79,95,-70,12,21,62,-90,-82,50,42,-37,-20,-83,71,47];
    let data = [53,-34,31,14,-78,59,-40,44,-41,-32,19,0,76,-13,33,99,-54,-35,48,-24,68,25,-28,11,-88,51,22,-86,9,-52,69,-98,74,61,87,-7,73,15,63,-3,97,60,-23,16,38,-26,80,64,-17,39,-58,-4,-36,57,-89,-94,-5,65,-18,93,10,-67,85,72,-55,96,-91,75,81,-100,-43,-77,-30,-66,-56,27,-49,46,-8,-45,29,-92,84,6,-2,-79,95,-70,12,21,62,-90,-82,50,42,-37,-20,-83,71,47];

    // data1, data2, data3...

    const [barData, setBarData] = React.useState("data1");
    const setData = (name) => {
        setBarData(name);
    };

    function setBackgroundColor(){
        let bgColors = [];
        data.map((num, index) => {
            if(index>0) bgColors.push(data[index-1]<num ? colors.success : colors.danger);

            else bgColors.push(num<0 ? colors.danger : colors.success);
        });
        return bgColors;
    }

    const barChart = {
        // data1, data2, data3... 
        
        data1: (canvas) => {
            const ctx = canvas.getContext("2d");
            const gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
        
            gradientStroke.addColorStop(1, "rgba(72,72,176,0.1)");
            gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
            gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors
        
            return{
                labels: labels,
                datasets: [
                    {
                        fill: true,
                        backgroundColor: setBackgroundColor(),
                        borderColor: null,
                        data: data
                    }
                ]
            };
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            maintainAspectRatio: false,
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
                y: {
                    grid: {
                        drawBorder: false,
                        color: "rgba(255, 255, 255, 0.2)",
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        suggestedMin: 60,
                        suggestedMax: 120,
                        padding: 20,
                        color: "#9e9e9e"
                    }
                },
                x: {
                    grid: {
                        drawBorder: false,
                        color: "rgba(255, 255, 255, 0.2)",
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        padding: 20,
                        color: "#9e9e9e"
                    }
                }
            }
        }
    }
    return(<>
        <Helmet>
            <title>Dashboard | Klik-Trade</title>
        </Helmet>
        <div className="content">
            <Card className="card-chart">
                <CardHeader>
                    <Row>
                    <Col className="text-left" sm="6">
                        <h5 className="card-category">Google Inc.</h5>
                        <CardTitle tag="h2">GOOG</CardTitle>
                    </Col>
                    <Col sm="6">
                        <ButtonGroup className="btn-group-toggle float-right" data-toggle="buttons">
                            <Button
                                tag="label"
                                className={classNames("btn-simple", {
                                    active: barData === "data1"
                                })}
                                color="info"
                                id="0"
                                size="sm"
                                onClick={() => setData("data1")}
                            >
                                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                1 day
                                </span>
                                <span className="d-block d-sm-none">
                                    <i className="tim-icons icon-single-02" />
                                </span>
                            </Button>
                            <Button
                                color="info"
                                id="1"
                                size="sm"
                                tag="label"
                                className={classNames("btn-simple", {
                                    active: barData === "data2"
                                })}
                                onClick={() => setData("data2")}
                            >
                                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                2 days
                                </span>
                                <span className="d-block d-sm-none">
                                    <i className="tim-icons icon-gift-2" />
                                </span>
                            </Button>
                            <Button
                                color="info"
                                id="2"
                                size="sm"
                                tag="label"
                                className={classNames("btn-simple", {
                                    active: barData === "data3"
                                })}
                                onClick={() => setData("data3")}
                            >
                                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                3 days
                                </span>
                                <span className="d-block d-sm-none">
                                    <i className="tim-icons icon-tap-02" />
                                </span>
                            </Button>
                            <Button
                                color="info"
                                id="3"
                                size="sm"
                                tag="label"
                                className={classNames("btn-simple", {
                                    active: barData === "data4"
                                })}
                                onClick={() => setData("data4")}
                            >
                                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                7 days
                                </span>
                                <span className="d-block d-sm-none">
                                    <i className="tim-icons icon-tap-02" />
                                </span>
                            </Button>
                        </ButtonGroup>
                    </Col>
                    </Row>
                </CardHeader>
                <CardBody>
                    <div className="chart-area">
                        <Bar
                            data={barChart[barData]}
                            options={barChart.options}
                        />
                    </div>
                </CardBody>
            </Card>
        </div>
    </>);
}