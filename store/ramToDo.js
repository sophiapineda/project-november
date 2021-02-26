import React from 'react'
export const toDoList = []

const ToDo = function ({ title })  {
  this.id = new Date()
  this.title = title
  this.isCompleted = false
  this.timestamp = new Date()
}

//window.toDoList = toDoList

export const addToDo = ({ title }) => {
  toDoList.push(new ToDo({ title }))
}

export const editToDo = (id, { title, isCompleted }) => {
  const toDo = toDoList.filter(t => t.id === id)[0]

  if (title) toDo.title = title
  if (isCompleted) toDo.isCompleted = isCompleted
}

export const deleteToDo = id => {
  const toDo = toDoList.filter(t => t.id === id)[0]

  toDoList.splice(toDoList.indexOf(toDo), 1)
}

export const removeAllCompleted = () => {
  toDoList = toDoList.filter(t => t.isCompleted)
}
