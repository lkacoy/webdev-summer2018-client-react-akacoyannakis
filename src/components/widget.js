import React from  'react'
import {connect} from 'react-redux'
import {DELETE_WIDGET} from "../constants/index"
import * as actions from '../actions'

const Heading = ({widget, preview, headingTextChanged, headingSizeChanged}) => {
    let selectElem;
    let inputElem;
    let nameElem;
    return(
        <div>
            <div hidden={preview}>
                <h2> Heading {widget.size}</h2>
                <input className=" form-control mb-4" onChange={() => headingTextChanged(widget.id, inputElem.value)}
                       value={widget.text}
                       ref={node => inputElem = node}/>
                <select className="form-control mb-4" onChange={() => headingSizeChanged(widget.id, selectElem.value)}
                        value={widget.size}
                        ref={node => selectElem = node}>
                    <option value="">Choose size</option>
                    <option value="1">Heading 1</option>
                    <option value="2">Heading 2</option>
                    <option value="3">Heading 3</option>
                </select>
                <input className="form-control mb-5"
                       value={widget.name}
                       ref={node => nameElem = node}/>
                <h3>Preview</h3>
            </div>
            {widget.size == 1 && <h1>{widget.text}</h1>}
            {widget.size == 2 && <h2>{widget.text}</h2>}
            {widget.size == 3 && <h3>{widget.text}</h3>}
        </div>
    )
};
const dispathToPropsMapper = dispatch => ({
    headingTextChanged: (widgetId, newText) =>
        actions.headingTextChanged(dispatch, widgetId, newText),
    headingSizeChanged: (widgetId, newSize) =>
        actions.headingSizeChanged(dispatch, widgetId, newSize),
    paragraphTextChanged: (widgetId, newText) =>
        actions.paragraphTextChanged(dispatch, widgetId, newText),
});
const stateToPropsMapper = state => ({
    preview: state.preview
});
export const HeadingContainer = connect(stateToPropsMapper, dispathToPropsMapper)(Heading);
//export const ParagraphContainer = connect(stateToPropsMapper, dispathToPropsMapper)(Paragraph);

const Paragraph = ({widget, preview, paragraphTextChanged}) => {
    let nameElem;
    let textElem;
    return (
        <div hidden={preview}>
            <textarea className="form-control mb-4" placeholder="Paragraph text"
                      onChange={() => paragraphTextChanged(widget.id, textElem.value)}
                      value={widget.paragraph}
                      ref={node => textElem = node} defaultValue="Paragraph Text"></textarea>
            <input className="form-control mb-5"
                   value={widget.name}
                   ref={node => nameElem = node}/>
        </div>
    )
};

const Image = ({widget, preview}) => {
    let nameElem;
    return (
        <div hidden={preview}>
            <input className="form-control mb-4"
                   value={widget.url}/>
            <input className="form-control mb-5"
                   value={widget.name}
                   ref={node => nameElem = node}/>
        </div>
    )
};

const List = ({widget, preview}) => {
    let nameElem;
    return (
        <div hidden={preview}>
            <textarea className="form-control mb-4" value="Put each
                item in
                a separate row"></textarea>
            <select className="form-control mb-4">
                <option value="unordered">Unordered list</option>
                <option value="ordered">Ordered list</option>
            </select>
            <input className="form-control mb-5"
                   value={widget.name}
                   ref={node => nameElem = node}/>
        </div>
    )
};

const Link = ({widget, preview}) => {
  let nameElem;
  return (
      <div hidden={preview}>
          <input className="form-control mb-4" value={widget.linkText}/>
          <input className="form-control mb-4" value={widget.linkUrl}/>
          <input className="form-control mb-5"
                 value={widget.name}
                 ref={node => nameElem = node}/>
      </div>
  )
};

const Widget = ({widget, preview, dispatch}) => {
    let selectElement;
    return(
        <li>
            <div className="row" hidden={preview}>
                <div className="col"><h2>{widget.widgetType} Widget</h2></div>

                <div className="col pull-right">
                    <button className="btn btn-warning mr-2"><i className="fa fa-arrow-up"></i></button>
                    <button className="btn btn-warning mr-2"><i className="fa fa-arrow-down"></i></button>
                    <select className="form-control" value={widget.widgetType}
                            onChange={e =>
                                dispatch({
                                    type: 'SELECT_WIDGET_TYPE',
                                    id: widget.id,
                                    widgetType: selectElement.value
                                })} ref={node => selectElement = node}>
                        <option>Heading</option>
                        <option>Paragraph</option>
                        <option>List</option>
                        <option>Link</option>
                        <option>Image</option>
                    </select>

                    <button className="btn btn-danger mr-4" onClick={e => (
                        dispatch({type: DELETE_WIDGET, id: widget.id})
                    )}><i className="fa fa-minus-circle"></i></button>
                </div>
            </div>
            <div>
                {widget.widgetType==='Heading' && <HeadingContainer widget={widget}/>}
                {widget.widgetType==='Paragraph' && <Paragraph widget={widget}/>}
                {widget.widgetType==='List' && <List widget={widget}/>}
                {widget.widgetType==='Link' && <Link widget={widget}/>}
                {widget.widgetType==='Image' && <Image widget={widget}/>}
            </div>
        </li>
    )
}
const WidgetContainer = connect(state => ({
    preview: state.preview
}))(Widget);
export default WidgetContainer