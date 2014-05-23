/*
 * @Author: Christian Rebelsky
 * @Date:   2014-05-23 23:50:49
 * @Last Modified by:   Christian Rebelsky
 * @Last Modified time: 2014-05-24 00:45:13
 */

/*jslint browser: true, devel: true, nomen: true*/
/* global $*/
/*exported LayoutManager */

'use strict';

var LayoutManager = (function() {
    var _layout = {};

    _layout.init = function() {
        var _menu = false;

        if($('.top-bar').length > 0) {
            _menu = true;
        }

        _layout.calc(_menu);
    };

    _layout.calc = function(menu) {
        var _pHeight,
            _cHeight,
            _menuHeight;

        _pHeight = _layout.pageHeight();
        _cHeight = _layout.contentHeight();

        console.log(_pHeight);

        if(!menu){
            var _cTop = _pHeight/2-_cHeight/2;
            $('#container').css('margin-top', _cTop+'px');
        }else{
             var _cTop = (_pHeight/2-_cHeight/2)-45;
            $('#container').css('margin-top', _cTop+'px');
        }

    };

    _layout.pageHeight = function() {
        var w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            y = w.innerHeight || e.clientHeight || g.clientHeight;

        return y;
    };

    _layout.contentHeight = function() {
        var d = document,
            e = d.getElementById('container'),
            g = d.getElementsByTagName('container')[0],
            height = e.clientHeight || g.clientHeight;

        return height;
    };

    return {
        init: _layout.init,
        calc: _layout.clalc

    };

})();
