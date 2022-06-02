
export const AuthenticationActions = {
    base:'',
    login: 'login',
    verifyemail: 'verifyemail',
    verifiedemail: 'verifiedemail',
  };

  let authenticationPaths: AuthenticationPathsType = {
    login: `${AuthenticationActions.login}`,
    verifyemail: `${AuthenticationActions.verifyemail}`,
    verifiedemail: `${AuthenticationActions.verifiedemail}`,
  };

interface AuthenticationPathsType {
    readonly login: string;
    readonly verifyemail : string,
    readonly verifiedemail : string
}





export const AuthenticationPaths: AuthenticationPathsType = authenticationPaths;
