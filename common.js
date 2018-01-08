var ctrl = {
    'main': document.querySelector('.main'),
    'el': document.getElementsByTagName('input'),
    'el_length': 0,
    'num': [],
    'horizon': 15,
    'vertical': 15,
};


function rnd (_start, _end) {
    return Math.floor(Math.random() * _end) + _start;
}

function createInput(_horizon, _vertical) {
    var inp;
    var length = _horizon * _vertical;
    for (var i = 0; i < length; i++) {
        if(ctrl.el_length === 0) {
            inp = document.createElement('input');
            ctrl.main.prepend(inp);
        }
        ctrl.num.push(i);
    }
    return ctrl.el_length = length;
}

function chk(_ctrl) {
    var chk = [];
    // 전체인덱스를 넘는지 체크
    if (_ctrl.num + _ctrl.txt_length < ctrl.el_length) {
        chk[0] = true;
        console.log(chk.indexOf(false))
    } else {
        chk[0] = false;
        console.log(chk.indexOf(false))
    }

    if (chk.indexOf(false) === 0) {
        return false;
    } else {
        return true;
    }
}

function wright() {
    var _ctrl = {};
    // console.log(ctrl.num)
    // while(ctrl.num.length !== 0) {
    //     _ctrl.var = rnd(0, ctrl.num.length);
    //     _ctrl.data_var = rnd(0, data.length);
    //     _ctrl.num = ctrl.num[_ctrl.var];
    //     _ctrl.txt = data[rnd(0, _ctrl.data_var)].name;
    //     _ctrl.txt_length = _ctrl.txt.length;
    //     data.splice(_ctrl.data_var, 1);
    //     ctrl.num.splice(_ctrl.var, _ctrl.txt_length + 1);
    //     if (new chk(_ctrl)) {
    //         for(var i = 0; i < _ctrl.txt_length + 1; i++) {
    //             var _txt2 = _ctrl.txt[i];
    //             if (_txt2 === undefined) {_txt2 = ''};
    //             // console.log(ctrl.el[_ctrl.num + i], _ctrl.num + i, _ctrl.num + _txt_length);
    //             ctrl.el[_ctrl.num + i].setAttribute('value', _txt2);
    //         }
    //     }
    // }
    _ctrl.var = -1;
    while(ctrl.num.length !== 0) {
        _ctrl.var += 1;
        _ctrl.data_var = rnd(0, data.length);
        _ctrl.num = ctrl.num[_ctrl.var];
        _ctrl.txt = data[rnd(0, _ctrl.data_var)].name;
        _ctrl.txt_length = _ctrl.txt.length;
        // console.log(chk(_ctrl));
        if (chk(_ctrl)) {
            data.splice(_ctrl.data_var, 1);
            ctrl.num.splice(_ctrl.var, _ctrl.txt_length);
            for(var i = 0; i < _ctrl.txt_length + 1; i++) {
                var _txt2 = _ctrl.txt[i];
                if (_txt2 === undefined) {_txt2 = ''};
                // console.log(ctrl.el[_ctrl.num + i], _ctrl.num + i, _ctrl.num + _txt_length);
                ctrl.el[_ctrl.num + i].setAttribute('value', _txt2);
            }
        } else {
            return false;
        }
    }
}

new createInput(ctrl.horizon, ctrl.vertical);
new wright();
document.querySelector('.start button').onclick = function() {
    new createInput(ctrl.horizon, ctrl.vertical);
    new wright();
}
