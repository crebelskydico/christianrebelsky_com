/*
 * @Author: Christian Rebelsky
 * @Date:   2014-05-21 06:58:29
 * @Last Modified by:   Christian Rebelsky
 * @Last Modified time: 2014-05-24 00:43:56
 */

/*jslint browser: true, devel: true, nomen: true*/
/*global $, LayoutManager, addEvent*/

'use strict';

$(document).ready(function () {
    $(document).foundation();
    LayoutManager.init();
    //addEvent( window, 'onresize', LayoutManager.calc );
});