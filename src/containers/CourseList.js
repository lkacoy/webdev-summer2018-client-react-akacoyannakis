import React from 'react'
import CourseRow from '../components/CourseRow'
import CourseService from '../services/CourseService'

class CourseList extends React.Component {
   constructor() {
       super();
       this.courseService = CourseService.instance;
       this.state = {courses: []};
   }
   render() {
       return (
           <div>
             <h2>Course List</h2>
             <table className="table">
               <thead><tr><th>Title</th></tr></thead>
               <tbody>
                     {this.renderCourseRows()}
               </tbody>
             </table>
           </div>
       )
   }

   componentDidMount() {
      this.courseService.findAllCourses()
          .then((courses) => {
              this.setState({courses: courses});
      });
   }

   renderCourseRows() {
      let courses = this.state.courses.map(
        function (course) {
            return <CourseRow/>
        }
      )
      return (
          courses
      )
   }

}
export default CourseList;