export default function validateInfo(values) {
    let errors = {}

    if(!values.username.trim()){
        errors.username = "Username required"
    }

    // Email
    if(!values.email) {
        errors.email = "Email required"
    }else if(
        !/^[A-Z0-9._%+-]+[a-z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ){
        errors.email = "Email address is invalid"
    }

    // Password
    if(!values.password) {
        errors.password = "Password is required"
    }else if( values.password.length < 6){
        errors.password = "Password needs to be 6 characters or more"
    }

    return errors;
}

