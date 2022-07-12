
export const Error = (code)=>{

    return (
        <div>
            {code===404 && <NotFoundError />}
        </div>
    )
}

const NotFoundError = () =>{
    return (
        <div>
            404 Error - Ooops! Page not found. But you can go back home <a href="/">here</a>
        </div>
    )
}