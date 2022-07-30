const hidereducer = (state = [], action) => {
  switch (action.type) {
    case 'HIDE_DATA': {
      state.push(action.data);
      return state;
    }
    case 'UN_HIDE_DATA': {
        state.filter((ele)=>{ 
         return ele !== action.data; 
        });
    }
    case 'REMOVE_DATA': {
      state = [];
    }
    default: {
      return state;
    }
  }
};

export default hidereducer;
