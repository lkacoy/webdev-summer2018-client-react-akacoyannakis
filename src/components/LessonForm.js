import React from 'react';
import LessonService from '../services/LessonService';

export default class LessonForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lessonId: '',
            lesson: {id: '', title: ''}
        }
        this.lessonService = LessonService.instance;
    }

    componentDidMount() {
        this.setLessonId(this.props.lessonId);
    }
    componentWillReceiveProps(newProps){
        console.log(newProps);
        this.state.lessonId = newProps.lessonId;
        this.findLessonById(this.state.lessonId);
    }

    setLessonId(lessonId) {
        this.setState({lessonId: lessonId});
    }

    setLesson(lesson) {
        this.setState({lesson: lesson});
    }

    render() {
        return <div className="mt-5">
            <h3>Lesson - {this.state.lesson.title}</h3>
            <h4 className="mt-2">Topics</h4>
            {this.renderTopics()}
        </div>
    }

    renderTopics() {
        if (this.state.lesson.topics && this.state.lesson.topics.length > 0) {
            let topics = this.state.lesson.topics.map(topic => {
                return <div className="mb-2" key={topic}>
                        {topic}
                    </div>
            });
            return (topics);
        }
    }

    findLessonById(lessonId) {
        this.lessonService.findLessonById(lessonId).then((lesson) => {this.setLesson(lesson)});
    }

}