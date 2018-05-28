import React from 'react'
import ModuleListItem from '../components/ModuleListItem'

class ModuleList2 extends React.Component {
    render() {
        return (
            <div>
                <ModuleListItem title="React Module"/>
                <ModuleListItem title="Redux Module"/>
                <ModuleListItem title="React Native Module"/>
            </div>
        );
    }
}

export default ModuleList2;