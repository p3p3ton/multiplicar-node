//requires
const fs = require('fs'); // ya definida en node
// const fs = require('express'); // paquetes no nativos
// const fs = require('./fs'); // archivos creados en el proyecto
// module.exports crearArchivo = (base) => {
let crearArchivo = (base, limite = 10) => {
	return new Promise((resolve, reject) =>{
		if(!Number(base)){
			reject(`la base no es un numerico`);
			return;
		}
		let contenido ='';
		for (let i = 1; i <= limite; i++) {
			contenido += `${base} * ${i} = ${base * i }\n`;
		}

		fs.writeFile(`tablas/tabla-${base}.txt`,contenido, (err) =>{
			if(err)
				reject(err);
			else 
				resolve(`tabla-${base}.txt`);
			// console.log(`the file ${base} has been saved`);
		});
	});
};

let listarTabla = (base, limite) =>{
	return new Promise((resolve, reject) =>{
		for (let i = 1; i <= limite; i++) {
			console.info(`${base} * ${i} = ${base * i }`);
		}
	});
};

module.exports = {
	crearArchivo,
	listarTabla
} 