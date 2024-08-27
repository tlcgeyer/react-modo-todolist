function FilterButton ({name, onPress}) {
    return(
        <button onClick={onPress} type="button" className="btn toggle-btn" aria-pressed="true" >
        <span className="visually-hidden">Show </span>
        <span>{name}</span>
        <span className="visually-hidden"> tasks</span>
        </button>
    );
}

export default FilterButton;