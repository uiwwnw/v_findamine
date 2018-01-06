var ctrl = {};
ctrl.main = document.querySelector('.main');
ctrl.el = document.getElementsByTagName('input');
ctrl.el_length = ctrl.el.length;
ctrl.num = [];

var creatInput = function(h, v) {
    var inp;
    var length = h * v || 224;
    for (var i = 0; i < length; i++) {
        inp = document.createElement('input');
        ctrl.main.prepend(inp);
        ctrl.num.push(i);
    }
    return ctrl.el_length = length;
}

creatInput(15,15);
var randoms = function(start, end) {
    return Math.floor(Math.random() * end) + start;
}

var names = function(_ctrl) {
    if (_ctrl.txt_length > 0) {
        for(var i = 0; i < _ctrl.txt_length; i++) {
            ctrl.el[_ctrl.num + i].setAttribute('value', _ctrl.txt[i]);
            ctrl.num.splice(_ctrl.num + i, 1);
        }
    }    
}

var inputs = function() {
    for (var i = 0; i < ctrl.num.length; i++) {
        var _ctrl = {};
        _ctrl.num = ctrl.num[randoms(0, ctrl.num.length - 1)];
        _ctrl.txt = data[randoms(0, data.length)].name;
        _ctrl.txt_length = _ctrl.txt.length;
        names(_ctrl);
    }
}
inputs();