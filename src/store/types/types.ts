export interface Project {
    id: string;
    name: string;
    description?: string;
  }
  
  export interface User {
    principalName: string;
    displayName: string;
    emailAddress: string;
    origin: string;
    originId: string;
  }