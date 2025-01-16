export interface User {
    id: string;
    name: string;
    avatar: string;
    role: 'admin' | 'vendor' | 'customer';
  }
  
  export interface DashboardMenuItem {
    name: string;
    href: string;
    icon: React.ComponentType;
    roles: User['role'][];
  }
  
  export interface DashboardTransaction {
    id: string;
    name: string;
    business: string;
    type: string;
    amount: number;
    date: string;
    icon: string;
  }
  
  export interface DashboardScheduledTransfer {
    id: string;
    name: string;
    amount: number;
    date: string;
    avatar: string;
  }
  
  export interface DashboardStats {
    totalBalance: number;
    totalSpending: number;
    totalSaved: number;
  }
  
  export interface DashboardWorkingCapital {
    date: string;
    income: number;
    expenses: number;
  }
  
  