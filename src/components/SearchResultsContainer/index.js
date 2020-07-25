import React, { Component } from "react";
import employees from "../../employees.json";
import ResultsRow from "../ResultsRow/";

class SearchResultsContainer extends Component {

    state = {
        employees,
        error: ""
    };


    render() {
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map(employee => (
                            <ResultsRow
                                id={employee.id.value}
                                key={employee.id.value}
                                image={employee.picture.thumbnail}
                                name={employee.name.first+ " " + employee.name.last}
                                phone={employee.phone}
                                email={employee.email}
                            />
                        ))}
                    </tbody>
                </table>
            </div>

        );
    }
}
export default SearchResultsContainer;