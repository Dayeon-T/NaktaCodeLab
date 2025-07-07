import './Howtocard.css';
export default function Howtocard({count}) {
    return(
        <div>
            <div className="howclass-card">
            <div className="howclass-card-img"></div>
            <p className='how-title'>React 기초 프로그래밍{count}</p>
            <p className='how-info'>전체 15강 | 윤선생님</p>
            <p className='how-like'> ♥ 999+명이 추천했어요</p>
        </div>
        </div>

    )
}