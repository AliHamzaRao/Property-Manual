
export const AuthenticationActions = {
    base:'auth',
    login: 'login',
    verifyemail: 'verifyemail',
    verifiedemail: 'verifiedemail',
    signup:'signup'
  };

  let authenticationPaths: AuthenticationPathsType = {
    login: `${AuthenticationActions.base+'/'+AuthenticationActions.login}`,
    verifyemail: `${AuthenticationActions.base+'/'+AuthenticationActions.verifyemail}`,
    verifiedemail: `${AuthenticationActions.base+'/'+AuthenticationActions.verifiedemail}`,
    signup :`${AuthenticationActions.base+'/'+AuthenticationActions.signup}`
  };

interface AuthenticationPathsType {
    readonly login: string;
    readonly verifyemail : string,
    readonly verifiedemail : string,
    readonly signup:string
}





export const AuthenticationPaths: AuthenticationPathsType = authenticationPaths;
