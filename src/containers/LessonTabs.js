import React from 'react';
import LessonService from "../services/LessonService";
import LessonTabItem from "../components/LessonTabItem";

export default class LessonTabs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            moduleId: { title: '', id: '' },
            lessons: [],
            lesson: {id: ''}
        }
        this.findAllLessonsForModule = this.findAllLessonsForModule.bind(this);
        this.lessonService = LessonService.instance;
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
    }
    componentWillReceiveProps(newProps){
        if (newProps.moduleId) {
            this.findAllLessonsForModule(newProps.courseId, newProps.moduleId);
        }
    }

    render() {
      return(
          <ul className="nav nav-tabs">
              { this.renderLessons()}
              <li className="nav-item" key="new">
                  <a className="nav-link active"
                     href="">Add New Lesson</a>
              </li>
          </ul>
      );
     }

     renderLessons() {
            let lessons = this.state.lessons.map(lesson => {
                return <LessonTabItem key={lesson.id} courseId={this.props.courseId} moduleId={this.props.moduleId} lesson={lesson}/>
            });
            return (lessons);
     }

     findAllLessonsForModule(courseId, moduleId) {
        this.lessonService.findAllLessonsForModule(courseId, moduleId)
            .then((lessons) => {this.setLessons(lessons)});
     }

    setLessons(lessons) {
        this.setState({lessons: lessons});
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }
}
