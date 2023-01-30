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

// reactstrap components
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Card,
    CardHeader,
    CardBody,
    Row,
    Col,
    CardTitle,
    Input,
    Label,
    UncontrolledTooltip,
} from "reactstrap";

import { AppearanceContext, themes } from "../contexts/AppearanceContext";
import { LanguageContext, languages } from "contexts/LanguageContext";

export default function Settings(props) {
    const [modal, setModal] = React.useState(false);
    const [nameModal, setNameModal] = React.useState(false);
    const [mailModal, setMailModal] = React.useState(false);
    const [phoneModal, setPhoneModal] = React.useState(false);
    const [cardModal, setCardModal] = React.useState(false);
    const [payPalModal, setPayPalModal] = React.useState(false);
    const [passModal, setPassModal] = React.useState(false);
    const [deleteModal, setDeleteModal] = React.useState(false);
  
    const toggleModal = () => {
        setNameModal(false);
        setMailModal(false);
        setPhoneModal(false);
        setPassModal(false);
        setDeleteModal(false);
        setCardModal(false);
        setPayPalModal(false);
        setModal(!modal);
    }
    const toggleName = () => {
        setModal(true);
        setNameModal(true);
    }
    const toggleMail = () => {
        setModal(true);
        setMailModal(true);
    }
    const togglePhone = () => {
        setModal(true);
        setPhoneModal(true);
    }
    const togglePass = () => {
        setModal(true);
        setPassModal(true);
    }
    const toggleDelete = () => {
        setModal(true);
        setDeleteModal(true);
    }   

    const toggleCard = () => setCardModal(!cardModal);
    const togglePayPal = () => setPayPalModal(!payPalModal);

    return(<>
        <Helmet>
            <title>Settings | Klik-Trade</title>
        </Helmet>
        <div className="content">
        <LanguageContext.Consumer>
        {({ content, changeLanguage }) => (
            content?.settings && 
            (<>
                <Row>
                    <Col md="6">
                        <Card className="px-2">
                            <CardHeader>
                                <CardTitle>{content.settings.userSettings.title.toUpperCase()}</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <h3 className="title">My account</h3>
                                <Row>
                                    <Col>
                                        <Label>Username</Label>
                                        <p>velickovicdj</p>
                                    </Col>
                                    <Button color="secondary" onClick={toggleName}>Edit</Button>
                                </Row>
                                <Row>
                                    <Col>
                                        <Label>Email</Label>
                                        <p>djolevelicko@gmail.com</p>
                                    </Col>
                                    <Button color="secondary" onClick={toggleMail}>Edit</Button>
                                </Row>
                                <Row>
                                    <Col>
                                        <Label>Phone number</Label>
                                        <p>+381605467467</p>
                                    </Col>
                                    <Button color="secondary" onClick={togglePhone}>Edit</Button>
                                </Row>
                            </CardBody>
                            <CardBody>
                                <h3 className="title">Password and Authentication</h3>
                                <Row>
                                    <Col><Button color="primary" onClick={togglePass}>Change Password</Button></Col>
                                </Row>
                                <Row>
                                    <Col><h5 className="subtitle">Account Removal</h5></Col>
                                </Row>
                                <Row>
                                    <Col><p>Removing your account means you cannot recover after taking this action!</p></Col>
                                </Row>
                                <Row>
                                    <Col><Button color="danger" onClick={toggleDelete}>Delete Account</Button></Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <Card className="px-2">
                            <CardHeader>
                                <CardTitle>{content.settings.websiteSettings.title.toUpperCase()}</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <h3 className="title">{content.settings.websiteSettings.appearance.title}</h3>
                                <AppearanceContext.Consumer>
                                {({ changeTheme }) => (
                                <> 
                                    <h5 className="subtitle">{content.settings.websiteSettings.appearance.theme.title}</h5>
                                    <div className="radio-select">
                                        <label className="radio-option" onClick={() => changeTheme(themes.light)}>
                                            <div>
                                                <input name="radan" type="radio" />{" "}<span>{content.settings.websiteSettings.appearance.theme.light}</span>
                                            </div>
                                        </label>
                                        <label className="radio-option" onClick={() => changeTheme(themes.dark)}>
                                            <div>
                                                <input name="radan" type="radio" />{" "}<span>{content.settings.websiteSettings.appearance.theme.dark}</span>
                                            </div>
                                        </label>
                                        <label className="radio-option" onClick={() => changeTheme(themes.system)}>
                                            <div>
                                                <input name="radan" type="radio" />{" "}<span>{content.settings.websiteSettings.appearance.theme.system}</span>
                                            </div>
                                        </label>
                                    </div>
                                </>
                                )}
                                </AppearanceContext.Consumer>
                            </CardBody>
                            <CardBody>
                                <h3 className="title">{content.settings.websiteSettings.notifications.title}</h3>
                                <div className="radio-option">
                                    {/* <h5 className="subtitle">Enable Desktop Notifications</h5> */}
                                    <input type="checkbox"/>
                                </div>
                            </CardBody>
                            <CardBody>
                                <h3 className="title">{content.settings.websiteSettings.language.title}</h3>
                                <h5 className="subtitle">{content.settings.websiteSettings.language.selectLanguage.title}</h5>
                                <div className="radio-select">
                                    <label className="radio-option" onChange={() => changeLanguage(languages.de)}>
                                        <div>
                                            <input name="radan" type="radio" />{" "}<span>Deutsch</span>
                                        </div>
                                        <span>{content.settings.websiteSettings.language.selectLanguage.de}{" "}<i className="flag flag-de fa-xs"></i></span>
                                    </label>
                                    <label className="radio-option" onChange={() => changeLanguage(languages.en)}>
                                        <div>
                                            <input name="radan" type="radio" />{" "}<span>English</span>
                                        </div>
                                        <span>{content.settings.websiteSettings.language.selectLanguage.en}{" "}<i className="flag flag-us"></i></span>
                                    </label>
                                    <label className="radio-option" onChange={() => changeLanguage(languages.sr)}>
                                        <div>
                                            <input name="radan" type="radio" />{" "}<span>Српски</span>
                                        </div>
                                        <span>{content.settings.websiteSettings.language.selectLanguage.sr}{" "}<i className="flag flag-serbia"></i></span>
                                    </label>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card className="px-2">
                            <CardHeader>
                                <CardTitle>{content.settings.billingSettings.title.toUpperCase()}</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <h3 className="title">
                                    <i className="fa-solid fa-lock" id="lock"></i>
                                    {" "}{content.settings.billingSettings.paymentMethods}
                                    <UncontrolledTooltip
                                        autohide={true}
                                        placement="left"
                                        target="lock"
                                    >
                                        Your payment methods are encrypted and stored with a secure payment processing service.
                                    </UncontrolledTooltip>
                                </h3>
                                <Row>
                                    <Col md="6">
                                        <p>No payment method saved</p>
                                    </Col>
                                    <Col md="6">
                                        <Button color="primary" onClick={toggleModal}>Add payment method</Button>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardBody>
                                <h3 className="title">{content.settings.billingSettings.transactionHistory}</h3>
                                <Row>
                                    <Col>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Modal isOpen={modal} toggle={toggleModal} keyboard={true}>
                    <ModalHeader className="modal-title" toggle={toggleModal}>
                        {nameModal ? "Change your username"
                        : mailModal ? "Change your email" 
                        : phoneModal ? "Change your phone number" 
                        : passModal ? "Update your password"
                        : deleteModal ? "Delete account"
                        : "Add a new payment method"}
                    </ModalHeader>
                    <ModalBody>
                        {nameModal ? (<>
                            <Row>
                                <Col>
                                    <Label>Username</Label>
                                    <Input type="text" defaultValue="velickovicdj" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Label>Current Password</Label>
                                    <Input type="password" />
                                </Col>
                            </Row>
                        </>) : mailModal ? (<>

                        </>) : phoneModal ? (<>
                            <Row>
                                <Col><Button>test</Button></Col>
                                <Col>
                                    <Input type="text" />
                                </Col>
                            </Row>
                        </>) : passModal ? (<>
                            <Row>
                                <Col>
                                    <Label>Current Password</Label>
                                    <Input type="password" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Label>New Password</Label>
                                    <Input type="password" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Label>Confirm New Password</Label>
                                    <Input type="password" />
                                </Col>
                            </Row>
                        </>) : deleteModal ? (<>
                            Are you sure you want to continue? This action can't be undone!
                        </>) : cardModal ? (<> 
                            <Row>
                                <Col>
                                    <Label>Credit Card number</Label>
                                    <Input type="text" placeholder="Card Number" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Label>Expiration date</Label>
                                    <Input type="text" placeholder="MM/YY" />
                                </Col>
                                <Col>
                                    <Label>CVC</Label>
                                    <Input type="text" placeholder="Security Code" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Label>Name on the card</Label>
                                    <Input type="text" placeholder="Name" />
                                </Col>
                            </Row>
                        </>) : payPalModal ? (<>
                            <Row>
                                <Col>
                                    <Label>PayPal Account</Label>
                                    <Input type="text" placeholder="Confirm PayPal details in your browser." />
                                </Col>
                            </Row>
                        </>) : (<>
                            <Label>SELECT PAYMENT TYPE</Label><br />
                            <div className="d-flex justify-content-center">
                                <Button color="primary" onClick={toggleCard}>
                                    <i className="fa-solid fa-credit-card"></i>{" "}
                                    Card
                                </Button>
                                <Button color="primary" onClick={togglePayPal}>
                                    <i className="fa-brands fa-paypal"></i>{" "}
                                    Paypal
                                </Button>
                            </div>
                        </>)}
                    </ModalBody>
                    {(nameModal || mailModal || phoneModal || passModal || deleteModal || cardModal || payPalModal) ? (<>
                        <ModalFooter className="p-4">
                            {(nameModal || mailModal || phoneModal || passModal) ? (<>
                                <p onClick={toggleModal}>
                                    Cancel
                                </p>
                                <Button color="primary" onClick={toggleModal}>
                                    Done
                                </Button>
                            </>) : deleteModal ? (<>
                                <p onClick={toggleModal}>
                                    Cancel
                                </p>
                                <Button color="danger" onClick={toggleModal}>
                                    Delete
                                </Button>
                            </>) : cardModal ? (<>
                                <p onClick={toggleCard}>
                                    Back
                                </p>
                                <Button color="primary" onClick={toggleCard} disabled>
                                    Next
                                </Button>
                            </>) : (<>
                                <p onClick={togglePayPal}>
                                    Back
                                </p>
                                <Button color="primary" onClick={togglePayPal}>
                                    Connect to PayPal
                                </Button>
                            </>)}
                        </ModalFooter>
                    </>) : null}
                </Modal>
            </>)
        )}
        </LanguageContext.Consumer>
        </div>
    </>);
}