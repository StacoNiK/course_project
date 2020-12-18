import React from "react";
import {
    Link, withRouter
} from "react-router-dom";

import { Row, Button } from "react-bootstrap";

import apiFetch from "../utils/apiFetch";
import DataTable from "../components/DataTable";
import ProtectedComponent from "../components/ProtectedComponent";

class Flights extends ProtectedComponent {

    constructor(props) {
        super(props);
        this.state = {
            items: null
        }
    }

    loadItems() {
        apiFetch('flights.get').then(result => {
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
                <h1>Полеты</h1>
                <hr/>
                <Row>
                    <Link to={'/flights/add'}><Button primary>Добавить информацию о полёте</Button></Link>
                </Row>
                <hr/>
                <Row>
                    <DataTable items={this.state.items}
                               entityName={"flights"}
                               needActions={true}
                               namePairs={[
                                   {
                                       name: "id",
                                       text: "ИД"
                                   },
                                   {
                                       name: "from_airport",
                                       text: "Откуда"
                                   },
                                   {
                                       name: "to_airport",
                                       text: "Куда"
                                   },
                                   {
                                       name: "date_start",
                                       text: "Дата вылета"
                                   },
                                   {
                                       name: "date_end",
                                       text: "Дата прибытия"
                                   },
                                   {
                                       name: "cost",
                                       text: "Стоимость"
                                   }
                               ]}/>
                </Row>
            </div>
        );
    }

}

export default withRouter(Flights);