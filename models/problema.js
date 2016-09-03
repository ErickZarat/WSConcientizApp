/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('problema', {
    id_problema: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fecha_fin: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fecha_inicio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    raiting: {
      type: DataTypes.STRING,
      allowNull: true
    },
    solucionado: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    id_usuario: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'id_Usuario'
      }
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
    tableName: 'problema',
    timestamps: false
  });
};
