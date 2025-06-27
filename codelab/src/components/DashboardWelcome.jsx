import '../DashboardWelcom.css'
export default function DashboardWelcome({ name, profileImg, courseCount, taskCount }) {
    return (
        <div className="welcome-container">
            <img
                src={profileImg || '/images/default-profile.png'}
                alt="프로필"
                className="profile-img"
            />
            <div className="welcome-text">
                <h2>안녕하세요, {name || '사용자'}님!</h2>
                <p>
                    현재 <span className="highlight">{courseCount ?? 0}개의 수업</span>을 수강 중이고,
                    <span className="highlight task">{taskCount ?? 0}개의 과제</span>가 대기 중이에요.
                </p>
            </div>
        </div>
    );
}
