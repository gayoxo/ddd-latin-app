export function formatTermino(termino) {
  let result = termino;
  ///console.log(result);

  const reEjemplo = /<hr\/>/;
  const reLema = /S1/;
  const reSeparadorAcepciones = /<\/b>/;
  const reInicioS = /^,*\s*([^\w]*)S\d\s*<b>/;

  let str = termino.desc.replace("\r", "");
  str = str.replace("\n", "");

  let ejemplo, lema, resto = "";
  let acepciones = [];

  
  if (str.includes("<hr/>")) {
    ejemplo = str.split(reEjemplo)[1].trim();
    resto = str.split(reEjemplo)[0];
  } else {
    ejemplo = "";
    resto = str;
  }

  if (str.includes("S1")) {
    lema = resto.split(reLema)[0].trim().slice(0, -1);
    resto = "S1 " + resto.split(reLema)[1];
  } else {
    lema = resto;
  }
      
  let arrayAcepciones = resto.split(reSeparadorAcepciones);
  let acepcion = 0;
  
  for (let i = 0; i < arrayAcepciones.length; i++) {
    let aux = arrayAcepciones[i].trim();
    acepcion = aux.split(reInicioS)[2];
    if (acepcion && acepcion !== "") acepciones.push(acepcion);
  }
  
  result.lema = lema;
  result.ejemplo = ejemplo;
  result.acepciones = acepciones;

  return result;
};

export function getDescripcion(desc){
  console.log(desc);
  let result = {};

  const reEjemplo = /<hr\/>/;
  const reLema = /^\w+,/;
  const reSeparadorAcepciones = /<\/b>/;
  const reInicioS = /^,*\s*([^\w]*)S\d\s*<b>/;

  let str = desc.replace("\r", "");
  str = str.replace("\n", "");

  let ejemplo, lema, resto = "";
  let acepciones = [];

  if (str.includes("<hr/>")) {
    ejemplo = str.split(reEjemplo)[1].trim();
    resto = str.split(reEjemplo)[0];
  } else {
    ejemplo = "";
    resto = str;
  }

  lema = resto.match(reLema)[0].trim().slice(0, -1);
  resto = resto.split(reLema)[1];

  let arrayAcepciones = resto.split(reSeparadorAcepciones);
  let acepcion = 0;
  for (let i = 0; i < arrayAcepciones.length; i++) {
    let aux = arrayAcepciones[i].trim();
    acepcion = aux.split(reInicioS)[2];
    if (acepcion && acepcion !== "") acepciones.push(acepcion);
  }

  result.lema = lema;
  result.ejemplo = ejemplo;
  result.acepciones = acepciones;

  return result;
};