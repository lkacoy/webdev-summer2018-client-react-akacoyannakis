import React from "react";
import TopicService from "../services/TopicService";
import TopicTabItem from "../components/TopicTabItem";

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
            <div className="row">
                {this.renderListOfTopics()}
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
        } else {
            return <div className="mb-2">
                No topics available.
            </div>
        }
    }

    findAllTopicsForLesson(lessonId) {
        console.log(lessonId);
        this.topicService.findAllTopicsForLesson(lessonId).then((topics) => {this.setTopics(topics)});
    }
}