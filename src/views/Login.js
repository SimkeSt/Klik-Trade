import React from "react";
import { Helmet } from "react-helmet";

import{
    Button,
    Container,
    Card,
    CardFooter,
    CardBody,
    Row,
    Col,
    Input,
    Label,
} from 'reactstrap';

import { AppearanceContext } from "contexts/AppearanceContext";

import logo_dark from "../assets/img/klik-trade-logo_dark.png";
import logo_white from "../assets/img/klik-trade-logo_white.png";

export default function Login(){
    const logo = {
        dark: logo_dark,
        white: logo_white
    }

    const [view, setView] = React.useState(window.location.pathname);

    const viewIsLogin = view === "/login";
    const viewIsRegister = view === "/register";

    const toggleView = () => {
        const updatedView = viewIsLogin ? "/register" : "/login";
        setView(updatedView);
    }
    
    return(<>
        <Helmet>
            <title>
                {viewIsLogin ? "Login" : "Register"}{" | Klik-Trade"}
            </title>
        </Helmet>
        <div className="logo-img py-3 px-5">
            <AppearanceContext.Consumer>
            {({ theme })=> (
                <a href="/">
                    <img src={theme === "dark" ? logo.dark : logo.white} alt="klik-trade-logo" draggable={false} height={60} />
                </a>
            )}    
            </AppearanceContext.Consumer>
        </div>
        <Container className="px-4 py-2 px-md-5 text-lg-start">
            <Row className='d-flex justify-content-center align items center'>
                <Col md="6" className="text-center">
                    <h1 className="my-5 display-5 fw-bold ls-tight" style={{color: "hsl(218, 81%, 95%)"}}>
                        Financial decisions <br/><span style={{color: "hsl(218, 81%, 75%)"}}>made easier</span>
                    </h1>
                    {/* <p className="mb-4 opacity-70" style={{color: "hsl(218, 81%, 85%)"}}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Temporibus, expedita iusto veniam atque, magni tempora mollitia
                    dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                    ab ipsum nisi dolorem modi. Quos?
                    </p> */}
                </Col>
            </Row>
            <Row className="d-flex justify-content-center align-items-center gx-lg-5 mb-5">
                <Col md="6">
                    <Card>
                        <CardBody className='d-flex flex-column'>
                            <h3 className="title text-center" style={{letterSpacing: '1px'}}>{viewIsLogin ? "Login to your account" : "Create your account"}</h3>
                            {viewIsRegister && 
                            <Row>
                                <Col>
                                    <Label>First name</Label>
                                    <Input type="text" />
                                </Col>
                                <Col>
                                    <Label>Last name</Label>
                                    <Input type="text" />
                                </Col>
                            </Row>
                            }
                            <Row>
                                <Col>
                                    <Label>Email address</Label>
                                    <Input type="text" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Label>Password</Label>
                                    <Input type="password" />
                                </Col>
                            </Row>
                            {viewIsRegister && 
                            <Row>
                            <Col>
                                <Label>Repeat password</Label>
                                <Input type="password" />
                            </Col>
                            </Row>}
                            {viewIsLogin && <a className="mb-3 large text-muted ml-0" href="#!">Forgot password?</a>}
                            <Button color="primary">{viewIsLogin ? "Login" : "Register"}</Button>
                        </CardBody>
                        <CardFooter>
                            <p className="d-flex flex-column justify-content-center align-items-center mb-4 pb-lg-2">{viewIsLogin ? "Don't have an account?" : "Already have an account?"}
                                <span className="text-muted" style={{cursor: "pointer"}} onClick={toggleView}>{" "}{viewIsLogin ? "Register here" : "Login"}</span>
                            </p>
                            <div className="d-flex flex-row justify-content-around">
                                <a href="/terms-and-conditions" className="small text-muted me-1">Terms and Conditions</a>
                                <a href="#!" className="small text-muted">Privacy policy</a>
                            </div>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>);
}