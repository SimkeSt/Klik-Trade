/*!

=========================================================
* Argon Design System React - v1.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
// nodejs library that concatenates classes
import classnames from "classnames";

import{
	Badge,
	Button,
	Navbar,
	Nav,
	NavbarBrand,
	NavItem,
	Card,
	CardBody,
	CardImg,
	FormGroup,
	Input,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
	Container,
	Row,
	Col
} from "reactstrap";

// core components
// import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
// import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
	state = {};
	componentDidMount() {
		document.documentElement.scrollTop = 0;
		document.scrollingElement.scrollTop = 0;
		this.refs.main.scrollTop = 0;
	}
	render(){
		return(<>
			<Helmet>
				<title>Make a better financial decision | Start for free | Klik-Trade</title>
			</Helmet>
			<main ref="main">
				<div className="position-relative">
				{/* shape Hero */}
					<section className="section section-lg section-shaped pb-250 mb-100">
						<Navbar className="position-relative" style={{marginTop: "-75px", marginBottom: "50px"}}>   
							<Container className="d-flex justify-content-between g-lg-3">
								<NavbarBrand to="/" tag={Link}>
									<img alt="klik-trade-logo" src={require("../assets/img/klik-trade-logo_dark.png")} height={500} draggable={false} />
								</NavbarBrand>
								<Nav className="align-items-center">
									<NavItem>
										<Button color="link" href="/login">Login</Button>
									</NavItem>
									<NavItem>
										<Button color="success" href="/register">REGISTER</Button>
									</NavItem>
								</Nav>
							</Container>
						</Navbar>
						<div className="shape shape-style-1 shape-default">
						{/* <span />
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
						<span /> */}
						</div>
						<Container className="py-lg-md d-flex justify-content-center">
							<Row>
								<Col lg="7" className="mx-auto text-center">
									<h1 className="display-3 text-white">
										<b>Secure</b> your investments with{" "}
										<span style={{color: "hsl(218, 81%, 75%)"}}>Artificial Intelligence</span>
									</h1>
									<p className="text-gray">
									For ambitious people around the world,<br/>
									Klik-Trade makes investing easier than before.
									</p>
									<Button color="success" className="mt-5">Get started</Button>
									<p className="start-caret mt-4">&#x25BC;</p>
								</Col>
							</Row>
						</Container>
						{/* SVG separator */}
						{/* <div className="separator separator-bottom separator-skew">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								preserveAspectRatio="none"
								version="1.1"
								viewBox="0 0 2560 100"
								x="0"
								y="0"
							>
								<polygon
								className="fill-white"
								points="2560 0 2560 100 0 100"
								/>
							</svg>
						</div> */}
					</section>
				{/* 1st Hero Variation */}
				</div>
				<section className="section section-lg" style={{marginTop: "-250px"}}>
					<Container className="d-flex justify-content-center"> 
						<Row>
							<Col>
								<img
									alt="..."
									src={require("../assets/img/ss1.png")}
									width={1080}
								/>
							</Col>
						</Row>
					</Container>
				</section>
				<section className="section section-lg">
					<Container>
						<Row className="row-grid align-items-center">
							<Col className="order-md-2" md="5">
								<img
								alt="..."
								className="img-fluid floating"
								src={require("../assets/img/affiliate.png")}
								width={480}
								/>
							</Col>
							<Col className="order-md-1" md="7">
								<div className="pr-md-5">
									<div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
										<i className="ni ni-settings-gear-65" />
									</div>
									<h2>Earn through affiliate</h2>
									<p>
									Make data-driven investment decisions with customizable forecasts for over 50,000 financial products.
									</p>
									<ul className="list-unstyled mt-5">
										<li className="py-2">
											<div className="d-flex align-items-center">
												<div>
													<Badge
														className="badge-circle mr-3"
														color="success"
													>
														<i className="ni ni-settings-gear-65" />
													</Badge>
												</div>
												<div>
													<h6 className="mb-0">
														Carefully crafted components
													</h6>
												</div>
											</div>
										</li>
										<li className="py-2">
											<div className="d-flex align-items-center">
												<div>
													<Badge
														className="badge-circle mr-3"
														color="success"
													>
														<i className="ni ni-html5" />
													</Badge>
												</div>
												<div>
													<h6 className="mb-0">Amazing page examples</h6>
												</div>
											</div>
										</li>
										<li className="py-2">
											<div className="d-flex align-items-center">
												<div>
													<Badge
														className="badge-circle mr-3"
														color="success"
													>
														<i className="ni ni-satisfied" />
													</Badge>
												</div>
												<div>
													<h6 className="mb-0">
														Super friendly support team
													</h6>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</Col>
						</Row>
					</Container>
				</section>

				{/* <section className="section bg-secondary">
				<Container>
					<Row className="row-grid align-items-center">
					<Col md="6">
						<Card className="bg-default shadow border-0">
						<CardImg
							alt="..."
						//   src={require("assets/img/theme/img-1-1200x1000.jpg")}
							top
						/>
						<blockquote className="card-blockquote">
							<svg
							xmlns="http://www.w3.org/2000/svg"
							className="svg-bg"
							preserveAspectRatio="none"
							viewBox="0 0 583 95"
							>
							<polygon
								className="fill-default"
								points="0,52 583,95 0,95"
							/>
							<polygon
								className="fill-default"
								opacity=".2"
								points="0,42 583,95 683,0 0,95"
							/>
							</svg>
							<h4 className="display-3 font-weight-bold text-white">
							Design System
							</h4>
							<p className="lead text-italic text-white">
							The Arctic Ocean freezes every winter and much of the
							sea-ice then thaws every summer, and that process will
							continue whatever happens.
							</p>
						</blockquote>
						</Card>
					</Col>
					<Col md="6">
						<div className="pl-md-5">
						<div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
							<i className="ni ni-settings" />
						</div>
						<h3>Our customers</h3>
						<p className="lead">
							Don't let your uses guess by attaching tooltips and
							popoves to any element. Just make sure you enable them
							first via JavaScript.
						</p>
						<p>
							The kit comes with three pre-built pages to help you get
							started faster. You can change the text and images and
							you're good to go.
						</p>
						<p>
							The kit comes with three pre-built pages to help you get
							started faster. You can change the text and images and
							you're good to go.
						</p>
						<a
							className="font-weight-bold text-warning mt-5"
							href="#pablo"
							onClick={(e) => e.preventDefault()}
						>
							A beautiful UI Kit for impactful websites
						</a>
						</div>
					</Col>
					</Row>
				</Container>
				</section>
				<section className="section pb-0 bg-gradient-warning">
				<Container>
					<Row className="row-grid align-items-center">
					<Col className="order-lg-2 ml-lg-auto" md="6">
						<div className="position-relative pl-md-5">
						<img
							alt="..."
							className="img-center img-fluid"
						//   src={require("assets/img/ill/ill-2.svg")}
						/>
						</div>
					</Col>
					<Col className="order-lg-1" lg="6">
						<div className="d-flex px-3">
						<div>
							<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
							<i className="ni ni-building text-primary" />
							</div>
						</div>
						<div className="pl-4">
							<h4 className="display-3 text-white">Modern Interface</h4>
							<p className="text-white">
							The Arctic Ocean freezes every winter and much of the
							sea-ice then thaws every summer, and that process will
							continue whatever.
							</p>
						</div>
						</div>
						<Card className="shadow shadow-lg--hover mt-5">
						<CardBody>
							<div className="d-flex px-3">
							<div>
								<div className="icon icon-shape bg-gradient-success rounded-circle text-white">
								<i className="ni ni-satisfied" />
								</div>
							</div>
							<div className="pl-4">
								<h5 className="title text-success">
								Awesome Support
								</h5>
								<p>
								The Arctic Ocean freezes every winter and much of
								the sea-ice then thaws every summer, and that
								process will continue whatever.
								</p>
								<a
								className="text-success"
								href="#pablo"
								onClick={(e) => e.preventDefault()}
								>
								Learn more
								</a>
							</div>
							</div>
						</CardBody>
						</Card>
						<Card className="shadow shadow-lg--hover mt-5">
						<CardBody>
							<div className="d-flex px-3">
							<div>
								<div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
								<i className="ni ni-active-40" />
								</div>
							</div>
							<div className="pl-4">
								<h5 className="title text-warning">
								Modular Components
								</h5>
								<p>
								The Arctic Ocean freezes every winter and much of
								the sea-ice then thaws every summer, and that
								process will continue whatever.
								</p>
								<a
								className="text-warning"
								href="#pablo"
								onClick={(e) => e.preventDefault()}
								>
								Learn more
								</a>
							</div>
							</div>
						</CardBody>
						</Card>
					</Col>
					</Row>
				</Container>

				<div className="separator separator-bottom separator-skew zindex-100">
					<svg
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
					version="1.1"
					viewBox="0 0 2560 100"
					x="0"
					y="0"
					>
					<polygon
						className="fill-white"
						points="2560 0 2560 100 0 100"
					/>
					</svg>
				</div>
				</section>

				<section className="section section-lg pt-0">
				<Container>
					<Card className="bg-gradient-warning shadow-lg border-0">
					<div className="p-5">
						<Row className="align-items-center">
						<Col lg="8">
							<h3 className="text-white">
							We made website building easier for you.
							</h3>
							<p className="lead text-white mt-3">
							I will be the leader of a company that ends up being
							worth billions of dollars, because I got the answers. I
							understand culture.
							</p>
						</Col>
						<Col className="ml-lg-auto" lg="3">
							<Button
							block
							className="btn-white"
							color="default"
							href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
							size="lg"
							>
							Download React
							</Button>
						</Col>
						</Row>
					</div>
					</Card>
				</Container>
				</section> */}
				<section className="section section-lg bg-gradient-default">
					<Container className="pt-lg pb-300">
						<Row className="text-center justify-content-center">
							<Col lg="10">
								<h2 className="display-3 text-white">With Klik-Trade premium account you'll be able to</h2>
							</Col>
						</Row>
						<Row className="row-grid text-center mt-5">
							<Col lg="4">
								<i className="fa-solid fa-circle-check"></i>
								<p className="text-white mt-3">
								access 7 Days Premium Forecasts for over 50,000 financial products
								</p>
							</Col>
							<Col lg="4">
								<i className="fa-solid fa-circle-check"></i>
								<p className="text-white mt-3">
								get early access to our new features so you can stay ahead of the market
								</p>
							</Col>
							<Col lg="4">
								<i className="fa-solid fa-circle-check"></i>
								<p className="text-white mt-3">
								get rid of all the ads on the website (so you can browse without interruption)
								</p>
							</Col>
						</Row>
						<Row>
							<Col className="text-center mx-auto" md="12">
								<Button size="lg" color="primary" className="mt-lg">Start free trial</Button>
							</Col>
						</Row>
					</Container>
					{/* SVG separator */}
					<div className="separator separator-bottom separator-skew zindex-100">
						<svg
						xmlns="http://www.w3.org/2000/svg"
						preserveAspectRatio="none"
						version="1.1"
						viewBox="0 0 2560 100"
						x="0"
						y="0"
						>
							<polygon
								className="fill-white"
								points="2560 0 2560 100 0 100"
							/>
						</svg>
					</div>
				</section>
				{/* <Download /> */}
			</main>
			{/* <CardsFooter /> */}
		</>);
	}
}

export default Landing;
