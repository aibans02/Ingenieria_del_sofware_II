-- --------------------------------------------------------
-- Host:                         localhost
-- Versión del servidor:         5.7.25-log - MySQL Community Server (GPL)
-- SO del servidor:              Win64
-- HeidiSQL Versión:             10.1.0.5464
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Volcando datos para la tabla empresa.foro: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `foro` DISABLE KEYS */;
REPLACE INTO `foro` (`FORO_ID`, `TITULO_ENTRADA`, `DESCRIPCION_TEXTO`, `created_at`, `updated_at`, `USUARIO_ID`, `VIDEOJUEGO_ID`, `SUBFORO_ID`) VALUES
	(6, 'Foro Test 1', 'Descripcion de entrada', '2019-06-02 23:26:26', '2019-06-02 23:26:27', 1, 1, NULL),
	(7, 'Foro Test 4', 'Descripcion de entrada', '2019-06-02 23:27:35', '2019-06-02 23:27:35', 2, 1, 6),
	(8, 'Foro Test 5', 'Descripcion de entrada', '2019-06-02 23:27:35', '2019-06-02 23:27:35', 3, 1, 6),
	(9, 'Foro Test 2', 'Descripcion de entrada', '2019-06-02 23:26:26', '2019-06-02 23:26:27', 2, 1, NULL),
	(10, 'Foro Test 3', 'Descripcion de entrada', '2019-06-02 23:26:26', '2019-06-02 23:26:27', 3, 1, NULL),
	(11, 'Foro Test 6', 'Descripcion de entrada', '2019-06-02 23:27:35', '2019-06-02 23:27:35', 1, 1, 9),
	(12, 'Foro Test 7', 'Descripcion de entrada', '2019-06-02 23:27:35', '2019-06-02 23:27:35', 3, 1, 9),
	(13, 'Foro Test 8', 'Descripcion de entrada', '2019-06-02 23:27:35', '2019-06-02 23:27:35', 1, 1, 10),
	(14, 'Foro Test 9', 'Descripcion de entrada', '2019-06-02 23:27:35', '2019-06-02 23:27:35', 2, 1, 10),
	(15, 'Foro Test 10', 'Descripcion de entrada', '2019-06-02 23:30:28', '2019-06-02 23:30:29', 1, 2, NULL),
	(16, 'Foro Test 11', 'Descripcion de entrada', '2019-06-02 23:30:28', '2019-06-02 23:30:29', 1, 3, NULL),
	(17, 'Foro Test 12', 'Descripcion de entrada', '2019-06-02 23:30:28', '2019-06-02 23:30:29', 2, 2, 15),
	(18, 'Foro Test 13', 'Descripcion de entrada', '2019-06-02 23:30:28', '2019-06-02 23:30:29', 2, 3, 16);
/*!40000 ALTER TABLE `foro` ENABLE KEYS */;

-- Volcando datos para la tabla empresa.guia: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `guia` DISABLE KEYS */;
REPLACE INTO `guia` (`GUIA_ID`, `TITULO_ENTRADA`, `DESCRIPCION_TEXTO`, `created_at`, `updated_at`, `USUARIO_ID`, `VIDEOJUEGO_ID`) VALUES
	(1, 'Guia Test 1', 'Descripcion de guia', '2019-06-02 23:24:29', '2019-06-02 23:24:29', 1, 1),
	(5, 'Guia Test 2', 'Descripcion de guia', '2019-06-02 23:24:29', '2019-06-02 23:24:29', 2, 1),
	(6, 'Guia Test 3', 'Descripcion de guia', '2019-06-02 23:24:29', '2019-06-02 23:24:29', 3, 1),
	(7, 'Guia Test 4', 'Descripcion de guia', '2019-06-02 23:24:29', '2019-06-02 23:24:29', 1, 2),
	(8, 'Guia Test 5', 'Descripcion de guia', '2019-06-02 23:24:29', '2019-06-02 23:24:29', 2, 2),
	(9, 'Guia Test 7', 'Descripcion de guia', '2019-06-02 23:24:29', '2019-06-02 23:24:29', 1, 3),
	(10, 'Guia Test 6', 'Descripcion de guia', '2019-06-02 23:24:29', '2019-06-02 23:24:29', 3, 2),
	(11, 'Guia Test 8', 'Descripcion de guia', '2019-06-02 23:24:29', '2019-06-02 23:24:29', 2, 3),
	(12, 'Guia Test 9', 'Descripcion de guia', '2019-06-02 23:24:29', '2019-06-02 23:24:29', 3, 3);
/*!40000 ALTER TABLE `guia` ENABLE KEYS */;

