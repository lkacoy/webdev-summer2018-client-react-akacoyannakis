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

    componentDidMount() {
        this.setLessonId(this.props.lessonId);
    }
    componentWillReceiveProps(newProps){
        this.setLessonId(newProps.match.params.lessonId);
    }

    setLessonId(lessonId) {
        this.setState({lessonId: lessonId});
    }


    render() {
        return (
            <Link to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lesson.id}`}>
                <li className={this.state.selected ? 'nav-item active mr-4' : 'nav-item mr-4'} onClick={this.props.determineLessonForm}>
                    {this.props.lesson.title}
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