module.exports = (sequelize, DataType) => {
  const Rol = sequelize.define('ROL', {
    ROL_ID: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    PAPEL: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    }
  }, {
    tableName: 'ROL',
    classMethods: {
      associate: (models) => {
        //Rol.belongsTo(models.Users);
      },
    },
  });
  return Rol;
};
