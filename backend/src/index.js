

/**
 * 
 * Métodos HTTP
 * GET: Buscar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 * 
 * 
*/

/**
 * 
 * Tipos de parâmetros:
 * 
 * Query: Parametros nomeados enviados na ruta após o simbolo "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo de requisi;'ao, utilizado para criar ou alterar recursos
 * 
  */


/**
 * 
 * SQL: MySQL, PostgresSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 * 
 */

/**
 * 
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 * 
 */

const express = require("express");
const cors = require("cors");
const routes = require("./router");
const app = express();

//Aqui      ||| 
//Ficaria   |||
//O link da |||
//Aplicação V|V
//           V
app.use(cors( ))

app.use(express.json());
app.use(routes);


app.listen(3333, () => {
    console.log("Server running in port 3333")
})