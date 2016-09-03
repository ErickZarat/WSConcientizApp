/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario', {
    id_Usuario: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nick: {
      type: DataTypes.STRING,
      allowNull: true
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    facebook: {
      type: DataTypes.STRING,
      allowNull: true
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fecha_nacimiento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_rol: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      references: {
        model: 'rol',
        key: 'id_rol'
      }
    },
    contrasena: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'usuario'
  });
};
