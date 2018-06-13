const TOPIC_API_URL =
    'http://localhost:8080/api/lesson/{LID}/topic';

let _singleton = Symbol();
export default class ModuleService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    findAllTopicsForLesson(lessonId) {
        return fetch(
            TOPIC_API_URL
                .replace('LID', lessonId))
            .then(function (response) {
                return response.json();
            })
    }

}