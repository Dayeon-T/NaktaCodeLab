// src/components/Card.jsx
import './Card.css'

export default function Card({ title, subtitle, count = 0, className = '' }) {
  return (
    <>
    
    <div className={`card-base ${className}`}>
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <span>총 {count}개 강의</span>
      <div className='btn'>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path d="M18.1458 13.715L9.47917 23.465C9.08402 23.9132 8.4006 23.9568 7.95167 23.5625C7.50349 23.1673 7.45987 22.4839 7.85417 22.035L15.8817 13L7.85417 3.96498C7.49039 3.51332 7.54682 2.85528 7.98219 2.47215C8.41756 2.08903 9.07743 2.11672 9.47917 2.53498L18.1458 12.285C18.5051 12.6939 18.5051 13.306 18.1458 13.715Z" fill="url(#paint0_linear_188_8443)"/>
            <defs>
                <linearGradient id="paint0_linear_188_8443" x1="7.58478" y1="2.20209" x2="18.5301" y2="2.27012" gradientUnits="userSpaceOnUse">
                <stop stop-color="#2CFF8C"/>
                <stop offset="1" stop-color="#03FD49"/>
                </linearGradient>
            </defs>
        </svg>
      </div>
      <div className="btn2">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
            <rect x="12" y="12" width="48" height="48" rx="10" fill="#1A3D24"/>
            <rect width="48" height="48" rx="10" fill="#333333"/>
            <rect width="48" height="48" rx="10" fill="url(#paint0_linear_188_8440)"/>
            <defs>
                <linearGradient id="paint0_linear_188_8440" x1="0" y1="0" x2="48.5033" y2="0.602104" gradientUnits="userSpaceOnUse">
                <stop stop-color="#2CFF8C"/>
                <stop offset="1" stop-color="#03FD49"/>
                </linearGradient>
            </defs>
        </svg>
      </div>
    </div>
    </>
  )
}
