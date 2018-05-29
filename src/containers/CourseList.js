import React from 'react'
import CourseRow from '../components/CourseRow'
import CourseService from '../services/CourseService'

class CourseList extends React.Component {
   constructor() {
       super();
       this.courseService = CourseService.instance;
       this.state = {courses: []};
       this.titleChanged = this.titleChanged.bind(this);
       this.createCourse = this.createCourse.bind(this);
   }
   render() {
       return (
           <div>
             <h2>Course List</h2>
             <table className="table">
               <thead>
                   <tr><th>Title</th></tr>
                   <tr>
                       <th><input id="titleFld"
                                  className="form-control"
                                  onChange={this.titleChanged}
                                  placeholder="cs101"/></th>
                       <th><button onClick={this.createCourse} className="btn btn-primary">Add</button></th>
                   </tr>
               </thead>
               <tbody>
                     {this.renderCourseRows()}
               </tbody>
             </table>
           </div>
       )
   }

   componentDidMount() {
      this.findAllCourses();
   }

   findAllCourses() {
        this.courseService.findAllCourses()
              .then((courses) => {
                  this.setState({courses: courses});
        });
   }

   renderCourseRows() {
      let courses = this.state.courses.map(
        function (course) {
            return <CourseRow key={course.id} course={course}/>
        }
      )
      return (
          courses
      )
   }

   titleChanged(event) {
        this.setState({
              course: { title: event.target.value }
          });

   }

   createCourse() {
        this.courseService.createCourse(this.state.course)
            .then(() => {this.findAllCourses(); });
   }
}
export default CourseList;