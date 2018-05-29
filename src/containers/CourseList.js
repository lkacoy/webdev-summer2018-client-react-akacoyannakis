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
                     <CourseRow/>
                     <CourseRow/>
                     <CourseRow/>
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
      return (
          <tr><td>Course Row</td></tr>
      )
   }

}
export default CourseList;