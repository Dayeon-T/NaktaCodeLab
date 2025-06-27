import { NavLink } from 'react-router-dom'
import '../Navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <NavLink to="/"></NavLink>
            </div>
            <div className="menu">
                <NavLink to="/Dashboard" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>대시보드</NavLink>
                <NavLink to="/Courses" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>강의목록</NavLink>
                <NavLink to="/Homework" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>내 과제</NavLink>
                <NavLink to="/Grades" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>성적</NavLink>
            </div>
            <div className="logout">
                로그아웃
            </div>
        </nav>
    )
}