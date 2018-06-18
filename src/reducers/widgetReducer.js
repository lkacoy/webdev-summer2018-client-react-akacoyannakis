import * as constants from "../constants/index"
import 'array.prototype.move';

export const widgetReducer = (state = {widgets: [], preview: false, lessonId: ''}, action) => {
    console.log("REDUCER");
    let newState;
    switch (action.type) {

        case constants.PREVIEW:
            return {
                widgets: state.widgets,
                preview: !state.preview
            };

        case constants.HEADING_TEXT_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.text = action.text
                    }
                    return Object.assign({}, widget)
                })
            };

        case constants.HEADING_SIZE_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.size = action.size
                    }
                    return Object.assign({}, widget)
                })
            };

        case constants.NAME_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.name = action.name
                    }
                    return Object.assign({}, widget)
                })
            };

        case constants.PARAGRAPH_TEXT_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.text = action.text
                    }
                    return Object.assign({}, widget)
                })
            };

        case constants.LIST_ITEMS_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.listItems = action.listItems
                    }
                    return Object.assign({}, widget)
                })
            };

        case constants.LIST_ORDER_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.listType = action.listType
                    }
                    return Object.assign({}, widget)
                })
            };

        case constants.LINK_TEXT_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.text = action.text
                    }
                    return Object.assign({}, widget)
                })
            };

        case constants.LINK_URL_CHANGED:
            return {
               widgets: state.widgets.map(widget => {
                   if (widget.id === action.id) {
                       widget.href = action.href
                   }

               })
            };

        case constants.IMAGE_URL_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id ===action.id) {
                        widget.src = action.src
                    }
                    return Object.assign({}, widget)
                })
            };

        case constants.SELECT_WIDGET_TYPE:
            console.log(action);
            let newState = {
                widgets: state.widgets.filter((widget) => {
                    if(widget.id === action.id) {
                        widget.widgetType = action.widgetType;
                        widget.dType = action.widgetType;
                        if (widget.widgetType === 'Paragraph') {
                            widget.text = 'Paragraph text'
                        } else if (widget.widgetType === 'Link') {
                            widget.text = 'Link text'
                        }
                    }
                    return true;
                })
            };
            return JSON.parse(JSON.stringify(newState));

        case constants.SAVE:
            let url = window.location.href;
            let lessonId = url.split('/').pop().trim();
            console.log(url + "URL");
            fetch('http://localhost:8080/api/lesson/' + lessonId + '/widget', {
                method: 'post',
                body: JSON.stringify(state.widgets),
                headers: {
                    'content-type': 'application/json'}
            });
            return state;

        case constants.FIND_ALL_WIDGETS:
            newState = Object.assign({}, state);
            newState.widgets = action.widgets;
            newState.lessonId = action.lessonId;
            console.log("state");
            console.log(state);
            console.log(newState);
            return newState;
        case constants.DELETE_WIDGET:
            return {
                widgets: state.widgets.filter(widget => (
                    widget.id !== action.id
                ))
            };
        case constants.ADD_WIDGET:
            return {
                widgets: [
                    ...state.widgets,
                    {
                        id: state.widgets.length + 1,
                        text: 'New Widget',
                        widgetType: 'Heading',
                        size: '1',
                        name: 'Widget name',
                        src: 'Image URL',
                        href: 'Link URL',
                        listItems: 'Put each\nitem in a\nseparate row',
                        listType: 'unordered',
                        dType: 'Heading',
                        orderNumber: state.widgets.length+1
                    }
                ]
            };

        case constants.MOVE_UP:
            let index = state.widgets.indexOf(action.widget);
            state.widgets.move(index, index - 1);
            return state.widgets.splice(0);

        case constants.MOVE_DOWN:
            let indexDown = state.widgets.indexOf(action.widget);
            state.widgets.move(indexDown, indexDown + 1);
            return state.widgets.splice(0);

        default:
            return state
    }
};
