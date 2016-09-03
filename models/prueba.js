/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prueba', {
    id_prueba: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_problema: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      references: {
        model: 'problema',
        key: 'id_problema'
      }
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'prueba',
    timestamps: false
  });
};
