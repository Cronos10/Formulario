
 --Obtener las 3 marcas más solicitadas:
CREATE PROCEDURE GetTopThreeBrands
AS
BEGIN
    SELECT TOP 3 marca_id, COUNT(*) AS numero_solicitudes
    FROM solicitudes
    GROUP BY marca_id
    ORDER BY numero_solicitudes DESC;
END;
--Obtener solicitudes del mes actual:
CREATE PROCEDURE GetCurrentMonthRequests
AS
BEGIN
    SELECT *
    FROM solicitudes
    WHERE MONTH(fecha_solicitud) = MONTH(GETDATE())
      AND YEAR(fecha_solicitud) = YEAR(GETDATE());
END;
--Obtener el vendedor con menos solicitudes en los últimos 30 días:
CREATE PROCEDURE GetLeastActiveSeller
AS
BEGIN
    SELECT TOP 1 vendedor_id, COUNT(*) AS numero_solicitudes
    FROM solicitudes
    WHERE fecha_solicitud >= DATEADD(DAY, -30, GETDATE())
    GROUP BY vendedor_id
    ORDER BY numero_solicitudes ASC;
END;
--Obtener modelos que no tengan solicitudes:
CREATE PROCEDURE GetModelsWithNoRequests
AS
BEGIN
    SELECT *
    FROM modelos
    WHERE modelo_id NOT IN (SELECT DISTINCT modelo_id FROM solicitudes);
END;
--Obtener 3 meses con más dinero en ventas:
CREATE PROCEDURE GetTopThreeSalesMonths
AS
BEGIN
    SELECT TOP 3 YEAR(fecha_venta) AS Año, MONTH(fecha_venta) AS Mes, SUM(monto_venta) AS TotalVentas
    FROM ventas
    GROUP BY YEAR(fecha_venta), MONTH(fecha_venta)
    ORDER BY TotalVentas DESC;
END;


