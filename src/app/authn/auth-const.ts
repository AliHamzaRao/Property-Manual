
export const LoginActions = {
   
    
    login: 'login',
    
  };

  let authenticationPaths: AuthenticationPathsType = {
   
    login: `${LoginActions.login}`,
    
  };

interface AuthenticationPathsType {
    
    readonly login: string;
    
  }

 

  

  export const AuthenticationPaths: AuthenticationPathsType = authenticationPaths;
