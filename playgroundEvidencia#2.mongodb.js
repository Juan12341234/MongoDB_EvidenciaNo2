// Select the database to use.
use('Practica');

// Insertar 3 subdocumentos en la coleccion Clientes.

// db.getCollection('Clientes').insertMany([
//   {
//     "NomCliente": "Juan Tombé",
//     "infoCliente": {
//       "Cedula": 505,
//       "Edad": 17,
//       "Ciudad": "Medellín",
//       "Genero": "Male"
//     },
//     "Correo":"juansebastiantombepatino@gmail.com"
//   },
//   {
//     "NomCliente": "Deisy Patiño",
//     "infoCliente": {
//       "Cedula": 506,
//       "Edad": 41,
//       "Ciudad": "Cartagena",
//       "Genero": "Female"
//     },
//     "Correo":"deisypatino@outlook.com"
//   },
//   {
//     "NomCliente": "Carlos Atehortua",
//     "infoCliente": {
//       "Cedula": 507,
//       "Edad": 41,
//       "Ciudad": "Guadalupe",
//       "Genero": "Male"
//     },
//     "Correo":"carlosatehortua@yahoo.com"
//   },
// ]);


// Insertar 3 subdocumentos en la coleccion Inventarios.

// db.getCollection('Inventarios').insertMany([
//   {
//     "id": 505,
//     "NomEmpresa": "Abuela",
//     "InfoProducto": {
//       "NomProducto": "Recogedor",
//       "Color": "Azul",
//       "Stock": 130,
//       "Proveedor": "Mamita"
//     }
//   },
//   {
//     "id": 506,
//     "NomEmpresa": "Mamita",
//     "InfoProducto": {
//       "NomProducto": "Escoba",
//       "Color": "Verde",
//       "Stock": 200,
//       "Proveedor": "Tiíta"
//     }
//   },
//   {
//     "id": 507,
//     "NomEmpresa": "Tiíta",
//     "InfoProducto": {
//       "NomProducto": "Trapera",
//       "Color": "Gris",
//       "Stock": 160,
//       "Proveedor": "Abuela"
//     }
//   }
// ]);

// Insertar 3 subdocumentos en la coleccion Ventas.

// db.getCollection('Ventas').insertMany([
//   {
//     "id": 504,
//     "NomEmpresa": "Madre",
//     "Producto": {
//       "Nombre":"Computador",
//       "Color": "Azul",
//       "Cantidad": 12,
//       "Precio": 3000000,
//       "NomCliente": "Juan"
//     },
//   },
//   {
//     "id": 505,
//     "NomEmpresa": "Padre",
//     "Producto": {
//       "Nombre":"Cargador",
//       "Color": "Metal",
//       "Cantidad": 20,
//       "Precio": 130000,
//       "NomCliente": "Alejandra"
//     },
//   },
//   {
//     "id": 506,
//     "NomEmpresa": "Madrina",
//     "Producto": {
//       "Nombre":"Camara",
//       "Color": "Verde",
//       "Cantidad": 30,
//       "Precio": 300000,
//       "NomCliente": "Carlos"
//     },
//   },
// ]);

//Consultar en la coleccion Clientes

// db.getCollection('Clientes').find({
//   'infoCliente.Edad':{$lte:18}
// });


//Consultar en la coleccion Inventarios

// db.getCollection('Inventarios').find({
//   'InfoProducto.NomProducto':{$regex:/dor/}
// });


//Consultar en la coleccion Ventas

// db.getCollection('Ventas').find({
//   'Producto.Nombre':{$eq:'Camara'}
// });

//Actualizar en la coleccion Clientes.

// db.getCollection('Clientes').updateOne(
//   {'infoCliente.Cedula':505}, {$set:{'infoCliente.Edad':18}}
// );


//Actualizar en la coleccion Inventarios.

// db.getCollection('Inventarios').updateOne(
//   { 'InfoProducto.Stock':{$gte:180} }, { $set: { 'InfoProducto.Color': "Amarillo" } }
// );


