import React, {
    Component
}
from 'react';
import Item from './Item';

class List extends Component {
    render() {
        return (
            <ol>
            <Item></Item>
            </ol>
        )
    }
}

export default List;
