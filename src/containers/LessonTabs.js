import React from 'react';
import LessonService from "../services/LessonService";
import LessonTabItem from "../components/LessonTabItem";
import LessonForm from "../components/LessonForm";
import LessonFormAdd from "../components/LessonFormAdd";
import {Link} from 'react-router-dom'

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
        this.setLessonId(this.props.lessonId);
    }
    componentWillReceiveProps(newProps){
        if (newProps.moduleId) {
            this.findAllLessonsForModule(newProps.courseId, newProps.moduleId);
        }
    }

    render() {
      return(
          <div>
          <ul className="nav nav-tabs">
              { this.renderLessons()}
             <Link to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/add`}>
              <li className="nav-item" key="new">
                  <i className="fa fa-plus"></i>
              </li>
             </Link>
          </ul>
              <LessonForm lesson={this.props.lesson} courseId={this.props.courseId} moduleId={this.props.moduleId}/>
          </div>
      );
     }

     renderLessons() {
            let lessons = this.state.lessons.map((lesson, index) => {
                return <LessonTabItem key={lesson.id}
                                      courseId={this.props.courseId}
                                      moduleId={this.props.moduleId}
                                      lesson={lesson}
                                      determineLessonForm={this.determineLessonForm}
                        index={index}/>
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

    setLessonId(lessonId) {
        this.setState({lessonId: lessonId});
    }

    createLesson() {
        console.log(this.state.lesson);
        this.lessonService.createLesson(this.props.courseId, this.props.moduleId, this.state.lesson)
            .then(() => {this.findAllLessonsForModule(this.props.courseId, this.props.moduleId); });
    }

    determineLessonForm() {
        if (this.state.lessonId) {
            return <LessonForm />
        } else {
            return <LessonFormAdd />
        }
    }
}
