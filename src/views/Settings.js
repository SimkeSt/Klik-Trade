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
import {
    Dropdown,
    Badge,
    Button,
    Card,
    CardHeader,
    CardBody,
    Row,
    Col,
    CardTitle,
    CardSubtitle,
} from "reactstrap";

import { AppearanceContext, themes, colors } from "../contexts/AppearanceContext";
import { LanguageContext, languages } from "contexts/LanguageContext";

function Settings(props) {
    return (
        <div className="content">
        <LanguageContext.Consumer>
        {({ content, changeLanguage }) => (
            content?.settings && 
            (<>
                <Row>
                    <Col md="6">
                        <Card className="px-2">
                            <CardHeader>
                                <CardTitle>{content.settings.userSettings.title}</CardTitle>
                            </CardHeader>
                            <CardBody>

                            </CardBody>
                        </Card>
                        <Card className="px-2">
                            <CardHeader>
                                <CardTitle>{content.settings.websiteSettings.title}</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <h3 className="title">{content.settings.websiteSettings.appearance.title}</h3>
                                <AppearanceContext.Consumer>
                                {({ changeTheme, changeColor }) => (
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
                                    <br/>
                                    <h5 className="subtitle">{content.settings.websiteSettings.appearance.accentColor}</h5>
                                    <div className="color-select d-flex justify-content-start">                                        
                                        <Button
                                            color="primary"
                                            className="active"
                                            onClick={() => {changeColor(colors.primary)}}
                                        />{" "}
                                        <Button 
                                            color="info"
                                            onClick={() => changeColor(colors.blue)}
                                        />{" "}
                                        <Button 
                                            color="success"
                                            onClick={() => changeColor(colors.green)}
                                        />{" "}
                                    </div>
                                </>
                                )}
                                </AppearanceContext.Consumer>
                            </CardBody>
                            <CardBody>
                                <h3 className="title">{content.settings.websiteSettings.notifications.title}</h3>
                                <div className="radio-option">
                                    <h5 className="subtitle">Enable Desktop Notifications</h5>
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
                                <CardTitle>{content.settings.billingSettings.title}</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <h3 className="title">{content.settings.billingSettings.paymentMethods}</h3>
                                <Row>
                                    <Col>
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
            </>)
        )}
        </LanguageContext.Consumer>
        </div>
    );
}

export default Settings;
