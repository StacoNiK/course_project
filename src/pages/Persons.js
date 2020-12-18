import React from "react";
import {
    Link, withRouter
} from "react-router-dom";

import { Row, Button } from "react-bootstrap";

import apiFetch from "../utils/apiFetch";
import DataTable from "../components/DataTable";

class Persons extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: null
        }
    }

    loadItems() {
        apiFetch('persons.get').then(result => {
            console.log(result);
            this.setState({items: result.items});
        });

    }

    componentDidMount() {
        this.loadItems();
        //console.log(this.state.cars.length);
    }



    render() {
        return (
            <div>
                <h1>Клиенты</h1>
                <hr/>
                <Row>
                    <Link to={'/persons/add'}><Button primary>Добавить клиента</Button></Link>
                </Row>
                <hr/>
                <Row>
                    <DataTable items={this.state.items}
                               entityName={"persons"}
                               needActions={true}
                               namePairs={[
                                   {
                                       name: "id",
                                       text: "ИД"
                                   },
                                   {
                                       name: "first_name",
                                       text: "Имя"
                                   },
                                   {
                                       name: "last_name",
                                       text: "Фамилия"
                                   },
                                   {
                                       name: "passport_number",
                                       text: "Паспорт"
                                   },
                                   {
                                       name: "person_id",
                                       text: "идентификационный номер"
                                   },
                                   {
                                       name: "sex",
                                       text: "пол"
                                   },
                                   {
                                       name: "birthday",
                                       text: "дата рождения"
                                   }
                               ]}/>
                </Row>
            </div>
        );
    }

}

export default withRouter(Persons);