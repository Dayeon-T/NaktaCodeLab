import "./PopularClass.css";
import ClassCard from "./ClassCard";
import CategoryBtn from "./CategoryBtn";
export default function PopularClass() {
    return(
        <>
            <h2 className="title">현재 가장 인기있는 강의</h2>
            <CategoryBtn className="catbtn"/>
            <div className="popular-class-grid1">
                <ClassCard count="15" instructor="윤다연" title="card-1" username="김민재" usercount="999+"/>
                <ClassCard count="15" instructor="윤다연" title="card-2" username="김민재" usercount="999+"/>
                <ClassCard count="15" instructor="윤다연" title="card-3" username="김민재" usercount="999+"/>
                <ClassCard count="15" instructor="윤다연" title="card-4" username="김민재" usercount="999+"/>
                <ClassCard count="15" instructor="윤다연" title="card-5" username="김민재" usercount="999+"/>
                <ClassCard count="15" instructor="윤다연" title="card-6" username="김민재" usercount="999+"/>
            </div>
        </>
    )
}