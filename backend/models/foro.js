module.exports = (sequelize, DataType) => {
  const Foro = sequelize.define('FORO', {
    FORO_ID: {
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
      type: DataType.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    }
  }, {
    tableName: 'FORO',
    classMethods: {
      associate: (models) => {
        Foro.belongsTo(models.USUARIO, {
          foreignKey: "USUARIO_ID"
        }),
        Foro.belongsTo(models.VIDEOJUEGO, {
          foreignKey: "VIDEOJUEGO_ID"
        }),
        Foro.hasMany(models.FORO, {
          foreignKey: "SUBFORO_ID",
          onDelete: 'cascade'
        })
      },
    },
  });
  return Foro;
};
