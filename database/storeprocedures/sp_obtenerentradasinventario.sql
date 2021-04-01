CREATE PROCEDURE `sp_obtenerentradasinventario` (dDesde DATETIME, dhasta DATETIME)
BEGIN
	SELECT e.id as entradaid, e.cantidad, e.fecha, e.idproductos, p.nombre, r.nombre AS repostera, u.name AS username FROM entradas e 
	JOIN productos p ON p.id = e.idproductos
	JOIN reposteras r ON r.id = e.idrepostera
	JOIN users u ON u.id = e.users_id
	WHERE fecha BETWEEN '20210202000000' AND '20210203000000';
END