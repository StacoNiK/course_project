import React from "react";
import {
    Link
} from "react-router-dom";

import { Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler, Collapse, Table } from "react-bootstrap";
import apiFetch from "../utils/apiFetch";

class DataTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        };

    }

    edit(id) {

    }

    delete(id) {
        alert(id);
        let apiMethod = this.props.entityName + '.delete';
        apiFetch(apiMethod, {
            id: id
        });
    }

    render() {
        // props namePairs
        // props entityName
        // props items
        return (
            <Table>
                <thead>
                    <tr>
                        {this.props.namePairs.map((pair) =>
                                <th>{pair.text}</th>
                            )}
                        {this.props.needActions && <th>Действия</th>}
                    </tr>

                </thead>
                <tbody>
                    {this.props.items && this.props.items.map((item) =>
                        <tr key={item.id} id={item}>
                            {this.props.namePairs.map((pair) =>
                                <td>{item[pair.name]}</td>
                            )}
                            {this.props.needActions &&
                            <td>
                                <button onClick={this.edit.bind(this, item.id)} >Edit</button>
                                <button onClick={this.delete.bind(this, item.id)}>Delete</button>
                            </td>}
                        </tr>
                    )}
                </tbody>
            </Table>
        );
    }

}

export default DataTable;