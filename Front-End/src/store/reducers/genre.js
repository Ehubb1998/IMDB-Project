import { GENRE_OPTION } from '../actions/genre';

const genreReducer = (state = [], action) => {
    switch (action.type) {
        case GENRE_OPTION: {
            return [
                ...state,
                action.selected
            ]
        }
        default: {
            return state
        }
    }
}

export default genreReducer;