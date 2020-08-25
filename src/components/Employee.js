import React from 'react';

function Employee( props ){
    return (
        <div className="col mb-4">
            <div className="card shadow text-dark border-0">
                <img className="card-img-top" src={props.picture} alt={props.name} />
                <div className="card-body border-bottom">
                    <h4 className="card-title text-truncate mb-0" title={props.name}>
                        {props.name}
                    </h4>
                    <h5 className="text-truncate" title={props.location}>
                        {props.location}
                    </h5>
                    <h6 className="text-truncate" title={props.timezone}>
                        Local Time: {props.timezone}
                    </h6>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item bg-light text-truncate">
                        <a className="text-dark" href={'mailto:' + props.email} title={props.email}>
                            <span className="fa fa-envelope-o"></span>&nbsp; {props.email}
                        </a>
                    </li>
                    <li className="list-group-item bg-light text-truncate">
                        <a className="text-dark" href={'tel:' + props.phone} title={props.phone}>
                            <span className="fa fa-phone"></span>&nbsp; {props.phone}
                        </a>
                    </li>
                    <li className="list-group-item bg-light text-truncate">
                        <a className="text-dark" href={'tel:' + props.cell} title={props.cell}>
                            <span className="fa fa-mobile"></span>&nbsp; {props.cell}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Employee;
