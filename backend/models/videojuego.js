module.exports = (sequelize, DataType) => {
  const Videojuego = sequelize.define('VIDEOJUEGO', {
    VIDEOJUEGO_ID: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    NOMBRE_JUEGO: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    DESCRIPCION: {
      type: DataType.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  }, {
    tableName: 'VIDEOJUEGO',
    classMethods: {
      associate: (models) => {
        Videojuego.belongsTo(models.USUARIO, {
          foreignKey: "USUARIO_ID"
        }),
        Videojuego.hasMany(models.NOTICIA_ACTUALIZACION, {
          foreignKey: "VIDEOJUEGO_ID"
        }),
        Videojuego.hasMany(models.GUIA, {
          foreignKey: "VIDEOJUEGO_ID"
        }),
        Videojuego.hasMany(models.FORO, {
          foreignKey: "VIDEOJUEGO_ID"
        }),
        Videojuego.hasMany(models.SOPORTE, {
          foreignKey: "VIDEOJUEGO_ID"
        })
      },
    }, 
  });
  return Videojuego;
};
