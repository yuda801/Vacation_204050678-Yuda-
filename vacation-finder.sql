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
description VARCHAR(5000) NOT NULL,
destination VARCHAR(255),
date VARCHAR(255),
price VARCHAR(255),
numOfFolowers INT,
PRIMARY KEY(tripID)
);

INSERT INTO trips(description, destination, date, price, numOfFolowers)
VALUES
("Tokyo is the capital and largest city of Japan. Its metropolitan area is the most populous in the world, with an estimated 37.468 million residents in 2018. Its metropolitan area is the largest in size and the most populous, with an area of 13,452 square kilometers and a population of 13.99 million people.","Tokyo", "21/8 - 22/9", "1500$", 0),
("Rome is the capital city of Italy. It is also the capital of the Lazio region, the centre of the Metropolitan City of Rome, and a special comune named Comune di Roma Capitale.","Rome", "13/4 - 2/5", "1360$", 6),
("Paris is the capital and most populous city of France, with an estimated population of 2,165,423 residents in 2019, making it the 34th most densely populated city in the world in 2020. Since the 17th century, Paris has been one of the worlds major centres of finance, diplomacy, commerce, fashion, gastronomy, science, and arts, and has sometimes been referred to as the capital of the world.","Paris","21/8 - 25/8", "1720$", 4),
("London is the capital and largest city of England and the United Kingdom with a total population of 9,002,488. It stands on the River Thames in south-east England at the head of a 50-mile (80 km) estuary down to the North Sea, and has been a major settlement for two millennia. The City of London, its ancient core and financial centre, was founded by the Romans as Londinium and retains boundaries close to its medieval ones.","London","21/8 - 24/8", "634$", 2),
("Cape Town is one of South Africas three capital cities, serving as the seat of the Parliament of South Africa." ,"CapeTown", "21/8 - 22/9", "3150$", 5),
("Buenos Aires, officially the Autonomous City of Buenos Aires, is the capital and largest city of Argentina","BuenosAires", "12/9 - 22/9", "950$", 12),
("Berlin is the capital and largest city of Germany by both area and population.  Its 3.7 million inhabitants make it the European Union`s most populous city, according to population within city limits. One of Germany`s sixteen constituent states, Berlin is surrounded by the State of Brandenburg and contiguous with Potsdam, Brandenburg`s capital. Berlin`s urban area, which has a population of around 4.5 million, is the second most populous urban area in Germany after the Ruhr.","Berlin", "12/4 - 17/4", "470$", 0),
("Bangkok, officially known in Thai as Krung Thep Maha Nakhon and colloquially as Krung Thep, is the capital and most populous city of Thailand. The city occupies 1,568.7 square kilometres (605.7 sq mi) in the Chao Phraya River delta in central Thailand and has an estimated population of 10.539 million as of 2020, 15.3 percent of the country`s population.","Bangkok", "22/1 - 1/3", "760$", 1),
("Wellington is the capital city of New Zealand. It is located at the south-western tip of the North Island, between Cook Strait and the Remutaka Range. Wellington is the second-largest city in New Zealand by metro area, and is the administrative centre of the Wellington Region. It is the worlds southernmost capital of a sovereign state.","Wellington", "23/1 - 1/2", "570$", 0),
("Washington, D.C., formally the District of Columbia, also known as just Washington or just D.C., is the capital city and only federal district of the United States. The city was named for George Washington, a Founding Father and the first president of the United States, and the federal district is named after Columbia, a female personification of the nation. As the seat of the U.S.","WashingtonDC", "13/5 - 20/5", "950$", 0);

SELECT * FROM trips;

#drop table trips;
