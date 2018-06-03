import React from 'react';

export default class LessonFormAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lesson: {id: '', title: ''}
        };
        this.titleChanged = this.titleChanged.bind(this);
    }

    titleChanged(event) {
        this.setState({lesson: {title: event.target.value}});
    }

    render() {
        return <form className="mt-4">
           Lesson Title:  <input  className="form-control mb-8"
                                  onChange={this.titleChanged}
                                  placeholder="title"
                                  value={this.state.lesson.title}/>
            <button className= "btn btn-primary btn-block mt-4" type="submit"
                    onClick={this.createLesson}>
                <i className="fa fa-plus"></i>
            </button>
        </form>
    }

}