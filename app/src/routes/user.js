const express = require("express");
const userController = require("../controllers/user");

const userRouter = express.Router();

userRouter
  .post("/", (req, resp) => {
    userController.create(req.body, (err, res) => {
      let respObj;
      if (err) {
        respObj = {
          status: "error",
          msg: err.message,
        };
        return resp.status(400).json(respObj);
      }
      respObj = {
        status: "success",
        msg: res,
      };
      resp.status(201).json(respObj);
    });
  })
  .get("/:username", (req, resp, next) => {
    const username = req.params.username;
    userController.get(username, (err, user) => {
      let respObj;
      if (err) {
        respObj = {
          status: "error",
          msg: err.message,
        };
        return resp.status(400).json(respObj);
      }
      respObj = user;
      resp.status(200).json(respObj);
    });
  });

module.exports = userRouter;
