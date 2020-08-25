import React from 'react';

function SearchControl( props ){
    return (
        <div className="form-group mb-4">
            <label htmlFor="search">
                Search
            </label>
            {/* <div className="input-group"> */}
                <input id="search" className="form-control form-control-lg" type="text" onChange={props.handler} value={props.search} placeholder="Type a name, email or phone" />
                {/* <div className="input-group-append">
                    <button className="btn btn-primary" type="submit" title="search">
                        <span className="fa fa-search"></span>
                    </button>
                </div> */}
            {/* </div> */}
        </div>
    );
}

export default SearchControl;