///https://stackoverflow.com/questions/49198606/how-to-handle-recursive-array-mapping-with-react-components
/*
const data = [
  {
    label: "Header title",
    children: [
      {
        label: "Sub-header title",
        children: [
          { label: "3rd level #1" },
          {
            label: "3rd level #2",
            children: [{ label: "Level 4" }],
          },
        ],
      },
    ],
  },
];

class Item extends React.Component {
  render() {
    const { label, children } = this.props;
    return (
      <div>
        <div>{label}</div>
        <div style={{ margin: "5px 25px" }}>
          {children &&
            children.map((item, index) => <Item key={index} {...item} />)}
        </div>
      </div>
    );
  }
}

const App = () => (
  <div>
    {data.map((item, index) => (
      <Item key={index} {...item} />
    ))}
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));


<NavDropdown title="Navegar" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Categoría #1</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Categoría #2</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Categoría #3
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/advanced-search">Búsqueda avanzada</Nav.Link>
                        <Nav.Link href="/about">El proyecto</Nav.Link>

                        */

/*
API
Listar todos los documentos.
GET /getdoc
http://clavy.fdi.ucm.es:8080/Clavy/rest/odamobil/getdoc?keyclavy=3023896634743

Listar una lista concreta de documentos.
POST /getdoc
BODY: JSON Array con el id de los documentos
http://clavy.fdi.ucm.es:8080/Clavy/rest/odamobil/getdoc?keyclavy=3023896634743

Obtener un documento.
GET /getdoc/:id
http://clavy.fdi.ucm.es:8080/Clavy/rest/odamobil/getdoc/317?keyclavy=3023896634743

Listar todas las Categorias y sus documentos ( todos los documentos en cada categoria)
GET/POST /getCat
http://clavy.fdi.ucm.es:8080/Clavy/rest/odamobil/getCat?keyclavy=3023896634743

Listar los hijos/valores de una categoria y sus documentos
POST /getCat/:id
BODY: JSON Array con los documentos
http://clavy.fdi.ucm.es:8080/Clavy/rest/odamobil/getCat/396?keyclavy=3023896634743

Listar los hijos/valores de una categoria y sus documentos
En este caso se ignoran los valores y se procesan los hijos heredando los documentos del padre.
POST: getCat/:id/valor
BODY: JSON Array con los documentos
http://clavy.fdi.ucm.es:8080/Clavy/rest/odamobil/getCat/396/valor?keyclavy=3023896634743
                        
                        
                        */ 