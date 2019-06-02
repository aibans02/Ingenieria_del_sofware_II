module.exports = (sequelize, DataType) => {
  const Soporte = sequelize.define('SOPORTE', {
    SOPORTE_ID: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    DESCRIPCION_TEXTO: {
      type: DataType.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    }
  }, {
    tableName: 'SOPORTE',
    classMethods: {
      associate: (models) => {
        Soporte.belongsTo(models.USUARIO, {
          foreignKey: "USUARIO_ID"
        }),
        Soporte.belongsTo(models.VIDEOJUEGO, {
          foreignKey: "VIDEOJUEGO_ID"
        })
      },
    },
  });
  return Soporte;
};
