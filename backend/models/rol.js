module.exports = (sequelize, DataType) => {
  const Tasks = sequelize.define('ROL', {
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
        //Tasks.belongsTo(models.Users);
      },
    },
  });
  return Tasks;
};
