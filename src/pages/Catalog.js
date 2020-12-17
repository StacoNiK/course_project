import React from "react";
import {
    Link
} from "react-router-dom";

import { Row } from "shards-react";

import apiFetch from "../utils/apiFetch";

class Catalog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cars: null
        }
    }

    loadCars() {
        apiFetch('catalog.get').then(result => {
            console.log(result);
            this.setState({cars: result.items});
        });

    }

    componentDidMount() {
        this.loadCars();
        //console.log(this.state.cars.length);
    }



    render() {
        return (
            <div>
                <h1>Каталог авто</h1>
                <hr/>
                <Row>
                    {this.state.cars && this.state.cars.map((car) =>
                        <div></div>
                    )}
                </Row>
            </div>
        );
    }

}

export default Catalog;