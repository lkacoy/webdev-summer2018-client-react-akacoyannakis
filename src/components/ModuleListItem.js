import React from 'react';

export default class ModuleListItem
    extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="list-group-item">
                Module {this.props.module.id} - {this.props.module.title}
                <span className="float-right">
                    <span className="mr-2" onClick={() =>
                    {this.props.delete(this.props.course.id, this.props.module.id)}}><i className="fa fa-trash"></i></span>
                    <span onClick={() =>
                    {this.props.update(this.props.course.id, this.props.module.id)}}><i className="fa fa-pencil"></i></span>
                </span>
            </li>
        );
    }
}
