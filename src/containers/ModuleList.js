import React from 'react'
import ModuleListItem from '../components/ModuleListItem'
import ModuleService from '../services/ModuleService'

export default class ModuleList
    extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                courseId: '',
                module: {title: ''},
                modules: [
                    {title: 'Module 1 - jQuery', id: 123},
                    {title: 'Module 2 - React', id: 234},
                    {title: 'Module 3 - Redux', id: 345},
                    {title: 'Module 4 - Angular', id: 456},
                    {title: 'Module 5 - Node.js', id: 567},
                    {title: 'Module 6 - MongoDB', id: 678}
                ]
            };
            this.createModule = this.createModule.bind(this);
            this.titleChanged = this.titleChanged.bind(this);
            this.setCourseId = this.setCourseId.bind(this);
            this.setModuleTitle = this.setModuleTitle.bind(this);
            this.moduleService = ModuleService.instance;
        }

        titleChanged(event) {
            this.setState({module: {title: event.target.value}});
        }

        createModule() {
            console.log(this.state.module);
            this.moduleService.createModule(this.props.courseId,
                                            this.state.module);
        }

        setModuleTitle(event) {
           this.setState({module: {
                   title: event.target.value
            }})
        }


        setCourseId(courseId) {
            this.setState({courseId: courseId});
        }

        renderListOfModules() {
                  let modules = this.state.modules
                      .map(function(module){
                    return <ModuleListItem
                        title={module.title} key={module.id}/>
                  });
                  return modules;
                }

        render() {
            return (
                <div>
                    <h3>Module List for course: {this.state.courseId}</h3>
                    <input  onChange={this.titleChanged}
                        className="form-control"
                        placeholder="title"
                        value={this.state.module.title}/>
                    <button className= "btn btn-primary btn-block"
                        onClick={this.createModule}>
                        <i className="fa fa-plus"></i>
                    </button>
                    <ul className="list-group">
                        {this.renderListOfModules()}
                    </ul>
                 </div>
            );
        }

        componentDidMount() {
           this.setCourseId(this.props.courseId);
        }
        componentWillReceiveProps(newProps){
           this.setCourseId(newProps.courseId);
        }

}
