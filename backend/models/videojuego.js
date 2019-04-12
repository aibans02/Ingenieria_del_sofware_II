module.exports = (sequelize, DataType) => {
  const Videojuego = sequelize.define('VIDEOJUEGO', {
    VIDEOJUEGO_ID: {
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
    NOMBRE_JUEGO: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    DESCRIPCION: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  }, {
    tableName: 'VIDEOJUEGO',
    classMethods: {
      associate: (models) => {
        //Videojuego.belongsTo(models.Users);
      },
    }, 
  });
  return Videojuego;
};
