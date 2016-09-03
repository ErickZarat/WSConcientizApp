/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('direccion', {
    id_direccion: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_zona: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      references: {
        model: 'zona',
        key: 'id_zona'
      }
    },
    avenida: {
      type: DataTypes.STRING,
      allowNull: true
    },
    numero_casa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    otros: {
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
    tableName: 'direccion'
  });
};
