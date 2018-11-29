const apiErrorMessage = () => next => (action) => {
  if (!/FAILURE/.test(action.type)) {
    return next(action);
  }

  const { payload } = action;
  if (payload && payload.name === 'ApiError' && payload.response) {
    const { response } = payload;
    payload.message = response.description || response.error || payload.message;
  }

  return next(action);
};

export default apiErrorMessage;
