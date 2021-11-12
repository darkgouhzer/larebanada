CREATE PROCEDURE `sp_obtenerproductospaginado` (str_descripcion VARCHAR(45), pagina INT, size INT)
BEGIN
	SELECT p.id, p.nombre, p.precio, p.valormedida, um.simbolo FROM productos p
	JOIN unidadesmedidas um ON um.id = p.idunidadesmedida
	 WHERE p.nombre LIKE concat('%', str_descripcion, '%') or um.nombre like concat('%', str_descripcion, '%') or um.simbolo like concat('%', str_descripcion, '%')
	 LIMIT pagina, size;
END