export interface LoginFormValues {
  email: string;
  password: string;
}

export interface RegisterFormValues {
  fullname: string;
  email: string;
  password: string;
}

export interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export interface AuthFormProps {
  type: "login" | "register";
}

export interface SocialLoginProps {
  type: "login" | "register";
}
