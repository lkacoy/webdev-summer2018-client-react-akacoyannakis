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
       this.deleteCourse = this.deleteCourse.bind(this);
       this.updateCourse = this.updateCourse.bind(this);
   }
   render() {
       return (
           <div>
              <form className="form-control">
                  <input id="titleFld"
                              onChange={this.titleChanged}
                              placeholder="cs101"/>
               <button onClick={this.createCourse} className="btn btn-primary">Add</button>
              </form>
             <table className="table">
               <thead>
                   <tr>
                       <th>Title</th>
                       <th>Owned By</th>
                       <th>Modified Date</th>
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
      let courses = this.state.courses.map(course => {
              return <CourseRow key={course.id} course={course} delete={this.deleteCourse}/>
          }
      );
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

   deleteCourse(courseId) {
           this.courseService.deleteCourse(courseId);
   }

   updateCourse(course) {
       this.courseService.updateCourse(course);
   }
}
export default CourseList;