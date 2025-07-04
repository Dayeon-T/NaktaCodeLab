import { useState } from 'react';
import './CategoryBtn.css';

const categories = ['전체', 'React', '데이터베이스', 'Php', 'Python', '인공지능', 'Node.js', 'Java', '앱개발', '…'];

export default function CategoryBtn() {
    const [selected, setSelected] = useState('전체');

    return (
        <div className='cats'>
            {categories.map((cat) => (
                <button
                    key={cat}
                    className={`cat-btn${selected === cat ? ' selected' : ''}`}
                    onClick={() => setSelected(cat)}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
}