/**
Created by Dimitar Kazakov dimitar.kazakov@gmail.com on 03/08/14. ( GPL 2014 )
*/
var union = function (a, b) {
    "use strict";
    a = a.concat(b);
    return a.filter(function (e, p) {
        return (a.indexOf(e) === p);
    });
};

var difference = function (a, b) {
    "use strict";
    return a.filter(function (e) {
        return (b.indexOf(e) === -1);
    });
}

var intersection = function (a, b) {
    "use strict";
    return a.filter(function (e) {
        return (b.indexOf(e) !== -1);
    });
};

var exclusion = function (a, b) {
    "use strict";
    a = a.concat(b);
    return a.filter(function (e) {
        return (a.indexOf(e) === a.lastIndexOf(e)) ;
    });
};
