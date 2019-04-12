import bcrypt from 'bcrypt';

module.exports = (sequelize, DataType) => {
  const Usuario = sequelize.define('USUARIO', {
    USUARIO_ID: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ROL_ID: {
      type: DataType.INTEGER,
      allowNull: false,
      references: {
        model: 'ROL', 
        key: 'ROL_ID',
     }
    },
    NICK_USUARIO: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    FECHA_NACIMIENTO: {
      type: DataType.DATE,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    EMAIL: {
      type: DataType.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    PASSWORD: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  }, {
    hooks: {
      beforeCreate: user => {
        const salt = bcrypt.genSaltSync();
        user.PASSWORD = bcrypt.hashSync(user.PASSWORD, salt);
      },
    },
    tableName: 'USUARIO',
    classMethods: {
      associate: models => {
        //Usuario.hasMany(models.Tasks);
      },
      isPassword: (encodedPassword, password) => {
        return bcrypt.compareSync(password, encodedPassword);
      },
    },
  });
  return Usuario;
};
