module.exports = (sequelize, DataType) => {
  const Soporte = sequelize.define('SOPORTE', {
    id: {
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
    DESCRIPCION_TEXTO: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    }
  }, {
    tableName: 'SOPORTE',
    classMethods: {
      associate: (models) => {
        //Soporte.belongsTo(models.Users);
      },
    },
  });
  return Soporte;
};