//Actualizar en la coleccion Ventas.

// db.getCollection('Ventas').updateOne(
//   { 'Producto.NomCliente': 'Alejandra' }, { $set: { 'Producto.Nombre': 'Celular', 'Producto.Precio': 500000} }
// );


//Eliminar en la coleccion Clientes.

// db.getCollection('Clientes').deleteOne({
//   'infoCliente.Cedula':506
// });

//Eliminar en la coleccion Inventarios.

// db.getCollection('Inventarios').deleteOne({
//   'InfoProducto.Color':'Amarillo'
// });

//Eliminar en la coleccion Ventas.

// db.getCollection('Ventas').deleteOne({
//   'Producto.Nombre':'Camara'
// });


//Crear Index Clientes.

// db.getCollection('Clientes').createIndex({NomCliente:1});

// db.getCollection('Clientes').createIndex({
//   NomCliente:1,
//   infoCliente:1
// });


//Crear Index Inventarios.

// db.getCollection('Inventarios').createIndex({InfoProducto:1});

// db.getCollection('Inventarios').createIndex({
//   NomEmpresa:1,
//   InfoProducto:1
// });


//Crear Index Ventas.

// db.getCollection('Ventas').createIndex({NomEmpresa:1});

// db.getCollection('Clientes').createIndex({
//   NomEmpresa:1,
//   Producto:1
// });


//Agregaciones en la coleccion Clientes.

// db.getCollection('Clientes').aggregate([
//   {$match:{NomCliente:{$regex:/Carlos/}, 'infoCliente.Edad':{$gte:31}}}
// ]);

// db.getCollection('Clientes').aggregate([
//   {$match:{NomCliente:'Maria Isabel'}},
//   {$unwind:'$Ciudad'}
// ]);

// db.getCollection('Clientes').aggregate([
//   {$match:{Cedula:501}},
//   {$unwind:'$Ciudad'},
//   {$sort:{Ciudad:1}},
//   {$limit: 2}
// ]);

// db.getCollection('Clientes').aggregate([
//   {$sortByCount:'$Edad'}
// ]);


//Agregaciones en la coleccion Inventarios.

// db.getCollection('Inventarios').aggregate([
//   {$project:{NomEmpresa:1, _id:0}}
// ]);

// db.getCollection('Inventarios').aggregate([
//   {$match:{id:501}},
//   {$out:'Guardado'}
// ]);

// db.getCollection('Guardado').find({});

// db.getCollection('Inventarios').aggregate([
//   {$match:{id:{$gte:1, $lte:5}}},
//   {$addFields:{año:2023}}
// ]);

// db.getCollection('Inventarios').aggregate([
//     {$match:{NomEmpresa:'Babbleblab'}},
//     {$project:{_id:0,NomProducto:1}},
//     {$lookup: {
//       from: 'Ventas',
//       localField: 'NomEmpresa',
//       foreignField: 'NomEmpresa',
//       as: 'Resultados'
//     }}
// ]);


//Agregaciones en la coleccion Ventas.

// db.getCollection('Ventas').aggregate([
//   {$group:{_id:'$NomEmpresa', NumProducto:{$sum:1}}}
// ]);

// db.getCollection('Ventas').aggregate([
//   {$match:{NomEmpresa:'Entre las Montañas'}},
//   {$unwind:'$Color'},
//   {$project:{_id:0, Color:1, NomEmpresa:1}},
//   {$sort:{Color:1}}
// ]);

// db.getCollection('Ventas').aggregate([
//   {$match:{id:501}},
//   {$unwind:'$Color'},
//   {$count: 'TotalColores'}
// ]);

// db.getCollection('Ventas').aggregate([
//     {$match:{NomEmpresa:'ArmandoCasas'}},
//     {$unwind:'$InfoProducto'},
//     {$group:{_id:'$NomEmpresa', TotalCantidad:{$sum:'$InfoProducto.Precio'}}}
// ]);