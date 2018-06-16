import React from 'react';
import {Link} from 'react-router-dom'

export default class TopicTabItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            topicId : ''
        };
        this.changeSelected = this.changeSelected.bind(this);
    }

    render() {
        return (
            <div>
                <button className='btn btn-primary mr-4'>{this.props.topic.title}</button>
            </div>
        );
    }

    changeSelected() {
        this.props.changeSelected(this.props.lesson.id, !this.props.selected);
    }
}