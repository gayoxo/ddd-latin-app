import React, { useState, useEffect } from "react";
import axios from "axios";
import LinkValor from "./LinkValor";
import LinkCategoria from "./LinkCategoria";
import { Button, ListGroup } from "react-bootstrap";

const LinkCategoriaBase = ({setIdDocs, categoria, setCategoriaVisible}) => {

    const [flagGetData, setFlagGetData] = useState(false);
    const [nextIsValor, setNextIsValor] = useState(false);
    const [nextIsCategory, setNextIsCategory] = useState(false);
    const [postDocs, setPostDocs] = useState([]);
    const [next, setNext] = useState({});

    useEffect(() => {
        async function getDocsFromCategoria() {
            try {
                let res = await axios({
                    url: `/api/documentos/categoria/${categoria.id}`,
                    method: 'get',
                    timeout: 8000,
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                if (res.status == 200) {
                    return res.data;
                }
            }
            catch (err) {
                console.error(err);
            }
        }
        if(flagGetData){
            getDocsFromCategoria().then( res => setPostDocs(res) );
        }
    }, [flagGetData]);

    useEffect(() => {
        async function getNextFromCategory() {
            try {
                let res = await axios({
                    url: `/api/categoria/${categoria.id}`,
                    method: 'post',
                    data: postDocs,
                    timeout: 8000,
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                if (res.status == 200) {
                    return res.data;
                }
            }
            catch (err) {
                console.error(err);
            }
        }
        if(flagGetData && postDocs.length>0){
            setFlagGetData(false);
            getNextFromCategory().then( res => setNext(res) );
        }
    }, [postDocs]);

    useEffect(() => {
        //Si hay siguiente
        if(next.val){
            if(next.type==="val"){
                setNextIsValor(true);
                setNextIsCategory(false);
            } else if(next.type==="Cat"){
                setNextIsValor(false);
                setNextIsCategory(true);
            }
        }
    }, [next]);

    const processCategory = (e, categoria) => {
        e.preventDefault();
        setFlagGetData(true);
        setCategoriaVisible(categoria.id);
    }

    return (
        <>
            <Button variant="secondary" onClick={(e) => processCategory(e,categoria)}>
                {categoria.name}
            </Button>
            {
                nextIsValor ? (
                    <ul className="list-group list-group-flush">
                        {
                            next.val.map((v,index) => (
                                <LinkValor key={index} setIdDocs={setIdDocs} categoria={categoria} valor={v} postDocs={postDocs} />
                            ))
                        }
                    </ul>
                ) : (
                    nextIsCategory ? (
                        <LinkCategoria key={next.val[0].id} setIdDocs={setIdDocs} categoria={next.val[0]} postDocs={postDocs} />
                    ) : (
                        <></>
                    )
                )
            }
        </>
    );
};

export default LinkCategoriaBase;