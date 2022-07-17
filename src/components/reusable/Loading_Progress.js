
//fullpage loading alert
export const Loading = ({loading}) =>{

    return(
        <div className="alert">
            <div className="alert-content">
                {loading} Please wait
            </div>
        </div>
    )
}