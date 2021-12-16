function itemReducer(items, action) {
    switch(action.type) {
        case 'added': {
            return [
                ...items,
                {
                id: action.id,
                name: action.itemName,
                done: false
                }
            ]
        }

        default: {
            throw new Error('missing information')
        }
    }
}

export default itemReducer;