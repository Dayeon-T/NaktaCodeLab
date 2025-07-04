import './ClassCard.css'

export default function ClassCard({ className = '',title, count,instructor,username,usercount }) {
    return(
        <div className='class-card-container'>
        <div className={`class-card ${className}`}>   
            <div className="cl-pick">CL Pick</div>
            <div className='class-card-icon'>
                이미지
            </div>
        </div>
          <div className="class-card-info">
                <p className='info-title'>{title}</p>
                <p className='info-count'>전체 {count}강 | {instructor}선생님</p>
                <div className='user-section'>
                <div className='user-imgs'>
                    <svg  xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <circle cx="14" cy="14" r="13.25" fill="#1E1E1E" stroke="#777777" stroke-width="0.5"/>
                    </svg>
                    <svg className='user-img' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <circle cx="14" cy="14" r="13.25" fill="#1E1E1E" stroke="#777777" stroke-width="0.5"/>
                    </svg>
                    <svg  className='user-img' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <circle cx="14" cy="14" r="13.25" fill="#1E1E1E" stroke="#777777" stroke-width="0.5"/>
                    </svg>
                </div>
                <p className='enrole-user'><span className='enrole-user-name'>{username}</span> 님 외 {usercount}명이 수강했어요</p>
             </div>
             </div>   
        </div>
    )
}