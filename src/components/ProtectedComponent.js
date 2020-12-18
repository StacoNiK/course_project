import React from "react";
import {
    Link
} from "react-router-dom";


class ProtectedComponent extends React.Component {

    constructor(props) {
        super(props);
        const {match, history} = this.props;
        if (!localStorage.getItem('login') || !localStorage.getItem('password'))
            history.push('/auth');
    }
}

export default ProtectedComponent;