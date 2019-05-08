import bcrypt from 'bcrypt';

module.exports = (sequelize, DataType) => {
  const Usuario = sequelize.define('USUARIO', {
    USUARIO_ID: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    NICK_USUARIO: {
      type: DataType.STRING,
      unique: true,
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
        Usuario.belongsTo(models.ROL, {
          foreignKey: "ROL_ID"
        }),
        Usuario.hasMany(models.VIDEOJUEGO, {
          foreignKey: "USUARIO_ID"
        }),
        Usuario.hasMany(models.NOTICIA_ACTUALIZACION, {
          foreignKey: "USUARIO_ID"
        }),
        Usuario.hasMany(models.GUIA, {
          foreignKey: "USUARIO_ID"
        }),
        Usuario.hasMany(models.FORO, {
          foreignKey: "USUARIO_ID"
        }),
        Usuario.hasMany(models.SOPORTE, {
          foreignKey: "USUARIO_ID"
        })
      },
      isPassword: (encodedPassword, password) => {
        return bcrypt.compareSync(password, encodedPassword);
      },
    },
  });
  return Usuario;
};
