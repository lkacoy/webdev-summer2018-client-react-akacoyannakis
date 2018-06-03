import React from 'react';

export default class LessonForm extends React.Component {



    render() {
        return <form className="mt-4">
            <span onClick={() =>
            {this.props.delete(this.props.courseId, this.props.moduleId, this.props.lesson.id)}}><i className="fa fa-trash"></i></span>
        </form>
    }

}