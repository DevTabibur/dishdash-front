export interface Transaction {
    id: string;
    name: string;
    business: string;
    type: TransactionType;
    amount: number;
    date: string;
    time: string;
    invoiceId: string;
    icon: string;
    isDebit?: boolean;
  }
  
  export type TransactionType = 
    | 'Mobile'
    | 'Entertainment'
    | 'Software'
    | 'Technology'
    | 'Withdraw'
    | 'Payment';
  
  export interface TransactionFilters {
    search: string;
    type: TransactionType | 'All';
    dateRange: {
      start: Date | null;
      end: Date | null;
    };
  }
  
  