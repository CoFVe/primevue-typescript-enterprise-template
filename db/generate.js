module.exports = function() {
  var faker = require("faker");
  var _ = require("lodash");
  var depts = ["Customer Support", "Engineering", "Sales"];

  return {
    people: _.times(100, function(n) {
      return {
        id: n + 1,
        name: faker.name.findName(),
        avatar: faker.image.avatar(),
        phone: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        departmentId: _.sample([1, 2, 3])
      };
    }),
    departments: _.times(3, function(n) {
      return {
        id: n + 1,
        name: depts.pop()
      };
    })
  };
};
