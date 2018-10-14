/* 
Data to include in "likes_table":
-numberOfLikes
*/


CREATE TABLE article_table (
	article_id serial PRIMARY KEY,
	source_name VARCHAR (200) NOT NULL,
	title VARCHAR (200) NOT NULL,
	description VARCHAR (500) NOT NULL,
	url VARCHAR (200) NOT NULL,
	image_url VARCHAR (200) NOT NULL,
	date_published VARCHAR (200) NOT NULL,
	article_content VARCHAR (500) NOT NULL
);