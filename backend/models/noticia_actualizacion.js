module.exports = (sequelize, DataType) => {
  const NoticiaActualizacion = sequelize.define('NOTICIA_ACTUALIZACION', {
    NOTICIA_ACTUALIZACION_ID: {
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
      },
    }
  }, {
    tableName: 'NOTICIA_ACTUALIZACION',
    classMethods: {
      associate: (models) => {
        NoticiaActualizacion.belongsTo(models.USUARIO, {
          foreignKey: "USUARIO_ID"
        }),
        NoticiaActualizacion.belongsTo(models.VIDEOJUEGO, {
          foreignKey: "VIDEOJUEGO_ID"
        })
      },
    },
  });
  return NoticiaActualizacion;
};
