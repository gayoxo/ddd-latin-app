// server/index.js
const express = require("express");
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3001;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.get("/", (req, res) => {
	res.json({ message: "API del Diccionario Didáctico de Latín." });
});

app.get("/api", (req, res) => {
	res.json({ message: "API ddd-latin working..." });
});

/// Todos los docs
app.get("/api/documentos", (req, res) => {
	console.log("GET /api/documentos");
	(async () => {
		try {
			const response = await axios.get('https://clavy.fdi.ucm.es:8181/Clavy/rest/odamobil/getdoc?keyclavy='+process.env.API_KEY);
			res.json(response.data);
		} catch (error) {
			console.log(error);
		}
	})();
});

/// Documento concreto
app.get("/api/documento/:id", (req, res) => {
	console.log("GET /api/getdoc");
	const idDoc = req.params.id;
	(async () => {
		try {
			const response = await axios.get('https://clavy.fdi.ucm.es:8181/Clavy/rest/odamobil/getdoc/' + idDoc + '?keyclavy='+ process.env.API_KEY);
			res.json(response.data);
		} catch (error) {
			console.log(error);
		}
	})();
});

/// Categorias del primer nivel
app.get("/api/categorias", (req, res) => {
	console.log("GET /api/getcat");
	(async () => {
		try {
			const response = await axios.get('https://clavy.fdi.ucm.es:8181/Clavy/rest/odamobil/getCat?keyclavy=' + process.env.API_KEY);
			res.json(response.data);
		} catch (error) {
			console.log(error);
		}
	})();
});

/// Documentos de una categoría GET
app.get("/api/documentos/categoria/:id", (req, res) => {
	console.log("GET /api/documentos/categoria/" + req.params.id);
	const idCategory = req.params.id;
	(async () => {
		try {
			const url = "https://clavy.fdi.ucm.es:8181/Clavy/rest/odamobil/getCatDoc/" + idCategory + "?keyclavy=" + process.env.API_KEY;
			const response = await axios.get(url);
			res.json(response.data);
		} catch (error) {
			console.log(error);
		}
	})();
});

/// Documentos de una categoría POST
app.post("/api/documentos/categoria/:id", (req, res) => {
	console.log("POST /api/documentos/categoria/" + req.params.id);
	const idCategory = req.params.id;
	(async () => {
		try {
			var config = {
				method: 'post',
				url: 'https://clavy.fdi.ucm.es:8181/Clavy/rest/odamobil/getCatDoc/'+idCategory+'?keyclavy=' + process.env.API_KEY,
				headers: { },
			};
			const response = await axios(config);
			res.json(response.data);
		} catch (error) {
			console.log(error);
		}
	})();
});

/// Documentos de un valor
app.post("/api/documentos/categoria/:id/valor/:val", (req, res) => {
	console.log("POST /api/documentos/categoria/" + req.params.id + "/valor/" + req.params.val);
	const idCategory = req.params.id;
	const val = req.params.val;
	const postDocs = req.body;
	(async () => {
		try {
			const url = "https://clavy.fdi.ucm.es:8181/Clavy/rest/odamobil/getCatDoc/" + idCategory + "/" + val + "?keyclavy=" + process.env.API_KEY;
			const response = await axios.post(url,postDocs);
			res.json(response.data);
		} catch (error) {
			console.log(error);
		}
	})();
});

/// Valores categoría
app.post("/api/categoria/:id", (req, res) => {
	console.log("POST /api/categoria/" + req.params.id);
	const idCategory = req.params.id;
	const postDocs = req.body;
	(async () => {
		try {
			const url = "https://clavy.fdi.ucm.es:8181/Clavy/rest/odamobil/getCat/" + idCategory + "?keyclavy=" + process.env.API_KEY;
			const response = await axios.post(url,postDocs);
			res.json(response.data);
		} catch (error) {
			console.log(error);
		}
	})();
});

/// Siguientes categorías
app.post("/api/categoria/:id/valor", (req, res) => {
	console.log("POST /api/categoria/" + req.params.id + "/valor");
	const idCategory = req.params.id;
	const val = req.params.val;
	const postDocs = req.body;
	(async () => {
		try {
			const url = "https://clavy.fdi.ucm.es:8181/Clavy/rest/odamobil/getCat/" + idCategory + "/valor?keyclavy=" + process.env.API_KEY;
			const response = await axios.post(url,postDocs);
			res.json(response.data);
		} catch (error) {
			console.log(error);
		}
	})();
});

app.listen(PORT, () => {
	console.log(`DDD Latin Server listening on ${PORT}`);
});