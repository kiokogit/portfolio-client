import FileBase64 from 'react-file-base64'
import React from 'react'


export const ProjectAddForm = ({add_project, setWin, projectDetails, edit_project})=>{

    const [project, setProject] = React.useState(projectDetails)

    //document title
    React.useEffect(()=>{
        document.title = projectDetails?.title? 'Editing Project':'New Project'
    }, [projectDetails])

    return(
        <div>
            <div>
                <h3>
                    {projectDetails?.title? 'Edit Project Details':'Add a New Project'}
                </h3>
            </div>
            <div>
                <form>
                    <div><p>Project Title</p>
                    <input placeholder={"Enter the Project Title"} type="text" value={project.title} required onChange={e=>setProject({...project, title:e.target.value})} /></div>
                    <div><p>Project Description</p>
                    <textarea aria-multiline={true} placeholder={"Description at length"} value={project.description} required type="text" onChange={e=>setProject({...project, description:e.target.value})}   /></div>
                    <div><p>Project Principles</p>
                    <input placeholder={"What Skills Did you Apply?"} type="" value={project.skills} required onChange={e=>setProject({...project, skills:e.target.value})}   /></div>
                    <div><p>Project Cover Image (optional but encouraged)</p>
                    <FileBase64 type='file' multiple={false} onDone={({base64})=>setProject({...project, gallery:base64 })} /></div>
                    <button className='fwrdbtn' onClick={(e)=>{
                        if(projectDetails){
                            edit_project(e, project)
                        } else{
                            add_project(e, project)
                        }
                        }} >Submit Project</button>
                    <button className='cancelbtn' type='reset' onClick={()=>setWin('cv')}>Cancel</button>
                </form>
            </div>

        </div>
    )
}