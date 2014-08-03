/**
Created by Dimitar Kazakov dimitar.kazakov@gmail.com on 03/08/14. ( GPL 2014 )
*/

var union = function (a, b) {
    "use strict";
    a = a.concat(b);
    return a.filter(function (e, p) {
        if (a.indexOf(e) === p) {
            return true;
        }
    });
};

var difference = function (a, b) {
    "use strict";
    return a.filter(function (e) {
        if (b.indexOf(e) === -1) {
            return true;
        }
    });
};

var intersection = function (a, b) {
    "use strict";
    return a.filter(function (e) {
        if (b.indexOf(e) !== -1) {
            return true;
        }
    });
};

var exclusion = function (a, b) {
    "use strict";
    a = a.concat(b);
    return a.filter(function (e) {
        if (a.indexOf(e) === a.lastIndexOf(e)) {
            return true;
        }
    });
};
