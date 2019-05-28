/*


    * Inside `burger.js`, import `orm.js` into `burger.js`

    * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

    * Export at the end of the `burger.js` file.

*/
var orm = require('../config/orm.js');

var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },
    //cols and vals = arrays
    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition,
            function (res) {
                cb(res);
            });
    },
    delete: function (condition, cb) {
        orm.delete("cats", condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;