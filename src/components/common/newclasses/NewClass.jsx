import CategoryBtn from "../PopularClass/CategoryBtn"
import NewClassCard from "./NewClassCard"
import './NewClass.css'

export default function NewClass(){
    return (
        <div className="new-class-grid">
        <h1>실시간 새로나온 강의</h1>
        <div className="catbtn1"><CategoryBtn/></div>
        <NewClassCard tags={["리액트","기초"]} title="React 기초 프로그래밍" count="15" tname="윤"/>
        </div>
    )
}