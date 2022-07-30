export const BASE_URL = `http://dispute.craftywebz.com/api/`;
export const IMAGE_BASE_URL = 'http://dispute.craftywebz.com/';
export const GET_STATE = `${BASE_URL}user/get-states-by-countrycode`;
export const GET_CITY = city =>
  `${BASE_URL}user/get-cities-by-state&countrycode?state_code=${city}`;
export const LOGIN = `${BASE_URL}user/login`;
export const REGISTER = `${BASE_URL}user/signup`;
export const FORGET_PASSWORD = `${BASE_URL}user/forgot-password`;
export const VERIFICATION_CODE = `${BASE_URL}user/account-verification`;
export const RESET_PASSWORD = `${BASE_URL}user/reset-password`;
export const CHANGE_PASSWORD = `${BASE_URL}user/change-password`;
export const GET_USER_PROFILE = `${BASE_URL}user/view-user-profile`;
export const UPDATE_PROFILE = `${BASE_URL}user/update-profile`;
export const VIEW_CATEGORIES = `${BASE_URL}user/view-categories`;
export const GET_ALL_DISPUTES = `${BASE_URL}user/get-all-disputes`;
export const EDIT_CATEGORY = category_id =>
  `${BASE_URL}user/get-category-by-id/category_id=${category_id}`;
export const ADD_CATEGORY = `${BASE_URL}user/add-category`;
export const GET_USER_CATEGORIES = `${BASE_URL}user/get-user-categories`;
export const GET_FAVORITE_CATEGORIES = `${BASE_URL}user/get-favourite-categories`;

export const GET_USER_DISPUTES = `${BASE_URL}user/get-user-disputes`;
export const UPDATE_DISPUTE = `${BASE_URL}user/update-dispute`;
export const SOFT_DELETE_DISPUTE = `${BASE_URL}user/soft-delete-dispute`;
export const DELETE_DISPUTE = `${BASE_URL}user/delete-dispute`;
export const DEMOGRAPHIC_DISPUTE = id =>
  `${BASE_URL}user/view-demographic-dispute?dispute_id=${id}`;
export const LIKE_UNLIKE_DISPUTE = `${BASE_URL}user/like-unlike-dispute`;
export const ADD_DISPUTE = `${BASE_URL}user/add-dispute`;
export const CONTACTUS = `${BASE_URL}user/contactus`;
export const GET_DEMOGRAPHIC_DISPUTE_RESULT = id => `${BASE_URL}user/get-demographic-result-by-dispute?dispute_id=${id}`;
export const GET_DEMOGRAPHIC_RESULT_BY_STATENAME  = (id , state) => `${BASE_URL}user/get-demographic-result-of-dispute-by-stateName?dispute_id=${id}&stateName=${state}`;

export const GET_DISPUTE = id =>
`${BASE_URL}user/get-disputes-by-category-id/category_id=${id}`;
export const GET_DISPUTE_DETAILS = id =>
  `${BASE_URL}user/get-dispute-by-id/dispute_id=${id}`;
export const SEARCH_CATEGEORY = name =>
  `${BASE_URL}user/search-categories?name=${name}`;
export const VIEW_USER_PROFILE = id =>
  `${BASE_URL}user/view-user-profile-by-id?id=${id}`;
export const GET_FAVORITES_DISPUTES = id =>
  `${BASE_URL}user/getfavourite-dispute-by-categoryid/category_id=${id}`;
export const FAVORITE_DISPUTE = `${BASE_URL}user/favourite-dispute`;
export const GET_USER_DISPUTE_BYID = id =>
  `${BASE_URL}user/get-dispute-by-userid/user_id=${id}`;
export const GET_AGREE_DISPUTE_BYID = id => 
`${BASE_URL}user/get-agreeDisputes-by-userid/${id}`;
export const GET_DISAGREE_DISPUTE_BYID = id => 
`${BASE_URL}user/get-disagreeDisputes-by-userid/${id}`;
export const GET_PROFILE_BYID = id => 
`${BASE_URL}user/view-user-profile-by-id?id=${id}`;
export const ADD_CATEGROY  = `${BASE_URL}user/add-category`;


// export const SOCIAL_LOGIN = `${BASE_URL}user/social/login`;
// export const LOGOUT = `${BASE_URL}user/logout`;
// export const DELETE_COMMENT = (commentID) => `${BASE_URL}user/delete-post-comment/${commentID}`
// export const INSTANT_MESSAGE = (userId) => `${BASE_URL}user/chat-list?to_user_id=${userId}`
// export const FB_GET_USER = (access_token) => `https://graph.facebook.com/me?access_token=${access_token}&fields=email`
