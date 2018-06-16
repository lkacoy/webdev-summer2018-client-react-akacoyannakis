import React from  'react'
import {connect} from 'react-redux'
import {DELETE_WIDGET} from "../constants/index"
import * as actions from '../actions'

const Heading = ({widget, preview, headingTextChanged, headingSizeChanged, nameChanged}) => {
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
                       onChange={() => nameChanged(widget.id, nameElem.value)}
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

const Paragraph = ({widget, preview, paragraphTextChanged, nameChanged}) => {
    let nameElem;
    let textElem;
    return (
        <div>
            <div hidden={preview}>
                <textarea className="form-control mb-4" placeholder="Paragraph text"
                          onChange={() => paragraphTextChanged(widget.id, textElem.value)}
                          value={widget.text}
                          ref={node => textElem = node}/>
                <input className="form-control mb-5"
                       onChange={() => nameChanged(widget.id, nameElem.value)}
                       value={widget.name}
                       ref={node => nameElem = node}/>
            </div>
        </div>
    )
};

const Image = ({widget, preview, nameChanged}) => {
    let nameElem;
    return (
        <div hidden={preview}>
            <input className="form-control mb-4"
                   value={widget.url}/>
            <input className="form-control mb-5"
                   value={widget.name}
                   onChange={() => nameChanged(widget.id, nameElem.value)}
                   ref={node => nameElem = node}/>
        </div>
    )
};

const List = ({widget, preview, nameChanged, listItemsChanged, listOrderChanged}) => {
    let nameElem;
    let listElem;
    let listOrderElem;
    return (
        <div hidden={preview}>
            <textarea className="form-control mb-4"
                      onChange={() => listItemsChanged(widget.id, listElem.value)}
                      value={widget.listItems}
                      ref={node => listElem = node}/>
            <select className="form-control mb-4"
                    onChange={() => listOrderChanged(widget.id, listOrderElem.value)}
                    value={widget.ordered}
                    ref={node => listOrderElem = node}>
                <option value="unordered">Unordered list</option>
                <option value="ordered">Ordered list</option>
            </select>
            <input className="form-control mb-5"
                   onChange={() => nameChanged(widget.id, nameElem.value)}
                   value={widget.name}
                   ref={node => nameElem = node}/>
        </div>
    )
};

const Link = ({widget, preview, nameChanged}) => {
  let nameElem;
  return (
      <div hidden={preview}>
          <input className="form-control mb-4" value={widget.linkText}/>
          <input className="form-control mb-4" value={widget.linkUrl}/>
          <input className="form-control mb-5"
                 onChange={() => nameChanged(widget.id, nameElem.value)}
                 value={widget.name}
                 ref={node => nameElem = node}/>
      </div>
  )
};

const moveUp = widget => {
    return {
        type: 'MOVE_UP', widget: widget
    }
};

const moveDown = widget => {
    return {
        type: 'MOVE_DOWN', widget: widget
    }
};

const Widget = ({widget, preview, dispatch}) => {
    let selectElement;
    return(
        <div className="form-group">
            <div className="input-group mb-2" hidden={preview}>
                <h2 className="mr-5">{widget.widgetType} Widget</h2>
                <button className="btn btn-warning mr-2" onClick={() => {
                    dispatch(moveUp(widget))
                }}><i className="fa fa-arrow-up"></i></button>
                <button className="btn btn-warning mr-2" onClick={() => {
                    dispatch(moveDown(widget))
                }}><i className="fa fa-arrow-down"></i></button>
                <select className="form-control mr-2" value={widget.widgetType}
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
            <div>
                {widget.widgetType==='Heading' && <HeadingContainer widget={widget}/>}
                {widget.widgetType==='Paragraph' && <ParagraphContainer widget={widget}/>}
                {widget.widgetType==='List' && <ListContainer widget={widget}/>}
                {widget.widgetType==='Link' && <LinkContainer widget={widget}/>}
                {widget.widgetType==='Image' && <ImageContainer widget={widget}/>}
            </div>
        </div>
    )
};

const dispathToPropsMapper = dispatch => ({
    headingTextChanged: (widgetId, newText) =>
        actions.headingTextChanged(dispatch, widgetId, newText),
    headingSizeChanged: (widgetId, newSize) =>
        actions.headingSizeChanged(dispatch, widgetId, newSize),
    nameChanged: (widgetId, newName) =>
        actions.nameChanged(dispatch, widgetId, newName),
    paragraphTextChanged: (widgetId, newText) =>
        actions.paragraphTextChanged(dispatch, widgetId, newText),
    listItemsChanged:(widgetId, newListItems) =>
        actions.listItemsChanged(dispatch, widgetId, newListItems),
    listOrderChanged:(widgetId, newOrder) =>
        actions.listOrderChanged(dispatch, widgetId, newOrder)

});
const stateToPropsMapper = state => ({
    preview: state.preview
});

export const HeadingContainer = connect(stateToPropsMapper, dispathToPropsMapper)(Heading);
export const ParagraphContainer = connect(stateToPropsMapper, dispathToPropsMapper)(Paragraph);
export const ListContainer = connect(stateToPropsMapper, dispathToPropsMapper)(List);
export const LinkContainer = connect(stateToPropsMapper, dispathToPropsMapper)(Link);
export const ImageContainer = connect(stateToPropsMapper, dispathToPropsMapper)(Image);

const WidgetContainer = connect(state => ({
    preview: state.preview
}))(Widget);
export default WidgetContainer