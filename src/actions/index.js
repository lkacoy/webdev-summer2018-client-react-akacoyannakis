import * as constants from "../constants/index"

export const headingTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.HEADING_TEXT_CHANGED,
        id: widgetId,
        text: newText})
);
export const headingSizeChanged = (dispatch, widgetId, newSize) => (
    dispatch({
        type: constants.HEADING_SIZE_CHANGED,
        id: widgetId,
        size: newSize})
);

export const paragraphTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.PARAGRAPH_TEXT_CHANGED,
        id: widgetId,
        text: newText})
);

export const nameChanged = (dispatch, widgetId, newName) => (
    dispatch({
        type: constants.NAME_CHANGED,
        id: widgetId,
        name: newName})
);

export const listItemsChanged = (dispatch, widgetId, newListItems) => (
    dispatch({
        type: constants.LIST_ITEMS_CHANGED,
        id: widgetId,
        listItems: newListItems
    })
);

export const listOrderChanged = (dispatch, widgetId, newOrder) => (
    dispatch({
        type: constants.LIST_ORDER_CHANGED,
        id: widgetId,
        listType: newOrder
    })
);

export const linkTextChanged = (dispatch, widgetId, newLinkText) => (
    dispatch({
        type: constants.LINK_TEXT_CHANGED,
        id: widgetId,
        linkText: newLinkText
    })
);

export const linkUrlChanged = (dispatch, widgetId, newLinkUrl) => (
    dispatch({
        type: constants.LINK_URL_CHANGED,
        id: widgetId,
        href: newLinkUrl
    })
);

export const imageUrlChanged = (dispatch, widgetId, newImageUrl) => (
    dispatch({
        type: constants.IMAGE_URL_CHANGED,
        id: widgetId,
        src: newImageUrl
    })
);

export const findAllWidgets = dispatch => {
    fetch('https://web2018-lexikacoyannakis.herokuapp.com/api/widget')
        .then(response => (response.json()))
        .then(widgets => dispatch({
            type: constants.FIND_ALL_WIDGETS,
            widgets: widgets }))
};
export const findWidgetsByLessonId = (dispatch) => {
    let url = window.location.href;
    let lessonId = url.split('/').pop().trim();
    let param = url.split('/').length-1;
    if (param == 8) {
        console.log("lesson id in action " + lessonId);
            fetch('https://web2018-lexikacoyannakis.herokuapp.com/api/lesson/' + lessonId + '/widget')
                .then(response => (response.json()))
                .then(widgets => dispatch({
                    type: constants.FIND_ALL_WIDGETS,
                    widgets: widgets }))
    }

};
export const addWidget = dispatch => (
    dispatch({type: constants.ADD_WIDGET})
);
export const save = (dispatch, lessonId) => (
    dispatch({type: constants.SAVE,
        lessonId: lessonId})
);
export const preview = dispatch => (
    dispatch({type: constants.PREVIEW})
);