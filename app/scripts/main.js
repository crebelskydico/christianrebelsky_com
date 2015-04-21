/*
 * @Author: Christian Rebelsky
 * @Date:   2014-05-21 06:58:29
 * @Last Modified by:   Christian Rebelsky
 * @Last Modified time: 2014-05-24 01:50:44
 */

/*jslint browser: true, devel: true, nomen: true*/
/*global $, LayoutManager, addEvent*/

'use strict';

$(document).ready(function () {
    $(document).foundation();
    if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
         LayoutManager.init();
    } else{
        $('#container').css('margin-top','44px');
    }

    //addEvent( window, 'onresize', LayoutManager.calc );
});