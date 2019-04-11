module.exports = (sequelize, DataType) => {
  const Videojuego = sequelize.define('VIDEOJUEGO', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    ID_USUARIO: {
      type: DataType.INTEGER,
      allowNull: false,
      references: {
        model: 'USUARIO', 
        key: 'USUARIO_ID', 
     }
    },
    done: {
      type: DataType.BOOLEAN,
      allowNull: false,
      defaultValue: false,
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
