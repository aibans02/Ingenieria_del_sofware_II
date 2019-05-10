import jwt from 'jwt-simple';

module.exports = app => {
  const cfg = app.libs.config;
  const Users = app.db.models.USUARIO;

  /**
   * @api {post} /token Authentication Token
   * @apiGroup Credentials
   * @apiParam {String} email User email
   * @apiParam {String} password User password
   * @apiParamExample {json} Input
   *    {
   *      "email": "john@connor.net",
   *      "password": "123456"
   *    }
   * @apiSuccess {String} token Token of authenticated user
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    {"token": "xyz.abc.123.hgf"}
   * @apiErrorExample {json} Authentication error
   *    HTTP/1.1 401 Unauthorized
   */
  app.post('/token', (req, res) => {
    if (req.body.EMAIL && req.body.PASSWORD) {
      Users.findOne({ where: { EMAIL: req.body.EMAIL } })
        .then(user => {
          if (Users.isPassword(user.PASSWORD, req.body.PASSWORD)) {
            const payload = {
              id: user.USUARIO_ID,
              rol: user.ROL_ID
            };
            res.json({
              token: `JWT ` + jwt.encode(payload, cfg.jwtSecret),
            });
          } else {
            res.status(401).json({ err: "CONTRASEÑA ERRONEA" });
          }
        })
        .catch(error => res.status(401).json({ err: "NO HAY USUARIO" }));
    } else {
      res.status(401).json({ err: "FALTA EMAIL O CONTRASEÑA" });
    }
  });
};
