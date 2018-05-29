import React, {Component} from 'react'
import CourseCard from '../components/CourseCard'
import ModuleList from './ModuleList'
import LessonTabs from './LessonTabs'
import CourseEditor from './CourseEditor'
import CourseList from './CourseList'

class CourseManager extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h1>Course Manager</h1>
                <CourseList/>
                <CourseEditor/>
                <div className="card-deck">
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                </div>
            </div>
        )
    }
}

export default CourseManager;