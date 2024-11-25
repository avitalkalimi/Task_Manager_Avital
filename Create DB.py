import sqlite3

# Connect to The Data Base
conn = sqlite3.connect("tasks.db")  
cursor = conn.cursor()

# Create The Table
create_table_query = """
CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    completed BOOLEAN NOT NULL DEFAULT 0
);
"""

# Save the Table on the Date Base
cursor.execute(create_table_query)
conn.commit()
print("Table created successfully.")

# Check the Table was Create
cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
tables = cursor.fetchall()
print("Existing tables:", tables)

# Finish
conn.close()
