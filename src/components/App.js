import React from 'react';

class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            start: false,
            startDate:0,
            level: 9,
            x:13,
            y:13
        }
    }
    newstart() {
        // 새로게임 시작하기
        const _this = this;
        this.setState({start:false})
        
        document.getElementById('findMine').classList.remove('lose');
        document.getElementById('findMine').classList.remove('win');
    }
    restart() {
        //재시작하기
        const _this = this;
        this.setState({start:false})
        document.getElementById('findMine').classList.add('restart');
        document.getElementById('findMine').classList.remove('lose');
        document.getElementById('findMine').classList.remove('win');
        setTimeout(function() {
            _this.start();
            document.getElementById('findMine').classList.remove('restart');
        }, 0)
    }
    nextstart() {
        //다음레벨시작하기
        const _this = this;
        this.setState({
            start:false,
            level: this.state.level-1<3?9:this.state.level-1,
            x:this.state.level-1<3?this.state.x+1:this.state.x,
            y:this.state.level-1<3?this.state.y+1:this.state.y
        })
        document.getElementById('findMine').classList.add('restart');
        document.getElementById('findMine').classList.remove('lose');
        document.getElementById('findMine').classList.remove('win');
        setTimeout(function() {
            _this.start();
            document.getElementById('findMine').classList.remove('restart');
        }, 0)
    }
    start() {
        //시작하기
        const date = new Date();
        this.setState({
            start:true,
            startDate: date
        })
        
    }
    changeLv(e) {
        // 레벨변경
        let num = prompt('3~9 중 입력해주세요~ 높을수록 어렵습니다.');
        if(num > 9) {
            num = 9;
        } else if(num < 3) {
            num = 3;
        }
        this.setState({
            level: num
        })
    }
    changeHo(e) {
        // 크기변경
        let num = prompt('7~31 중 홀수를 입력해주세요~');
        if(num%2===0) {
            num = num-1;
        }
        if(num > 31) {
            num = 31;
        } else if(num < 7) {
            num = 7;
        }
        this.setState({
            x: num
        })
    }
    changeVe(e) {
        // 크기변경
        let num = prompt('7~31 중 홀수를 입력해주세요~');
        if(num%2===0) {
            num = num-1;
        }
        if(num > 31) {
            num = 31;
        } else if(num < 7) {
            num = 7;
        }
        this.setState({
            y: num
        })
    }
    render() {
        let box = '';
        let pack = '';
        if(this.state.start) {
            box = <Box x={this.state.x} y={this.state.y} level={this.state.level} newstart={this.newstart.bind(this)} restart={this.restart.bind(this)} nextstart={this.nextstart.bind(this)} startDate={this.state.startDate}/>;
        } else {
            pack = 
            <div className="startPack">
                <button onClick={this.start.bind(this)} >시작하기</button>
                가로<input type="number" maxLength="2" value={this.state.x} readOnly="readonly" onClick={this.changeHo.bind(this)} />
                새로<input type="number" maxLength="2" value={this.state.y} readOnly="readonly" onClick={this.changeVe.bind(this)} />
                레벨<input type="number" maxLength="1" value={this.state.level} readOnly="readonly" onClick={this.changeLv.bind(this)} />
                <sub>조작법: 클릭시 열림, 홀드시 매뉴</sub>
            </div>;
        }
        return (
            <div id="findMine">
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
        // 성공체크
        if(this.state.complete.length === 0 && this.state.bomb.length === Object.keys(this.state.maps).length){
            document.getElementById('findMine').classList.add('win');
            this.setState({
                end:'win'
            });
        };
    }
    markRemove(e) {
        // 깃발,폭탄체크 제거
        this.check();
        const target = e.target.parentNode.parentNode.parentNode.childNodes[0];
        const id = target.id;
        if(target.classList[1] === 'active') {
            return false;
        }
        const el = document.getElementById(id);
        if(this.state.bomb.indexOf(id)!==-1 &&this.state.complete.indexOf(id)===-1) {
            this.state.complete.push(id);
        }
        this.check();
        (el.classList.contains('markFlag'))&&(el.classList.remove('markFlag'));
        (el.classList.contains('markBomb'))&&(el.classList.remove('markBomb'));
        el.innerHTML = '';
    }
    markFlag(e) {
        // 깃발체크
        const target = e.target.parentNode.parentNode.parentNode.childNodes[0];
        const id = target.id;
        if(target.classList[1] === 'active') {
            return false;
        }
        const el = document.getElementById(id);
        el.classList.add('markFlag');
        el.innerHTML = '<i class="icon-flag"></i>';
        if(this.state.bomb.indexOf(id)!==-1 &&this.state.complete.indexOf(id)===-1) {
            this.state.complete.push(id);
        }
        this.check();
    }
    markBomb(e) {
        // 폭탄체크
        const target = e.target.parentNode.parentNode.parentNode.childNodes[0];
        const id = target.id;
        if(target.classList[1] === 'active') {
            return false;
        }
        const el = document.getElementById(id);
        const num = this.state.complete.indexOf(id);
        el.classList.add('markBomb');
        el.innerHTML = '<i class="icon-bomb"></i>';
        if(num !== -1) {
            this.state.complete.splice(num, 1);
        }
        this.check();
    }
    click(e) {
        // 클릭
        if(e.target.classList[1] === 'active' || e.target.classList[1] === 'markBomb' || e.target.classList[1] === 'markFlag') {
            return false;
        }
        let list = [];
        const _this = this;
        const id = e.target.id;
        const idx = this.state.maps[e.target.id] === undefined ? '' : this.state.maps[e.target.id];
        const el = document.getElementById(id);
        const bomb = idx === 'B' ? false : true;
        const xIdx = id.indexOf('x');
        const yIdx = id.indexOf('y');
        let pX = Number(id.substring(0, xIdx));
        let pY = Number(id.substring(xIdx + 1, yIdx));
        function rp(_pos) {
            if (_pos !== undefined) {
                list.shift();
            }
            pX = _pos === undefined ? pX : _pos.x;
            pY = _pos === undefined ? pY : _pos.y;
            for (let j = -1; j < 2; j++) {
                for (let k = -1; k < 2; k++) {
                    if (j === 0 && k === 0) {
                    } else {
                        if (Object.keys(_this.state.maps).indexOf((pX + j) + 'x' + (pY + k) + 'y') !== -1 && !document.getElementById((pX + j) + 'x' + (pY + k) + 'y').classList.contains('markBomb')&&!document.getElementById((pX + j) + 'x' + (pY + k) + 'y').classList.contains('markFlag')) {
                            if (_this.state.maps[(pX + j) + 'x' + (pY + k) + 'y'] !== 'B') {
                                document.getElementById((pX + j) + 'x' + (pY + k) + 'y').classList.add('active');
                                document.getElementById((pX + j) + 'x' + (pY + k) + 'y').innerText = _this.state.maps[(pX + j) + 'x' + (pY + k) + 'y'] === undefined ? '' : _this.state.maps[(pX + j) + 'x' + (pY + k) + 'y'];

                                if (_this.state.maps[(pX + j) + 'x' + (pY + k) + 'y'] === undefined) {
                                    let pos = {};
                                    pos.x = pX + j;
                                    pos.y = pY + k;
                                    list.push(pos);
                                }
                                delete _this.state.maps[(pX + j) + 'x' + (pY + k) + 'y'];
                            }
                        }
                    }
                }
            }
            if (list.length <= 0) { return false; } else {
                for (let i = 0; i < list.length; i++) {
                    new rp(list[i]);
                }
            }
        }
        if (!bomb) {
            // 폭탄 클릭 시
            this.setState({
                end:'lose'
            });
            document.getElementById('findMine').classList.add('lose');
            el.innerHTML = '<i class="icon-bomb"></i>';
            el.classList.add('bomb');
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
    }
    makeIdx() {
        // 임의 수 지정하기, 폭탄만들기, 폭탄주변 숫자 더하기
        for (let i = 0; i < Object.keys(this.state.maps).length; i++) {
            const p = Object.values(this.state.maps).indexOf('B', i);
            if(this.state.bomb.indexOf(Object.keys(this.state.maps)[p]) === -1 && Object.keys(this.state.maps)[p] !== undefined) {
                this.state.bomb.push(Object.keys(this.state.maps)[p]);
            }
        }
        this.state.complete = this.state.bomb.slice();

        for (let i = 0; i < this.state.bomb.length; i++) {
            const id = this.state.bomb[i];
            const xIdx = id.indexOf('x');
            const yIdx = id.indexOf('y');
            const pX = Number(id.substring(0, xIdx));
            const pY = Number(id.substring(xIdx + 1, yIdx));
            for (let j = -1; j < 2; j++) {
                for (let k = -1; k < 2; k++) {
                    if (Object.keys(this.state.maps).indexOf((pX + j) + 'x' + (pY + k) + 'y') !== -1 && this.state.maps[(pX + j) + 'x' + (pY + k) + 'y'] !== 'B') {
                        let num = (this.state.maps[(pX + j) + 'x' + (pY + k) + 'y'] === undefined) ? 0 : this.state.maps[(pX + j) + 'x' + (pY + k) + 'y'];
                        this.state.maps[(pX + j) + 'x' + (pY + k) + 'y'] = num + 1;
                    }
                }
            }
        }
    }
    marking(e) {
        e.target.parentNode.setAttribute('style','opacity:.3');
    }
    random(n) {
        // 렌덤수
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
                <p>{this.props.x*this.props.y/this.props.level*3 >Math.ceil((new Date() - this.props.startDate)/1000)?'정말 잘하시네요~~':'조금더분발해주세요~~'}</p>
                <button onClick={this.props.restart.bind(this)}>다시시작하기</button>
                <button onClick={this.props.nextstart.bind(this)}>다음레벨시작하기</button>
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
        for (let i = (y / 2 - 1); i > -(y / 2); i--) {
            for (let j = -(x / 2 - 1); j < (x / 2); j++) {
                maps.push(j + 'x' + i + 'y');
                this.state.maps[j + 'x' + i + 'y'] = this.random(this.props.level);
            }
        }
        this.makeIdx();
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
        // 마우스 아웃
        clearTimeout(this.state.sto);
    }
    up() {
        // 마우스업
        clearTimeout(this.state.sto);
        this.setState({
            hold: false
        })
    }
    down() {
        // 마우스 다운
        const end = (document.getElementById('findMine').classList.contains('lose')===true||document.getElementById('findMine').classList.contains('win')===true)?true:false;
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
                    <span onMouseUp={this.props.markFlag.bind(this)} onTouchEnd={this.props.markFlag.bind(this)}><i className="icon-flag"></i></span>
                    <span onMouseUp={this.props.markBomb.bind(this)} onTouchEnd={this.props.markBomb.bind(this)}><i className="icon-bomb"></i></span>
                    <span onMouseUp={this.props.markRemove.bind(this)} onTouchEnd={this.props.markRemove.bind(this)}><i className="icon-trash"></i></span>
                </div>
        }
        return (
            <div className="box" onMouseUp={this.up.bind(this)} onMouseDown={this.down.bind(this)} onTouchEnd={this.up.bind(this)} onTouchStart={this.down.bind(this)} onMouseOut={this.out.bind(this)} >
                <span className="map" id={this.props.id} onClick={this.props.onClick.bind(this)}></span>
                {popover}
            </div>
        )
    }
}

export default App;