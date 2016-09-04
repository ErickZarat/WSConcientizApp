/**
 * Created by Zarathos on 03/09/2016.
 */
module.exports = function (modelo) {
    return{
        add:function (req, res) {
            modelo.problema.create(req.body).then(function () {
                res.json({"mensaje": "Problema agregado"});
            }).error(function (err) {
                res.json({"mensaje": "El problema no se pudo agregar, si esto continua comuniquese con el administrador."});
                throw err;
            });
        },
        list:function (req, res) {
            modelo.problema.findAll({
                where: {
                    id_problema:req.params.id
                }
            }).then(function (data) {
                res.json(data);
            }).error(function () {
                res.json({"mensaje": "Error al listar problemas", "status": 500});
            });
        }
    }
};
