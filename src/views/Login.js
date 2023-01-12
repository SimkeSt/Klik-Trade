import React from 'react';

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

import NavBar from "components/Navbar";

import { AppearanceContext } from "contexts/AppearanceContext";

import logo_dark from "../assets/img/klik-trade-logo_dark.png";
import logo_white from "../assets/img/klik-trade-logo_white.png";

export default function Login(){
    const logo = {
        dark: logo_dark,
        white: logo_white
    }

    const [login, setLogin] = React.useState(true);
    
    const toggleLogin = () => setLogin(!login);
  return(<>
    {/* <div className="logo">
        <a className="simple-text logo-mini" href="/" target="_blank">
            <div className="logo-img">
                <AppearanceContext.Consumer>
                {({ theme })=> (
                    <img src={theme === "dark" ? logo.dark : logo.white} alt="klik-trade-logo" draggable={false} />
                )}    
                </AppearanceContext.Consumer>
            </div>
        </a>
    </div> */}
    <Container className="px-4 py-5 px-md-5 text-lg-start my-5">
        <Row className="d-flex justify-content-center align-items-center gx-lg-5 mb-5">
            <Col md="4" className="text-center">
                <h1 className="my-5 display-5 fw-bold ls-tight" style={{color: "hsl(218, 81%, 95%)"}}>
                    The best offer <br/><span style={{color: "hsl(218, 81%, 75%)"}}>for your business</span>
                </h1>
                <p className="mb-4 opacity-70" style={{color: "hsl(218, 81%, 85%)"}}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                ab ipsum nisi dolorem modi. Quos?
                </p>
            </Col>
            <Col md="6">
                <Card>
                    <CardBody className='d-flex flex-column'>
                        <h3 className="title text-center" style={{letterSpacing: '1px'}}>{login && "Login to your account" || "Create your account"}</h3>
                        {!login && 
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
                                <Input type="text" />
                            </Col>
                        </Row>
                        {!login && 
                        <Row>
                        <Col>
                            <Label>Repeat password</Label>
                            <Input type="text" />
                        </Col>
                        </Row>}
                        {login && <a className="mb-3 large text-muted ml-0" href="#!">Forgot password?</a>}
                        <Button color="primary">{login && "Login" || "Register"}</Button>
                    </CardBody>
                    <CardFooter>
                        <p className="d-flex flex-column justify-content-center align-items-center mb-4 pb-lg-2">{login ? "Don't have an account?" : "Already have an account?"}
                            <span className="text-muted" style={{cursor: "pointer"}} onClick={toggleLogin}>{" "}{login ? "Register here" : "Login"}</span>
                        </p>
                        <div className="d-flex flex-row justify-content-around">
                            <a href="#!" className="small text-muted me-1">Terms of use.</a>
                            <a href="#!" className="small text-muted">Privacy policy</a>
                        </div>
                    </CardFooter>
                </Card>
            </Col>
        </Row>
    </Container>
    </>);
}