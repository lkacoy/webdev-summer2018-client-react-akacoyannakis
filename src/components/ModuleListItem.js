import React from 'react';

export default class ModuleListItem
    extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="list-group-item">
                {this.props.title}
                <span className="float-right">
                    <span onclick=""><i className="fa fa-trash"></i></span>
                    <span onclick=""><i className="fa fa-pencil"></i></span>
                </span>
            </li>
        );
    }
}
