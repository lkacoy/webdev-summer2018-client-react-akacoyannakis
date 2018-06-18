import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions"
import WidgetContainer from '../components/widget'

class WidgetList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lessonId: ''
        };
        let url = window.location.href;
        let lessonId = url.split('/').pop().trim();
        let param = url.split('/').length-1;
        console.log("param " + param);
        if (param == 8) {
            this.props.findWidgetByLessonId(lessonId);
        }
        else {
            console.log("not lesson Id");
        }
    }

    componentDidMount() {
        this.setLessonId(this.props.lessonId);
    }
    componentWillReceiveProps(newProps){
        this.state.lessonId = newProps.lessonId;
    }

    setLessonId(lessonId) {
        this.setState({lessonId: lessonId});
    }

    renderWidgets() {
        if (this.props.widgets) {
            return this.props.widgets.map(widget => (
                    <WidgetContainer widget={widget}
                                     preview={this.props.previewMode}
                                     key={widget.id}/>
                ))

        }
    }

    render() {
        return(
            <div>
                <div className="row pull-right">
                    <button className="btn btn-success mr-2" hidden={this.props.previewMode}
                            onClick={this.props.save}>
                        Save
                    </button>
                    <button className="btn btn-info mr-4" onClick={this.props.preview}>
                        Preview
                    </button>
                </div><br/>
                <div className="row">
                    <ul>
                        {this.renderWidgets()}
                    </ul>
                </div>
                <div className="row pull-right">
                    <button className="btn btn-danger mr-4" onClick={this.props.addWidget}><i className="fa fa-plus"></i>
                    </button>
                </div>
            </div>
        )
    }
}

const stateToPropertiesMapper = (state) => ({
    widgets: state.widgets,
    previewMode: state.preview,
    lessonId: state.lessonId
});
const dispatcherToPropsMapper
    = dispatch => ({
    findAllWidgets: () => actions.findAllWidgets(dispatch),
    findWidgetByLessonId: (lessonId) => actions.findWidgetsByLessonId(dispatch, lessonId),
    addWidget: () => actions.addWidget(dispatch),
    save: (lessonId) => actions.save(dispatch, lessonId),
    preview: () => actions.preview(dispatch)
});
const App = connect(
    stateToPropertiesMapper,
    dispatcherToPropsMapper)(WidgetList);

export default App