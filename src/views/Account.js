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

// reactstrap components
import{
    Button,
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    CardFooter,
    CardText,
    Modal,
    Table,
    Label,
    FormGroup,
    Form,
    Input,
    Row,
    Col
} from "reactstrap";

export default function Account() {
    const [modal, setModal] = React.useState(false);
    const toggleModal = () => setModal(!modal);

    return(<>
        <div className="content">
            <Card className="card-user">
                <CardBody>
                <CardText />
                <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                </div>
                <div className="card-description">
                    <div className="text-center">
                        <Label>Balance</Label>
                        <h3 className="title">$0</h3>
                    </div>
                </div>
                </CardBody>
                <CardFooter className="text-center">
                    <Button color="primary" onClick={toggleModal}>Create Affiliate Link</Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle tag="h4">Your referents</CardTitle>
                </CardHeader>
                <CardBody>
                    <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                        <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th>City</th>
                        <th className="text-center">Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Dakota Rice</td>
                        <td>Niger</td>
                        <td>Oud-Turnhout</td>
                        <td className="text-center">$36,738</td>
                        </tr>
                        <tr>
                        <td>Minerva Hooper</td>
                        <td>Curaçao</td>
                        <td>Sinaai-Waas</td>
                        <td className="text-center">$23,789</td>
                        </tr>
                        <tr>
                        <td>Sage Rodriguez</td>
                        <td>Netherlands</td>
                        <td>Baileux</td>
                        <td className="text-center">$56,142</td>
                        </tr>
                        <tr>
                        <td>Philip Chaney</td>
                        <td>Korea, South</td>
                        <td>Overland Park</td>
                        <td className="text-center">$38,735</td>
                        </tr>
                        <tr>
                        <td>Doris Greene</td>
                        <td>Malawi</td>
                        <td>Feldkirchen in Kärnten</td>
                        <td className="text-center">$63,542</td>
                        </tr>
                        <tr>
                        <td>Mason Porter</td>
                        <td>Chile</td>
                        <td>Gloucester</td>
                        <td className="text-center">$78,615</td>
                        </tr>
                        <tr>
                        <td>Jon Porter</td>
                        <td>Portugal</td>
                        <td>Gloucester</td>
                        <td className="text-center">$98,615</td>
                        </tr>
                    </tbody>
                    </Table>
                </CardBody>
            </Card>
            <Modal isOpen={modal} toggle={toggleModal} keyboard={true}>
                <div>jeajfsa</div>
            </Modal>
        </div>
    </>);
}