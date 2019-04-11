module.exports = (sequelize, DataType) => {
  const Videojuego = sequelize.define('Videojuego', {
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
    done: {
      type: DataType.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  }, {
    classMethods: {
      associate: (models) => {
        Videojuego.belongsTo(models.Users);
      },
    },
  });
  return Videojuego;
};
