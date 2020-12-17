import React from "react";
import {
    Link
} from "react-router-dom";

import { Alert } from "react-bootstrap";

import apiFetch from "../utils/apiFetch";

class Contacts extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <h1>Контакты</h1>
                <hr/>
                <Alert theme="primary">
                    Связь с нами: support@rentcar.com
                </Alert>
            </div>
        );
    }

}

export default Contacts;