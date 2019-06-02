module.exports = app => {
    const Users = app.db.models.USUARIO;
    const Juegos = app.db.models.VIDEOJUEGO;
    const Noticias = app.db.models.NOTICIA_ACTUALIZACION;
    const Guias = app.db.models.GUIA;
    const Foro = app.db.models.FORO;
    const Soporte = app.db.models.SOPORTE

    app.route('/administracion')
        .all(app.auth.authenticate())
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
            if (req.user.rol == 1) {
                Users.findAll()
                    .then(result => {
                        Juegos.findAll({
                            include: [{ model: Noticias, include: [Users] }, { model: Guias, include: [Users] }, { model: Soporte, include: [Users] }, { model: Foro, where: { SUBFORO_ID: null }, required: false, include: [Users, { model: Foro, include: [Users] }] }]
                        }).then(resp => {
                            let array = [result, resp]
                            res.json(array);
                        })
                    })
                    .catch(error => {
                        res.status(412).json({ err: error.message });
                    });
            } else if (req.user.rol == 2) {
                Users.findAll({
                    where: {
                        ROL_ID: 3
                    }
                })
                    .then(result => {
                        Juegos.findAll({
                            where: {
                                USUARIO_ID: req.user.id
                            },
                            include: [{ model: Noticias, include: [Users] }, { model: Guias, include: [Users] }, { model: Soporte, include: [Users] }, { model: Foro, where: { SUBFORO_ID: null }, required: false, include: [Users, { model: Foro, include: [Users] }] }]
                        }).then(resp => {
                            let array = [result, resp]
                            res.json(array);
                        })
                    })
                    .catch(error => {
                        res.status(412).json({ err: error.message });
                    });

            } else {
                res.status(401).json({ err: "No está autorizado" })
            }
        })
};
