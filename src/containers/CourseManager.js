import React, {Component} from 'react'
import CourseEditor from './CourseEditor'
import CourseList from './CourseList'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class CourseManager extends Component {
    render() {
        return (
            <Router>
                <div className="pos-f-t">
{/*                    <div className="collapse" id="navbarToggleExternalContent">
                        <div className="bg-dark p-4">
                            <h4 className="text-white">Collapsed content</h4>
                            <span className="text-muted">Toggleable via the navbar brand.</span>
                        </div>
                    </div>*/}
                    <nav className="navbar navbar-dark bg-primary">
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <h1>Course Manager</h1>

                    </nav>
                    <Route path="/courses" component={CourseList}></Route>
                    <Route path="/course/:courseId/edit"component={CourseEditor}></Route>
                </div>

            </Router>
        )
    }
}

export default CourseManager;