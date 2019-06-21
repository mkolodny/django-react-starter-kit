import { configureStore } from 'redux-starter-kit';
import rootReducer from './reducers/rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
