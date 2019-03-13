import * as types from '../actions/actionTypes';

const initialState = {
  username: '',
  password: '',
  fullname: '',
  email: '',
  isLoggedIn: false,
  mode: 'login', //changes between 'login', 'register', and 'main'
  snippet: '',
  comment: '',
  tags: '',
  search: '',
  userTags: [],
  taggedSnippets: [],
  accountID: ''
}

const stateReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.UPDATE_USERNAME: {
      let username = action.payload;
      return {
        ...state,
        username
      }
    }

    case types.UPDATE_PASSWORD: {
      let password = action.payload;
      return {
        ...state,
        password
      }
    }

    case types.UPDATE_FULLNAME: {
      let fullname = action.payload;
      return {
        ...state,
        fullname
      }
    }

    case types.UPDATE_EMAIL: {
      let email = action.payload;
      return {
        ...state,
        email
      }
    }

    case types.LOGIN_USER: {
      let password = '';
      return {
        ...state,
        password
      }
    }

    case types.REGISTER_USER: {
      let password = '';
      return {
        ...state,
        password
      }
    }

    case types.UPDATE_SNIPPET: {
      let snippet = action.payload;
      return {
        ...state,
        snippet
      }
    }

    case types.UPDATE_COMMENT: {
      let comment = action.payload;
      return {
        ...state,
        comment
      }
    }

    case types.UPDATE_TAGS: {
      let tags = action.payload;
      return {
        ...state,
        tags
      }
    }

    case types.SUBMIT_SNIPPET: {
      
      return {
        ...state,
      }
    }

    case types.UPDATE_SEARCH: {
      let search = action.payload;
      return {
        ...state,
        search
      }
    }

    default:
      return state;
  }
}

export default stateReducer;