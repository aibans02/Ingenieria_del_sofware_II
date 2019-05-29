-- --------------------------------------------------------
-- Host:                         localhost
-- Versión del servidor:         8.0.16 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             10.1.0.5464
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Volcando datos para la tabla empresa.foro: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `foro` DISABLE KEYS */;
INSERT INTO `foro` (`FORO_ID`, `TITULO_ENTRADA`, `DESCRIPCION_TEXTO`, `created_at`, `updated_at`, `USUARIO_ID`, `VIDEOJUEGO_ID`, `SUBFORO_ID`) VALUES
	(2, '?', 'sjihafehuiasehuirtauieshtuerh tahifhasiudhfguaegha aey pawyv aetya tv8oertya89oeytñ vn48tya4ty 489aeryt a98yaw84yt e84y ne94t yerio tyraeñ yeaaññarytartyarioenytyqqoñiy4t3498q5oiñntieran bq', '2019-05-09 19:13:47', '2019-05-09 19:13:47', 4, 3, NULL),
	(3, 'DUDAS', 'sjihafehuiasehuirtauieshtuerh tahifhasiudhfguaegha aey pawyv aetya tv8oertya89oeytñ vn48tya4ty 489aeryt a98yaw84yt e84y ne94t yerio tyraeñ yeaaññarytartyarioenytyqqoñiy4t3498q5oiñntieran bq', '2019-05-09 19:14:42', '2019-05-09 19:14:42', 3, 3, NULL),
	(4, 'aqui no va eso', 'sjihafehuiasehuirtauieshtuerh tahifhasiudhfguaegha aey pawyv aetya tv8oertya89oeytñ vn48tya4ty 489aeryt a98yaw84yt e84y ne94t yerio tyraeñ yeaaññarytartyarioenytyqqoñiy4t3498q5oiñntieran bq', '2019-05-09 19:22:21', '2019-05-09 19:22:21', 3, 3, NULL);
/*!40000 ALTER TABLE `foro` ENABLE KEYS */;

-- Volcando datos para la tabla empresa.guia: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `guia` DISABLE KEYS */;
INSERT INTO `guia` (`GUIA_ID`, `TITULO_ENTRADA`, `DESCRIPCION_TEXTO`, `created_at`, `updated_at`, `USUARIO_ID`, `VIDEOJUEGO_ID`) VALUES
	(1, 'Yi jungla', 'click derecho', '2019-05-09 18:56:33', '2019-05-09 18:56:33', 4, 3),
	(2, 'Tryndamere top', 'click derecho', '2019-05-09 18:58:08', '2019-05-09 18:58:08', 3, 3),
	(3, 'Miss fortune adc', 'press r', '2019-05-09 18:59:35', '2019-05-09 18:59:35', 5, 3);
/*!40000 ALTER TABLE `guia` ENABLE KEYS */;

-- Volcando datos para la tabla empresa.noticia_actualizacion: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `noticia_actualizacion` DISABLE KEYS */;
INSERT INTO `noticia_actualizacion` (`NOTICIA_ACTUALIZACION_ID`, `TITULO_ENTRADA`, `DESCRIPCION_TEXTO`, `created_at`, `updated_at`, `USUARIO_ID`, `VIDEOJUEGO_ID`) VALUES
	(1, 'ACTUALIZACION-Parche 1.2', 'sjihafehuiasehuirtauieshtuerh tahifhasiudhfguaegha aey pawyv aetya tv8oertya89oeytñ vn48tya4ty 489aeryt a98yaw84yt e84y ne94t yerio tyraeñ yeaaññarytartyarioenytyqqoñiy4t3498q5oiñntieran bq', '2019-05-09 18:47:28', '2019-05-09 18:47:28', 3, 3),
	(2, 'NOTICIA-Nuevas figuras', 'sjihafehuiasehuirtauieshtuerh tahifhasiudhfguaegha aey pawyv aetya tv8oertya89oeytñ vn48tya4ty 489aeryt a98yaw84yt e84y ne94t yerio tyraeñ yeaaññarytartyarioenytyqqoñiy4t3498q5oiñntieran bq', '2019-05-09 18:48:22', '2019-05-09 18:48:22', 4, 3);
/*!40000 ALTER TABLE `noticia_actualizacion` ENABLE KEYS */;

