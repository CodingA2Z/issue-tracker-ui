import React, {useState, useEffect} from "react";
import axios from 'axios';
import { apiUrl } from "./constants";

function IssueList(){
    const [issues, setIssues]= useState([]);

    useEffect(() =>{
        axios.get(apiUrl)
        .then(response => setIssues(response.data))
        .catch(error => console.error(error));
    }, []);


    return(
        <div>
            <h1>Issue List</h1>
            <u1>
                {issues.map(issue =>{
                    <li key={issue.id}>
                        {issue.title} : {issue.description}
                    </li>
                })}
            </u1>
        </div>
    );
}

export default IssueList;