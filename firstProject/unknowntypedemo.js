var userInput;
var userName;
userInput = 5;
userInput = "hello";
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, code: code };
}
generateError("Not Found!!!", 404);
