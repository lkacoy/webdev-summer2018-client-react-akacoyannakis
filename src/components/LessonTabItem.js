import React from 'react';
import {Link} from 'react-router-dom'

export default class LessonTabItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: false,
            lessonId : ''
        }
        this.changeSelected = this.changeSelected.bind(this);

    }


    render() {
        return (
            <Link to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lesson.id}`}>
                <li className={this.state.selected ? 'nav-item active mr-4' : 'nav-item mr-4'}>
                    {this.props.lesson.title} <span className="mr-2" onClick={() =>
                {this.props.delete(this.props.courseId, this.props.moduleId, this.props.lesson.id)}}>
                    <i className="fa fa-trash"></i></span>
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