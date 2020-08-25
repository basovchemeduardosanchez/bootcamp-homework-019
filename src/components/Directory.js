import React from 'react';
import Toolbar from './Toolbar';
import SearchResults from './SearchResults';
import { results as data } from '../data.json';

class Directory extends React.Component {
    state = {
        search: '',
        sorting: '',
        data: [],
        dataFields: [],
        results: [],
    }

    getMappedData(){
        // Data obtained from https://randomuser.me/api/?results=100
        let lResult = data.map( ( pEmployee ) => {
            // Transform the data into useful data for our purposes
            return {
                name: `${pEmployee.name.first} ${pEmployee.name.last}`,
                email: pEmployee.email,
                phone: pEmployee.phone,
                cell: pEmployee.cell,
                picture: pEmployee.picture.large,
                location: `${pEmployee.location.city}, ${pEmployee.location.state}, ${pEmployee.location.country}`,
                timezone: `(UTC ${pEmployee.location.timezone.offset}) ${pEmployee.location.timezone.description}`
            };
        } );
        return lResult;
    }

    getSortedObjectArray = ( pArray, pSortProperty ) => {
        return pArray.sort( ( pA, pB ) => {
            // Convert to uppercase for case insensitive comparison
            let lA = String( pA[ pSortProperty ] ).toUpperCase(),
                lB = String( pB[ pSortProperty ] ).toUpperCase();
            // Compare the strings and sort alphabetically
            return lA.localeCompare( lB );
        } );
    }
    handleSorting = ( pEvent ) => {
        let lSortProperty = pEvent.target.value;

        this.setState( { sorting: lSortProperty, results: this.getSortedObjectArray( this.state.results, lSortProperty ) } );
    }
    handleSearch = ( pEvent ) => {
        let lSearch = pEvent.target.value;

        this.setState( { search: lSearch, results: this.state.data.filter( ( pEmployee ) => {
            // Result will be false unless setting it to true below
            let lResult = false,
                lUppercaseSearch = lSearch.toUpperCase();

            if (
                pEmployee.name.toUpperCase().includes( lUppercaseSearch )
                || pEmployee.email.toUpperCase().includes( lUppercaseSearch )
                || pEmployee.location.toUpperCase().includes( lUppercaseSearch )
                || pEmployee.timezone.toUpperCase().includes( lUppercaseSearch )
                // Remove all non-digits
                || pEmployee.phone.replace(/[^0-9]/, '').includes( lUppercaseSearch )
                // Remove all non-digits
                || pEmployee.cell.replace(/[^0-9]/, '').includes( lUppercaseSearch )
            ){
                lResult = true;
            }

            return lResult;
        } ) } );
    }
    componentDidMount(){
        let lMappedData = this.getMappedData(),
            lSorting = 'name';
        // Start the app by showing everyone
        this.setState( {
            data: lMappedData,
            results: this.getSortedObjectArray( lMappedData, lSorting ),
            sorting: lSorting,
            // Set the fields to the keys of the first element in the data array
            dataFields: Object.keys( lMappedData[0] )
        } );
    }
    render(){
        return (
            <div className="container text-white mt-4">
                <div className="row">
                    <div className="col">
                        <h1>Directory</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Toolbar
                            search={this.state.search}
                            searchHandler={this.handleSearch}
                            sorting={this.state.sorting}
                            sortingProperties={ this.state.dataFields.filter( ( pValue ) => ![ 'picture' ].includes( pValue ) ) }
                            sortingHandler={this.handleSorting}
                        />
                        <SearchResults results={this.state.results} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Directory