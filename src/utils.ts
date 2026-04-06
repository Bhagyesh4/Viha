export type UserRole = 'Super Admin' | 'Customer' | 'Agent' | 'Employee';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
}

export interface Agent {
  name: string;
  role: string;
  avatar: string;
  revenue?: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  location?: string;
  avatar?: string;
  status: 'New Lead' | 'Contacted' | 'Quoted' | 'Closed';
  timeAgo: string;
  type: string;
  source: string;
  campaign: string;
  adSet: string;
  formData: string;
  assignedTo: Agent;
  quoteAmount?: string;
  policyholder?: {
    name: string;
    age: number;
    location: string;
    avatar: string;
  };
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  time: string;
  type: 'ingest' | 'auto-response' | 'assignment' | 'note';
}

export interface DashboardStats {
  newLeads: { value: number; change: string };
  responseTime: { value: string; change: string };
  conversionRate: { value: string; change: string };
  adSpendRoi: { value: string; status: string };
}

export interface Employee {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'On Leave' | 'Terminated';
  salary: string;
  commission: string;
  avatar: string;
}

export interface LeaveRequest {
  id: string;
  employeeName: string;
  employeeAvatar: string;
  type: string;
  duration: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}

export interface Policy {
  id: string;
  policyNumber: string;
  holderName: string;
  holderAvatar: string;
  holderAge: number;
  holderLocation: string;
  type: 'Life Insurance' | 'General Insurance';
  subType: string;
  status: 'Active' | 'Expired' | 'Pending';
  renewalDate: string;
  termLength?: string;
  faceAmount?: string;
  cashValue?: string;
  issueDate?: string;
  beneficiary?: {
    name: string;
    relationship: string;
    share: string;
    avatar: string;
  };
  premium?: {
    amount: string;
    frequency: string;
    nextPayment: string;
    method: string;
    paidPercentage: number;
  };
}

export interface Claim {
  id: string;
  type: string;
  date: string;
  status: 'Settled' | 'Closed' | 'Pending';
  amount: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  category: 'Underwriting' | 'Claim Verification' | 'Customer Support' | 'Compliance' | 'Claims';
  status: 'To Do' | 'In Progress' | 'Completed';
  priority?: 'Low' | 'Medium' | 'High';
  dueDate: string;
  assignedTo: {
    name: string;
    avatar: string;
  };
}

export interface PerformanceTarget {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  userRole: UserRole;
  category: 'Sales' | 'Leads' | 'Retention' | 'Underwriting';
  current: number;
  target: number;
  unit: string;
  period: 'Monthly' | 'Quarterly' | 'Yearly';
}
