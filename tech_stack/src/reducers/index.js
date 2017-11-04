import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './selection_reducer';

export default combineReducers({
  libraries: LibraryReducer,
  SelectedLibraryId: SelectionReducer
});
