/**
Created by Dimitar Kazakov dimitar.kazakov@gmail.com on 03/08/14. ( GPL 2014 )
*/

var union = function (a, b) {
    "use strict";
    b = b.concat(a);
    return b.filter(function (e, p) {
        if (b.indexOf(e) === p) {
            return true;
        }
    });
};

var difference = function (a, b) {
    "use strict";
    return b.filter(function (e) {
        if (a.indexOf(e) === -1) {
            return true;
        }
    });
}

var intersection = function (a, b) {
    "use strict";
    return b.filter(function (e) {
        if (a.indexOf(e) !== -1) {
            return true;
        }
    });
};

var exclusion = function (a, b) {
    "use strict";
    b = b.concat(a);
    return b.filter(function (e) {
        if (b.indexOf(e) === b.lastIndexOf(e)) {
            return true;
        }
    });
};
