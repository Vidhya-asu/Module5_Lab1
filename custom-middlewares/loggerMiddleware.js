//Vidhyalakshmi PE, Student ID: 1216804810


function myMiddleware(req, res, next) {
    console.log('Middleware executed');
    next(); // Proceed to the next middleware
  }


  module.exports = myMiddleware;
