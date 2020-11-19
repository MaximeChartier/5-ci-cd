const { expect, use } = require("chai");
const userController = require("../src/controllers/user");

describe("User", () => {
  describe("Create", () => {
    it("create a new user", (done) => {
      const user = {
        username: "sergkudinov",
        firstname: "Sergei",
        lastname: "Kudinov",
      };
      userController.create(user, (err, result) => {
        expect(err).to.be.equal(null);
        expect(result).to.be.equal("OK");
        done();
      });
    });

    it("passing wrong user parameters", (done) => {
      const user = {
        firstname: "Sergei",
        lastname: "Kudinov",
      };
      userController.create(user, (err, result) => {
        expect(err).to.not.be.equal(null);
        expect(result).to.be.equal(null);
        done();
      });
    });

    // it('avoid creating an existing user', (done)=> {
    //   // TODO create this test
    //   // Warning: the user already exists
    //   done()
    // })
  });

  describe("Get", () => {
    it("get a user by username", (done) => {
      const user = {
        username: "sergkudinov",
        firstname: "Sergei",
        lastname: "Kudinov",
      };
      userController.get(user.username, (err, result) => {
        expect(user.username).to.be.equal(result.username);
        expect(user.firstname).to.be.equal(result.firstname);
        expect(user.lastname).to.be.equal(result.lastname);
        done();
      });
    });
    it("passing wrong username", (done) => {
      userController.get("0000", (err, result) => {
        expect(err).to.not.be.equal(null);
        expect(result).to.be.equal(null);
        done();
      });
    });
  });
});
