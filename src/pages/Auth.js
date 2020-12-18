import React from "react";
import {
    Link, withRouter
} from "react-router-dom";

import { Alert, FormGroup, Form, Button } from "react-bootstrap";

import apiFetch from "../utils/apiFetch";

class Auth extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: ""
        };
        this.tryAuth = this.tryAuth.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    tryAuth() {
        const login = this.state.login;
        const password = this.state.password;
        localStorage.setItem('login', login);
        localStorage.setItem('password', password);
        const { match, history } = this.props;
        apiFetch('auth.check', {})
            .then(result => {
                if (result.auth) {
                    history.push('/');
                } else {
                    history.push('/auth');
                    localStorage.setItem('login', '');
                    localStorage.setItem('password', '');
                }

            }


        )
            .catch(e => {
                history.push('/auth');
                localStorage.setItem('login', '');
                localStorage.setItem('password', '');
            }

        );
    }

    render() {
        return (
            <div>
                <h1>Авторизация</h1>
                <hr/>
                <Form>
                    <FormGroup>
                        <label>Логин</label>
                        <Form.Control type={'text'} placeholder={"логин"} name="login" onChange={this.handleInputChange}/>
                    </FormGroup>
                    <FormGroup>
                        <label>Пароль</label>
                        <Form.Control type={'password'} placeholder={"пароль"} name="password" onChange={this.handleInputChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Button success onClick={this.tryAuth}>Войти</Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }

}

export default withRouter(Auth);