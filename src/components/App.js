import React from 'react';
// console.log(Data);

class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            start: true,
            level: 5
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
        // const slt = [];
        const id = this.id;
        const el = document.getElementById(id);
        // console.log(el)
        const bomb = this.idx === 'B' ? false : true;
        const xIdx = id.indexOf('x');
        const yIdx = id.indexOf('y');
        const pX = Number(id.substring(0, xIdx));
        const pY = Number(id.substring(xIdx + 1, yIdx));
        // console.log(this, bomb)
        if (!bomb) {
            el.innerHTML = '<i class="icon-bomb"></i>';
            // console.log(this);
        } else {
            for (let j = -1; j < 2; j++) {
                for (let k = -1; k < 2; k++) {
                    document.getElementById((pX+j)+'x'+(pY+k)+'y').classList.add('active');
                }
            }
            el.classList.add('active');
            el.innerText = e;
        }
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
                        let num = (this.state.maps[(pX+j)+'x'+(pY+k)+'y']===null)?0:this.state.maps[(pX+j)+'x'+(pY+k)+'y'];
                        // console.log(this.state.maps[(pX+j)+'x'+(pY+k)+'y']===null,(pX+j)+'x'+(pY+k)+'y')
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
        let rd = Math.floor((Math.random() * n)) === 0 ? 'B' : null;
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
                        <I key={item} id={item} idx={this.state.maps[item]} onClick={this.click} />
                    )
                })}
            </div>
        )
    }
}

class I extends Box {
    render() {
        return (
            <div className="box">
                <span id={this.props.id} onClick={this.onClick.bind(this)}></span>
            </div>
        )
    }
    onClick() {
        this.props.onClick(this.props.idx);
    }

}

export default App;