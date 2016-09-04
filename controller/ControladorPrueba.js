module.exports=function (modelo) {
	return{
		add:function (req, res) {
			modelo.prueba.create(req.body).then(function () {
				res.json({"mensaje": "Prueba Agregada"});
			}).error(function (err) {
				res.json({"mensaje": "La prueba no se pudo agregar, si esto continua comuniquese con el administrador."});
				throw err;
			});
		},
		list: function (req, res) {
			modelo.prueba.findAll({
				where: {
					id_prueba: req.params.id
				}
			}).then(function (data) {
				res.json(data);
			}).error(function () {
				res.json({"mensaje": "Error al listar pruebas", "status": 500});
			});
		}
	}
};