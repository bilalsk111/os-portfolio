import React from "react"

const GitCard = ({ data }) => {
  return (
    <div className="card">

      {data.img && (
        <div className="image-wrap">
          <img src={data.img} alt={data.title} loading="lazy" />
        </div>
      )}

      <h1>{data.title}</h1>

      <p className="description">{data.desc}</p>

      <div className="tags">
        {data.tags.map((tag, index) => (
          <span className="tag" key={index}>{tag}</span>
        ))}
      </div>

      <div className="urls">
        <a href={data.repolink} target="_blank" rel="noreferrer">
          Repository
        </a>

        {data.demolink && (
          <a href={data.demolink} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        )}
      </div>

    </div>
  )
}

export default GitCard
