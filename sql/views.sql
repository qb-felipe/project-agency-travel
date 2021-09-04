CREATE VIEW 
	vw_package_info
AS SELECT
	packages.id,
	packages.name,
	packages.description,
	packages.days,
	packages.price,
	packages.city,
	packages.img_title,
	hotels.name as hotel_name
FROM
	packages
INNER JOIN
	daily_voucher
ON 
    packages.id = daily_voucher.id_package
INNER JOIN
	hotels
ON 
    daily_voucher.id_hotel = hotels.id;