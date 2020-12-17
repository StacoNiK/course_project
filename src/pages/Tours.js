import React from "react";
import {
    Link, withRouter
} from "react-router-dom";

import { Row, Button } from "react-bootstrap";

import apiFetch from "../utils/apiFetch";
import DataTable from "../components/DataTable";

class Tours extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: null
        }
    }

    loadItems() {
        apiFetch('tours.get').then(result => {
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
                <h1>Туры</h1>
                <hr/>
                <Row>
                    <Link to={'tours/add'}><Button primary>Добавить тур</Button></Link>
                </Row>
                <hr/>
                <Row>
                <DataTable items={this.state.items}
                           entityName={"tours"}
                           needActions={true}
                           namePairs={[
                                {
                                    name: "id",
                                    text: "ИД"
                                },
                                {
                                    name: "name",
                                    text: "Имя тура"
                                },
                               {
                                    name: "date_start",
                                    text: "Дата старта"
                               },
                               {
                                   name: "date_end",
                                   text: "Дата завершения"
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

export default withRouter(Tours);