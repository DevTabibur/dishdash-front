import { Transaction, TransactionType } from "@/types";

const types: TransactionType[] = [
  "Mobile",
  "Entertainment",
  "Software",
  "Technology",
  "Withdraw",
  "Payment",
];

const businesses = [
  {
    name: "Iphone 13 Pro MAX",
    company: "Apple, Inc.",
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Netflix Subscription",
    company: "Netflix",
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Figma Subscription",
    company: "Figma, Inc.",
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Bitcoin Transaction",
    company: "Coinbase",
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Sajib Rahman",
    company: "Appsurro",
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Instagram Ads",
    company: "Meta",
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "UIHUT Subscription",
    company: "UIHUT",
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Citi Bank Ltd.",
    company: "City Bank",
    icon: "/placeholder.svg?height=40&width=40",
  },
];

export const generateMockTransactions = (count: number): Transaction[] => {
  return Array.from({ length: count }, (_, i) => {
    const business = businesses[Math.floor(Math.random() * businesses.length)];
    const type = types[Math.floor(Math.random() * types.length)];
    const isDebit = Math.random() > 0.5;
    const amount = +(Math.random() * 1000).toFixed(2);
    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * 30));

    return {
      id: `tr-${i + 1}`,
      name: business.name,
      business: business.company,
      type,
      amount,
      date: date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      }),
      time: date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
      invoiceId: `MGL0${Math.floor(Math.random() * 1000000)}`,
      icon: business.icon,
      isDebit,
    };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};
