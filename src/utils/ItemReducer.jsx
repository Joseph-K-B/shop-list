function itemReducer(items, action) {
    switch(action.type) {
        case 'added': {
            return [
                ...items,
                {
                id: action.id,
                name: action.name,
                done: false
                }
            ]
        }
        case 'changed' : {
            return items.map((item) => {
                if(item.id === action.item.id) {
                    return action.item
                }
                return item
            })
        }

        default: {
            throw new Error('missing information')
        }
    }
}

export default itemReducer;