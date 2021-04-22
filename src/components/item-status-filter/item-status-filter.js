import React from 'react';

const ItemStatusFilter = ({ current, onFilterChange }) => {

    const btnData = [
        { label: "All", name: "all" },
        { label: "Active", name: "active" },
        { label: "Done", name: "done" }
    ];

    const btns = btnData.map((el) => {

        const isActive = el.name === current;

        const clazz = isActive ? "btn-info" : "btn-outline-secondary";

        return (
            <button
                key={el.name}
                className={`btn ${clazz}`}
                onClick={() => onFilterChange(el.name)}>
                { el.label}
            </button>
        );
    });

    return (
        <div className="item-status-filter">
            { btns}

        </div>
    );
}

export default ItemStatusFilter;