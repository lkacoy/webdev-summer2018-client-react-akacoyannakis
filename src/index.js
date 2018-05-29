import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import CourseManager from './containers/CourseManager'
import Stateless from './components/Stateless'
import ModuleListItem from './components/ModuleListItem'
import ModuleList2 from './containers/ModuleList2'

ReactDOM.render(
 <div className="container-fluid">
    <CourseManager/>
/*    <ModuleList2/>
    <Stateless message="this is a stateless component"/>*/
 </div>,
 document.getElementById('root')
);
