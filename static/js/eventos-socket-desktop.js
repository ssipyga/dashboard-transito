// instancio socket y me conecto a la ruta /alertas
var socket = io.connect('/alertas', {
	'force new connection': true
});

socket.on('connect', function() {
	socket.emit('receive', "Connected");
	console.log("Connected.");
});

socket.on('error', function(e) {
	console.log("error")
});

socket.on('info', function(e) {
	console.log(e)
});

socket.on('disconnect', function(e) {
	console.log("Disconnect.")
	var socket = io.connect('/alertas', {
		'force new connection': true
	});
});


// aqui especificamos el canal para la recepcion continua de los datos
socket.on('independencia', function(data) {
	//console.log(data)
	actualizacionDesktop(data);
});
socket.on('illia', function(data) {
	//console.log(data)
	actualizacionDesktop(data);
});
socket.on('9_de_julio', function(data) {
	//console.log(data)
	actualizacionDesktop(data);
});
socket.on('cerrito', function(data) {
	//console.log(data)
	actualizacionDesktop(data);
});
socket.on('pellegrini', function(data) {
	//console.log(data)
	actualizacionDesktop(data);
});
socket.on('alem', function(data) {
	//console.log(data)
	actualizacionDesktop(data);
});
socket.on('corrientes', function(data) {
	//console.log(data)
	actualizacionDesktop(data);
});
socket.on('rivadavia', function(data) {
	//console.log(data)
	actualizacionDesktop(data);
});
socket.on('av._de_mayo', function(data) {
	//console.log(data)
	actualizacionDesktop(data);
});
socket.on('san_martin', function(data) {
	//console.log(data)
	actualizacionDesktop(data);
});
socket.on('juan_b._justo', function(data) {
	//console.log(data)
	actualizacionDesktop(data);
});
socket.on('cordoba', function(data) {
	//console.log(data)
	actualizacionDesktop(data);
});
socket.on('paseo_colon', function(data) {
	//console.log(data)
	actualizacionDesktop(data);
});
socket.on('cabildo', function(data) {
	//console.log(data)
	actualizacionDesktop(data);
});
socket.on('pueyrredon', function(data) {
	//console.log(data)
	actualizacionDesktop(data);
});
socket.on('alcorta', function(data) {
	//console.log(data)
	actualizacionDesktop(data);
});
socket.on('libertador', function(data) {
	//console.log(data)
	actualizacionDesktop(data);
});
socket.on('ultima_actualizacion', function(data) {
	updateUltimaActualizacion(data);
});