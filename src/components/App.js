import React from 'react';
// console.log(Data);

class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state={
            data: [
                {
                    complete: false,
                    important: 'a',
                    time: "2018.01.02",
                    text: "가나다라마바사아"
                },
                {
                    complete: false,
                    important: 'b',
                    time: "2018.01.12",
                    text: "ㅇㅇㅇㅇㅇ"
                },
                {
                    complete: true,
                    important: 'c',
                    time: "2018.03.10",
                    text: "쿠팡테스트완료"
                },
                {
                    complete: false,
                    important: 'a',
                    time: "2018.01.02",
                    text: "가나다라마바사아"
                },
                {
                    complete: false,
                    important: 'b',
                    time: "2018.01.12",
                    text: "ㅇㅇㅇㅇㅇ"
                },
                {
                    complete: true,
                    important: 'c',
                    time: "2018.03.10",
                    text: "쿠팡테스트완료"
                },
                {
                    complete: false,
                    important: 'a',
                    time: "2018.01.02",
                    text: "가나다라마바사아"
                },
                {
                    complete: false,
                    important: 'b',
                    time: "2018.01.12",
                    text: "ㅇㅇㅇㅇㅇ"
                },
                {
                    complete: true,
                    important: 'c',
                    time: "2018.03.10",
                    text: "쿠팡테스트완료"
                },
                {
                    complete: false,
                    important: 'a',
                    time: "2018.01.02",
                    text: "가나다라마바사아"
                },
                {
                    complete: false,
                    important: 'b',
                    time: "2018.01.12",
                    text: "ㅇㅇㅇㅇㅇ"
                },
                {
                    complete: true,
                    important: 'c',
                    time: "2018.03.10",
                    text: "쿠팡테스트완료"
                },
                {
                    complete: false,
                    important: 'a',
                    time: "2018.01.02",
                    text: "가나다라마바사아"
                },
                {
                    complete: false,
                    important: 'b',
                    time: "2018.01.12",
                    text: "ㅇㅇㅇㅇㅇ"
                },
                {
                    complete: true,
                    important: 'c',
                    time: "2018.03.10",
                    text: "쿠팡테스트완료"
                },
                {
                    complete: false,
                    important: 'a',
                    time: "2018.01.02",
                    text: "가나다라마바사아"
                },
                {
                    complete: false,
                    important: 'b',
                    time: "2018.01.12",
                    text: "ㅇㅇㅇㅇㅇ"
                },
                {
                    complete: true,
                    important: 'c',
                    time: "2018.03.10",
                    text: "쿠팡테스트완료"
                },
                {
                    complete: false,
                    important: 'a',
                    time: "2018.01.02",
                    text: "가나다라마바사아"
                },
                {
                    complete: false,
                    important: 'b',
                    time: "2018.01.12",
                    text: "ㅇㅇㅇㅇㅇ"
                },
                {
                    complete: true,
                    important: 'c',
                    time: "2018.03.10",
                    text: "쿠팡테스트완료"
                },
                {
                    complete: false,
                    important: 'a',
                    time: "2018.01.02",
                    text: "가나다라마바사아"
                },
                {
                    complete: false,
                    important: 'b',
                    time: "2018.01.12",
                    text: "ㅇㅇㅇㅇㅇ"
                },
                {
                    complete: true,
                    important: 'c',
                    time: "2018.03.10",
                    text: "쿠팡테스트완료"
                }
            ],
            inputText:'',
            important:'',
            time: ''
        }
    }
    newstart() {
        const _this = this;
        this.setState({start:false})
        
        document.getElementById('findMine').classList.remove('lose');
        document.getElementById('findMine').classList.remove('win');
    }
    restart() {
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
    start() {
        const date = new Date();
        const time = date.getFullYear()+'.'+date.getMonth()+'.'+date.getDate();
        const obj = {
            complete: false,
            important: this.state.important,
            time: time,
            text: this.state.inputText
        }
        const data = this.state.data;
        data.push(obj);
        this.setState({
            data: data,
            inputText:'',
            important:''
        });
    }
    changeLv(e) {
        let num = prompt('3~9 중 입력해주세요~ 높을수록 어렵습니다.');
        if(num > 9) {
            num = 9;
        } else if(num < 3) {
            num = 3;
        }
        this.setState({
            data: data
        });
    }
    changeHo(e) {
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
            data: data
        });
    }
    changeVe(e) {
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
            data: data
        });
    }
    fnFilterImportant() {
        // data를 필터하여 보내기
    }
    onFilterComplete() {
        // data를 필터하여 보내기
    }
    
    render() {
        let box = '';
        let pack = '';
        if(this.state.start) {
            box = <Box x={this.state.x} y={this.state.y} level={this.state.level} newstart={this.newstart.bind(this)} restart={this.restart.bind(this)} startDate={this.state.startDate}/>;
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
            <section className="todoZone">
                <Input inputText={this.state.inputText} onCreateInput={this.fnCreateInput.bind(this)} onCreateImportant={this.fnCreateImportant.bind(this)} onCreateDo={this.fnCreateDo.bind(this)}/>
                <Filter onFilterImportant={this.fnFilterImportant} onFilterComplete={this.fnFilterComplete}/>
                <Content data={data} onChangeComplete={this.fnChangeComplete.bind(this)} onChangeImportant={this.fnChangeImportant.bind(this)} onChangeText={this.fnChangeText.bind(this)}/>
            </section>
        )
    }
}

