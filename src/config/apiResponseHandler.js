const errorResponseHandler = (error) => {
    if (
      (error.response.status === 403 || error.response.status === 500) &&
      error.response.data &&
      error.response.data.exceptionMessage.toLowerCase().startsWith('invalid authorization token')
    ) {
      console.log(error.response);
    }
    return Promise.reject(error);
  };

const successResponseHandler = (response) => response;

export { errorResponseHandler, successResponseHandler };
