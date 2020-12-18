import React from "react";
import {
    withRouter
} from "react-router-dom";

import {Form, Button, FormGroup } from "react-bootstrap";

import apiFetch from "../utils/apiFetch";
import ProtectedComponent from "../components/ProtectedComponent";

class PersonsAdd extends ProtectedComponent {

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.create = this.create.bind(this);
        this.state = {
            items: null
        }
    }

    componentDidMount() {

        //console.log(this.state.cars.length);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    create() {
        const { match, history } = this.props;
        apiFetch('flights.add', this.state).then(result => {
            console.log(result);
            //this.setState({items: result.items});
            history.push('/flights');
        });
    }

    render() {
        return (
            <div>
                <h1>Добавить клиента</h1>
                <hr/>
                <Form>
                    <FormGroup>
                        <label >Из какого аэропорта</label>
                        <Form.Control id="from_airport" placeholder="" name="from_airport" onChange={this.handleInputChange}/>
                    </FormGroup>
                    <FormGroup>
                        <label >В какой аэропорт</label>
                        <Form.Control id="to_airport" placeholder="" name="to_airport" onChange={this.handleInputChange}/>
                    </FormGroup>
                    <FormGroup>
                        <label >Дата вылета</label>
                        <Form.Control type="date" id="#date_start" name="date_start" onChange={this.handleInputChange}/>
                    </FormGroup>
                    <FormGroup>
                        <label >Дата прибытия</label>
                        <Form.Control type="date" id="#date_end" name="date_end" onChange={this.handleInputChange}/>
                    </FormGroup>
                    <FormGroup>
                        <label >Стоимость</label>
                        <Form.Control id="#cost" type="number" placeholder="500" name="cost" onChange={this.handleInputChange}/>
                    </FormGroup>
                </Form>
                <Button primary onClick={this.create}>Создать</Button>
            </div>
        );
    }

}

export default withRouter(PersonsAdd);