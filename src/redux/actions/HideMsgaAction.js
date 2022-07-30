const hidedata = data => {
    return {
      type: 'HIDE_DATA',
      data
    };
  };
  const unHideData = data => {
    return {
      type: 'UN_HIDE_DATA',
      data
    };
  };
  const removeData = data => {
    return {
      type: 'REMOVE_DATA',
      data
    };
  };
//   const removeAllProduct = () => {
//     return {
//       type: 'REMOVE_ALL_CART',
//     };
//   };
  
  export {hidedata , removeData ,unHideData };
  