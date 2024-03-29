export function displayError() {
  const pageContainer = document.querySelector(".pageContainer");
  pageContainer.style.display = "none";
  const errorContainer = document.querySelector(".errorContainer");
  errorContainer.style.display = "block";
  const noFound = document.querySelector(".noFound");
  noFound.style.visibility = "visible";
}

export function getInvalidRequest(error) {
  const errorCode = error.code;
  let errorMessage;
  if (errorCode === 1006) {
    errorMessage = error.message;
  }
  if (errorCode === 400 || errorCode === 1003) {
    errorMessage = "Search keyword is missing";
  }
  if (errorMessage === undefined) {
    errorMessage = "Error, please try it again later";
  }
  displayErrorMessage(errorMessage);
}

const searchError = document.querySelector(".searchError");
function displayErrorMessage(message) {
  searchError.innerHTML = `${message}`;
  searchError.style.display = "block";
}

export function deleteErrorMessage() {
  searchError.style.display = "none";
}
