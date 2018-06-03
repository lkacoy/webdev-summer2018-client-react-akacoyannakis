import React from 'react';
import {Link} from 'react-router-dom'

export default class ModuleListItem
    extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: false
        }
        this.changeSelected = this.changeSelected.bind(this);
    }
    render() {
        return (
            <Link to={`/course/${this.props.courseId}/module/${this.props.module.id}`}>
            <li className={this.state.selected ? 'list-group-item active' : 'list-group-item'} onClick={this.changeSelected}>
                {this.props.module.title}
                <span className="float-right">
                        <span className="mr-2" onClick={() =>
                        {this.props.delete(this.props.courseId, this.props.module.id)}}><i className="fa fa-trash"></i></span>
                        <span onClick={() =>
                        {this.props.update(this.props.courseId, this.props.module.id)}}><i className="fa fa-pencil"></i></span>
                    </span>
            </li>
            </Link>
        );
    }
    changeSelected() {
        const state = this.state.selected;
        this.setState({selected: !state});
        console.log("newState" +this.state.selected);
    }
}