class Input extends React.Component {
    onCreateInput(event) {
        this.props.onCreateInput(event.target.value)
    }
    check() {
        // console.log(this.props.startDate);
        // console.log(this.state.bomb.length)
        // console.log()
        if(this.state.complete.length === 0 && this.state.bomb.length === Object.keys(this.state.maps).length){
            document.getElementById('findMine').classList.add('win');
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
        if(this.state.bomb.indexOf(id)!==-1 &&this.state.complete.indexOf(id)===-1) {
            this.state.complete.push(id);
        }
        this.check();
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
        if(this.state.bomb.indexOf(id)!==-1 &&this.state.complete.indexOf(id)===-1) {
            this.state.complete.push(id);
        }
        this.check();
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
        this.state.complete = this.state.bomb.slice();

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
    onChangeImportant(event) {
        // 중요 보통 필터이벤트
    }
    random(n) {
        let rd = Math.floor((Math.random() * n)) === 0 ? 'B' : undefined;
        return rd;
    }
}

class Content extends React.Component {
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
            <article className="contentBox">
                {this.props.data.map((item, i) => {
                    return (
                        <Label complete={item.complete} important={item.important} time={item.time} text={item.text} key={i} datakey={i} onChangeComplete={this.props.onChangeComplete.bind(this)} onChangeImportant={this.props.onChangeImportant.bind(this)} onChangeText={this.props.onChangeText.bind(this)}/>
                    )
                })}
            </article>
        )
    }
}

class Label extends React.Component {
    constructor() {
        super(...arguments);
        this.state={
            editAble:false
        }
    }
    out() {
        clearTimeout(this.state.sto);
    }
    up() {
        clearTimeout(this.state.sto);
        this.setState({
            editAble: true
        })
    }
    down() {
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
                    <span onMouseUp={this.props.markFlag.bind(this)} onTouchStart={this.props.markFlag.bind(this)}><i className="icon-flag"></i></span>
                    <span onMouseUp={this.props.markBomb.bind(this)} onTouchStart={this.props.markBomb.bind(this)}><i className="icon-bomb"></i></span>
                    <span onMouseUp={this.props.markRemove.bind(this)} onTouchStart={this.props.markRemove.bind(this)}><i className="icon-trash"></i></span>
                </div>
        }
        if(this.state.editAble) {
            cls += ' editAble';
        } else{
            cls.replace(' editAble','');
        }
        if(this.props.important === 'a') {
            impTxt= '매우 중요';
        } else if(this.props.important === 'b') {
            impTxt= '중요';
        } else {
            impTxt= '보통';
        }
        if(this.state.editAble) {
            imp = <select name="important" defaultValue={this.props.important} className="importantSlt" onChange={this.onChangeImportant.bind(this)} >
                <option value="a">매우 중요</option>
                <option value="b">중요</option>
                <option value="c">보통</option>
            </select>;
            txt = <input type="text" onChange={this.onChangeText.bind(this)} value={this.props.text}/>;
        } else {
            imp = <span>{impTxt}</span>
            txt = <p className="text" onClick={this.fnEditAbleOn.bind(this)}>{this.props.text}</p>;
        }
        
        return(
            <div className={cls}>
                <label className="chkWrap">
                    <input type="checkbox" defaultChecked={this.props.complete} onChange={this.onChangeComplete.bind(this)}/>
                    <i></i>
                </label>
                <div className="infoWrap">
                    <div>
                        중요도: {imp}
                    </div>
                    <p className="time">{this.props.time}</p>
                    {txt}
                    <button type="button" onClick={this.fnEditAbleOff.bind(this)}>수정</button>
                </div>
                <i className="dragable"></i>
            </div>
        )
    }
}

export default App;