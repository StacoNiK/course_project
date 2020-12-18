import React from "react";
import {
    withRouter
} from "react-router-dom";

import {Form, Button, FormGroup } from "react-bootstrap";

import apiFetch from "../utils/apiFetch";
import ProtectedComponent from "../components/ProtectedComponent";

class ToursEdit extends ProtectedComponent {

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.edit = this.edit.bind(this);
        this.state = {
            name: "",
            country: "",
            date_start: null,
            date_end: null,
            cost: "0",
            id: 0
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.setState({id: id});
        this.loadItem(id);
        //console.log(this.state.cars.length);
    }

    loadItem(id) {
        apiFetch('tours.getById', {id: id}).then(result => {
            console.log(result);
            this.setState(result.item);
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    edit() {
        const { match, history } = this.props;
        apiFetch('tours.edit', this.state).then(result => {
            console.log(result);
            //this.setState({items: result.items});
            history.push('/tours');
        });
    }

    render() {
        return (
            <div>
                <h1>Редактировать тур</h1>
                <hr/>
                <Form>
                    <FormGroup>
                        <label >Название</label>
                        <Form.Control id="name" placeholder="Чудесный тур" name="name" onChange={this.handleInputChange} value={this.state.name}/>
                    </FormGroup>
                    <FormGroup>
                        <label >Страна</label>
                        <Form.Control id="country" placeholder="Зимбабве" name="country" onChange={this.handleInputChange} value={this.state.country}/>
                    </FormGroup>
                    <FormGroup>
                        <label >С какого</label>
                        <Form.Control type="date" id="#date_from" name="date_start" onChange={this.handleInputChange} value={this.state.date_start}/>
                    </FormGroup>
                    <FormGroup>
                        <label >По какое</label>
                        <Form.Control type="date" id="#date_to" name="date_end" onChange={this.handleInputChange} value={this.state.date_end}/>
                    </FormGroup>
                    <FormGroup>
                        <label >Стоимость</label>
                        <Form.Control id="#cost" type="number" placeholder="500" name="cost" onChange={this.handleInputChange} value={this.state.cost}/>
                    </FormGroup>
                </Form>
                <Button primary onClick={this.edit}>Редактировать</Button>
            </div>
        );
    }

}

export default withRouter(ToursEdit);