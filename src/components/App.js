import React from 'react';

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
    fnCreateInput (data) {
        this.setState({inputText:data})
    }
    fnCreateImportant(data) {
        this.setState({important:data})
    }
    fnCreateDo() {
        if(this.state.important===''){
            alert('중요도를 선택해 주세요');
            return false;
        }
        if(this.state.text===''){
            alert('내용을 입력해 주세요');
            return false;
        }
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
    fnChangeComplete(e) {
        const data = this.state.data;
        data[e].complete = !data[e].complete;
        this.setState({
            data: data
        });
    }
    fnChangeImportant(e) {
        const data = this.state.data;
        data[e[0]].important = e[1];
        this.setState({
            data: data
        });
    }
    fnChangeText(e){
        const data = this.state.data;
        data[e[0]].text = e[1];
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
        let data = this.state.data;
        // 필터하여 다시 보내주기 위한 변수
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
    onCreateImportant(event) {
        this.props.onCreateImportant(event.target.value)
    }
    onCreateDo(event) {
        this.props.onCreateDo(event.target.value)
    }
    render() {
        return (
            <article className="inpBox">
                <select className="importantSlt" name="important" id="important" onChange={this.onCreateImportant.bind(this)}>
                    <option>중요도</option>
                    <option value="a">매우 중요</option>
                    <option value="b">중요</option>
                    <option value="c">보통</option>
                </select>
                <label htmlFor="textInput">할 일을 입력하세요</label>
                <input type="text" placeholder="할 일을 입력하세요" name="textInput" id="textInput" value={this.props.inputText} onChange={this.onCreateInput.bind(this)}/>
                <button onClick={this.onCreateDo.bind(this)}>추가</button>
            </article>
        )
    }
}

class Filter extends React.Component {
    constructor() {
        super(...arguments);
        this.state={
            a:'',
            b:'',
            c:'',
            complete:'',
            incomplete:''
        }
    }
    onChangeComplete(event) {
        // 완료, 미완료 필터이벤트
    }
    onChangeImportant(event) {
        // 중요 보통 필터이벤트
    }
    render() {
        return (
            <article className="filterBox">
                <div>
                    <label>
                        <input onChange={this.onChangeComplete.bind(this)} type="checkbox" name="important" value="" />
                        <span>모두</span>
                    </label>
                    <label>
                        <input onChange={this.onChangeComplete.bind(this)} type="checkbox" name="important" value="a" />
                        <span>매우 중요</span>
                    </label>
                    <label>
                        <input onChange={this.onChangeComplete.bind(this)} type="checkbox" name="important" value="b" />
                        <span>중요</span>
                    </label>
                    <label>
                        <input onChange={this.onChangeComplete.bind(this)} type="checkbox" name="important" value="c" />
                        <span>보통</span>
                    </label>
                </div>
                <div>
                    <label>
                        <input onChange={this.onChangeImportant.bind(this)} type="checkbox" name="important" value="" />
                        <span>모두</span>
                    </label>
                    <label>
                        <input onChange={this.onChangeImportant.bind(this)} type="checkbox" name="important" value="complete" />
                        <span>완료</span>
                    </label>
                    <label>
                        <input onChange={this.onChangeImportant.bind(this)} type="checkbox" name="important" value="incomplete" />
                        <span>미완료</span>
                    </label>
                </div>
            </article>
        )
    }
}

class Content extends React.Component {
    render() {
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
    onChangeText(event) {
        const e = [
            this.props.datakey, event.target.value
        ]
        this.props.onChangeText(e);
    }
    onChangeComplete(event) {
        this.props.onChangeComplete(this.props.datakey)
    }
    onChangeImportant(event) {
        const e = [
            this.props.datakey, event.target.value
        ]
        this.props.onChangeImportant(e);
    }
    fnEditAbleOn() {
        this.setState({
            editAble: true
        })
    }
    fnEditAbleOff() {
        this.setState({
            editAble: false
        })
    }
    render() {
        let cls = 'itemWrapper';
        let imp = '';
        let impTxt = '보통';
        let txt = '';
        if(this.props.complete) {
            cls += ' complete';
        } else{
            cls.replace(' complete','');
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