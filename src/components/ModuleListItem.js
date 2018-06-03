import React from 'react';
import { NavLink } from 'react-router-dom'

export default class ModuleListItem
    extends React.Component {

    constructor(props) {
        super(props);
    }
//activeClassName="cm-active-link" to={`/course/${this.props.courseId}/module/${this.props.module.id}`}
    render() {
        return (
            <NavLink activeClassName="cm-active-link" to={`/course/${this.props.courseId}/module/${this.props.module.id}`}>
                <li className={this.props.module.active ? 'list-group-item active' : 'list-group-item'} onClick={() =>
                {this.props.findModuleById(this.props.module.id)}}>
                    {this.props.module.title}
                    <span className="float-right">
                        <span className="mr-2" onClick={() =>
                        {this.props.delete(this.props.courseId, this.props.module.id)}}><i className="fa fa-trash"></i></span>
                        <span onClick={() =>
                        {this.props.update(this.props.courseId, this.props.module.id)}}><i className="fa fa-pencil"></i></span>
                    </span>
                </li>
            </NavLink>
        );
    }
}
