import React from 'react';
import Employee from './Employee';

function SearchResults( props ){
    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
            {
                props.results.map( ( result ) => {
                    return <Employee
                        // React requires a key property for lists of elements, otherwise it throws an error in the console
                        key={result.email}
                        {...result}
                    />;
                } )
            }
        </div>
    );
}

export default SearchResults;
