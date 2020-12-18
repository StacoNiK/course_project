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
        apiFetch('persons.add', this.state).then(result => {
            console.log(result);
            //this.setState({items: result.items});
            history.push('/persons');
        });
    }

    render() {
        return (
            <div>
                <h1>Добавить клиента</h1>
                <hr/>
                <Form>
                    <FormGroup>
                        <label >Имя</label>
                        <Form.Control id="first_name" placeholder="Станислав" name="first_name" onChange={this.handleInputChange}/>
                    </FormGroup>
                    <FormGroup>
                        <label >Фамилия</label>
                        <Form.Control id="last_name" placeholder="Пожого" name="last_name" onChange={this.handleInputChange}/>
                    </FormGroup>
                    <FormGroup>
                        <label >Номер паспорта</label>
                        <Form.Control id="#passport_number" name="passport_number" onChange={this.handleInputChange}/>
                    </FormGroup>
                    <FormGroup>
                        <label >Идентификационный номер</label>
                        <Form.Control id="#person_id" name="person_id" onChange={this.handleInputChange}/>
                    </FormGroup>
                    <FormGroup>
                        <label >Пол</label>
                        <Form.Control as="select" id="#sex" name="sex" onChange={this.handleInputChange}>
                            <option value="">Не выбран</option>
                            <option value="m">Мужской</option>
                            <option value="f">Женский</option>
                            <option value="o">Другой</option>
                        </Form.Control>
                    </FormGroup>
                    <FormGroup>
                        <label>Дата рождения</label>
                        <Form.Control id="#birthday" type="date" name="birthday" onChange={this.handleInputChange}/>
                    </FormGroup>
                </Form>
                <Button primary onClick={this.create}>Создать</Button>
            </div>
        );
    }

}

export default withRouter(PersonsAdd);