CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100)
);
INSERT INTO users VALUES (NULL, 'John', 'john@mail.com', 'p455w0rd');
INSERT INTO users VALUES (NULL, 'Laure', 'laure@mail.com', 'p455w0rld');

SELECT username FROM users WHERE id = 2;

