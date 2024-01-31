-- SQLite
SELECT * FROM users;

DROP TABLE users;

DELETE FROM users;

INSERT INTO users (username, password) VALUES ("OMAR", "OMAR");

ALTER TABLE users ADD email TEXT NOT NULL;

CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    email TEXT NOT NULL
);