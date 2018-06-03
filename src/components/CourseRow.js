import React from 'react';
import {Link} from 'react-router-dom'

class CourseRow extends React.Component {
    constructor(props) {
        super(props);
    }
   render() {
       return (
           <tr>
                <td>
                    <Link to={`/course/${this.props.course.id}`}>
                        {this.props.course.title}
                    </Link>
                </td>
               <td>
                   {this.props.course.ownedBy}
               </td>
               <td>
                   {this.props.course.modified}
               </td>
                <td>
                    <span onClick={() =>
                           {this.props.delete(this.props.course.id)}}>
                        <i className="fa fa-trash"></i>
                    </span>
                </td>
           </tr>
       )
   }
}
export default CourseRow;