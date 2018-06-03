import React from 'react';
import LessonService from "../services/LessonService";

export default class LessonTabs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            moduleId: { title: '', id: '' },
            lessons: []
        }
        this.findAllLessonsForModule = this.findAllLessonsForModule.bind(this);
        this.lessonService = LessonService.instance;
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
    }
    componentWillReceiveProps(newProps){
        this.findAllLessonsForModule(newProps.courseId, newProps.moduleId);
    }

    render() {
      return(
          <ul className="nav nav-tabs">
              {this.renderLessons()}
          </ul>
      );
     }

     renderLessons() {
         let lessons = this.state.lessons.map(lesson =>{
             return <li className="nav-item" key={lesson.id}><a className="nav-link active"
                                                href="">{lesson.title}</a></li>
         });
         console.log(lessons);
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
