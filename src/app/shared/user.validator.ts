import { FormControl } from "@angular/forms";
import { User } from "../models/user";
import { Observable, of } from "rxjs";

export function userExistsValidator(control: FormControl): Observable<any> {
    return of(userExists(control.value))
}

function userExists(data: string) {
    const get = localStorage.getItem('users')
    if(data && get){
        const exists: User[] = JSON.parse(get) || [];
        const duplicateUser = exists.filter(user => { return user.email === data; }).length;
        if(duplicateUser){
            return {'emailExists': {value: data}}
        }
        return null
    }
    return null;
}