/*
 * @Author: Christian Rebelsky
 * @Date:   2014-05-24 00:32:37
 * @Last Modified by:   Christian Rebelsky
 * @Last Modified time: 2014-05-24 00:36:39
 */

/*jslint browser: true, devel: true, nomen: true*/

/*exported addEvent, removeEvent */

'use strict';

function addEvent(obj, type, fn) {
    if (obj.attachEvent) {
        obj['e' + type + fn] = fn;
        obj[type + fn] = function() {
            obj['e' + type + fn](window.event);
        };
        obj.attachEvent('on' + type, obj[type + fn]);
    } else {
        obj.addEventListener(type, fn, false);
    }
}

function removeEvent(obj, type, fn) {
    if (obj.detachEvent) {
        obj.detachEvent('on' + type, obj[type + fn]);
        obj[type + fn] = null;
    } else {
        obj.removeEventListener(type, fn, false);
    }
}
