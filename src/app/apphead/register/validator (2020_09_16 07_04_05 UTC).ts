import { FormGroup } from "@angular/forms";
export function customvalidators(group:FormGroup){
    let pass =group.value.password;
    let confirmpass =group.value.conpassword;
    if(pass==confirmpass){
        return null;
    } else{
        return {'custom':true}
    }
}