-- Volcando datos para la tabla empresa.noticia_actualizacion: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `noticia_actualizacion` DISABLE KEYS */;
REPLACE INTO `noticia_actualizacion` (`NOTICIA_ACTUALIZACION_ID`, `TITULO_ENTRADA`, `DESCRIPCION_TEXTO`, `created_at`, `updated_at`, `USUARIO_ID`, `VIDEOJUEGO_ID`) VALUES
	(1, 'Noticia Test 1', 'Descripcion de la noticia', '2019-06-02 23:22:05', '2019-06-02 23:22:06', 1, 1),
	(2, 'Noticia Test 2', 'Descripcion de la noticia', '2019-06-02 23:22:05', '2019-06-02 23:22:06', 2, 1),
	(3, 'Noticia Test 3', 'Descripcion de la noticia', '2019-06-02 23:22:05', '2019-06-02 23:22:06', 1, 2),
	(4, 'Noticia Test 4', 'Descripcion de la noticia', '2019-06-02 23:22:05', '2019-06-02 23:22:06', 2, 2),
	(5, 'Noticia Test 5', 'Descripcion de la noticia', '2019-06-02 23:22:05', '2019-06-02 23:22:06', 1, 3),
	(6, 'Noticia Test 6', 'Descripcion de la noticia', '2019-06-02 23:22:05', '2019-06-02 23:22:06', 2, 3);
/*!40000 ALTER TABLE `noticia_actualizacion` ENABLE KEYS */;

-- Volcando datos para la tabla empresa.rol: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
REPLACE INTO `rol` (`ROL_ID`, `PAPEL`, `created_at`, `updated_at`) VALUES
	(1, 'SU', '2019-05-09 20:20:33', '2019-05-09 20:20:33'),
	(2, 'ADMIN', '2019-05-09 20:20:39', '2019-05-09 20:20:40'),
	(3, 'USER', '2019-05-09 20:20:48', '2019-05-09 20:20:49');
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;

-- Volcando datos para la tabla empresa.soporte: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `soporte` DISABLE KEYS */;
REPLACE INTO `soporte` (`SOPORTE_ID`, `DESCRIPCION_TEXTO`, `created_at`, `updated_at`, `USUARIO_ID`, `VIDEOJUEGO_ID`) VALUES
	(1, 'Contenido del Ticket 1', '2019-06-02 23:20:09', '2019-06-02 23:20:09', 3, 1),
	(2, 'Contenido del Ticket 2', '2019-06-02 23:20:09', '2019-06-02 23:20:09', 3, 2),
	(3, 'Contenido del Ticket 3', '2019-06-02 23:20:09', '2019-06-02 23:20:09', 3, 3),
	(5, 'Contenido del Ticket 4', '2019-06-02 23:20:09', '2019-06-02 23:20:09', 2, 1),
	(6, 'Contenido del Ticket 5', '2019-06-02 23:20:09', '2019-06-02 23:20:09', 2, 2),
	(7, 'Contenido del Ticket 6', '2019-06-02 23:20:09', '2019-06-02 23:20:09', 2, 3);
/*!40000 ALTER TABLE `soporte` ENABLE KEYS */;

-- Volcando datos para la tabla empresa.usuario: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
REPLACE INTO `usuario` (`USUARIO_ID`, `NICK_USUARIO`, `FECHA_NACIMIENTO`, `EMAIL`, `PASSWORD`, `created_at`, `updated_at`, `ROL_ID`) VALUES
	(1, 'su', '1991-01-01 00:00:00', 'su@su.com', '$2b$10$KiiNEZuSi2kXjS5vMW/CmeIJ42irUV5tAEHMhP.T1/.4VxpBH68LO', '2019-05-09 18:27:10', '2019-05-09 18:27:10', 1),
	(2, 'ad', '1991-01-01 00:00:00', 'ad@ad.com', '$2b$10$SN20g1Oj/TaDufhEWA4AHO8TmLl6PARMNm5x2mNRMCQ278aWVjmh2', '2019-05-09 18:27:38', '2019-05-09 18:27:38', 2),
	(3, 'test', '1991-01-01 00:00:00', 'test@test.com', '$2b$10$mFwig9gBxzcNr2TqBVW.q.8GGx8lC2r3I0SbhKfPXraVxzRa.6cJa', '2019-05-09 18:27:50', '2019-05-09 18:27:50', 3);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;

-- Volcando datos para la tabla empresa.videojuego: ~8 rows (aproximadamente)
/*!40000 ALTER TABLE `videojuego` DISABLE KEYS */;
REPLACE INTO `videojuego` (`VIDEOJUEGO_ID`, `NOMBRE_JUEGO`, `DESCRIPCION`, `created_at`, `updated_at`, `USUARIO_ID`) VALUES
	(1, 'Game Test 1', '', '2019-05-09 18:28:32', '2019-05-09 18:28:32', 2),
	(2, 'Game Test 2', 'TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || TROLLS EVERYWHERE || ', '2019-05-09 18:29:28', '2019-05-09 18:29:28', 2),
	(3, 'Game Test 3', 'Descripción del videojuego.\r\n\r\nCaracteristicas del videojuego.\r\n\r\nDatos sobre el videojuego.', '2019-06-02 23:19:31', '2019-06-02 23:19:32', 2);
/*!40000 ALTER TABLE `videojuego` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
