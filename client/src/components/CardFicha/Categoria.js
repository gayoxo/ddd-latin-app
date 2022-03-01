import React, {useState, useEffect} from "react";

const Categoria = ( label ) => {
  
  const [claseCaja, setClaseCaja] = useState('');
  const [claseCabecera, setClaseCabecera] = useState('');
  const [claseHijos, setClaseHijos] = useState('');

  const esCabecera = (texto) => {
    let textoComparar = texto.toLowerCase();
    return (textoComparar==="categoría"||textoComparar==="microestructura verbos"||textoComparar==="sustantivos");
  }

  const esCabeceraVerbo = (texto) => {
    let textoComparar = texto.toLowerCase();
    return (textoComparar.startsWith("argumentos del verbo")||textoComparar.startsWith("tipo verbo"));
  }

  const esCabeceraNumeroArgumentos = (texto) => {
    let textoComparar = texto.toLowerCase();
    return (textoComparar.startsWith("numero argumentos"));
  }

  const esEjemplo = (texto) => {
    let textoComparar = texto.toLowerCase();
    return (textoComparar===("ejemplo"));
  }

  const esCaracterizacionArgumental = (texto) => {
    let textoComparar = texto.toLowerCase();
    return (textoComparar.startsWith("caracterización"));
  }

  useEffect(() => {
    if(esCabecera(label.name)){
      setClaseCaja("ficha-caja");
    } else if(esCabeceraNumeroArgumentos(label.name)){
      setClaseCabecera("cabecera-verbo");
    } else if(esEjemplo(label.name)){
      setClaseCaja("mt-4 alert alert-secondary");
    } else if(esCaracterizacionArgumental(label.name)){
      setClaseCabecera("indent");
    }
  }, [label]);

  return (
    <div className={claseCaja}>
        <div className={claseCabecera}>
          {label.name}: <strong>{label.val}</strong>
        </div>
        <div className={claseHijos}>
          {label.attr &&
            label.attr.map((item, index) => <Categoria key={index} {...item} />)}
        </div>
    </div>
  );
}

export default Categoria;
