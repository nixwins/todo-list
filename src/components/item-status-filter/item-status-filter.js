const ItemStatusFilter = ()=>{
    return(
        <div className="item-status-filter">
            <button className="btn btn-primary">All</button>
            <button className="btn btn-outline-secondary">Active</button>
            <button className="btn btn-outline-secondary" >Done</button>
        </div>
    );
}

export default ItemStatusFilter;