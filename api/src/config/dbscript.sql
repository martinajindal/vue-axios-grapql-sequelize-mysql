CREATE TABLE IF NOT EXISTS users (
    id INT(6) AUTO_INCREMENT,
	firstname VARCHAR(255),
    lastname VARCHAR(255),
	email VARCHAR(255),
	password TEXT,
	createdAt DATE,
	updatedAt DATE,
    PRIMARY KEY (id)
)  auto_increment=10000 ENGINE=InnoDB  DEFAULT CHARSET=utf8 ;

CREATE TABLE IF NOT EXISTS orders (
    id INT(6) AUTO_INCREMENT,
	matterRef VARCHAR(255),
    type VARCHAR(255),
	status VARCHAR(255),
	createdAt DATE,
	updatedAt DATE,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS orderattachments (
    id INT(6),
	fileName VARCHAR(255),
	filePath VARCHAR(255),
    PRIMARY KEY (id,fileName)
);



Orders.hasMany(OrderAttachments, {foreignKey: 'id'})
OrderAttachments.belongsTo(Orders, {foreignKey: 'id'})
OrderAttachments.find({ where: { ...}, include: [Orders]})


