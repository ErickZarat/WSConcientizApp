/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('apoyo', {
    id_apoyo: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contacto: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_categoria: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      references: {
        model: 'categoria',
        key: 'id_categoria'
      }
    }
  }, {
    tableName: 'apoyo'
  });
};