-- Volcando datos para la tabla empresa.rol: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` (`ROL_ID`, `PAPEL`, `created_at`, `updated_at`) VALUES
	(1, 'SU', '2019-05-09 20:20:33', '2019-05-09 20:20:33'),
	(2, 'ADMIN', '2019-05-09 20:20:39', '2019-05-09 20:20:40'),
	(3, 'USER', '2019-05-09 20:20:48', '2019-05-09 20:20:49');
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;

-- Volcando datos para la tabla empresa.soporte: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `soporte` DISABLE KEYS */;
INSERT INTO `soporte` (`SOPORTE_ID`, `DESCRIPCION_TEXTO`, `created_at`, `updated_at`, `USUARIO_ID`, `VIDEOJUEGO_ID`) VALUES
	(1, 'MIRA ME TENEIS HASTA LOS COJONES NO HACEN MAS QUE TOCARME TROLLS Y AFKS EN TODAS LAS PUTAS PARTIDAS ES QUE SIEMPRE IGUAL Y NUNCA BANEAIS A NADIE LOS DEL OTRO EQUIPO PARECEN COREANOS DE ESOS DE MIERDA Y ESTOY EN HIERRO COMO PUEDE SER PORQUE SMURFS EN TODAS LAS PARTIDAS ES QUE QUE PUTO ASCO DE JUEGO', '2019-05-09 18:32:15', '2019-05-09 18:32:15', 5, 3),
	(2, 'Gracias por transmitirnos tus incomodidades con el juego. Sim embargo, lamentamos decirte que no podemos satisfacer tus necesidades.\nUn saludo \nRito', '2019-05-09 18:34:31', '2019-05-09 18:34:31', 5, 3),
	(4, 'SDFUIKASDBIFGASUIDFHGIAS', '2019-05-09 20:41:58', '2019-05-09 20:41:59', 4, 3);
/*!40000 ALTER TABLE `soporte` ENABLE KEYS */;

-- Volcando datos para la tabla empresa.usuario: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` (`USUARIO_ID`, `NICK_USUARIO`, `FECHA_NACIMIENTO`, `EMAIL`, `PASSWORD`, `created_at`, `updated_at`, `ROL_ID`) VALUES
	(3, 'su', '1991-01-01 00:00:00', 'su@su.com', '$2b$10$KiiNEZuSi2kXjS5vMW/CmeIJ42irUV5tAEHMhP.T1/.4VxpBH68LO', '2019-05-09 18:27:10', '2019-05-09 18:27:10', 1),
	(4, 'ad', '1991-01-01 00:00:00', 'ad@ad.com', '$2b$10$SN20g1Oj/TaDufhEWA4AHO8TmLl6PARMNm5x2mNRMCQ278aWVjmh2', '2019-05-09 18:27:38', '2019-05-09 18:27:38', 2),
	(5, 'test', '1991-01-01 00:00:00', 'test@test.com', '$2b$10$mFwig9gBxzcNr2TqBVW.q.8GGx8lC2r3I0SbhKfPXraVxzRa.6cJa', '2019-05-09 18:27:50', '2019-05-09 18:27:50', 3);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;

-- Volcando datos para la tabla empresa.videojuego: ~8 rows (aproximadamente)
/*!40000 ALTER TABLE `videojuego` DISABLE KEYS */;
INSERT INTO `videojuego` (`VIDEOJUEGO_ID`, `NOMBRE_JUEGO`, `DESCRIPCION`, `created_at`, `updated_at`, `USUARIO_ID`) VALUES
	(2, 'YU-GI-OH Duel Links', 'Esta guapo una vez que te acostumbras a tener 3 huecos de monstruo y magia/trampa. Han metido 5d\'s que meh, pasable, pero como metan xyz, pendulum y demas f en el chat. Tiene un poco de pay to win si juegas competitivo', '2019-05-09 18:28:32', '2019-05-09 18:28:32', 4),
	(3, 'League of Legends', 'TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || ', '2019-05-09 18:29:28', '2019-05-09 18:29:28', 4),
	(4, 'UwU', 'TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || ', '2019-05-27 18:10:07', '2019-05-27 18:10:07', 4),
	(5, 'ImTooGood', 'TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || ', '2019-05-27 18:10:31', '2019-05-27 18:10:31', 4),
	(6, 'Awiki', 'TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || ', '2019-05-27 18:10:42', '2019-05-27 18:10:42', 4),
	(7, 'Pokemon', 'TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || ', '2019-05-27 18:10:53', '2019-05-27 18:10:53', 4),
	(8, 'Tekken', 'TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || ', '2019-05-27 19:33:46', '2019-05-27 19:33:46', 4),
	(9, 'buuuuuuuuu', 'TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || ', '2019-05-27 19:49:02', '2019-05-27 19:49:02', 4);
/*!40000 ALTER TABLE `videojuego` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
