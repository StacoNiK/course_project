import React from "react";
import {
    Link, withRouter
} from "react-router-dom";

import { Row, Button } from "react-bootstrap";

import apiFetch from "../utils/apiFetch";
import DataTable from "../components/DataTable";

class ToursRequests extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: null
        }
    }

    loadItems() {
        apiFetch('tours_requests.get').then(result => {
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
                <h1>Заявки на туры</h1>
                <hr/>
                <Row>
                    <Link to={'tours/add'}><Button primary>Добавить заявку</Button></Link>
                </Row>
                <hr/>
                <Row>
                    <DataTable items={this.state.items}
                               entityName={"tours_requests"}
                               needActions={true}
                               namePairs={[
                                   {
                                       name: "id",
                                       text: "ИД заявки"
                                   },
                                   {
                                       name: "tour_name",
                                       text: "Название тура"
                                   },
                                   {
                                       name: "first_name",
                                       text: "Имя клиента"
                                   },
                                   {
                                       name: "last_name",
                                       text: "Фамилия клиента"
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

export default withRouter(ToursRequests);