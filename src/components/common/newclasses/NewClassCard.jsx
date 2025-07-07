import './NewClassCard.css'

export default function NewClassCard({ tags = [], title, count, tname }) {
    return (
        <div className="newclass-card">
            <div className="newclass-card-img"></div>
            <div className="tag-list">
                {tags.map((tag, idx) => (
                    <span className="tag" key={idx}> #{tag}</span>
                ))}
            </div>
            <p className='new-title'>{title}</p>
            <p className='new-info'>전체 {count}강 | {tname}선생님</p>
        </div>
    );
}