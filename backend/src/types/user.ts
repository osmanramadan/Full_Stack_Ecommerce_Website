export interface updateuserData {
    email: string;
    passwordResetCode?: string | undefined;
    passwordResetExpires?: Date | undefined;
    resetCodeVerified?: boolean | undefined;
    password?: string;
  }
  
export type user = {
    id?: number;
    email?: string;
    username?: string;
    password?: string;
    passwordConfirm?: string;
    phone?: string;
    role?: string;
    profileImg?: string;
    passwordChangedAt?: Date;
    passwordResetCode?: number;
    passwordResetExpires?: Date;
    resetCodeVerified?: boolean;
  };


export enum UserRole {
    User = 'user',
    Admin = 'admin'
  }