import React, { useState, useEffect } from "react";
import axios from "axios";
import LinkCategoria from "./LinkCategoria";
import Loading from "../Loading/Loading";
import { ListGroup } from "react-bootstrap";

const LinkValor = ({setIdDocs, categoria, valor, postDocs}) => {

    const [flagGetData, setFlagGetData] = useState(false);
    const [tmpIdDocs, setTmpIdDocs] = useState([]);
    const [next, setNext] = useState({});
    const [nextReady, setNextReady] = useState(false);

    useEffect(() => {
        async function getDocsFromValor() {
            try {
                let res = await axios({
                    url: `/api/documentos/categoria/${categoria.id}/valor/${valor.name}`,
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
        if(flagGetData){
            getDocsFromValor().then( res => setTmpIdDocs(res) );
        }
    }, [flagGetData]);

    useEffect(() => {
        async function getNextFromValor() {
            try {
                let res = await axios({
                    url: `/api/categoria/${categoria.id}/valor`,
                    method: 'post',
                    data: tmpIdDocs,
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
        if(tmpIdDocs.length>0){
            console.log(tmpIdDocs.length + " IDS de " + valor.name);
            console.log(tmpIdDocs);
            setIdDocs(tmpIdDocs);
            setFlagGetData(false);
            getNextFromValor().then( res => setNext(res) );
        }
        
    }, [tmpIdDocs]);

    useEffect(() => {
        //Si hay siguiente
        if(next){
            if(next.type==="Cat" && next.val.length>0){
                setNextReady(true);
            }
        } else {
            setNextReady(false);
        }
    }, [next]);

    const processValor = (e, valor) => {
        e.preventDefault();
        setFlagGetData(true);
    }

    return (
        <>
            <li className="list-group-item pl-5">
                <a href="#" className="text-decoration-none" onClick={(e) => processValor(e,valor)}>
                    {valor.name} ({valor.docs})
                </a>
            </li>
            {
                nextReady && next.val ? (
                    <LinkCategoria setIdDocs={setIdDocs} categoria={next.val[0]} setCategoriaVisible={()=>{}} postDocs={tmpIdDocs} />
                ) : (
                    <></>
                )
            }
        </>
    );
};

export default LinkValor;