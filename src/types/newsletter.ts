export interface NewsletterProps {
  onSubscribe: (email: string) => Promise<void>;
}

export interface NewsletterFormProps {
  onSubmit: (email: string) => Promise<void>;
  isLoading: boolean;
}
