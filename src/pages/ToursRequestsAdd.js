import React from "react";
import {
    withRouter
} from "react-router-dom";

import {Form, Button, FormGroup } from "react-bootstrap";

import apiFetch from "../utils/apiFetch";

class ToursRequestsAdd extends React.Component {

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.create = this.create.bind(this);
        this.state = {
            items: null
        }
    }

    componentDidMount() {
        this.loadPersons();
        this.loadTours();
        //console.log(this.state.cars.length);
    }

    loadPersons() {
        apiFetch('persons.get').then(result => {
            console.log(result);
            this.setState({persons: result.items});
        });
    }

    loadTours() {
        apiFetch('tours.get').then(result => {
            console.log(result);
            this.setState({tours: result.items});
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

    create() {
        const { match, history } = this.props;
        apiFetch('tours_requests.add', this.state).then(result => {
            console.log(result);
            //this.setState({items: result.items});
            history.push('/tours/requests');
        });
    }

    render() {
        return (
            <div>
                <h1>Добавить заявку на тур</h1>
                <hr/>
                <Form>
                    <FormGroup>
                        <label >Тур</label>
                        <Form.Control as={"select"} id="tour_id" placeholder="tour" name="tour_id" onChange={this.handleInputChange}>
                            <option value="0">Не выбран</option>
                            {this.state.tours && this.state.tours.map(tour =>
                                <option value={tour.id}>{tour.name}</option>
                            )}
                        </Form.Control>
                    </FormGroup>
                    <FormGroup>
                        <label>Клиент</label>
                        <Form.Control as={"select"} id="#person_id" name="person_id" onChange={this.handleInputChange}>
                            <option value="0">Не выбран</option>
                            {this.state.persons && this.state.persons.map(person =>
                                <option value={person.id}>{person.first_name} {person.last_name}</option>
                            )}
                        </Form.Control>
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

export default withRouter(ToursRequestsAdd);