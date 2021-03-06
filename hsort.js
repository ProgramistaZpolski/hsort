/**
 * @param {String} h
 * @param {Array} arr
 * @param {Function} hsort
 */

"use strict";

function hsort(arr) {
	return arr.filter(function(h){ 
		if (typeof h === "string") {
			return h.toLowerCase() === "h";
		};
    });
};
