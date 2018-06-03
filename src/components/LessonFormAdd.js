import React from 'react';

export default class LessonFormAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lesson: {id: '', title: '', topics: []},
            topic: ''
        };
        this.titleChanged = this.titleChanged.bind(this);
        this.topicChanged = this.topicChanged.bind(this);
    }

    titleChanged(event) {
        this.setState({lesson: {title: event.target.value}});
    }

    topicChanged(event){
        this.setState({topic: event.target.value});
        console.log(this.state);
    }

    render() {
        return <div className="form-control mt-4">
            <h1 className="form-check-label mb-5">Add New Lesson</h1>
            <div className="form-group">
                <label htmlFor="lessonTitle">Lesson Title</label>
                <input type="text" className="form-control mb-8" onChange={this.titleChanged} id="lessonTitle" placeholder="Lesson Title" value={this.state.lesson.title}/>
            </div>
{/*            <div className="form-group">
                <label htmlFor="lessonTopics">Topics</label>
                <div className="form-inline form-control mb-5">
                    <input
                        type="text"
                        onChange={this.topicChanged}
                        className="form-control"
                        placeholder="Topic"
                        value={this.state.topic}
                    />
                    <span className="ml-2" onClick={this.handleRemoveTopics}><i className="fa fa-trash"></i></span>
                    <span className="ml-2" onClick={this.handleAddTopics()}><i className="fa fa-plus"></i></span>
                </div>
            </div>*/}
            <button className= "btn btn-primary btn-block mt-4"
                    onClick={this.props.createLesson(this.state.lesson)}>
                <i className="fa fa-plus"></i>
            </button>
        </div>
    }

    handleRemoveTopics() {
        var topics = this.state.lesson.topics;
        topics[this.props.lesson.id] = this.state.lesson.topic;
        this.setState({
            lesson: {topics: topics}
        });
    }

    handleAddTopics() {
        console.log("add topic");
        console.log(this.state);
        this.state.lesson.topics.push(this.state.lesson.topics);
    }

}