import React from 'react';
import LessonService from '../services/LessonService';
import TopicTabs from "../containers/TopicTabs";
import App from "../containers/widgetList";
import {widgetReducer} from "../reducers/widgetReducer";
import {createStore} from 'redux';
import {Provider} from "react-redux";

let store = createStore(widgetReducer);

export default class LessonForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lessonId: '',
            lesson: {id: '', title: ''}
        };
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
            <TopicTabs key={this.state.lessonId} lessonId={this.state.lessonId}/>
        </div>
    }

    findLessonById(lessonId) {
        this.lessonService.findLessonById(lessonId).then((lesson) => {this.setLesson(lesson)});
    }


}