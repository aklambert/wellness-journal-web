-- SQLite
CREATE TABLE IF NOT EXISTS goals(
  goal_id INTEGER PRIMARY KEY AUTOINCREMENT, 
  goal_descrip TEXT NOT NULL,
  goal_create_date TEXT NOT NULL DEFAULT current_timestamp
);