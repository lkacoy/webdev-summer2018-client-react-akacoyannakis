import React from 'react';

export default class LessonForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lessonId: ''
        }
    }

    componentDidMount() {
        this.setLessonId(this.props.lessonId);
    }
    componentWillReceiveProps(newProps){
        this.state.lessonId = newProps.lessonId;
    }

    setLessonId(lessonId) {
        this.setState({lessonId: lessonId});
    }

    render() {
        return <div className="mt-5">
            <h3>Lesson - {this.props.lessonId}</h3>
        </div>
    }

}