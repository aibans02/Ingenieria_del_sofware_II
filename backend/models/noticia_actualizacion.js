module.exports = (sequelize, DataType) => {
  const NoticiaActualizacion = sequelize.define('NOTICIA_ACTUALIZACION', {
    NOTICIA_ACTUALIZACION_ID: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    USUARIO_ID: {
      type: DataType.INTEGER,
      allowNull: false,
      references: {
        model: 'USUARIO', 
        key: 'USUARIO_ID', 
     }
    },
    VIDEOJUEGO_ID: {
      type: DataType.INTEGER,
      allowNull: false,
      references: {
        model: 'VIDEOJUEGO', 
        key: 'VIDEOJUEGO_ID', 
     }
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
        //NoticiaActualizacion.belongsTo(models.Users);
      },
    },
  });
  return NoticiaActualizacion;
};
