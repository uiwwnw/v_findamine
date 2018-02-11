import face from '../img/img.jpg';
import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <article>
                <h2>안녕하세요. 프론트엔드개발자 윤창원입니다.</h2>
                <img className="myFace" src={face}/>
                <p>
                    아주 간단한 리엑트 sample을 만들어보았습니다. 
                    특별하다면 
                </p>
                <ul>
                    <li>
                        이미지스프라이트 sprite-smith와 
                    </li>
                    <li>
                        아이콘폰트 fontello 등 추가 적용
                    </li>
                </ul>
                <p>
                    했다는 점입니다.
                    기본적으로 앱의 형태로 제작해보았습니다.
                    감사합니다.
                </p>
                <sub>(여담이지만, 간단한 개인 깃블로그로 사용하려던게 어찌어찌 리엑트적용, 개인 포폴홈피로까지 진화(?)하게 되었습니다. 편하게 로그 올리는 페이지는 새로 또 만들어야할거같아요. 그전까진 내부 로그페이지로 대체하려합니다.</sub>
            </article>
        );
    }
}

export default Home;