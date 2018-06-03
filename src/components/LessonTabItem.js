import React from 'react';
import {Link} from 'react-router-dom'

export default class LessonTabItem extends React.Component {

    render() {
        return (
            <Link to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lesson.id}`}>
                <li className="nav-item">
                    {this.props.lesson.title}
                </li>
            </Link>
        );
    }
    }