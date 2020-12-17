import React from "react";
import {
    Link
} from "react-router-dom";

import { Row } from "react-bootstrap";

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
                    {this.state.items && this.state.items.map((item) =>
                        <div>{item.name}</div>
                    )}
                </Row>
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

                ]}/>
            </div>
        );
    }

}

export default Tours;