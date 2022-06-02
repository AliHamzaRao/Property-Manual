
export const AuthenticationActions = {
    base:'',
    login: 'login',
    verifyemail: 'verifyemail',
    verifiedemail: 'verifiedemail',
    signup:'signup'
  };

  let authenticationPaths: AuthenticationPathsType = {
    login: `${AuthenticationActions.login}`,
    verifyemail: `${AuthenticationActions.verifyemail}`,
    verifiedemail: `${AuthenticationActions.verifiedemail}`,
    signup :`${AuthenticationActions.signup}`
  };

interface AuthenticationPathsType {
    readonly login: string;
    readonly verifyemail : string,
    readonly verifiedemail : string,
    readonly signup:string
}





export const AuthenticationPaths: AuthenticationPathsType = authenticationPaths;
