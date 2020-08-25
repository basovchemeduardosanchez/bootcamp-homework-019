import React from 'react';
import SearchControl from './SearchControl';
import SortControl from './SortControl';

function Toolbar( props ){
    return (
        <form onSubmit={props.handler}>
            <SearchControl search={props.search} handler={props.searchHandler} />
            <SortControl sorting={props.sorting} properties={props.sortingProperties} handler={props.sortingHandler} />
        </form>
    );
}

export default Toolbar;
