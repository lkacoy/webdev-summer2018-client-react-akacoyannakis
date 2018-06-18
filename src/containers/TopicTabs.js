import React from "react";
import TopicService from "../services/TopicService";
import TopicTabItem from "../components/TopicTabItem";
import {widgetReducer} from "../reducers/widgetReducer";
import App from "../containers/widgetList";
import {createStore} from 'redux';
import {Provider} from "react-redux";

let store = createStore(widgetReducer);

export default class TopicTabs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            topics: [],
            topic: {id: '', title: ''}
        };
        this.findAllTopicsForLesson = this.findAllTopicsForLesson.bind(this);
        this.topicService = TopicService.instance;
    }

    componentDidMount() {
        this.setLessonId(this.props.lessonId);
    }
    componentWillReceiveProps(newProps){
        this.state.lessonId = newProps.lessonId;
        if (newProps.lessonId) {
            this.findAllTopicsForLesson(this.state.lessonId);
        }
    }

    setLessonId(lessonId) {
        this.setState({lessonId: lessonId});
    }
    setTopics(topics) {
        this.setState({topics: topics});
    }

    render() {
        return (
            <div>
            <div className="row">
                {this.renderListOfTopics()}
                <button className='btn btn-primary mr-4'><i className="fa fa-plus"></i></button>
            </div>
                <Provider store={store}>
                    <App lessonId={this.state.lessonId}/>
                </Provider>
            </div>
        );
    }

    renderListOfTopics() {
        if (this.state.topics && this.state.topics.length > 0) {
            let topics = this.state.topics.map(topic => {
                return (
                    <ul className="nav nav-pills">
                        <TopicTabItem key={topic.id}
                                      topic={topic}/>
                    </ul>

                )
            });
            return (topics);
        }
    }

    findAllTopicsForLesson(lessonId) {
        console.log(lessonId);
        this.topicService.findAllTopicsForLesson(lessonId).then((topics) => {this.setTopics(topics)});
    }
}