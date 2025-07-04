import './Gnb.css'

export default function Gnb() {
  return (
    <nav className="gnb">
      <div className="gnb-menu-wrapper">
        <ul className="gnb-menu">
          <li><a href="/">전체강의</a></li>
          <li><a href="/about">내 학습룸</a></li>
          <li><a href="/contact">과제</a></li>
          <li><a href="/community">커뮤니티</a></li>
        </ul>
      </div>
      <a href="" className="login">로그인</a>
    </nav>
  )
}
