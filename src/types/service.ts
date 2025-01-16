import { ReactNode } from 'react'

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  color: string;
  buttonText: string;
}

export interface ServiceProps {
  children?: ReactNode;
}

