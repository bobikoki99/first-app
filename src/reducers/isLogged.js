const loggedReducer = (state = true, action) => {
    switch(action.type) {
        case 'CHECK':
            if(action.payload < 0)
                return false;
            else 
                return true;
        default: 
            return state;
    }
};

export default loggedReducer;