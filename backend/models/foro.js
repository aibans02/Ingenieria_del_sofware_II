module.exports = (sequelize, DataType) => {
  const Foro = sequelize.define('FORO', {
    FORO_ID: {
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
    tableName: 'FORO',
    classMethods: {
      associate: (models) => {
        //Foro.belongsTo(models.Users);
      },
    },
  });
  return Foro;
};
