import React, {Component} from 'react'
import CourseEditor from './CourseEditor'
import CourseList from './CourseList'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

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
                    <Switch>
                        <Route exact path="/" component={CourseList}></Route>
                        <Route path="/courses" component={CourseList}></Route>
                        <Route exact path="/course/:courseId/" component={CourseEditor}></Route>
                        <Route exact path="/course/:courseId/module/:moduleId" component={CourseEditor}></Route>
                        <Route exact path="/course/:courseId/module/:moduleId/lesson/:lessonId" component={CourseEditor}></Route>
                    </Switch>
                </div>

            </Router>
        )
    }
}

export default CourseManager;