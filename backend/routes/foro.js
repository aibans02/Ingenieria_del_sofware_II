module.exports = app => {
  const foro = app.db.models.FORO;

  app.route('/foro/auth')
    .all(app.auth.authenticate())
    /**
     * @api {delete} /user Deletes an authenticated user
     * @apiGroup User
     * @apiHeader {String} Authorization Token of authenticated user
     * @apiHeaderExample {json} Header
     *    {"Authorization": "JWT xyz.abc.123.hgf"}
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 204 No Content
     * @apiErrorExample {json} Delete error
     *    HTTP/1.1 412 Precondition Failed
     */
    .delete((req, res) => {
      console.log(req.query.FORO_ID)
      if (req.user.rol == 1 || req.user.rol == 2) {
        foro.destroy({ where: { FORO_ID: req.query.FORO_ID } })
          .then(result => res.sendStatus(204))
          .catch(error => {
            res.status(412).json({ err: error.message });
          });
      } else if (req.user.rol == 3) {
        foro.destroy({
          where: {
            FORO_ID: req.query.FORO_ID,
            USUARIO_ID: req.user.id
          }
        })
          .then(result => res.sendStatus(204))
          .catch(error => {
            res.status(412).json({ err: error.message });
          });
      } else {
        res.status(401).json({ err: "No está autorizado" })
      }
    })

    /**
     * @api {post} /foro Register a new user
     * @apiGroup User
     * @apiParam {String} name User name
     * @apiParam {String} email User email
     * @apiParam {String} password User password
     * @apiParamExample {json} Input
     *    {
     *      "name": "John Connor",
     *      "email": "john@connor.net",
     *      "password": "123456"
     *    }
     * @apiSuccess {Number} id User id
     * @apiSuccess {String} name User name
     * @apiSuccess {String} email User email
     * @apiSuccess {String} password User encrypted password
     * @apiSuccess {Date} updated_at Update's date
     * @apiSuccess {Date} created_at Register's date
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 200 OK
     *    {
     *      "id": 1,
     *      "name": "John Connor",
     *      "email": "john@connor.net",
     *      "password": "$2a$10$SK1B1",
     *      "updated_at": "2016-02-10T15:20:11.700Z",
     *      "created_at": "2016-02-10T15:29:11.700Z",
     *    }
     * @apiErrorExample {json} Register error
     *    HTTP/1.1 412 Precondition Failed
     */
    .post((req, res) => {
      foro.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({ err: error.message });
        });
    });

  app.route('/foro')
    /**
    * @api {get} /user Return the authenticated user's data
    * @apiGroup User
    * @apiHeader {String} Authorization Token of authenticated user
    * @apiHeaderExample {json} Header
    *    {"Authorization": "JWT xyz.abc.123.hgf"}
    * @apiSuccess {Number} id User id
    * @apiSuccess {String} name User name
    * @apiSuccess {String} email User email
    * @apiSuccessExample {json} Success
    *    HTTP/1.1 200 OK
    *    {
    *      "id": 1,
    *      "name": "John Connor",
    *      "email": "john@connor.net"
    *    }
    * @apiErrorExample {json} Find error
    *    HTTP/1.1 412 Precondition Failed
    */
    .get((req, res) => {
      foro.findAll({
        where: {
          VIDEOJUEGO_ID: req.query.VIDEOJUEGO_ID,
          SUBFORO_ID: null
        },
        include: [{ model: app.db.models.FORO, include: { model: app.db.models.USUARIO, attributes: ['NICK_USUARIO'] } }, { model: app.db.models.USUARIO, attributes: ['NICK_USUARIO'] }]
      })
        .then(result => {
          res.json(result)
        })
        .catch(error => {
          res.status(412).json({ err: error.message });
        });
    });
};