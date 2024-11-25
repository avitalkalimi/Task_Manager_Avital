from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List

# Create FastAPI object
app = FastAPI()

# Create DB object
tasks_db = []
task_id_counter = 1

# Task Data model
class Task(BaseModel):
    title: str
    description: str
    completed: bool = False

# Update Task Data model
class TaskUpdate(BaseModel):
    title: str = None
    description: str = None
    completed: bool = None

# Get all tasks 
@app.get("/tasks")
def get_tasks():
    return tasks_db

# Get task by id 
@app.get("/tasks/{id}")
def get_task(id: int):
    for task in tasks_db:
        if task['id'] == id:
            return task
    raise HTTPException(status_code=404, detail="Task not found")

# Create new task
@app.post("/tasks")
def create_task(task: Task):
    global task_id_counter
    new_task = task.dict()
    new_task['id'] = task_id_counter
    task_id_counter += 1
    tasks_db.append(new_task)
    return new_task

# Cahnge exsisting task
@app.put("/tasks/{id}")
def update_task(id: int, task_update: TaskUpdate):
    for task in tasks_db:
        if task['id'] == id:
            if task_update.title is not None:
                task['title'] = task_update.title
            if task_update.description is not None:
                task['description'] = task_update.description
            if task_update.completed is not None:
                task['completed'] = task_update.completed
            return task
    raise HTTPException(status_code=404, detail="Task not found")

# Delete task by id
@app.delete("/tasks/{id}")
def delete_task(id: int):
    global tasks_db
    tasks_db = [task for task in tasks_db if task['id'] != id]
    return {"detail": "Task deleted successfully"}

# Welcome massege for the web page
@app.get("/")
def root():
    return {"message": "Welcome to the API"}
