import React from "react";
import {
    Link
} from "react-router-dom";

import { Alert, FormGroup, Form, Button } from "react-bootstrap";

import apiFetch from "../utils/apiFetch";

class Auth extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <h1>Авторизация</h1>
                <hr/>
                <Form>
                    <FormGroup>
                        <Form.Control type={'text'} placeholder={"login"}/>
                    </FormGroup>
                    <FormGroup>
                        <Form.Control type={'password'} placeholder={"password"}/>
                    </FormGroup>
                    <FormGroup>
                        <Button>Войти</Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }

}

export default Auth;