import React, { useState, useEffect } from "react";
import axios from "axios";

import Loading from "../Loading/Loading";
import LinkCategoriaBase from "./LinkCategoriaBase";
import { Container, ListGroup, Button } from "react-bootstrap";

const Navigation = ({setIdDocs}) => {

    const [loading, setLoading] = useState(false);
    const [categoriaVisible, setCategoriaVisible] = useState(0);
    const [categorias, setCategorias] = useState([]);
    const [resultCategorias, setResultCategorias] = useState([]);
    

    useEffect(() => {
        async function getCategoriesBase() {
            try {
                let res = await axios({
                    url: `/api/categorias`,
                    method: 'get',
                    timeout: 8000,
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                if (res.status == 200) {
                    console.log(res.status + " categorias base");
                }
                return res.data;
            }
            catch (err) {
                console.error(err);
            }
        }
        setLoading(true);
        getCategoriesBase().then(
            res => {
                setCategorias(res.val)
                setResultCategorias(res.val);  
            }
        );
        setLoading(false);
    }, []);

    useEffect(() => {
        if(categoriaVisible>0){
            const filterCategorias = categorias.filter((item) => {
                return item.id==categoriaVisible;
            });
            setResultCategorias(filterCategorias);
        } else {
            setResultCategorias(categorias);
        }
    }, [categoriaVisible]);
    
    return (
        <Container className="pb-5">
            {
                loading ? (
                    <Loading />
                ) : (
                    <div className="d-grid gap-2">
                        <Button variant="outline-danger" href="/categorias">
                            Reiniciar
                        </Button>
                        {
                            resultCategorias.map(cat => (
                                <LinkCategoriaBase key={cat.id} setIdDocs={setIdDocs} categoria={cat} setCategoriaVisible={setCategoriaVisible} postDocs={[]} />
                            ))
                        }
                    </div>
                )
            }
        </Container>
    );
};

export default Navigation;