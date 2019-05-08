module.exports = app => {
  const noticia = app.db.models.NOTICIA;

  app.route('/noticia')
    //.all(app.auth.authenticate())
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
      noticia.findById(req.body.NOTICIA_ACTUALIZACION_ID, {
        attributes: ['TITULO_ENTRADA', 'DESCRIPCION_TEXTO', 'USUARIO_ID', 'USUARIO_ID', 'VIDEOJUEGO_ID'],
      })
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({ msg: error.message });
        });
    })
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
      if (req.user.rol == 1 /* Aqui se pone el id del rol que sera superadmin */) {
        noticia.destroy({ where: { id: req.body.NOTICIA_ACTUALIZACION_ID } })
          .then(result => res.sendStatus(204))
          .catch(error => {
            res.status(412).json({ msg: error.message });
          });
      } else {
        res.status(401).json({ msg: "No está autorizado" })
      }
    })

    /**
     * @api {post} /noticia Register a new user
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
      if (req.user.rol == 1 /* Aqui se pone el id del rol que sera superadmin */) {
        noticia.create(req.body)
          .then(result => res.json(result))
          .catch(error => {
            res.status(412).json({ msg: error.message });
          });
      } else {
        res.status(401).json({ msg: "No está autorizado" })
      }
    });

  app.route('/noticias')

    .get((req, res) => {
      noticia.findAll()
        .then(result => res.json(result))
        .catch(err => res.status(404).json(err))
    });
};