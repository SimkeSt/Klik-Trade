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
// react plugin used to create charts
import { Bar, Line } from "react-chartjs-2";

// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
} from "reactstrap";

// core components
import barChart from "variables/charts.js";

function Dashboard(props) {
    return(
    <>
    <div className="content">
        <Card className="card-chart">
            <CardHeader>
                <h5 className="card-category">Daily Sales</h5>
                <CardTitle tag="h3">
                    <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                    3,500€
                </CardTitle>
            </CardHeader>
            <CardBody>
                <div className="chart-area">
                    <Line
                        data={barChart.data}
                        options={barChart.options}
                    />
                </div>
            </CardBody>
        </Card>
    </div>
    </>
    );
}

export default Dashboard;