

export class AuthService {

    // private isUserLoggedIn;
    // private username;

    // constructor() {
    //     this.isUserLoggedIn = false
    // }

    // setUserLoggedIn() {
    //     this.isUserLoggedIn = true;
    // }

    // getUserLoggedIn() {
    //     return this.isUserLoggedIn;
    // }
    loggedIn: boolean;

    isAuthenticated() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.loggedIn)
            }, 1000)
        })
        return promise;
    }

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }


}