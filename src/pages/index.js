import React, { useContext, useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const ToDo = function ({ title }) {
  this.id = new Date()
  this.title = title
  this.isCompleted = false
  this.timestamp = new Date()
}

const IndexPage = () => {
  const [inputValue, setInputValue] = useState(``)
  const [toDoList, setToDoList] = useState([])

  const addToDo = ({ title }) => {
    setToDoList(oldArray => [...oldArray, new ToDo({ title })])
    // new ToDo({ title })
  }

  const deleteToDo = id => {
    setToDoList(oldArray => toDoList.filter(t => t.id !== id))
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div className={`container`}>
        <div className={`row`}>
          <div className={`col-md-12`}>
            <h1>Lists</h1>

            <input
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
            />
            <div
              className={`btn btn-primary`}
              onClick={() => addToDo({ title: inputValue })}
            >
              Add To-Do
            </div>

            {toDoList.map(t => (
              <div className={`col-sm-12 col-md-6 col-lg-4`}>
                <div className="card pb-5" style={{ width: "100%" }}>
                  <div className="card-body">
                    <i className="fa fa-user fa-3x text-primary" />
                    <h5 className="card-title">{t.title}</h5>
                    <div className={`btn btn-danger`} onClick={() => deleteToDo(t.id)}>Delete Me</div>

                    
                    {/* <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
