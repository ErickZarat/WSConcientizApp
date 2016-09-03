/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('solucion', {
    id_solucion: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_problema: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    id_usuario: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    }
  }, {
    tableName: 'solucion'
  });
};
