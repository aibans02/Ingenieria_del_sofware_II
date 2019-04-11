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
    ID_USUARIO: {
      type: DataType.INTEGER,
      allowNull: false,
      references: {
        model: 'USUARIO', // 'persons' refers to table name
        key: 'ID_USUARIO', // 'id' refers to column name in persons table
     }
    },
    done: {
      type: DataType.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  }, {
    tableName: 'Videojuego',
    classMethods: {
      associate: (models) => {
        Videojuego.belongsTo(models.Users);
      },
    },
  });
  return Videojuego;
};
