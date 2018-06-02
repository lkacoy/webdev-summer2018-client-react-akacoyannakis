import React from 'react';
import ModuleList from './ModuleList';
import LessonTabs from './LessonTabs';

export default class ModuleEditor extends React.Component {

    constructor(props) {
        super(props);
        this.selectCourse = this.selectCourse.bind(this);
        this.state = {courseId: ''};
    }

    componentDidMount() {
        this.selectCourse(this.props.match.params.courseId);
    }

    componentWillReceiveProps(newProps) {
        this.selectCourse(newProps.match.params.courseId);
    }

    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }

    render() {
        return (
            <div>
                <h2>Editing Course: {this.state.courseId}</h2>
                <div className="row">
                 <div className="col-4">
                    <ModuleList courseId={this.state.courseId}/>
                 </div>
                 <div className="col-8">
                    <LessonTabs/>
                 </div>
                </div>
            </div>
        )
    }
}