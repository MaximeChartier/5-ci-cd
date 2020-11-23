const client = require("../dbClient");

module.exports = {
  create: (user, callback) => {
    // Check parameters
    if (!user.username)
      return callback(new Error("Wrong user parameters"), null);
    // Create User schema
    const userObj = {
      firstname: user.firstname,
      lastname: user.lastname,
    };
    // Save to DB
    // TODO check if user already exists
    client.hmset(user.username, userObj, (err, res) => {
      if (err) return callback(err, null);
      callback(null, res); // Return callback
    });
  },
  get: (username, callback) => {
    client.hmget(username, "firstname", "lastname", (err, user) => {
      const userObj = {
        username: username,
        firstname: user[0],
        lastname: user[1],
      };
      const error = (respObj = {
        status: "error",
      });
      if (err) return callback(err, null);
      if (!userObj.firstname) return callback(error, null);
      if (!userObj.lastname) return callback(error, null);
      callback(null, userObj);
    });
  },
};
