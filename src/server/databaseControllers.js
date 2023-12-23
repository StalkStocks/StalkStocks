const User = require('./databaseModel');

const userController = {
    async createUser(req, res, next) {
        try {
          const { username, password } = req.body;
          const newUser = await Student.create({ 
            username : username, 
            password : password
          });
          res.locals.newUser = newUser;
          return next();
        }
        catch(err){
          return next('Error in userController.createUser: ' + JSON.stringify(err));
        }
      },
}