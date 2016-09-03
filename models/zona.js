/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('zona', {
    id_zona: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'zona'
  });
};
