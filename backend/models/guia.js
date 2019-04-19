module.exports = (sequelize, DataType) => {
  const Guia = sequelize.define('GUIA', {
    GUIA_ID: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    TITULO_ENTRADA: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    DESCRIPCION_TEXTO: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    }
  }, {
    tableName: 'GUIA',
    classMethods: {
      associate: (models) => {
        Guia.belongsTo(models.USUARIO, {
          foreignKey: "USUARIO_ID"
        }),
        Guia.belongsTo(models.VIDEOJUEGO, {
          foreignKey: "VIDEOJUEGO_ID"
        })
      },
    },
  });
  return Guia;
};
