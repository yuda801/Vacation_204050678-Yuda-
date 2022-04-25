/*
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
*/



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
description VARCHAR(2500) NOT NULL,
destination VARCHAR(255),
date VARCHAR(255),
price VARCHAR(255),
numOfFolowers INT,
PRIMARY KEY(tripID)
);

INSERT INTO trips(description, destination, date, price, numOfFolowers)
VALUES
("Tokyo is the capital and largest city of Japan. Its metropolitan area is the most populous in the world,with an estimated 37.468 million residents in 2018. Located at the head of Tokyo Bay, the prefecture forms part of the Kantō region on the central Pacific coast of Japan's main island of Honshu. Tokyo is the political and economic center of the country, as well as the seat of the Emperor of Japan and the national government. As of 2022, the prefecture has an estimated population of 13.99 million.","Tokyo", "21/8 - 22/9", "150$", 0),
("Rome is the capital city of Italy. It is also the capital of the Lazio region, the centre of the Metropolitan City of Rome, and a special comune named Comune di Roma Capitale. With 2,860,009 residents in 1,285 km2 (496.1 sq mi), Rome is the country's most populated comune and the third most populous city in the European Union by population within city limits. ","Rome", "13/4 - 2/5", "1360$", 6),
("Paris is the capital and most populous city of France, with an estimated population of 2,165,423 residents in 2019 in an area of more than 105 km² (41 sq mi), making it the 34th most densely populated city in the world in 2020. Since the 17th century, Paris has been one of the world's major centres of finance, diplomacy, commerce, fashion, gastronomy, science, and arts, and has sometimes been referred to as the capital of the world. The City of Paris is the centre and seat of government of the region and province of Île-de-France, or Paris Region, with an estimated population of 12,997,058 in 2020, or about 18% of the population of France, making it in 2020 the second largest metropolitan area in the OECD, and 14th largest in the world in 2015. The Paris Region had a GDP of €709 billion ($808 billion) in 2017. According to the Economist Intelligence Unit Worldwide Cost of Living Survey, in 2021 Paris was the city with the second-highest cost of living in the world, tied with Singapore, and after Tel Aviv.","Paris","21/8 - 25/8", "1720$", 4),
("London is the capital and largest city of England and the United Kingdom with a total population of 9,002,488. It stands on the River Thames in south-east England at the head of a 50-mile (80 km) estuary down to the North Sea, and has been a major settlement for two millennia. The City of London, its ancient core and financial centre, was founded by the Romans as Londinium and retains boundaries close to its medieval ones. Since the 19th century, \"London\" has also referred to the metropolis around this core, historically split between the counties of Middlesex, Essex, Surrey, Kent, and Hertfordshire, which largely comprises Greater London, governed by the Greater London Authority. The City of Westminster, to the west of the City of London, has for centuries held the national government and parliament.","London","21/8 - 24/8", "634$", 2),
("Cape Town is one of South Africa's three capital cities, serving as the seat of the Parliament of South Africa. It is the legislative capital of the country, along with judicial capital Bloemfontein and administrative capital Pretoria. It is the oldest and second largest city in the country, after Johannesburg. Colloquially named the Mother City, it is the largest city of the Western Cape province and forms part of the City of Cape Town metropolitan municipality. The Parliament of South Africa is situated in Cape Town. The other two capitals are located in Gauteng (in Pretoria, the executive capital, where the Presidency is based) and in the Free State (in Bloemfontein, the judicial capital, where the Supreme Court of Appeal is located)." ,"CapeTown", "21/8 - 22/9", "3150$", 5),
("Buenos Aires, officially the Autonomous City of Buenos Aires, is the capital and largest city of Argentina. The city is located on the western shore of the Río de la Plata, on South America's southeastern coast. \"Buenos Aires\" can be translated as \"fair winds\" or \"good airs\", but the former was the meaning intended by the founders in the 16th century, by the use of the original name \"Real de Nuestra Señora Santa María del Buen Ayre\", named after the Madonna of Bonaria in Sardinia, Italy.","BuenosAires", "12/9 - 22/9", "950$", 12),
("Berlin is the capital and largest city of Germany by both area and population. Its 3.7 million inhabitants make it the European Union's most populous city, according to population within city limits. One of Germany's sixteen constituent states, Berlin is surrounded by the State of Brandenburg and contiguous with Potsdam, Brandenburg's capital. Berlin's urban area, which has a population of around 4.5 million, is the second most populous urban area in Germany after the Ruhr. The Berlin-Brandenburg capital region has around 6.2 million inhabitants and is Germany's third-largest metropolitan region after the Rhine-Ruhr and Rhine-Main regions. There has been an unsuccessful attempt to unify both states in 1996 and the states cooperate on many matters to this day.","Berlin", "12/4 - 17/4", "470$", 0),
("Bangkok, officially known in Thai as Krung Thep Maha Nakhon and colloquially as Krung Thep, is the capital and most populous city of Thailand. The city occupies 1,568.7 square kilometres (605.7 sq mi) in the Chao Phraya River delta in central Thailand and has an estimated population of 10.539 million as of 2020, 15.3 percent of the country's population. Over 14 million people (22.2 percent) lived within the surrounding Bangkok Metropolitan Region at the 2010 census, making Bangkok an extreme primate city, dwarfing Thailand's other urban centres in both size and importance to the national economy.","Bangkok", "22/1 - 1/3", "760$", 1),
("Wellington (Māori: Te Whanganui-a-Tara [tɛ ˈfaŋanʉi a taɾa] or Māori: Pōneke [pɔːnɛkɛ]) is the capital city of New Zealand. It is located at the south-western tip of the North Island, between Cook Strait and the Remutaka Range. Wellington is the second-largest city in New Zealand by metro area, and is the administrative centre of the Wellington Region. It is the world's southernmost capital of a sovereign state. Wellington features a temperate maritime climate, and is the world's windiest city by average wind speed.","Wellington", "23/1 - 1/2", "570$", 0),
("Washington, D.C., formally the District of Columbia, also known as just Washington or just D.C., is the capital city and only federal district of the United States. It is located on the east bank of the Potomac River, which forms its southwestern and southern border with the U.S. state of Virginia, and shares a land border with the U.S. state of Maryland on its remaining sides. The city was named for George Washington, a Founding Father and the first president of the United States, and the federal district is named after Columbia, a female personification of the nation. As the seat of the U.S. federal government and several international organizations, the city is an important world political capital. It is one of the most visited cities in the U.S., seeing over 20 million visitors in 2016.","WashingtonDC", "13/5 - 20/5", "950$", 0);

SELECT * FROM trips;
