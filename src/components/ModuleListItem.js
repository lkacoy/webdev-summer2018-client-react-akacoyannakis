import React from 'react';

export default class ModuleListItem
    extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
                <li className="list-group-item" onClick={() =>
                {this.props.findModuleById(this.props.module.id)}}>
                    <a href="">Module {this.props.module.id} - {this.props.module.title}</a>
                    <span className="float-right">
                        <span className="mr-2" onClick={() =>
                        {this.props.delete(this.props.courseId, this.props.module.id)}}><i className="fa fa-trash"></i></span>
                        <span onClick={() =>
                        {this.props.update(this.props.courseId, this.props.module.id)}}><i className="fa fa-pencil"></i></span>
                    </span>
                </li>
        );
    }
}
