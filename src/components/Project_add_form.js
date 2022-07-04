import FileBase64 from 'react-file-base64'
import React from 'react'


export const ProjectAddForm = ({add_project})=>{

    const [project, setProject] = React.useState({})

    return(
        <div>
            <div>
                <h3>
                    Add A Project
                </h3>
            </div>
            <div>
                <div>
                    <div><p>Project Title</p>
                    <input placeholder="Enter the Project Title" type="text" onChange={e=>setProject({...project, title:e.target.value})} /></div>
                    <div><p>Project Description</p>
                    <textarea aria-multiline={true} minLength={150} placeholder="Description at Length" type="text" onChange={e=>setProject({...project, description:e.target.value})}   /></div>
                    <div><p>Project Principles</p>
                    <input placeholder="What Skills Did you Apply?" type="text" onChange={e=>setProject({...project, skills:e.target.value})}   /></div>
                    <div><p>Project Cover Image</p>
                    <FileBase64 type='file' multiple={false} onDone={({base64})=>setProject({...project, gallery:base64 })} /></div>
                    <button onClick={e=>
                        add_project(e, project)
                    }>Submit Project</button>
                    <button>Cancel</button>
                </div>
            </div>

        </div>
    )
}