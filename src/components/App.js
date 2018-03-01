import React from 'react';
// console.log(Data);

class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            start: true,
            level: 20
        }
    }
    render() {
        return (
            <div>
                <Box x={11} y={11} level={this.state.level} style={this.state.start === true ? '' : 'display:none;'} onClick={this.click}/>
            </div>
        )
    }
}

class Box extends App {
    constructor() {
        super(...arguments);
        this.state = {
            maps: {},
            ids: [],
            idx: []
        }
    }
    arrayToObj(array, keyValueMap) {
        var obj = {};
        var len = array.length;
        for (var i = 0; i < len; i++) {
            obj[array[i]] = keyValueMap[i];
        }
        return obj;
    }
    click(e) {
        if(e.which === 3){alert('ddd')}
        // const slt = [];
        // console.log(
        // console.log();
        let sto;
        const _this = this;
        const id = e.target.id;
        const idx = this.state.maps[e.target.id]===undefined?'':this.state.maps[e.target.id];
        const el = document.getElementById(id);
        // console.log(el)
        const bomb = idx === 'B' ? false : true;
        const xIdx = id.indexOf('x');
        const yIdx = id.indexOf('y');
        const pX = Number(id.substring(0, xIdx));
        const pY = Number(id.substring(xIdx + 1, yIdx));
        // console.log(this, bomb)
        function rp(_pX, _pY) {
            // console.log('d');
            _pX === undefined?pX:_pX;
            _pY === undefined?pY:_pY;
            for (let j = -1; j < 2; j++) {
                for (let k = -1; k < 2; k++) {
                    console.log(Object.keys(_this.state.maps).indexOf((pX + j) + 'x' + (pY + k) + 'y'));
                    if (Object.keys(_this.state.maps).indexOf((pX + j) + 'x' + (pY + k) + 'y') !== -1) {
                        if (_this.state.maps[(pX + j) + 'x' + (pY + k) + 'y'] !== 'B') {
                            document.getElementById((pX + j) + 'x' + (pY + k) + 'y').classList.add('active');
                            document.getElementById((pX + j) + 'x' + (pY + k) + 'y').innerText = _this.state.maps[(pX + j) + 'x' + (pY + k) + 'y']===undefined?'':_this.state.maps[(pX + j) + 'x' + (pY + k) + 'y'];
                            // console.log('i')
                            if (_this.state.maps[(pX + j) + 'x' + (pY + k) + 'y'] === undefined) {
                                // rp(pX + j, pY + k);
                            }
                            delete _this.state.maps[(pX)+'x'+(pY)+'y'];
                        }
                    }
                }
            }
        }
        if (!bomb) {
            el.innerHTML = '<i class="icon-bomb"></i>';
            // console.log(this);
        } else {
            if(_this.state.maps[(pX)+'x'+(pY)+'y'] === undefined) {
                rp();
            }
            delete this.state.maps[(pX)+'x'+(pY)+'y'];
            el.classList.add('active');
            el.innerText = idx;
        }
        // console.log(Object.keys(this.state.maps));
    }
    makeIdx() {
        let l = {};
        for (let i = 0; i < Object.keys(this.state.maps).length; i++) {
            const p = Object.values(this.state.maps).indexOf('B', i);
            l[p] = Object.keys(this.state.maps)[p];
        }
        delete l[-1];

        // console.log(l);
        for (let i = 0; i < Object.keys(l).length; i++) {
            const id = Object.values(l)[i];
            // console.log(el)
            // console.log(id);
            const xIdx = id.indexOf('x');
            const yIdx = id.indexOf('y');
            const pX = Number(id.substring(0, xIdx));
            const pY = Number(id.substring(xIdx + 1, yIdx));
            // console.log(id)
            for (let j = -1; j < 2; j++) {
                for (let k = -1; k < 2; k++) {
                    if(this.state.maps[(pX+j)+'x'+(pY+k)+'y']!=='B'){
                        let num = (this.state.maps[(pX+j)+'x'+(pY+k)+'y']===undefined)?0:this.state.maps[(pX+j)+'x'+(pY+k)+'y'];
                        // console.log(this.state.maps[(pX+j)+'x'+(pY+k)+'y']===undefined,(pX+j)+'x'+(pY+k)+'y')
                        this.state.maps[(pX+j)+'x'+(pY+k)+'y']=num + 1;
                    }
                }
            }
        }
        // this.state.maps['-5x5y']='aaaa';
        // console.log(Object.keys(l).length);
        // console.log(this.state.maps);
    }
    random(n) {
        let rd = Math.floor((Math.random() * n)) === 0 ? 'B' : undefined;
        return rd;
    }
    render() {
        const x = Number(this.props.x) + 1;
        const y = Number(this.props.y) + 1;
        for (let i = (y / 2 - 1); i > -(y / 2); i--) {
            for (let j = -(x / 2 - 1); j < (x / 2); j++) {
                this.state.ids.push(j + 'x' + i + 'y');
                this.state.maps[j + 'x' + i + 'y'] = this.random(this.props.level);
            }
        }
        // console.log(this.state.ids.length);
        // console.log(Object.keys(this.state.maps).length);
        this.makeIdx();
        return (
            <div className="map">
                {this.state.ids.map((item, i) => {
                    return (
                        <div key={item} className="box">
                            <span onClick={this.click.bind(this)} id={item}></span>
                        </div>
                    )
                })}
            </div>
        )
    }
}

// class I extends Box {
//     render() {
//         return (
//             <div className="box">
//                 <span id={this.props.id} onClick={this.onClick.bind(this)}></span>
//             </div>
//         )
//     }
//     onClick() {
//         this.props.onClick(this.props.idx);
//     }

// }

export default App;