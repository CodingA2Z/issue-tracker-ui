import React, { useState } from "react";
import axios from 'axios';
import { apiUrl } from "./constants";

function IssueForm(){
    const [issue, setIssue]=useState({ title: '', description: ''});

    const handleInputChange=(e) => {
        const { name, value } = e.target;
        setIssue({ ...issue, [name]: value });
    };

    const handleSubmit = ()=> {
        axios.post(apiUrl,issue)
        .then(response => {
            console.log('Issue created:', response.data);
        })
        .catch(error => {
            console.error('Error creating issue:',error)
        });
    };

    return(
        <div>
            <h2>
                Create Issue
            </h2>
            <form>
                <div>
                    <label>Title:</label>
                    <input
                       type="text"
                       name="title"
                       value={issue.title}
                       onChange={handleInputChange}
                       />
                </div>
                <div>
                    <label>Description:</label>
                    <input
                       type="text"
                       name="description"
                       value={issue.description}
                       onChange={handleInputChange}
                       />
                </div>
                <div>
                    <button type="button" onClick={handleSubmit}>
                        Create Issue
                    </button>
                </div>
            </form>
        </div>
    )
}

export default IssueForm;