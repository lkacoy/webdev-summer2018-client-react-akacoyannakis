import React from 'react';
import LessonService from "../services/LessonService";

export default class LessonTabs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            module: { title: '', id: '' },
            lessons: []
        }
        this.lessonService = LessonService.instance;
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.module);
    }
    componentWillReceiveProps(newProps){
        this.findAllLessonsForModule(newProps.courseId, newProps.module);
        console.log(newProps.module);
    }

    render() {
      return(
          <ul className="nav nav-tabs">
              {this.renderLessons()}
               {/*<li className="nav-item"><a className="nav-link active"
                    href="">Active Tab</a></li>
               <li className="nav-item"><a className="nav-link"
                    href="">Another Tab</a></li>*/}
          </ul>
      );
     }

     renderLessons() {
         let lessons = this.state.lessons.map(lesson =>{
             return <li className="nav-item"><a className="nav-link active"
                                                href="">{lesson.title}</a></li>
         });
         return (lessons);
     }

     findAllLessonsForModule(courseId, moduleId) {
        this.lessonService.findAllLessonsForModule(courseId, moduleId);
     }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setModuleId(module) {
        this.setState({module: module});
    }
}
