/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.5/15.2.3.5-4-58.js
 * @description Object.create - 'enumerable' property of one property in 'Properties' is an inherited accessor property without a get function (8.10.5 step 3.a)
 */


function testcase() {


        var proto = {};
        var accessed = false;

        Object.defineProperty(proto, "enumerable", {
            set: function () { }
        });

        var ConstructFun = function () { };
        ConstructFun.prototype = proto;
        var descObj = new ConstructFun();

        var newObj = Object.create({}, {
            prop: descObj 
        });
        for (var property in newObj) {
            if (property === "prop") {
                accessed = true;
            }
        }
        return !accessed;
    }
runTestCase(testcase);
