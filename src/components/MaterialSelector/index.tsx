import './style.scss';

import { useState } from 'react';

export default function MaterialSelector() {
    const [category, setCategory] = useState(0);

    function handleCategoryChange(e: any) {
        setCategory(Number(e.target.value));
    }

    return (
        <div id="material-selector">
            <div className="category-list">
                <select className="form-select" onChange={handleCategoryChange}>
                    <option value="0">Wybierz kategorię</option>
                    <option value="1">Sprawdziany</option>
                    <option value="2">Materiał 2</option>
                    <option value="3">Materiał 3</option>
                </select>
            </div>

            <div className="material-list">
                {category === 0 && (
                    <div className="no-materials">
                        <p>Wybierz kategorię, aby zobaczyć materiały</p>
                    </div>
                )}

                {category === 1 &&
                    new Array(19)
                        .fill(0)
                        .map((_, i) => <Material key={i} title="Sprawdzian 1" description="Opis materiału 1" />)}
            </div>
        </div>
    );
}

function Material({ title, description, active = false }: { title: string; description: string; active?: boolean }) {
    const [isActive, setIsActive] = useState(active);

    function handleClick() {
        setIsActive(!isActive);
    }

    return (
        <div className={'material ' + (isActive ? 'active' : '')} onClick={handleClick}>
            <div className="material-title">Materiał 1</div>
            <div className="material-description">Opis materiału 1</div>
        </div>
    );
}
