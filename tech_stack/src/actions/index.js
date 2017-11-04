export const selectLibrary = (LibraryId) => {
  return {
    type: 'select_library',
    payload: LibraryId
  };
};
