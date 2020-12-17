import React from "react";
import {
    Link
} from "react-router-dom";

import { withRouter } from "react-router";

import { Alert, FormGroup, Form, Button } from "react-bootstrap";
import apiFetch from "../utils/apiFetch";


class Order extends React.Component {

    constructor(props) {
        super(props);
        this.sendClientRequest = this.sendClientRequest.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            username: '',
            phone: '',
            errorText: null,
            success: false
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        console.log('ORDER_ID' + id);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    sendClientRequest() {
        apiFetch('requests.new', {
            username: this.state.username,
            phone: this.state.phone,
            carId: this.props.match.params.id
        }).then(result => {
            if (!result.success) {
                this.setState({
                    errorText: result.error
                });
            } else {
                this.setState({success: true, errorText: null});
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Оставить заявку</h1>
                <hr/>
                {this.state.errorText && <Alert theme="danger">{this.state.errorText}</Alert>}
                {this.state.success && <Alert theme="success">Ваша заявка отправлена, менеджер скоро с вами свяжется</Alert>}
                <Form>
                    <FormGroup>
                        <label htmlFor="#username">Ваше имя</label>
                        <Form.Input id="#username" placeholder="Станислав" name="username" onChange={this.handleInputChange}/>
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="#phone">Ваш телефон</label>
                        <Form.Input type="phone" id="#phone" placeholder="+375291234567" name="phone" onChange={this.handleInputChange}/>
                    </FormGroup>
                </Form>
                <Button primary onClick={this.sendClientRequest}>Отправить заявку</Button>
            </div>
        );
    }

}

export default withRouter(Order);