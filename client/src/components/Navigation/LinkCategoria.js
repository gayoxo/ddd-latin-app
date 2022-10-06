import React, { useState, useEffect } from "react";
import axios from "axios";
import LinkValor from "./LinkValor";
import { Button, ListGroup } from "react-bootstrap";

const LinkCategoria = ({setIdDocs, categoria, postDocs}) => {

    const [flagGetData, setFlagGetData] = useState(false);
    const [nextIsValor, setNextIsValor] = useState(false);
    const [nextIsCategory, setNextIsCategory] = useState(false);
    const [next, setNext] = useState({});

    useEffect(() => {
        async function getNextFromCategory() {
            try {
                let res = await axios({
                    url: `http://localhost:3001/api/categoria/${categoria.id}`,
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
        if(postDocs.length>0){
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
    
    const cssLinkCategory = {
        color: "rgb(206, 121, 118)",
        marginLeft: "1em",
    };

    return (
        <>
            
            <span style={cssLinkCategory}>
                {categoria.name}
            </span>
            {
                nextIsValor ? (
                    <ul className="list-group">
                        {
                            next.val.map((v,index) => (
                                <LinkValor key={index} setIdDocs={setIdDocs} categoria={categoria} valor={v} postDocs={postDocs} />
                            ))
                        }
                    </ul>
                ) : (
                    nextIsCategory && next.val ? (
                        <LinkCategoria setIdDocs={setIdDocs} categoria={next.val[0]} postDocs={postDocs} />
                    ) : (
                        <></>
                    )
                )
            }
        </>
    );
};

export default LinkCategoria;