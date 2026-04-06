import { 
  Agent, 
  Lead, 
  Activity, 
  DashboardStats, 
  Employee, 
  LeaveRequest, 
  Policy, 
  Claim,
  UserRole,
  User,
  PerformanceTarget,
  Task
} from './types';

export const MOCK_AGENTS: Agent[] = [
  {
    name: 'Sarah Jenkins',
    role: 'Life Insurance Lead',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    revenue: '$420k'
  },
  {
    name: 'Michael Chen',
    role: 'Auto Specialist',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    revenue: '$385k'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Enterprise Accounts',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    revenue: '$310k'
  }
];

export const MOCK_LEADS: Lead[] = [
  {
    id: '1',
    name: 'Jonathan Wick',
    email: 'j.wick@continental.com',
    status: 'New Lead',
    timeAgo: '2 mins ago',
    type: 'Auto Insurance Bundle',
    source: 'Meta Ads',
    campaign: 'Q4 Auto Bundle Awareness',
    adSet: 'High Intent - Urban NY',
    formData: '"Looking for a multi-vehicle discount. Currently with StateFarm paying $450/mo. Primary driver: clean record, secondary: one minor infraction 2022."',
    assignedTo: MOCK_AGENTS[1]
  },
  {
    id: '2',
    name: 'Sarah Silverstone',
    email: 'sarah.s@gmail.com',
    status: 'Contacted',
    timeAgo: '1 hour ago',
    type: 'Health Coverage Q4',
    source: 'Instagram',
    campaign: 'Health & Wellness 2024',
    adSet: 'Fitness Enthusiasts',
    formData: 'Interested in individual health plans for self-employed professionals.',
    assignedTo: MOCK_AGENTS[0]
  }
];

export const MOCK_STATS: DashboardStats = {
  newLeads: { value: 2482, change: '+12.4%' },
  responseTime: { value: '14m', change: '-2m' },
  conversionRate: { value: '8.4%', change: '+0.8%' },
  adSpendRoi: { value: '4.2x', status: 'Stable' }
};

