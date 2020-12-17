import React from "react";
import {
    withRouter
} from "react-router-dom";

import {Form, Button, FormGroup } from "react-bootstrap";

import apiFetch from "../utils/apiFetch";

class ToursAdd extends React.Component {

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
        apiFetch('tours.add', this.state).then(result => {
            console.log(result);
            //this.setState({items: result.items});
            history.push('/tours');
        });
    }

    render() {
        return (
            <div>
                <h1>Добавить тур</h1>
                <hr/>
                <Form>
                    <FormGroup>
                        <label >Название</label>
                        <Form.Control id="name" placeholder="Чудесный тур" name="name" onChange={this.handleInputChange}/>
                    </FormGroup>
                    <FormGroup>
                        <label >Страна</label>
                        <Form.Control id="country" placeholder="Зимбабве" name="country" onChange={this.handleInputChange}/>
                    </FormGroup>
                    <FormGroup>
                        <label >С какого</label>
                        <Form.Control type="date" id="#date_from" name="date_start" onChange={this.handleInputChange}/>
                    </FormGroup>
                    <FormGroup>
                        <label >По какое</label>
                        <Form.Control type="date" id="#date_to" name="date_end" onChange={this.handleInputChange}/>
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

export default withRouter(ToursAdd);