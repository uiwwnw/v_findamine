import React from 'react';
// console.log(Data);

class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            start: false,
            startDate:0,
            level: 5,
            x:11,
            y:11
        }
    }
    newstart() {
        const _this = this;
        this.setState({start:false})
        
        document.getElementById('root').classList.remove('lose');
        document.getElementById('root').classList.remove('win');
    }
    restart() {
        const _this = this;
        this.setState({start:false})
        
        document.getElementById('root').classList.remove('lose');
        document.getElementById('root').classList.remove('win');
        setTimeout(function() {
            _this.start()
        }, 1)
    }
    start() {
        const date = new Date();
        this.setState({
            start:true,
            startDate: date
        })
        
    }
    changeLv(e) {
        if(e.target.value <=0) {
            const num  = prompt('레벨이 너무 낮습니다. 레벨은 3~9 사이의 숫자를 입력해주세요~ 높을수록 쉬운 게임입니다~');
            this.setState({
                level: num
            })
        } else if(e.target.value > 9) {
            const num  = prompt('레벨이 너무 높습니다. 레벨은 3~9 사이의 숫자를 입력해주세요~ 높을수록 쉬운 게임입니다~');
            this.setState({
                level: num
            })
        } else {
            this.setState({
                level: e.target.value
            })
        }
    }
    changeHo(e) {
        if(e.target.value <6) {
            const num  = prompt('맵이 사이즈가 너무 작습니다. 맵은 6~30 사이의 숫자를 입력해주세요~');
            this.setState({
                x: num
            })
            
        } else if(e.target.value > 30) {
            const num  = prompt('맵이 사이즈가 너무 큽니다. 맵은 6~30 사이의 숫자를 입력해주세요~');
            this.setState({
                x: num
            })
        } else {
            this.setState({
                x: e.target.value
            })
        }
    }
    changeVe(e) {
        if(e.target.value < 6) {
            const num  = prompt('맵이 사이즈가 너무 작습니다. 맵은 6~30 사이의 숫자를 입력해주세요~');
            this.setState({
                y: num
            })
            
        } else if(e.target.value > 30) {
            const num  = prompt('맵이 사이즈가 너무 큽니다. 맵은 6~30 사이의 숫자를 입력해주세요~');
            this.setState({
                y: num
            })
        } else {
            this.setState({
                y: e.target.value
            })
        }
    }
    render() {
        let box = '';
        let pack = '';
        if(this.state.start) {
            box = <Box x={this.state.x} y={this.state.x} level={this.state.level} newstart={this.newstart.bind(this)} restart={this.restart.bind(this)} startDate={this.state.startDate}/>;
        } else {
            pack = 
            <div className="startPack">
                <button onClick={this.start.bind(this)} >시작하기</button>
                가로<input type="number" value={this.state.x} onChange={this.changeHo.bind(this)} />
                새로<input type="number" value={this.state.y} onChange={this.changeVe.bind(this)} />
                레벨<input type="number" value={this.state.level} onChange={this.changeLv.bind(this)} />
            </div>;
        }
        return (
            <div>
                {box}
                {pack}
            </div>
        )
    }
}

