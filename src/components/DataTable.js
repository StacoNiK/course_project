import React from "react";
import {
    Link
} from "react-router-dom";

import { Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler, Collapse, Table } from "react-bootstrap";

class DataTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        };
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
                    </tr>

                </thead>
                <tbody>
                    {this.props.items && this.props.items.map((item) =>
                        <tr>
                            {this.props.namePairs.map((pair) =>
                                <td>{item[pair.name]}</td>
                            )}
                        </tr>
                    )}
                </tbody>
            </Table>
        );
    }

}

export default DataTable;