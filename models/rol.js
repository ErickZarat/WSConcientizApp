/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rol', {
    id_rol: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'rol'
  });
};
