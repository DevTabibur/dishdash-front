export interface LoginFormValues {
  email: string;
  password: string;
}

export interface RegisterFormValues {
  username: string;
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

export interface ForgotPasswordFormValues {
  email: string;
}

export interface ResetPasswordFormValues {
  password: string;
  confirmPassword: string;
}

export interface PasswordRequirementProps {
  met: boolean;
  text: string;
}

export interface SuccessMessageProps {
  title: string;
  message: string;
  actionText: string;
  actionHref: string;
}
