import React from 'react'

export const ShowcaseProjects = ({projects = []}) => {
  return (
    <div>
      <h3>Projects</h3>
      {projects.map(project =>
        <div key={project._id}>
          <img src='*' alt='img' />
          </div>
        )}
    </div>
  )
}
