import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions"
import WidgetContainer from '../components/widget'

class WidgetList extends Component {
    constructor(props) {
        super(props);
        this.props.findAllWidgets()
    }
    render() {
        console.log(this.props);
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
                        {this.props.widgets.map(widget => (
                            <WidgetContainer widget={widget}
                                             preview={this.props.previewMode}
                                             key={widget.id}/>
                        ))}
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
    previewMode: state.preview
});
const dispatcherToPropsMapper
    = dispatch => ({
    findAllWidgets: () => actions.findAllWidgets(dispatch),
    addWidget: () => actions.addWidget(dispatch),
    save: () => actions.save(dispatch),
    preview: () => actions.preview(dispatch)
});
const App = connect(
    stateToPropertiesMapper,
    dispatcherToPropsMapper)(WidgetList);

export default App