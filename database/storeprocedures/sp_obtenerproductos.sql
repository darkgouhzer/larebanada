CREATE PROCEDURE `sp_obtenerproductos` (str_descripcion VARCHAR(45))
BEGIN
	SELECT p.id, p.nombre, p.precio, p.valormedida, um.simbolo FROM productos p
JOIN unidadesmedidas um ON um.id = p.idunidadesmedida
 WHERE p.nombre LIKE concat('%', str_descripcion, '%') or um.nombre like concat('%', str_descripcion, '%') or um.simbolo like concat('%', str_descripcion, '%');
END