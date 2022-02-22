import React, {useState} from "react";
import { Form, FormControl } from "react-bootstrap";
import "./SearchForm.css";

const SearchForm = (query, setQuery) => {

    return (
        <div>            
            { Object.keys(query).length==0 ? (
                <div className="query-box">
                    <h2 className="title text-center text-muted">?</h2>
                </div>
            ) : (
                <div className="query-box">
                    <h2 className="title text-center">{query}</h2>
                </div>
            )}
            <Form className="d-flex pt-3 pb-5">
                <FormControl
                type="search"
                placeholder="Buscar..."
                className="me-2 search-box"
                aria-label="Buscar"
                onChange={(e) => setQuery(e.target.value)}
                />
            </Form>
        </div>
    );
};

export default SearchForm;
