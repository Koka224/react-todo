import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/actions/filterActions';
import '../styles/FilterButtons.scss';

const FilterButtons = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);

    const handleFilter = (newFilter) => {
        dispatch(setFilter(newFilter));
    };

    return (
        <div className="filter-buttons">
            <button className={filter === 'ALL' ? 'active' : ''} onClick={() => handleFilter('ALL')}>
                All
            </button>
            <button className={filter === 'COMPLETED' ? 'active' : ''} onClick={() => handleFilter('COMPLETED')}>
                Completed
            </button>
            <button className={filter === 'ACTIVE' ? 'active' : ''} onClick={() => handleFilter('ACTIVE')}>
                Active
            </button>
        </div>
    );
};

export default FilterButtons;
