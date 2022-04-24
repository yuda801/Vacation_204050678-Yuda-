CREATE DATABASE vacationFinder;

USE vacationFinder;

CREATE TABLE users(
userID INT NOT NULL AUTO_INCREMENT,
firstName VARCHAR(255) NOT NULL,
lastName VARCHAR(255) NOT NULL,
userName VARCHAR(255) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL,
PRIMARY KEY(userID)
);

INSERT INTO users(firstName, lastName, userName, password)
VALUES
("firstName1", "lastName1", "firstUser", "123456"),
("firstName2", "lastName2", "secondUser", "123456"),
("firstName3", "lastName3", "thirdUser", "123456"),
("firstName4", "lastName4", "forthUser", "123456"),
("firstName5", "lastName5", "fifthUser", "123456"),
("firstName6", "lastName6", "sixthUser", "123456");

CREATE TABLE admin(
userName VARCHAR(255) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL
);

INSERT INTO admin(userName, password)
VALUES
("admin", "admin");

CREATE TABLE trips(
tripID INT NOT NULL AUTO_INCREMENT,
description VARCHAR(255) NOT NULL,
destination VARCHAR(255),
picturePath VARCHAR(255),
date VARCHAR(255),
price VARCHAR(255),
numOfFolowers INT,
PRIMARY KEY(tripID)
);

INSERT INTO trips(description, destination, picturePath,
date, price, numOfFolowers)
VALUES
("A night of magic","Tokyo, Japan", "uploads/Tokyo, Japan.jpg", "21/8 - 22/9", "150$", 0),
("Museum tour","Rome, Italy", "uploads/Rome, Italy.jpg",  "13/4 - 2/5", "1360$", 6),
("City of lights","Paris, France", "uploads/Paris, France.jpg", "21/8 - 25/8", "1720$", 4),
("Visit the queen","London, United Kingdom", "uploads/London, United Kingdom.jpg", "21/8 - 24/8", "634$", 2),
("The african edge","Cape Town, South Africa", "uploads/Cape Town, South Africa.jpg", "21/8 - 22/9", "3150$", 5),
("Visit the other america","Buenos Aires, Argentina", "uploads/Buenos Aires, Argentina.jpg", "12/9 - 22/9", "950$", 12),
("City of future","Berlin, Germany.jpg", "uploads/Berlin, Germany.jpg", "12/4 - 17/4", "470$", 0),
("The kings city","Bangkok, Thailand", "uploads/Bangkok, Thailand.jpg", "22/1 - 1/3", "760$", 1),
("For a good time","Wellington, New Zealand.jpg", "uploads/Wellington, New Zealand.jpg", "23/1 - 1/2", "570$", 0),
("If law and order is your thing","Washington D.C. U.S.A..jpg", "uploads/Washington D.C. U.S.A..jpg", "13/5 - 20/5", "950$", 0);






#drop table trips;
