import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Search from './search';
///import Categories from './categories';
import Categorias from './categorias';
import AdvancedSearch from './advanced-search';
import Home from './home';

import PautasUso from './footer/pautas-uso';
import PautasUsoIcono from './footer/iconos';
import PautasUsoAbreviaturas from './footer/abreviaturas';

const Pages = ({diccionario}) => {
    return(
        <Router>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route path="/buscar">
                <Search diccionario={diccionario} />
            </Route>
            <Route path="/categorias">
                <Categorias diccionario={diccionario} />
            </Route>
            <Route path="/busqueda-avanzada">
                <AdvancedSearch />
            </Route>
            <Route path="/pautas-uso">
                <PautasUso />
            </Route>
            <Route path="/iconos">
                <PautasUsoIcono />
            </Route>
            <Route path="/abreviaturas">
                <PautasUsoAbreviaturas />
            </Route>
        </Router>
    );
};

export default Pages;