export const MOCK_EMPLOYEES: Employee[] = [
  {
    id: 'e1',
    name: 'Marcus Thorne',
    email: 'm.thorne@ledger.com',
    role: 'Lead Agent',
    status: 'Active',
    salary: '$6,200.00',
    commission: '+$1,450 Commission',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 'e2',
    name: 'Elena Vance',
    email: 'e.vance@ledger.com',
    role: 'Underwriter',
    status: 'Active',
    salary: '$8,400.00',
    commission: 'Fixed Base',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 'e3',
    name: 'David Chen',
    email: 'd.chen@ledger.com',
    role: 'Support',
    status: 'On Leave',
    salary: '$4,800.00',
    commission: 'Standard Sal',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
];

export const MOCK_LEAVE_REQUESTS: LeaveRequest[] = [
  {
    id: 'lr1',
    employeeName: 'Julianne Moore',
    employeeAvatar: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    type: 'Sick Leave',
    duration: '2 days',
    status: 'Pending'
  },
  {
    id: 'lr2',
    employeeName: 'Robert King',
    employeeAvatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    type: 'Vacation',
    duration: '5 days',
    status: 'Pending'
  }
];

export const MOCK_POLICIES: Policy[] = [
  {
    id: 'p1',
    policyNumber: 'POL-8829-001',
    holderName: 'Eleanor Vance',
    holderAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    holderAge: 58,
    holderLocation: 'Seattle, WA',
    type: 'Life Insurance',
    subType: 'Life Term 25yr',
    status: 'Active',
    renewalDate: '12 Nov 2024',
    termLength: '25 Year Term',
    faceAmount: '$2,500,000.00',
    cashValue: '$42,180.55',
    issueDate: 'Oct 12, 2018',
    beneficiary: {
      name: 'Samuel Vance',
      relationship: 'Son',
      share: '100% Primary',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    premium: {
      amount: '$412.00',
      frequency: 'month',
      nextPayment: 'Nov 12, 2024',
      method: 'CHASE •••• 8812',
      paidPercentage: 85
    }
  },
  {
    id: 'p2',
    policyNumber: 'POL-1102-X88',
    holderName: 'Marcus Thorne',
    holderAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    holderAge: 42,
    holderLocation: 'Chicago, IL',
    type: 'General Insurance',
    subType: 'General Motor',
    status: 'Expired',
    renewalDate: 'Expired 12 days ago'
  },
  {
    id: 'p3',
    policyNumber: 'POL-5541-Q20',
    holderName: 'Silverline Prop Corp',
    holderAvatar: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=256&h=256',
    holderAge: 0,
    holderLocation: 'New York, NY',
    type: 'General Insurance',
    subType: 'General Property',
    status: 'Active',
    renewalDate: '05 Jan 2025'
  }
];

export const MOCK_CLAIMS: Claim[] = [
  {
    id: 'c1',
    type: 'Motor - Collision',
    date: 'JAN 2024',
    status: 'Settled',
    amount: '$1,240.00'
  },
  {
    id: 'c2',
    type: 'Property - Water',
    date: 'AUG 2022',
    status: 'Closed',
    amount: '$8,500.00'
  }
];

export const DEMO_USERS: Record<UserRole, User> = {
  'Super Admin': {
    id: 'U-001',
    name: 'Alex Sterling',
    email: 'alex@assuranceledger.com',
    role: 'Super Admin',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100&h=100'
  },
  'Customer': {
    id: 'U-002',
    name: 'Eleanor Vance',
    email: 'eleanor.v@gmail.com',
    role: 'Customer',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  'Agent': {
    id: 'U-003',
    name: 'Michael Chen',
    email: 'm.chen@assuranceledger.com',
    role: 'Agent',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  'Employee': {
    id: 'U-004',
    name: 'Marcus Thorne',
    email: 'm.thorne@assuranceledger.com',
    role: 'Employee',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
};

export const MOCK_TARGETS: PerformanceTarget[] = [
  {
    id: 'T-001',
    userId: 'U-003',
    userName: 'Michael Chen',
    userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    userRole: 'Agent',
    category: 'Sales',
    current: 75000,
    target: 100000,
    unit: '$',
    period: 'Monthly'
  },
  {
    id: 'T-002',
    userId: 'U-004',
    userName: 'Marcus Thorne',
    userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    userRole: 'Employee',
    category: 'Underwriting',
    current: 45,
    target: 60,
    unit: 'Policies',
    period: 'Monthly'
  },
  {
    id: 'T-003',
    userId: 'U-005',
    userName: 'Sarah Jenkins',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    userRole: 'Agent',
    category: 'Leads',
    current: 120,
    target: 150,
    unit: 'Leads',
    period: 'Monthly'
  },
  {
    id: 'T-004',
    userId: 'U-006',
    userName: 'Elena Rodriguez',
    userAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    userRole: 'Agent',
    category: 'Retention',
    current: 92,
    target: 95,
    unit: '%',
    period: 'Quarterly'
  }
];

export const MOCK_TASKS: Task[] = [
  {
    id: 'TASK-001',
    title: 'Review Policy #POL-8829-001',
    description: "Verify medical records for Eleanor Vance's life insurance term extension.",
    category: 'Underwriting',
    status: 'To Do',
    priority: 'High',
    dueDate: '2024-04-15T14:00:00Z',
    assignedTo: { name: 'Marcus Thorne', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' }
  },
  {
    id: 'TASK-002',
    title: 'Verify Claim #CLM-4421-09',
    description: 'Assess vehicle damage photos for the auto insurance claim filed yesterday.',
    category: 'Claim Verification',
    status: 'In Progress',
    priority: 'Medium',
    dueDate: '2024-04-10T10:00:00Z',
    assignedTo: { name: 'Marcus Thorne', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' }
  },
  {
    id: 'TASK-003',
    title: 'Compliance Audit - Q1',
    description: 'Ensure all new policies meet the updated regulatory requirements for 2024.',
    category: 'Compliance',
    status: 'To Do',
    priority: 'Low',
    dueDate: '2024-04-20T17:00:00Z',
    assignedTo: { name: 'Marcus Thorne', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' }
  },
  {
    id: 'TASK-004',
    title: 'Customer Support Escalation',
    description: 'Resolve the dispute regarding the premium increase for policy #POL-1122.',
    category: 'Customer Support',
    status: 'Completed',
    priority: 'Medium',
    dueDate: '2024-04-01T12:00:00Z',
    assignedTo: { name: 'Marcus Thorne', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' }
  }
];