class Box extends App {
    constructor() {
        super(...arguments);
        this.state = {
            maps: {},
            bomb:[],
            complete:[],
            end: false
        }
    }
    check() {
        // console.log(this.props.startDate);
        console.log(this.state.complete.length)
        if(this.state.complete.length === 0){
            document.getElementById('root').classList.add('win');
            this.setState({
                end:'win'
            });
        };
    }
    markRemove(e) {
        this.check();
        const target = e.target.parentNode.parentNode.parentNode.childNodes[0];
        const id = target.id;
        if(target.classList[1] === 'active') {
            return false;
        }
        const el = document.getElementById(id);
        if(this.state.bomb.indexOf(id)!==-1) {
            this.state.complete.push(id);
        }
        (el.classList.contains('markFlag'))&&(el.classList.remove('markFlag'));
        (el.classList.contains('markBomb'))&&(el.classList.remove('markBomb'));
        el.innerHTML = '';
        // delete this.state.maps[id]; 
    }
    markFlag(e) {
        const target = e.target.parentNode.parentNode.parentNode.childNodes[0];
        const id = target.id;
        if(target.classList[1] === 'active') {
            return false;
        }
        const el = document.getElementById(id);
        el.classList.add('markFlag');
        el.innerHTML = '<i class="icon-flag"></i>';
        if(this.state.bomb.indexOf(id)!==-1) {
            this.state.complete.push(id);
        }
        // console.log(this.state.complete,this.state.complete.length);
    }
    markBomb(e) {
        const target = e.target.parentNode.parentNode.parentNode.childNodes[0];
        const id = target.id;
        // console.log(id);
        if(target.classList[1] === 'active') {
            return false;
        }
        const el = document.getElementById(id);
        const num = this.state.complete.indexOf(id);
        el.classList.add('markBomb');
        // el.setAttribute('data-bomb-index', num);
        el.innerHTML = '<i class="icon-bomb"></i>';
        if(num !== -1) {
            this.state.complete.splice(num, 1);
        }
        // console.log(this.state.complete,this.state.complete.length);
        this.check();
    }
    click(e) {
        // const slt = [];
        // console.log(e.target);
        if(e.target.classList[1] === 'active' || e.target.classList[1] === 'markBomb' || e.target.classList[1] === 'markFlag') {
            return false;
        }
        let list = [];
        const _this = this;
        const id = e.target.id;
        const idx = this.state.maps[e.target.id] === undefined ? '' : this.state.maps[e.target.id];
        const el = document.getElementById(id);
        // console.log(el)
        const bomb = idx === 'B' ? false : true;
        const xIdx = id.indexOf('x');
        const yIdx = id.indexOf('y');
        let pX = Number(id.substring(0, xIdx));
        let pY = Number(id.substring(xIdx + 1, yIdx));
        function rp(_pos) {
            // console.log(_pX);
            // let sto;
            if (_pos !== undefined) {
                list.shift();
            }
            pX = _pos === undefined ? pX : _pos.x;
            pY = _pos === undefined ? pY : _pos.y;
            // console.log(_pX,_pY);
            // console.log(pX,pY);
            for (let j = -1; j < 2; j++) {
                for (let k = -1; k < 2; k++) {
                    if (j === 0 && k === 0) {
                    } else {
                        if (Object.keys(_this.state.maps).indexOf((pX + j) + 'x' + (pY + k) + 'y') !== -1 && !document.getElementById((pX + j) + 'x' + (pY + k) + 'y').classList.contains('markBomb')&&!document.getElementById((pX + j) + 'x' + (pY + k) + 'y').classList.contains('markFlag')) {
                            // console.log((pX + j) + 'x' + (pY + k) + 'y');
                            if (_this.state.maps[(pX + j) + 'x' + (pY + k) + 'y'] !== 'B') {
                                document.getElementById((pX + j) + 'x' + (pY + k) + 'y').classList.add('active');
                                document.getElementById((pX + j) + 'x' + (pY + k) + 'y').innerText = _this.state.maps[(pX + j) + 'x' + (pY + k) + 'y'] === undefined ? '' : _this.state.maps[(pX + j) + 'x' + (pY + k) + 'y'];

                                if (_this.state.maps[(pX + j) + 'x' + (pY + k) + 'y'] === undefined) {
                                    // console.log(_this.state.maps[(pX + j) + 'x' + (pY + k) + 'y']);
                                    let pos = {};
                                    pos.x = pX + j;
                                    pos.y = pY + k;
                                    list.push(pos);
                                }
                                delete _this.state.maps[(pX + j) + 'x' + (pY + k) + 'y'];
                                // console.log(Object.keys(_this.state.maps).indexOf((pX + j) + 'x' + (pY + k) + 'y'))
                                // console.log(Object.keys(_this.state.maps).length)
                            }
                        }
                    }
                    // console.log();
                }
            }
            if (list.length <= 0) { return false; } else {
                for (let i = 0; i < list.length; i++) {
                    // console.log(list);
                    new rp(list[i]);
                }
            }
        }
        if (!bomb) {
            this.setState({
                end:'lose'
            });
            document.getElementById('root').classList.add('lose');
            el.innerHTML = '<i class="icon-bomb"></i>';
            el.classList.add('active');
            return false;
        } else {
            if (_this.state.maps[(pX) + 'x' + (pY) + 'y'] === undefined) {
                rp();
            }
            delete this.state.maps[(pX) + 'x' + (pY) + 'y'];
            el.classList.add('active');
            el.innerText = idx;
        }
        this.check();
        // console.log(Object.keys(this.state.maps).length);
    }
    makeIdx() {
        // let l = {};
        for (let i = 0; i < Object.keys(this.state.maps).length; i++) {
            const p = Object.values(this.state.maps).indexOf('B', i);
            if(this.state.bomb.indexOf(Object.keys(this.state.maps)[p]) === -1 && Object.keys(this.state.maps)[p] !== undefined) {
                this.state.bomb.push(Object.keys(this.state.maps)[p]);
            }
        }
        this.state.complete = this.state.bomb;

        for (let i = 0; i < this.state.bomb.length; i++) {
            const id = this.state.bomb[i];
            // console.log(el)
            // console.log(id);
            const xIdx = id.indexOf('x');
            const yIdx = id.indexOf('y');
            const pX = Number(id.substring(0, xIdx));
            const pY = Number(id.substring(xIdx + 1, yIdx));
            // console.log(id)
            for (let j = -1; j < 2; j++) {
                for (let k = -1; k < 2; k++) {
                    if (Object.keys(this.state.maps).indexOf((pX + j) + 'x' + (pY + k) + 'y') !== -1 && this.state.maps[(pX + j) + 'x' + (pY + k) + 'y'] !== 'B') {
                        let num = (this.state.maps[(pX + j) + 'x' + (pY + k) + 'y'] === undefined) ? 0 : this.state.maps[(pX + j) + 'x' + (pY + k) + 'y'];
                        // console.log(this.state.maps[(pX+j)+'x'+(pY+k)+'y']===undefined,(pX+j)+'x'+(pY+k)+'y')
                        this.state.maps[(pX + j) + 'x' + (pY + k) + 'y'] = num + 1;
                    }
                }
            }
        }
        // this.state.maps['-5x5y']='aaaa';
        // console.log(Object.keys(l).length);
        // console.log(this.state.maps);
    }
    marking(e) {
        e.target.parentNode.setAttribute('style','opacity:.3');
    }
    random(n) {
        let rd = Math.floor((Math.random() * n)) === 0 ? 'B' : undefined;
        return rd;
    }
    render() {
        let popup = '';
        let maps = [];
        if(this.state.end === 'win') {
            popup = 
            <div className="popup">
                <p>짝짝짝 미션컴플릿!</p>
                <p>맵크기{this.props.x*this.props.y} 레벨 {this.props.level} 완료하는데 총 {Math.ceil((new Date() - this.props.startDate)/1000)}초걸렸어요.</p>
                <p>{this.props.x*this.props.y/this.props.level*5 >Math.ceil((new Date() - this.props.startDate)/1000)?'정말 잘하시네요~~':'조금더분발해주세요~~'}</p>
                <button onClick={this.props.restart.bind(this)}>다시시작하기</button>
                <button onClick={this.props.newstart.bind(this)}>새로시작하기</button>
            </div>;
        }else if (this.state.end === 'lose') {
            popup = 
            <div className="popup">
                <p>게임오버</p>
                {/* <button onClick={this.marking.bind(this)}>정답확인</button> */}
                <button onClick={this.props.restart.bind(this)}>다시시작하기</button>
                <button onClick={this.props.newstart.bind(this)}>새로시작하기</button>
            </div>;
        }
        const x = Number(this.props.x) + 1;
        const y = Number(this.props.y) + 1;
        // console.log(Object.values(this.state.maps).length);
        for (let i = (y / 2 - 1); i > -(y / 2); i--) {
            for (let j = -(x / 2 - 1); j < (x / 2); j++) {
                maps.push(j + 'x' + i + 'y');
                this.state.maps[j + 'x' + i + 'y'] = this.random(this.props.level);
            }
        }
        // console.log(this.state.ids.length);
        // console.log(Object.values(this.state.maps).length);
        this.makeIdx();
        // console.log(Object.values(this.state.maps).length);
        return (
            <div className="maps" data-x={this.props.x} data-y={this.props.y}>
                {maps.map((item, i) => {
                    return (
                        <I key={item} markBomb={this.markBomb.bind(this)} markFlag={this.markFlag.bind(this)} markRemove={this.markRemove.bind(this)} onClick={this.click.bind(this)} id={item} />
                    )
                })}
                {popup}
            </div>
        )
    }
}

