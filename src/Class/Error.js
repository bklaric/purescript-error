"use strict";

exports.defaultName = function (error) {
    return error.name
}

exports.defaultMessage = function (error) {
    return error.message
}
