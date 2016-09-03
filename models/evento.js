/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('evento', {
    id_evento: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_problema: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      references: {
        model: 'problema',
        key: 'id_problema'
      }
    },
    fecha: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hora: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_usuario: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'id_Usuario'
      }
    }
  }, {
    tableName: 'evento',
    timestamps: false
  });
};
