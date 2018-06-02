import React, {Component} from 'react'
import ModuleEditor from './ModuleEditor'
import CourseList from './CourseList'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class CourseManager extends Component {
    render() {
        return (
            <Router>
                <div className="pos-f-t">
                    <nav className="navbar navbar-dark bg-primary">
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <h1 className="text-white">Course Manager</h1>

                    </nav>
                    <Route path="/courses" component={CourseList}></Route>
                    <Route path="/course/:courseId/edit" component={ModuleEditor}></Route>
                </div>

            </Router>
        )
    }
}

export default CourseManager;