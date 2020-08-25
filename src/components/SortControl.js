import React from 'react';

function SortControl( props ){
    return (
        <div className="form-group mb-4">
            <label htmlFor="search">
                Sort By
            </label>
            <select className="form-control form-control-lg" value={props.sorting} onChange={props.handler}>
                {
                    props.properties.map( ( pProperty ) => {
                        return <option key={pProperty} value={pProperty}>
                            {pProperty.replace( /^./, ( pMatch ) => pMatch.toUpperCase() )}
                        </option>
                    } )
                }
            </select>
        </div>
    );
}

export default SortControl;