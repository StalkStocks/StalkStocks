const User = require('./databaseModel');

const UserController = {
    async createUser(req, res, next) {
        try {
          const { username, password } = req.body;
          const newUser = await User.create({ 
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

    async getUser(req, res, next) {
        const username = req.params.username;
        const gotUser = await User.find({ username: username })
        if (!gotUser.length) {
        return next({
            log: 'The following error occured UserController.getUser',
            status: 500,
            message: { err: 'An error occured while trying to find a user'},
        });
        }
        res.locals.gotUser = gotUser;
        return next();
    },
}

module.exports = UserController;