class I extends Box {
    constructor() {
        super(...arguments);
        this.state = {
            hold: false,
            sto: false
        }
    }
    out() {
        clearTimeout(this.state.sto);
    }
    up() {
        clearTimeout(this.state.sto);
        this.setState({
            hold: false
        })
    }
    down() {
        const end = (document.getElementById('root').classList.contains('lose')===true||document.getElementById('root').classList.contains('win')===true)?true:false;
        const _this = this;
        if(!end){
            this.state.sto = setTimeout(() => {
                _this.setState({
                    hold: true
                })
            }, 300);
        }
    }
    render() {
        let popover = '';
        if (this.state.hold) {
            popover =
                <div className="popover">
                    <span onMouseUp={this.props.markFlag.bind(this)}><i className="icon-flag"></i></span>
                    <span onMouseUp={this.props.markBomb.bind(this)} ><i className="icon-bomb"></i></span>
                    <span onMouseUp={this.props.markRemove.bind(this)}><i className="icon-trash"></i></span>
                </div>
        }
        return (
            <div className="box" onMouseUp={this.up.bind(this)} onMouseDown={this.down.bind(this)} onMouseOut={this.out.bind(this)} >
                <span className="map" id={this.props.id} onClick={this.props.onClick.bind(this)}></span>
                {popover}
            </div>
        )
    }
}

export default App;