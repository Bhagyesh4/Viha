import React, { useState } from 'react';
import { 
  LayoutDashboard, Users, ShieldCheck, ClipboardCheck, BadgeCheck, 
  CreditCard, RotateCw, FileText, DollarSign, Target, Plus, 
  HelpCircle, LogOut, Search, Bell, Settings, Menu, X, 
  TrendingUp, ArrowRight, UserPlus, BarChart3, PlusSquare, 
  ChevronRight, ChevronLeft, Filter, Download, MoreVertical, 
  AlertTriangle, CheckCircle2, Clock, Calendar, Mail, Phone, 
  MapPin, Briefcase, Building2, Sparkles, Bot, Verified, 
  Zap, Edit2, Trash2, Check, HeartPulse, Car, Home, Plane,
  Award, XCircle, Columns, Stethoscope, ChevronDown, Info,
  UserCheck, AtSign, Send, Paperclip, Timer, LayoutGrid, List,
  UserCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie
} from 'recharts';
import { cn } from './lib/utils';
import { 
  MOCK_STATS, 
  MOCK_AGENTS, 
  MOCK_EMPLOYEES, 
  MOCK_LEAVE_REQUESTS, 
  MOCK_POLICIES, 
  MOCK_CLAIMS,
  MOCK_LEADS,
  DEMO_USERS,
  MOCK_TARGETS,
  MOCK_TASKS
} from './mockData';
import { Policy, Lead, Employee, UserRole, User, PerformanceTarget, Task } from './types';

// --- Dashboard View ---
const DashboardView = ({ role, policies, leads, tasks, setActiveTab }: { role: UserRole, policies: Policy[], leads: Lead[], tasks: Task[], setActiveTab: (tab: string) => void }) => {
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);
  
  const handleGenerateReport = () => {
    setIsGeneratingReport(true);
    setTimeout(() => setIsGeneratingReport(false), 2000);
  };

  const activePolicies = policies.filter(p => p.status === 'Active').length;
  const pendingLeads = leads.filter(l => l.status === 'New Lead').length;
  const openTasks = tasks.filter(t => t.status !== 'Completed').length;
  const totalPremium = policies.reduce((acc, p) => {
    const amount = parseFloat(p.premium?.amount.replace('$', '').replace(',', '') || '0');
    return acc + amount;
  }, 0);

  const conversionData = [
    { name: 'Jan', value: 42 },
    { name: 'Feb', value: 58 },
    { name: 'Mar', value: 72 },
    { name: 'Apr', value: 51 },
    { name: 'May', value: 64 },
    { name: 'Jun', value: 88 },
  ];

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-3xl font-headline font-extrabold text-on-surface tracking-tight">
            {role === 'Customer' ? 'Welcome Back!' : 'Executive Dashboard'}
          </h2>
          <p className="text-on-surface-variant font-medium mt-1">
            {role === 'Customer' ? 'Manage your insurance portfolio and explore new offers.' : 'Global performance overview for Q3 2024'}
          </p>
        </div>
        {role !== 'Customer' && (
          <div className="flex gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none bg-surface-container-lowest text-on-surface px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:bg-surface-container-high transition-colors shadow-sm border border-outline-variant/10">
              <Calendar size={18} />
              Select Range
            </button>
            <button className="flex-1 md:flex-none bg-gradient-to-br from-primary to-primary-dim text-white px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 active:scale-95 transition-all">
              <Download size={18} />
              Full Export
            </button>
          </div>
        )}
      </div>

      {role === 'Customer' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl">
            <div className="relative z-10">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">Special Offer</span>
              <h3 className="text-2xl font-headline font-bold mb-2">Save 20% on Health Insurance</h3>
              <p className="text-blue-100 text-sm mb-6 max-w-xs">Upgrade your plan today and get comprehensive coverage for your entire family.</p>
              <button className="bg-white text-blue-800 px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-50 transition-colors">Learn More</button>
            </div>
            <Sparkles className="absolute -right-8 -bottom-8 w-48 h-48 text-white/10 rotate-12" />
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl">
            <div className="relative z-10">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">New Feature</span>
              <h3 className="text-2xl font-headline font-bold mb-2">Digital Document Vault</h3>
              <p className="text-slate-300 text-sm mb-6 max-w-xs">Securely store and access all your policy documents in one place.</p>
              <button className="bg-primary text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:opacity-90 transition-colors">Explore Vault</button>
            </div>
            <ShieldCheck className="absolute -right-8 -bottom-8 w-48 h-48 text-white/5 -rotate-12" />
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {(role === 'Customer' ? [
          { label: 'My Policies', value: activePolicies.toString(), change: 'Active', icon: ShieldCheck, color: 'text-blue-700', bg: 'bg-blue-100', progress: 100, barColor: 'bg-blue-600' },
          { label: 'Active Claims', value: '1', change: 'Pending', icon: AlertTriangle, color: 'text-amber-700', bg: 'bg-amber-100', progress: 30, barColor: 'bg-amber-600' },
          { label: 'Documents', value: '12', change: 'Verified', icon: FileText, color: 'text-emerald-700', bg: 'bg-emerald-100', progress: 100, barColor: 'bg-emerald-600' },
          { label: 'Next Renewal', value: 'May 12', change: '40 Days', icon: RotateCw, color: 'text-purple-700', bg: 'bg-purple-100', progress: 60, barColor: 'bg-purple-600' },
        ] : role === 'Agent' ? [
          { label: 'My Leads', value: leads.length.toString(), change: `+${pendingLeads} New`, icon: Users, color: 'text-blue-700', bg: 'bg-blue-100', progress: 65, barColor: 'bg-blue-600' },
          { label: 'My Policies', value: policies.length.toString(), change: '+12.4%', icon: ShieldCheck, color: 'text-purple-700', bg: 'bg-purple-100', progress: 82, barColor: 'bg-purple-600' },
          { label: 'Commission', value: '$12.4K', change: '+18.9%', icon: DollarSign, color: 'text-emerald-700', bg: 'bg-emerald-100', progress: 45, barColor: 'bg-emerald-600' },
          { label: 'Target Progress', value: '75%', change: 'Target: 90%', icon: Target, color: 'text-amber-700', bg: 'bg-amber-100', progress: 75, barColor: 'bg-amber-600' },
        ] : role === 'Employee' ? [
          { label: 'Assigned Leads', value: leads.length.toString(), change: `+${pendingLeads} New`, icon: Users, color: 'text-blue-700', bg: 'bg-blue-100', progress: 65, barColor: 'bg-blue-600' },
          { label: 'All Policies', value: policies.length.toLocaleString(), change: '+5.2%', icon: ShieldCheck, color: 'text-purple-700', bg: 'bg-purple-100', progress: 82, barColor: 'bg-purple-600' },
          { label: 'Tasks Pending', value: openTasks.toString(), change: 'Action Required', icon: ClipboardCheck, color: 'text-error', bg: 'bg-error/10', progress: 45, barColor: 'bg-error' },
          { label: 'Target Progress', value: '82%', change: 'Target: 85%', icon: Target, color: 'text-amber-700', bg: 'bg-amber-100', progress: 82, barColor: 'bg-amber-600' },
        ] : [
          { label: 'Total Leads', value: leads.length.toLocaleString(), change: '+12.4%', icon: Users, color: 'text-blue-700', bg: 'bg-blue-100', progress: 65, barColor: 'bg-blue-600' },
          { label: 'Active Policies', value: activePolicies.toLocaleString(), change: '+5.2%', icon: ShieldCheck, color: 'text-purple-700', bg: 'bg-purple-100', progress: 82, barColor: 'bg-purple-600' },
          { label: 'Total Revenue', value: `$${(totalPremium / 1000000).toFixed(1)}M`, change: '+18.9%', icon: CreditCard, color: 'text-emerald-700', bg: 'bg-emerald-100', progress: 45, barColor: 'bg-emerald-600' },
          { label: 'Agent Performance', value: '86.4%', change: 'Target: 90%', icon: TrendingUp, color: 'text-amber-700', bg: 'bg-amber-100', progress: 86, barColor: 'bg-amber-600' },
        ]).map((stat, i) => (
          <div key={i} className="bg-surface-container-low p-6 rounded-3xl flex flex-col justify-between group hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 border border-outline-variant/5">
            <div className="flex justify-between items-start mb-4">
              <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", stat.bg, stat.color)}>
                <stat.icon size={24} />
              </div>
              <span className={cn("font-bold text-xs flex items-center px-2 py-1 rounded-lg", i === 3 ? "bg-surface-container-high text-on-surface-variant" : "bg-tertiary-container/30 text-tertiary")}>
                {stat.change} {i !== 3 && <TrendingUp size={12} className="ml-1" />}
              </span>
            </div>
            <div>
              <p className="text-on-surface-variant text-sm font-medium">{stat.label}</p>
              <h3 className="text-2xl font-bold font-headline mt-1">{stat.value}</h3>
              <div className="w-full bg-slate-200 h-1.5 mt-4 rounded-full overflow-hidden">
                <div className={cn("h-full rounded-full", stat.barColor)} style={{ width: `${stat.progress}%` }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 bg-surface-container-low rounded-3xl p-6 lg:p-8 flex flex-col h-[450px] border border-outline-variant/5">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h4 className="font-headline font-bold text-xl">Lead Conversion Rate</h4>
              <p className="text-sm text-on-surface-variant">Monthly conversion analytics across all funnels</p>
            </div>
            <select className="bg-white border border-outline-variant/20 rounded-lg text-sm font-semibold shadow-sm focus:ring-2 focus:ring-blue-500/20 px-3 py-1.5 outline-none">
              <option>Last 6 Months</option>
              <option>Last Year</option>
            </select>
          </div>
          <div className="flex-1 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={conversionData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }} dy={10} />
                <Tooltip 
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                  {conversionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 2 ? '#2b5bb5' : '#d9e2ff'} className="hover:fill-primary transition-colors duration-300" />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="lg:col-span-4 bg-surface-container-low rounded-3xl p-6 lg:p-8 flex flex-col h-[450px] border border-outline-variant/5">
          <h4 className="font-headline font-bold text-xl mb-1">Policy Distribution</h4>
          <p className="text-sm text-on-surface-variant mb-10">Portfolio split by category</p>
          <div className="flex-1 flex items-center justify-center relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={[
                    { name: 'General', value: 68, fill: '#2b5bb5' },
                    { name: 'Life', value: 32, fill: '#e2e8f0' },
                  ]}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  <Cell key="cell-0" fill="#2b5bb5" />
                  <Cell key="cell-1" fill="#e2e8f0" />
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center">
                <p className="text-2xl font-bold font-headline">68%</p>
                <p className="text-[10px] font-bold text-slate-500 uppercase">General</p>
              </div>
            </div>
          </div>
          <div className="mt-8 space-y-3">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="font-medium">General Insurance</span>
              </div>
              <span className="font-bold">8,800</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                <span className="font-medium text-on-surface-variant">Life Insurance</span>
              </div>
              <span className="font-bold">4,140</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm border border-outline-variant/5">
          <div className="flex justify-between items-center mb-6">
            <h4 className="font-headline font-bold text-xl">Tasks Status</h4>
            <span className="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_8px_rgba(0,107,95,0.6)]"></span>
          </div>
          <div className="space-y-6">
            {[
              { label: 'Underwriting Reviews', value: 85, color: 'bg-blue-600' },
              { label: 'Claim Verifications', value: 32, color: 'bg-amber-500' },
              { label: 'Policy Renewals', value: 94, color: 'bg-emerald-500' },
            ].map((task, i) => (
              <div key={i}>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="uppercase tracking-widest text-slate-500">{task.label}</span>
                  <span>{task.value}%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className={cn("h-full rounded-full", task.color)} style={{ width: `${task.value}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <button 
            onClick={() => setActiveTab('Tasks')}
            className="w-full mt-8 py-3 rounded-xl bg-surface-container-low text-primary font-bold text-sm hover:bg-primary-container transition-colors"
          >
            View All Operations
          </button>
        </div>

        <div className="lg:col-span-2 bg-gradient-to-br from-blue-900 to-slate-900 rounded-3xl p-8 text-white relative overflow-hidden group">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-400/30 transition-all duration-700"></div>
          <div className="relative z-10 flex flex-col h-full">
            <h4 className="font-headline font-extrabold text-2xl mb-2">Global Operations</h4>
            <p className="text-blue-200/80 mb-8 max-w-md">Execute core system actions across the enterprise platform from this central hub.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-auto">
              {[
                { label: 'Create New Lead', icon: UserPlus, color: 'bg-blue-500/20', iconColor: 'text-blue-400', tab: 'CRM Leads' },
                { label: 'Generate Report', icon: BarChart3, color: 'bg-purple-500/20', iconColor: 'text-purple-400', action: handleGenerateReport },
                { label: 'Add Task', icon: PlusSquare, color: 'bg-emerald-500/20', iconColor: 'text-emerald-400', tab: 'Tasks' },
              ].map((action, i) => (
                <button 
                  key={i} 
                  onClick={() => action.tab ? setActiveTab(action.tab) : action.action?.()}
                  className={cn(
                    "flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-[1.02]",
                    isGeneratingReport && action.label === 'Generate Report' && "animate-pulse bg-white/20"
                  )}
                >
                  <div className={cn("w-12 h-12 rounded-full flex items-center justify-center", action.color, action.iconColor)}>
                    {isGeneratingReport && action.label === 'Generate Report' ? <RotateCw className="animate-spin" size={24} /> : <action.icon size={24} />}
                  </div>
                  <span className="font-semibold text-sm">
                    {isGeneratingReport && action.label === 'Generate Report' ? 'Generating...' : action.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-surface-container-low rounded-3xl p-6 lg:p-8 border border-outline-variant/5">
        <div className="flex justify-between items-center mb-8">
          <h4 className="font-headline font-bold text-xl">Top Performing Agents</h4>
          <button 
            onClick={() => setActiveTab('Payroll')}
            className="text-primary font-bold text-sm flex items-center gap-1 group"
          >
            View Rankings <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_AGENTS.map((agent, i) => (
            <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <img src={agent.avatar} alt={agent.name} className="w-12 h-12 rounded-xl object-cover" />
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm truncate">{agent.name}</p>
                <p className="text-[10px] text-slate-500 font-medium uppercase tracking-widest truncate">{agent.role}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-emerald-600 font-extrabold text-sm">{agent.revenue}</p>
                <p className="text-[10px] text-slate-400 font-bold">This Month</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Payroll & HRMS View ---
const PayrollView = ({ employees }: { employees: Employee[] }) => {
  const [payrollStatus, setPayrollStatus] = useState<'Idle' | 'Processing' | 'Completed'>('Idle');
  const [leaveRequests, setLeaveRequests] = useState(MOCK_LEAVE_REQUESTS);

  const handleProcessPayroll = () => {
    setPayrollStatus('Processing');
    setTimeout(() => {
      setPayrollStatus('Completed');
      setTimeout(() => setPayrollStatus('Idle'), 3000);
    }, 2000);
  };

  const handleLeaveAction = (id: string, action: 'Approved' | 'Rejected') => {
    setLeaveRequests(prev => prev.filter(req => req.id !== id));
    // In a real app, we'd update the status, but here we'll just remove it for "processing" feel
  };

  const salaryData = [
    { name: 'Jan', base: 60, bonus: 20 },
    { name: 'Feb', base: 55, bonus: 25 },
    { name: 'Mar', base: 65, bonus: 30 },
    { name: 'Apr', base: 62, bonus: 35 },
    { name: 'May', base: 70, bonus: 28 },
    { name: 'Jun', base: 75, bonus: 40 },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-3xl font-headline font-extrabold tracking-tight text-on-surface">Payroll & Workforce</h2>
          <p className="text-on-surface-variant mt-1">Centralized HR management and commission tracking.</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none px-5 py-2.5 bg-surface-container-lowest text-primary border border-outline-variant/15 font-bold rounded-xl shadow-sm hover:bg-surface-container-low transition-all">Export Report</button>
          <button 
            onClick={handleProcessPayroll}
            disabled={payrollStatus !== 'Idle'}
            className={cn(
              "flex-1 md:flex-none px-5 py-2.5 font-bold rounded-xl shadow-lg active:scale-95 transition-all",
              payrollStatus === 'Idle' ? "bg-gradient-to-br from-primary to-primary-dim text-white" :
              payrollStatus === 'Processing' ? "bg-amber-500 text-white animate-pulse" :
              "bg-emerald-500 text-white"
            )}
          >
            {payrollStatus === 'Idle' ? 'Process Payroll' : 
             payrollStatus === 'Processing' ? 'Processing...' : 'Payroll Processed!'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-3xl p-6 lg:p-8 relative overflow-hidden group border border-outline-variant/5">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
            <CreditCard size={120} />
          </div>
          <div className="relative z-10">
            <h3 className="text-lg font-bold text-on-surface mb-8 flex items-center gap-2">
              <span className="w-2 h-6 bg-primary rounded-full"></span>
              Payroll Cycle: June 2024
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">Total Disbursements</p>
                <p className="text-3xl font-extrabold text-on-surface">$412,850.00</p>
                <div className="mt-2 flex items-center gap-1 text-tertiary text-xs font-bold">
                  <TrendingUp size={14} />
                  <span>+4.2% vs last month</span>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">Agent Commissions</p>
                <p className="text-3xl font-extrabold text-on-surface">$89,400.00</p>
                <p className="text-[10px] text-on-surface-variant mt-1 italic">Based on 1,420 closed policies</p>
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">Tax & Deductions</p>
                <p className="text-3xl font-extrabold text-on-surface">$54,210.00</p>
                <div className="mt-3 w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-primary w-2/3 h-full rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 bg-surface-container-highest rounded-3xl p-6 lg:p-8 border border-outline-variant/5">
          <h3 className="text-lg font-bold text-on-surface mb-6">Attendance Pulse</h3>
          <div className="space-y-4">
            {[
              { label: 'On-Site Today', count: '142 Employees', color: 'bg-tertiary', glow: 'shadow-[0_0_8px_rgba(0,107,95,0.4)]' },
              { label: 'Remote/WFH', count: '58 Employees', color: 'bg-primary', glow: 'shadow-[0_0_8px_rgba(43,91,181,0.4)]' },
              { label: 'On Leave', count: '12 Employees', color: 'bg-error', glow: 'shadow-[0_0_8px_rgba(159,64,61,0.4)]' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-2xl shadow-sm">
                <div className="flex items-center gap-3">
                  <div className={cn("w-3 h-3 rounded-full", item.color, item.glow)}></div>
                  <span className="text-sm font-semibold">{item.label}</span>
                </div>
                <span className="text-sm font-bold">{item.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-on-surface">Employee Directory</h3>
            <div className="flex gap-2">
              <button className="p-2 bg-surface-container-high rounded-lg hover:bg-slate-200 transition-colors"><Filter size={16} /></button>
              <button className="p-2 bg-surface-container-high rounded-lg hover:bg-slate-200 transition-colors"><Columns size={16} /></button>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm border border-outline-variant/10">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-surface-container-low border-b border-outline-variant/10">
                    <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Employee</th>
                    <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Role</th>
                    <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Salary/Comm.</th>
                    <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {employees.map((emp) => (
                    <tr key={emp.id} className="hover:bg-surface-container-low transition-colors group">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <img src={emp.avatar} alt={emp.name} className="w-10 h-10 rounded-full object-cover" />
                          <div>
                            <p className="text-sm font-bold">{emp.name}</p>
                            <p className="text-[10px] text-on-surface-variant font-medium">{emp.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <span className={cn(
                          "px-2.5 py-1 text-[10px] font-bold rounded-full uppercase",
                          emp.role === 'Lead Agent' ? "bg-secondary-container text-on-secondary-container" :
                          emp.role === 'Underwriter' ? "bg-primary-container text-on-primary-container" :
                          "bg-slate-200 text-slate-600"
                        )}>
                          {emp.role}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-1.5">
                          <span className={cn("w-2 h-2 rounded-full", emp.status === 'Active' ? "bg-tertiary" : "bg-error")}></span>
                          <span className={cn("text-xs font-semibold", emp.status === 'Active' ? "text-tertiary" : "text-error")}>{emp.status}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <p className="text-sm font-bold">{emp.salary}</p>
                        <p className={cn("text-[10px] font-medium", emp.commission.includes('+') ? "text-tertiary" : "text-on-surface-variant")}>{emp.commission}</p>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <button className="text-on-surface-variant hover:text-primary transition-colors">
                          <MoreVertical size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-3xl p-6 shadow-xl relative overflow-hidden group">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
            <div className="flex items-start justify-between relative z-10">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-blue-300 mb-4">Top Agent of Month</p>
                <img src={MOCK_AGENTS[0].avatar} alt="Top Performer" className="w-16 h-16 rounded-2xl object-cover mb-3 border-2 border-white/20" />
                <h4 className="text-lg font-bold">Sarah Jenkins</h4>
                <p className="text-xs text-blue-200">Commission Earned: <span className="text-white font-bold">$12,450.00</span></p>
              </div>
              <div className="bg-white/10 p-2 rounded-xl backdrop-blur-md border border-white/10">
                <Award size={20} className="text-blue-300" />
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10 flex justify-between relative z-10">
              <div className="text-center">
                <p className="text-[10px] text-blue-200 uppercase font-bold">Policies</p>
                <p className="text-lg font-bold">142</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] text-blue-200 uppercase font-bold">Retention</p>
                <p className="text-lg font-bold">98%</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] text-blue-200 uppercase font-bold">Rank</p>
                <p className="text-lg font-bold">#1</p>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-low rounded-3xl p-6 border border-outline-variant/5">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm font-bold text-on-surface">Leave Requests</h3>
              <span className="px-2 py-0.5 bg-error/10 text-error text-[10px] font-bold rounded-full">{leaveRequests.length} Pending</span>
            </div>
            <div className="space-y-4">
              {leaveRequests.map((req) => (
                <div key={req.id} className="flex items-center gap-3 p-3 bg-white rounded-2xl group hover:ring-1 ring-primary/20 transition-all cursor-pointer shadow-sm">
                  <img src={req.employeeAvatar} alt={req.employeeName} className="w-10 h-10 rounded-full object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold truncate">{req.employeeName}</p>
                    <p className="text-[10px] text-on-surface-variant truncate">{req.type} • {req.duration}</p>
                  </div>
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => handleLeaveAction(req.id, 'Approved')}
                      className="p-1.5 hover:text-tertiary bg-tertiary/5 rounded-lg transition-colors"
                    >
                      <CheckCircle2 size={16} />
                    </button>
                    <button 
                      onClick={() => handleLeaveAction(req.id, 'Rejected')}
                      className="p-1.5 hover:text-error bg-error/5 rounded-lg transition-colors"
                    >
                      <XCircle size={16} />
                    </button>
                  </div>
                </div>
              ))}
              {leaveRequests.length === 0 && (
                <p className="text-center text-xs text-slate-400 py-4">No pending requests</p>
              )}
              <button className="w-full py-2 text-[10px] font-bold text-primary uppercase tracking-widest hover:bg-primary/5 rounded-xl transition-colors mt-2">View All Requests</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-surface-container-low rounded-3xl p-6 lg:p-8 border border-outline-variant/5">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div>
            <h3 className="text-xl font-bold">Salary Structure Evolution</h3>
            <p className="text-sm text-on-surface-variant">Comparative analysis of base pay vs commission distribution.</p>
          </div>
          <div className="flex bg-surface-container-lowest p-1 rounded-xl shadow-sm border border-outline-variant/10">
            <button className="px-4 py-1.5 text-xs font-bold bg-primary text-white rounded-lg transition-all">Quarterly</button>
            <button className="px-4 py-1.5 text-xs font-medium text-on-surface-variant hover:text-on-surface transition-colors">Yearly</button>
          </div>
        </div>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={salaryData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }} dy={10} />
              <Tooltip 
                cursor={{ fill: 'transparent' }}
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
              />
              <Bar dataKey="base" stackId="a" fill="#d9e2ff" radius={[0, 0, 0, 0]} />
              <Bar dataKey="bonus" stackId="a" fill="#2b5bb5" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-8 flex gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary-container rounded-sm"></div>
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Base Salaries</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary rounded-sm"></div>
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Incentive Payouts</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Policy Management View ---
const PolicyView = ({ role, currentUser, policies, setPolicies, searchQuery: globalSearchQuery }: { role: UserRole, currentUser: User, policies: Policy[], setPolicies: React.Dispatch<React.SetStateAction<Policy[]>>, searchQuery: string }) => {
  const [selectedPolicy, setSelectedPolicy] = useState<Policy>(policies[0] || MOCK_POLICIES[0]);
  const [localSearchQuery, setLocalSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<string>('All');
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [showFilters, setShowFilters] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newPolicy, setNewPolicy] = useState<Partial<Policy>>({
    status: 'Active',
    type: 'Life Insurance',
    issueDate: new Date().toISOString().split('T')[0],
    renewalDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    premium: { amount: '$0', frequency: 'Monthly', nextPayment: '2024-05-01', method: 'Auto-pay', paidPercentage: 0 }
  });

  const effectiveSearchQuery = globalSearchQuery || localSearchQuery;

  const filteredPolicies = policies.filter(policy => {
    // Role-based filtering first
    if (role === 'Customer' && policy.holderName !== currentUser.name) return false;
    
    // Search query (Name or Policy Number)
    const matchesSearch = policy.holderName.toLowerCase().includes(effectiveSearchQuery.toLowerCase()) ||
                         policy.policyNumber.toLowerCase().includes(effectiveSearchQuery.toLowerCase());
    if (!matchesSearch) return false;

    // Policy Type filter
    if (filterType !== 'All' && policy.type !== filterType) return false;

    // Status filter
    if (filterStatus !== 'All' && policy.status !== filterStatus) return false;

    // Date Range filter
    if (startDate || endDate) {
      const policyDate = new Date(policy.renewalDate);
      if (isNaN(policyDate.getTime())) {
        // Handle cases like "Expired 12 days ago" - maybe just skip or treat as past
        if (policy.renewalDate.toLowerCase().includes('expired')) {
          // If expired, we can treat it as a very old date or current date minus days
          // For simplicity, let's just check if it matches the range if we can parse it
        }
      } else {
        if (startDate && policyDate < new Date(startDate)) return false;
        if (endDate && policyDate > new Date(endDate)) return false;
      }
    }

    return true;
  });

  const handleAddPolicy = () => {
    if (!newPolicy.holderName || !newPolicy.policyNumber) return;
    const policy: Policy = {
      ...newPolicy as Policy,
      id: `POL-${Date.now()}`,
      holderAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      holderAge: 30,
      holderLocation: 'New York, USA'
    };
    setPolicies([policy, ...policies]);
    setIsAddModalOpen(false);
    setNewPolicy({
      status: 'Active',
      type: 'Life Insurance',
      issueDate: new Date().toISOString().split('T')[0],
      renewalDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      premium: { amount: '$0', frequency: 'Monthly', nextPayment: '2024-05-01', method: 'Auto-pay', paidPercentage: 0 }
    });
  };

  const resetFilters = () => {
    setLocalSearchQuery('');
    setFilterType('All');
    setFilterStatus('All');
    setStartDate('');
    setEndDate('');
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-headline font-extrabold tracking-tight text-on-surface">Policy Management</h2>
          <p className="text-on-surface-variant font-body">Manage and monitor institutional risk portfolios.</p>
        </div>
        <div className="flex items-center gap-1 p-1 bg-surface-container-low rounded-2xl border border-outline-variant/10">
          <button className="px-6 py-2 rounded-xl bg-surface-container-lowest shadow-sm text-sm font-bold text-primary">Overview</button>
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="px-6 py-2 rounded-xl bg-primary text-white shadow-lg shadow-primary/20 text-sm font-bold flex items-center gap-2"
          >
            <Plus size={16} /> Add Policy
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6">
          <div className="bg-surface-container-low rounded-3xl overflow-hidden flex flex-col border border-outline-variant/5 shadow-sm">
            <div className="p-5 bg-surface-container shadow-sm flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant opacity-70">Directory</h3>
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className={cn(
                    "flex items-center gap-1 text-xs font-bold transition-colors",
                    showFilters ? "text-primary" : "text-slate-500 hover:text-primary"
                  )}
                >
                  <Filter size={14} /> {showFilters ? 'Hide Filters' : 'Advanced Filters'}
                </button>
              </div>
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Search by name or policy #..."
                  value={effectiveSearchQuery}
                  onChange={(e) => setLocalSearchQuery(e.target.value)}
                  className="w-full bg-white border-none rounded-xl py-2.5 pl-10 pr-4 text-xs focus:ring-2 focus:ring-primary/20 shadow-sm outline-none"
                />
              </div>

              {showFilters && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="flex flex-col gap-4 overflow-hidden pt-2"
                >
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Policy Type</label>
                      <select 
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                        className="bg-white border-none rounded-xl text-xs font-bold py-2.5 px-3 focus:ring-2 focus:ring-primary/20 shadow-sm outline-none appearance-none"
                      >
                        <option value="All">All Types</option>
                        <option value="Life Insurance">Life Insurance</option>
                        <option value="General Insurance">General Insurance</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Status</label>
                      <select 
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="bg-white border-none rounded-xl text-xs font-bold py-2.5 px-3 focus:ring-2 focus:ring-primary/20 shadow-sm outline-none appearance-none"
                      >
                        <option value="All">All Status</option>
                        <option value="Active">Active</option>
                        <option value="Expired">Expired</option>
                        <option value="Pending">Pending</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Renewal Date Range</label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                        <input 
                          type="date" 
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                          className="w-full bg-white border-none rounded-xl py-2.5 pl-9 pr-2 text-[10px] font-bold focus:ring-2 focus:ring-primary/20 shadow-sm outline-none"
                        />
                      </div>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                        <input 
                          type="date" 
                          value={endDate}
                          onChange={(e) => setEndDate(e.target.value)}
                          className="w-full bg-white border-none rounded-xl py-2.5 pl-9 pr-2 text-[10px] font-bold focus:ring-2 focus:ring-primary/20 shadow-sm outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={resetFilters}
                    className="text-[10px] font-bold text-slate-400 hover:text-error transition-colors text-right mt-1"
                  >
                    Reset All Filters
                  </button>
                </motion.div>
              )}
            </div>
            
            <div className="overflow-y-auto custom-scrollbar max-h-[600px] divide-y divide-outline-variant/5">
              {filteredPolicies.length > 0 ? (
                filteredPolicies.map((policy) => (
                  <div 
                    key={policy.id}
                    onClick={() => setSelectedPolicy(policy)}
                    className={cn(
                      "p-5 cursor-pointer transition-all border-l-4",
                      selectedPolicy.id === policy.id 
                        ? "bg-white border-l-primary shadow-sm" 
                        : "bg-transparent border-l-transparent hover:bg-surface-container-high"
                    )}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          "w-10 h-10 rounded-xl flex items-center justify-center",
                          policy.status === 'Active' ? "bg-blue-100 text-primary" : "bg-surface-container-highest text-on-surface-variant"
                        )}>
                          {policy.subType.includes('Life') ? <Users size={20} /> : policy.subType.includes('Motor') ? <Car size={20} /> : <Building2 size={20} />}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-on-surface">{policy.holderName}</h4>
                          <p className="text-[10px] font-bold text-on-surface-variant tracking-wider uppercase">{policy.policyNumber}</p>
                        </div>
                      </div>
                      <div className={cn(
                        "flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase",
                        policy.status === 'Active' ? "bg-tertiary/10 text-tertiary" : "bg-error/10 text-error"
                      )}>
                        <div className={cn("w-1.5 h-1.5 rounded-full", policy.status === 'Active' ? "bg-tertiary shadow-[0_0_4px_rgba(0,107,95,0.6)]" : "bg-error")}></div>
                        {policy.status}
                      </div>
                    </div>
                    <div className="flex justify-between text-[11px] text-on-surface-variant">
                      <span className="font-medium">{policy.subType}</span>
                      <span className={cn("font-bold", policy.status === 'Expired' ? "text-error" : "text-on-surface")}>
                        {policy.renewalDate.includes('Expired') ? policy.renewalDate : `Renews: ${policy.renewalDate}`}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-10 text-center text-slate-400 font-medium text-sm">
                  No policies found matching your search.
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-8">
          <div className="bg-white rounded-3xl p-6 lg:p-10 shadow-[0_20px_40px_rgba(41,52,58,0.06)] relative overflow-hidden border border-outline-variant/10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-surface-container-low border border-outline-variant/20 p-1 shrink-0">
                    <img src={selectedPolicy.holderAvatar} alt={selectedPolicy.holderName} className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h2 className="text-2xl font-headline font-bold text-on-surface truncate">{selectedPolicy.holderName}</h2>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-extrabold uppercase tracking-widest rounded-full whitespace-nowrap">Primary Policyholder</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-on-surface-variant font-medium">
                      <span className="flex items-center gap-1.5"><Calendar size={16} /> {selectedPolicy.holderAge} Years Old</span>
                      <span className="flex items-center gap-1.5"><MapPin size={16} /> {selectedPolicy.holderLocation}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                  <button className="flex-1 md:flex-none bg-surface-container-high text-on-surface px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-surface-container-highest transition-colors">Edit Profile</button>
                  <button className="flex-1 md:flex-none bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all flex items-center justify-center gap-2">
                    Actions <ChevronDown size={16} />
                  </button>
                </div>
              </div>

              <div className="border-b border-outline-variant/10 mb-10 flex gap-8 overflow-x-auto custom-scrollbar pb-1">
                <button className="pb-4 text-sm font-bold text-primary border-b-2 border-primary whitespace-nowrap">Life Insurance</button>
                <button className="pb-4 text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap">General Insurance</button>
                <button className="pb-4 text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap">Document Ledger</button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex flex-col gap-10">
                  <div>
                    <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-6 opacity-60">Policy Summary</h4>
                    <div className="grid grid-cols-2 gap-y-8">
                      <div>
                        <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter mb-1">Term Length</p>
                        <p className="text-sm font-bold text-on-surface">{selectedPolicy.termLength || 'N/A'}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter mb-1">Face Amount</p>
                        <p className="text-sm font-bold text-on-surface">{selectedPolicy.faceAmount || 'N/A'}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter mb-1">Current Cash Value</p>
                        <p className="text-sm font-bold text-primary">{selectedPolicy.cashValue || 'N/A'}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter mb-1">Issue Date</p>
                        <p className="text-sm font-bold text-on-surface">{selectedPolicy.issueDate || 'N/A'}</p>
                      </div>
                    </div>
                  </div>
                  
                  {selectedPolicy.beneficiary && (
                    <div>
                      <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4 opacity-60">Beneficiary Information</h4>
                      <div className="bg-surface-container-low p-4 rounded-2xl flex items-center gap-4 border border-outline-variant/5">
                        <img src={selectedPolicy.beneficiary.avatar} alt={selectedPolicy.beneficiary.name} className="w-12 h-12 rounded-xl object-cover border border-outline-variant/20" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold text-on-surface truncate">{selectedPolicy.beneficiary.name}</p>
                          <p className="text-xs text-on-surface-variant truncate">{selectedPolicy.beneficiary.relationship} • {selectedPolicy.beneficiary.share}</p>
                        </div>
                        <button className="p-2 text-on-surface-variant hover:text-primary transition-colors"><Info size={20} /></button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-10">
                  {selectedPolicy.premium && (
                    <div className="bg-surface-container p-6 lg:p-8 rounded-3xl border border-primary/10 shadow-sm">
                      <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4 opacity-60">Premium Schedule</h4>
                      <div className="flex items-baseline gap-2 mb-6">
                        <span className="text-4xl font-headline font-extrabold text-on-surface">{selectedPolicy.premium.amount}</span>
                        <span className="text-on-surface-variant text-sm font-medium">/ {selectedPolicy.premium.frequency}</span>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-on-surface-variant font-medium">Next Payment</span>
                          <span className="font-bold text-on-surface">{selectedPolicy.premium.nextPayment}</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-on-surface-variant font-medium">Payment Method</span>
                          <span className="font-bold text-on-surface">{selectedPolicy.premium.method}</span>
                        </div>
                        <div className="pt-2">
                          <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-full rounded-full" style={{ width: `${selectedPolicy.premium.paidPercentage}%` }}></div>
                          </div>
                          <p className="text-[10px] text-on-surface-variant text-right italic font-bold mt-2">{selectedPolicy.premium.paidPercentage}% of current year premiums paid</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between p-5 bg-tertiary-container/20 rounded-2xl border border-tertiary/10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-tertiary flex items-center justify-center text-white shadow-lg shadow-tertiary/20">
                        <Verified size={24} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-tertiary">Portfolio Health</p>
                        <p className="text-xs text-tertiary-dim font-medium">Excellent • Low Risk Tier</p>
                      </div>
                    </div>
                    <span className="text-2xl font-headline font-extrabold text-tertiary">98.4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <div className="bg-surface-container-low rounded-3xl p-6 lg:p-8 border border-outline-variant/5">
              <div className="flex items-center justify-between mb-8">
                <h4 className="text-sm font-bold text-on-surface uppercase tracking-widest">Recent Claim History</h4>
                <button className="text-xs font-bold text-primary hover:underline">View Full History</button>
              </div>
              <div className="space-y-4">
                {MOCK_CLAIMS.map((claim) => (
                  <div key={claim.id} className="p-4 bg-white rounded-2xl flex items-center gap-4 shadow-sm border border-outline-variant/5 group hover:shadow-md transition-shadow">
                    <div className={cn(
                      "w-12 h-12 rounded-2xl flex items-center justify-center transition-colors",
                      claim.status === 'Settled' ? "bg-emerald-100 text-emerald-600" : "bg-slate-100 text-slate-400"
                    )}>
                      {claim.type.includes('Motor') ? <Car size={24} /> : <Home size={24} />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <p className="text-sm font-bold text-on-surface truncate">{claim.type}</p>
                        <span className="text-[10px] font-bold text-on-surface-variant whitespace-nowrap">{claim.date}</span>
                      </div>
                      <p className="text-[10px] text-on-surface-variant font-medium">
                        Status: <span className={cn("font-bold", claim.status === 'Settled' ? "text-tertiary" : "text-on-surface")}>{claim.status}</span> • {claim.amount}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface-container-low rounded-3xl p-6 lg:p-8 border border-outline-variant/5">
              <h4 className="text-sm font-bold text-on-surface uppercase tracking-widest mb-8">General Coverage Matrix</h4>
              <div className="space-y-8">
                {[
                  { label: 'Health Coverage', status: 'Comprehensive', progress: 92, icon: HeartPulse, color: 'text-primary', barColor: 'bg-primary' },
                  { label: 'Motor Policy', status: 'Renewal Tracking', progress: 45, icon: Car, color: 'text-on-surface-variant', barColor: 'bg-outline-variant' },
                  { label: 'Travel Liability', status: 'Inactivate', progress: 0, icon: Plane, color: 'text-error', barColor: 'bg-error' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs font-bold text-on-surface mb-3">
                      <span className="flex items-center gap-2">
                        <item.icon size={16} className={item.color} />
                        {item.label}
                      </span>
                      <span className={cn(item.status === 'Inactivate' ? "text-error" : item.status === 'Comprehensive' ? "text-tertiary" : "text-on-surface-variant")}>
                        {item.status}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
                      <div className={cn("h-full rounded-full transition-all duration-1000", item.barColor)} style={{ width: `${item.progress}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- CRM Leads View ---
const CRMLeadsView = ({ role, currentUser, leads, setLeads, searchQuery }: { role: UserRole, currentUser: User, leads: Lead[], setLeads: React.Dispatch<React.SetStateAction<Lead[]>>, searchQuery: string }) => {
  const [selectedLead, setSelectedLead] = useState<Lead>(leads[0] || MOCK_LEADS[0]);
  const [showDetailsOnMobile, setShowDetailsOnMobile] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [newLead, setNewLead] = useState<Partial<Lead>>({
    status: 'New Lead',
    type: 'Life Insurance',
    source: 'Manual Entry',
    campaign: 'Direct Outreach',
    adSet: 'Sales Team',
    formData: 'Manually added by agent',
    assignedTo: role === 'Agent' ? { name: currentUser.name, role: 'Agent', avatar: currentUser.avatar } : MOCK_AGENTS[0],
    timeAgo: 'Just now'
  });

  const handleAddLead = () => {
    if (!newLead.name || !newLead.email) return;
    const lead: Lead = {
      ...newLead as Lead,
      id: `LEAD-${Date.now()}`,
      phone: newLead.phone || '+1 (555) 000-0000',
      location: 'New York, USA',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      policyholder: {
        name: newLead.name,
        age: 30,
        location: 'New York, USA',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      }
    };
    setLeads([lead, ...leads]);
    setIsAddModalOpen(false);
    setNewLead({
      status: 'New Lead',
      type: 'Life Insurance',
      source: 'Manual Entry',
      campaign: 'Direct Outreach',
      adSet: 'Sales Team',
      formData: 'Manually added by agent',
      assignedTo: role === 'Agent' ? { name: currentUser.name, role: 'Agent', avatar: currentUser.avatar } : MOCK_AGENTS[0],
      timeAgo: 'Just now'
    });
  };

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         lead.email.toLowerCase().includes(searchQuery.toLowerCase());
    if (!matchesSearch) return false;

    if (role === 'Super Admin') return true;
    if (role === 'Agent' || role === 'Employee') {
      return lead.assignedTo.name === currentUser.name;
    }
    return false;
  });

  const handleAddLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAddLead();
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-headline font-extrabold tracking-tight text-on-surface">CRM Lead Pipeline</h2>
          <p className="text-on-surface-variant font-body">Track and manage incoming insurance inquiries.</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="bg-primary text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all flex items-center gap-2"
          >
            <Plus size={18} /> ADD LEAD
          </button>
          <div className="flex items-center gap-1 p-1 bg-surface-container-low rounded-2xl border border-outline-variant/10">
            <button className="px-6 py-2 rounded-xl bg-surface-container-lowest shadow-sm text-sm font-bold text-primary">Active Leads</button>
            <button className="px-6 py-2 rounded-xl text-sm font-medium text-on-surface-variant hover:bg-surface-container-high transition-colors">Archived</button>
          </div>
        </div>
      </div>

      {/* Add Lead Modal */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-[32px] w-full max-w-2xl overflow-hidden shadow-2xl border border-outline-variant/10"
            >
              <div className="bg-slate-900 px-8 py-6 text-white flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-headline font-bold">Add New Lead</h3>
                  <p className="text-slate-400 text-xs mt-1 font-medium">Enter lead details manually into the pipeline.</p>
                </div>
                <button 
                  onClick={() => setIsAddModalOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. John Smith"
                      value={newLead.name || ''}
                      onChange={(e) => setNewLead({...newLead, name: e.target.value})}
                      className="w-full bg-slate-50 border-none rounded-2xl py-3.5 px-5 text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      value={newLead.email || ''}
                      onChange={(e) => setNewLead({...newLead, email: e.target.value})}
                      className="w-full bg-slate-50 border-none rounded-2xl py-3.5 px-5 text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Insurance Type</label>
                    <select 
                      value={newLead.type}
                      onChange={(e) => setNewLead({...newLead, type: e.target.value})}
                      className="w-full bg-slate-50 border-none rounded-2xl py-3.5 px-5 text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none appearance-none"
                    >
                      <option>Life Insurance</option>
                      <option>General Insurance</option>
                      <option>Motor Insurance</option>
                      <option>Health Insurance</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Assign To Agent</label>
                    <select 
                      value={newLead.assignedTo?.name}
                      onChange={(e) => {
                        const agent = MOCK_AGENTS.find(a => a.name === e.target.value);
                        if (agent) setNewLead({...newLead, assignedTo: agent});
                      }}
                      className="w-full bg-slate-50 border-none rounded-2xl py-3.5 px-5 text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none appearance-none"
                    >
                      {MOCK_AGENTS.map(agent => (
                        <option key={agent.name}>{agent.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="pt-4 flex gap-3">
                  <button 
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="flex-1 bg-slate-100 text-slate-600 py-4 rounded-2xl text-sm font-bold hover:bg-slate-200 transition-colors"
                  >
                    CANCEL
                  </button>
                  <button 
                    onClick={handleAddLeadSubmit}
                    className="flex-[2] bg-primary text-white py-4 rounded-2xl text-sm font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all"
                  >
                    CREATE LEAD
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {viewMode === 'grid' ? (
          <motion.div 
            key="grid"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Lead List */}
            <div className={cn(
              "lg:col-span-5 xl:col-span-4 flex flex-col gap-6",
              showDetailsOnMobile ? "hidden lg:flex" : "flex"
            )}>
              <div className="bg-surface-container-low rounded-3xl overflow-hidden flex flex-col border border-outline-variant/5 shadow-sm">
                <div className="p-5 bg-surface-container shadow-sm flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant opacity-70">Pipeline</h3>
                    <div className="flex gap-1">
                      <button 
                        onClick={() => setViewMode('grid')}
                        className={cn(
                          "p-2 rounded-lg transition-all",
                          viewMode === 'grid' ? "bg-white shadow-sm border border-outline-variant/10 text-primary" : "text-slate-400 hover:bg-white hover:shadow-sm"
                        )}
                      >
                        <LayoutGrid size={16} />
                      </button>
                      <button 
                        onClick={() => setViewMode('list')}
                        className={cn(
                          "p-2 rounded-lg transition-all",
                          viewMode === 'list' ? "bg-white shadow-sm border border-outline-variant/10 text-primary" : "text-slate-400 hover:bg-white hover:shadow-sm"
                        )}
                      >
                        <List size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                    <input 
                      type="text" 
                      placeholder="Filter leads..."
                      className="w-full bg-white border-none rounded-xl py-2 pl-9 pr-4 text-xs focus:ring-2 focus:ring-primary/20 shadow-sm outline-none"
                    />
                  </div>
                </div>
                
                <div className="overflow-y-auto custom-scrollbar max-h-[600px] divide-y divide-outline-variant/5">
                  {filteredLeads.map((lead) => (
                    <div 
                      key={lead.id}
                      onClick={() => {
                        setSelectedLead(lead);
                        setShowDetailsOnMobile(true);
                      }}
                      className={cn(
                        "p-5 cursor-pointer transition-all border-l-4",
                        selectedLead.id === lead.id 
                          ? "bg-white border-l-primary shadow-sm" 
                          : "bg-transparent border-l-transparent hover:bg-surface-container-high"
                      )}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-3">
                          <div className={cn(
                            "w-10 h-10 rounded-xl flex items-center justify-center",
                            lead.status === 'New Lead' ? "bg-blue-100 text-primary" : "bg-emerald-100 text-emerald-600"
                          )}>
                            <Bot size={20} />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-on-surface">{lead.name}</h4>
                            <p className="text-[10px] font-bold text-on-surface-variant tracking-wider uppercase">{lead.type}</p>
                          </div>
                        </div>
                        <div className={cn(
                          "flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase",
                          lead.status === 'New Lead' ? "bg-blue-100 text-blue-700" : "bg-emerald-100 text-emerald-700"
                        )}>
                          {lead.status}
                        </div>
                      </div>
                      <div className="flex justify-between text-[11px] text-on-surface-variant">
                        <span className="font-medium">{lead.source}</span>
                        <span className="text-slate-400">{lead.timeAgo}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Lead Details */}
            <div className={cn(
              "lg:col-span-7 xl:col-span-8 flex flex-col gap-8",
              showDetailsOnMobile ? "flex" : "hidden lg:flex"
            )}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(41,52,58,0.06)] border border-outline-variant/10">
                <div className="bg-gradient-to-r from-slate-900 to-blue-900 px-6 lg:px-10 py-8 lg:py-12 text-white relative">
                  <button 
                    onClick={() => setShowDetailsOnMobile(false)}
                    className="lg:hidden mb-6 flex items-center gap-2 text-blue-200 text-xs font-bold hover:text-white transition-colors"
                  >
                    <ChevronLeft size={16} /> BACK TO PIPELINE
                  </button>
                  <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shrink-0">
                        <Bot size={40} className="text-white" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <h2 className="text-2xl lg:text-3xl font-headline font-bold truncate">{selectedLead.name}</h2>
                          <Verified size={20} className="text-blue-400 fill-blue-400 shrink-0" />
                        </div>
                        <p className="text-blue-200 text-sm flex items-center gap-2 truncate">
                          <Mail size={16} className="shrink-0" />
                          {selectedLead.email}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 w-full md:w-auto">
                      <button className="flex-1 md:flex-none bg-white/10 hover:bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2">
                        <Edit2 size={16} /> EDIT
                      </button>
                      <button className="flex-1 md:flex-none bg-primary text-white px-6 py-2.5 rounded-xl text-xs font-bold shadow-lg shadow-black/20 hover:opacity-90 transition-all flex items-center justify-center gap-2">
                        <Phone size={16} /> CALL CLIENT
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-6 lg:p-10">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4 opacity-60">Status Overview</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-4 rounded-2xl bg-primary/5 border border-primary/10">
                            <span className="text-xs font-bold text-primary">Current Status</span>
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(43,91,181,0.5)]" />
                              <span className="text-xs font-bold text-on-surface">{selectedLead.status}</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
                            <span className="text-xs font-bold text-slate-500">Lead Source</span>
                            <div className="flex items-center gap-2">
                              <Sparkles size={16} className="text-blue-600" />
                              <span className="text-xs font-bold text-on-surface">{selectedLead.source}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4 opacity-60">Assigned Agent</h4>
                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                          <img src={selectedLead.assignedTo.avatar} alt={selectedLead.assignedTo.name} className="w-12 h-12 rounded-xl object-cover" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold truncate">{selectedLead.assignedTo.name}</p>
                            <p className="text-[10px] text-slate-500 font-medium uppercase tracking-widest">{selectedLead.assignedTo.role}</p>
                          </div>
                          <button className="text-primary p-2 hover:bg-white rounded-lg transition-colors">
                            <MoreVertical size={18} />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-2 space-y-8">
                      <div className="bg-slate-50 p-6 lg:p-8 rounded-3xl border border-slate-100">
                        <div className="flex items-center gap-2 mb-6">
                          <Zap size={18} className="text-primary" />
                          <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface">Campaign Context</h4>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Campaign Name</p>
                            <p className="text-sm font-bold">{selectedLead.campaign}</p>
                          </div>
                          <div>
                            <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Target Ad Set</p>
                            <p className="text-sm font-bold">{selectedLead.adSet}</p>
                          </div>
                          <div className="sm:col-span-2">
                            <p className="text-[10px] text-slate-400 font-bold uppercase mb-2">Form Data (Captured Insights)</p>
                            <div className="bg-white p-4 rounded-2xl text-xs text-on-surface-variant border border-slate-200/60 leading-relaxed italic shadow-sm">
                              {selectedLead.formData}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-6 px-2">Activity Timeline</h4>
                        <div className="relative space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                          {[
                            { title: 'Lead Ingested', time: '10:42 AM Today', desc: 'Webhook received from Meta API. Form ID: #meta_88291', type: 'ingest' },
                            { title: 'Auto-Response Sent', time: '10:42 AM Today', desc: 'SMS: "Hi Jonathan, we\'ve received your inquiry!"', type: 'auto-response' },
                            { title: 'Assigned to Agent', time: '10:45 AM Today', desc: 'System-routed based on high-value priority score (8.8/10).', type: 'assignment' },
                          ].map((item, i) => (
                            <div key={i} className="relative pl-10">
                              <div className={cn(
                                "absolute left-0 w-6 h-6 rounded-full flex items-center justify-center text-white ring-4 ring-white z-10",
                                item.type === 'ingest' ? "bg-primary" : item.type === 'auto-response' ? "bg-tertiary" : "bg-slate-300"
                              )}>
                                {item.type === 'ingest' ? <Zap size={12} /> : item.type === 'auto-response' ? <Sparkles size={12} /> : <UserCheck size={12} />}
                              </div>
                              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                <div className="flex justify-between items-start mb-1">
                                  <h5 className="text-xs font-bold">{item.title}</h5>
                                  <span className="text-[10px] text-slate-400 font-medium">{item.time}</span>
                                </div>
                                <p className="text-[10px] text-slate-500 leading-relaxed">{item.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-100 bg-slate-50 p-4 lg:p-6 flex items-center justify-between gap-4">
                  <div className="flex gap-2">
                    <button className="p-2.5 rounded-xl hover:bg-slate-200 text-slate-500 transition-colors"><Paperclip size={20} /></button>
                    <button className="p-2.5 rounded-xl hover:bg-slate-200 text-slate-500 transition-colors"><AtSign size={20} /></button>
                  </div>
                  <div className="flex-1 min-w-0">
                    <input 
                      type="text" 
                      placeholder="Type a note or message..."
                      className="w-full bg-white border border-slate-200 rounded-xl py-2.5 px-4 text-xs focus:ring-2 focus:ring-primary/20 outline-none shadow-sm"
                    />
                  </div>
                  <button className="bg-primary text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-md">
                    <span className="hidden sm:inline">SEND</span>
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="list"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-white rounded-[32px] overflow-hidden border border-outline-variant/10 shadow-sm"
          >
            <div className="overflow-x-auto custom-scrollbar">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-outline-variant/10">
                    <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-500">Lead Name</th>
                    <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-500">Status</th>
                    <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-500">Type</th>
                    <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-500">Source</th>
                    <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-500">Assigned Agent</th>
                    <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-500 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/5">
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-50 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className={cn(
                            "w-8 h-8 rounded-lg flex items-center justify-center",
                            lead.status === 'New Lead' ? "bg-blue-100 text-primary" : "bg-emerald-100 text-emerald-600"
                          )}>
                            <Bot size={16} />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-on-surface">{lead.name}</p>
                            <p className="text-[10px] text-slate-400 font-medium">{lead.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className={cn(
                          "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase",
                          lead.status === 'New Lead' ? "bg-blue-100 text-blue-700" : "bg-emerald-100 text-emerald-700"
                        )}>
                          {lead.status}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs font-bold text-on-surface-variant">{lead.type}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs font-medium text-slate-500">{lead.source}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <img src={lead.assignedTo.avatar} alt="" className="w-6 h-6 rounded-full object-cover" />
                          <span className="text-xs font-bold text-on-surface">{lead.assignedTo.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button 
                          onClick={() => {
                            setSelectedLead(lead);
                            setViewMode('grid');
                            setShowDetailsOnMobile(true);
                          }}
                          className="text-primary text-[10px] font-bold uppercase tracking-widest hover:underline"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Tasks View ---
const TasksView = ({ role, currentUser, tasks, setTasks, searchQuery }: { role: UserRole, currentUser: User, tasks: Task[], setTasks: React.Dispatch<React.SetStateAction<Task[]>>, searchQuery: string }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newTask, setNewTask] = useState<Partial<Task>>({
    status: 'To Do',
    category: 'Underwriting',
    priority: 'Medium',
    dueDate: 'Due in 24h'
  });

  const handleAddTask = () => {
    if (!newTask.title || !newTask.description) return;
    const task: Task = {
      ...newTask as Task,
      id: `TASK-${Date.now()}`,
      assignedTo: { name: currentUser.name, avatar: currentUser.avatar }
    };
    setTasks([task, ...tasks]);
    setIsAddModalOpen(false);
    setNewTask({
      status: 'To Do',
      category: 'Underwriting',
      priority: 'Medium',
      dueDate: 'Due in 24h'
    });
  };

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         task.description.toLowerCase().includes(searchQuery.toLowerCase());
    if (!matchesSearch) return false;

    if (role === 'Employee') return task.assignedTo.name === currentUser.name;
    return true;
  });

  const columns = [
    { title: 'To Do', status: 'To Do', color: 'bg-slate-100 text-slate-600' },
    { title: 'In Progress', status: 'In Progress', color: 'bg-blue-100 text-primary' },
    { title: 'Completed', status: 'Completed', color: 'bg-emerald-100 text-emerald-700' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-headline font-extrabold tracking-tight text-on-surface">Operations & Tasks</h2>
          <p className="text-on-surface-variant font-body">
            {role === 'Employee' ? 'Manage your assigned underwriting and claim verification tasks.' : 'Manage daily underwriting and claim verification workflows.'}
          </p>
        </div>
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="bg-primary text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
        >
          <Plus size={18} /> Add New Task
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {columns.map((col, i) => (
          <div key={i} className="bg-surface-container-low rounded-3xl p-6 border border-outline-variant/5 min-h-[500px] flex flex-col gap-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-bold uppercase tracking-widest opacity-70">{col.title}</h3>
              <span className={cn("px-2 py-0.5 rounded-full text-[10px] font-bold", col.color)}>
                {filteredTasks.filter(t => t.status === col.status).length}
              </span>
            </div>
            
            <div className="space-y-4">
              {filteredTasks.filter(t => t.status === col.status).map((task) => (
                <div key={task.id} className="bg-white p-5 rounded-2xl shadow-sm border border-outline-variant/5 hover:shadow-md transition-shadow cursor-pointer group">
                  <div className="flex justify-between items-start mb-3">
                    <span className={cn(
                      "px-2 py-0.5 text-[10px] font-bold rounded-md uppercase",
                      task.category === 'Underwriting' ? "bg-primary/10 text-primary" : "bg-purple-100 text-purple-700"
                    )}>
                      {task.category}
                    </span>
                    <MoreVertical size={14} className="text-slate-300 group-hover:text-slate-500 transition-colors" />
                  </div>
                  <h4 className="text-sm font-bold text-on-surface mb-2">{task.title}</h4>
                  <p className="text-[10px] text-on-surface-variant leading-relaxed mb-4">{task.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      <img src={task.assignedTo.avatar} className="w-6 h-6 rounded-full border-2 border-white object-cover" alt="User" />
                    </div>
                    <div className={cn(
                      "flex items-center gap-1 text-[10px] font-bold",
                      task.priority === 'High' ? "text-error" : "text-on-surface-variant"
                    )}>
                      <Timer size={12} />
                      {task.dueDate}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => {
                setNewTask({...newTask, status: col.status as Task['status']});
                setIsAddModalOpen(true);
              }}
              className="w-full py-3 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 text-[10px] font-bold hover:bg-white hover:border-primary/20 hover:text-primary transition-all mt-auto"
            >
              + ADD TASK
            </button>
          </div>
        ))}
      </div>

      {/* Add Task Modal */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-[32px] w-full max-w-lg overflow-hidden shadow-2xl border border-outline-variant/10"
            >
              <div className="bg-slate-900 px-8 py-6 text-white flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-headline font-bold">Create New Task</h3>
                  <p className="text-slate-400 text-xs mt-1 font-medium">Assign operational tasks to the team.</p>
                </div>
                <button 
                  onClick={() => setIsAddModalOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Task Title</label>
                  <input 
                    required
                    type="text" 
                    placeholder="e.g. Review Policy #POL-123"
                    value={newTask.title || ''}
                    onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                    className="w-full bg-slate-50 border-none rounded-2xl py-3.5 px-5 text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Description</label>
                  <textarea 
                    required
                    placeholder="Detailed task instructions..."
                    value={newTask.description || ''}
                    onChange={(e) => setNewTask({...newTask, description: e.target.value})}
                    rows={3}
                    className="w-full bg-slate-50 border-none rounded-2xl py-3.5 px-5 text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none resize-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Category</label>
                    <select 
                      value={newTask.category}
                      onChange={(e) => setNewTask({...newTask, category: e.target.value as Task['category']})}
                      className="w-full bg-slate-50 border-none rounded-2xl py-3.5 px-5 text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none appearance-none"
                    >
                      <option value="Underwriting">Underwriting</option>
                      <option value="Claims">Claims</option>
                      <option value="Compliance">Compliance</option>
                      <option value="Customer Service">Customer Service</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Priority</label>
                    <select 
                      value={newTask.priority}
                      onChange={(e) => setNewTask({...newTask, priority: e.target.value as Task['priority']})}
                      className="w-full bg-slate-50 border-none rounded-2xl py-3.5 px-5 text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none appearance-none"
                    >
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 flex gap-3">
                  <button 
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="flex-1 bg-slate-100 text-slate-600 py-4 rounded-2xl text-sm font-bold hover:bg-slate-200 transition-colors"
                  >
                    CANCEL
                  </button>
                  <button 
                    onClick={handleAddTask}
                    className="flex-[2] bg-primary text-white py-4 rounded-2xl text-sm font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all"
                  >
                    CREATE TASK
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Renewal View ---
const RenewalView = ({ policies, setPolicies }: { policies: Policy[], setPolicies: React.Dispatch<React.SetStateAction<Policy[]>> }) => {
  const expiringPolicies = policies.filter(p => p.status === 'Active'); // Simplified logic for demo

  const handleRenew = (id: string) => {
    setPolicies(policies.map(p => p.id === id ? { ...p, status: 'Active', renewalDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] } : p));
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-headline font-extrabold tracking-tight text-on-surface">Policy Renewals</h2>
          <p className="text-on-surface-variant font-body">Maintain continuous coverage for all active risk portfolios.</p>
        </div>
        <button 
          onClick={() => setPolicies(policies.map(p => ({ ...p, status: 'Active', renewalDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] })))}
          className="bg-primary text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all"
        >
          Renew All
        </button>
      </div>
      
      <div className="bg-surface-container-low rounded-[40px] border border-outline-variant/5 overflow-hidden shadow-sm">
        <div className="p-8 border-b border-outline-variant/10 flex justify-between items-center bg-surface-container-lowest">
          <div>
            <h3 className="text-lg font-bold text-on-surface">Upcoming Renewals</h3>
            <p className="text-sm text-on-surface-variant">Review and process policy extensions.</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-xl text-xs font-bold">
            <AlertTriangle size={14} /> {expiringPolicies.length} Pending
          </div>
        </div>
        <div className="divide-y divide-outline-variant/10">
          {expiringPolicies.length > 0 ? expiringPolicies.map(policy => (
            <div key={policy.id} className="p-8 flex items-center justify-between hover:bg-surface-container-lowest transition-colors group">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <RotateCw size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-base font-bold text-on-surface">{policy.type}</p>
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[10px] font-bold rounded uppercase tracking-wider">{policy.policyNumber}</span>
                  </div>
                  <p className="text-sm text-on-surface-variant font-medium">Policyholder: <span className="text-on-surface font-bold">{policy.holderName}</span></p>
                  <p className="text-xs text-slate-400 mt-1">Renewal Due: <span className="font-bold text-amber-600">{policy.renewalDate}</span></p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-right">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Premium</p>
                  <p className="text-lg font-headline font-extrabold text-on-surface">{policy.premium?.amount}</p>
                </div>
                <button 
                  onClick={() => handleRenew(policy.id)}
                  className="px-8 py-3 bg-primary text-white rounded-2xl text-sm font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all"
                >
                  Renew Now
                </button>
              </div>
            </div>
          )) : (
            <div className="p-20 text-center">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
                <ShieldCheck size={40} />
              </div>
              <h4 className="text-lg font-bold text-on-surface">All Policies Up to Date</h4>
              <p className="text-sm text-slate-500">No upcoming renewals found in your portfolio.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Documents View ---
const DocumentsView = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [documents, setDocuments] = useState([
    { name: 'Policy_Contract_2024.pdf', size: '1.2 MB', date: 'Mar 12, 2024', type: 'PDF' },
    { name: 'ID_Card_Front.jpg', size: '450 KB', date: 'Feb 28, 2024', type: 'Image' },
    { name: 'Payment_Receipt_Q1.pdf', size: '890 KB', date: 'Jan 15, 2024', type: 'PDF' },
  ]);

  const handleUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setDocuments([{ name: 'New_Document.pdf', size: '2.1 MB', date: 'Apr 04, 2024', type: 'PDF' }, ...documents]);
    }, 1500);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-headline font-extrabold tracking-tight text-on-surface">Digital Document Vault</h2>
          <p className="text-on-surface-variant font-body">Securely store and manage all your insurance-related documents.</p>
        </div>
        <button 
          onClick={handleUpload}
          disabled={isUploading}
          className="bg-primary text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all flex items-center gap-2"
        >
          {isUploading ? <RotateCw className="animate-spin" size={18} /> : <Plus size={18} />}
          {isUploading ? 'Uploading...' : 'Upload Document'}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {['Policy Contract', 'ID Cards', 'Payment Receipts', 'Claim Forms'].map(folder => (
          <div key={folder} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer group">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600 mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
              <FileText size={24} />
            </div>
            <h3 className="text-sm font-bold text-on-surface mb-1">{folder}</h3>
            <p className="text-[10px] text-slate-500 font-medium">12 Files • 4.2 MB</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-[32px] border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-slate-100 bg-slate-50/50">
          <h3 className="font-bold text-on-surface">Recent Documents</h3>
        </div>
        <div className="divide-y divide-slate-100">
          {documents.map((doc, i) => (
            <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-100 group-hover:text-primary transition-colors">
                  <FileText size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">{doc.name}</p>
                  <p className="text-[10px] text-slate-500 font-medium uppercase tracking-widest">{doc.type} • {doc.size}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-slate-400 font-medium">{doc.date}</span>
                <button className="p-2 text-slate-400 hover:text-primary hover:bg-blue-50 rounded-lg transition-all">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Commission View ---
const CommissionView = () => {
  const [isRequesting, setIsRequesting] = useState(false);
  const [payoutRequested, setPayoutRequested] = useState(false);

  const handleRequestPayout = () => {
    setIsRequesting(true);
    setTimeout(() => {
      setIsRequesting(false);
      setPayoutRequested(true);
    }, 1500);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-headline font-extrabold tracking-tight text-on-surface">My Commissions</h2>
          <p className="text-on-surface-variant font-body">Track your earnings and manage payouts.</p>
        </div>
        <button 
          onClick={handleRequestPayout}
          disabled={isRequesting || payoutRequested}
          className={cn(
            "px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg transition-all flex items-center gap-2",
            payoutRequested 
              ? "bg-emerald-100 text-emerald-700 shadow-none cursor-default" 
              : "bg-primary text-white shadow-primary/20 hover:opacity-90 active:scale-95"
          )}
        >
          {isRequesting ? <RotateCw className="animate-spin" size={18} /> : payoutRequested ? <Check size={18} /> : <DollarSign size={18} />}
          {isRequesting ? 'Processing...' : payoutRequested ? 'Payout Requested' : 'Request Payout'}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Total Earned</p>
          <p className="text-4xl font-headline font-extrabold text-on-surface">$12,482.00</p>
          <div className="mt-4 flex items-center gap-2 text-emerald-600 text-xs font-bold">
            <TrendingUp size={14} /> +12% from last month
          </div>
        </div>
        <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Pending Payout</p>
          <p className="text-4xl font-headline font-extrabold text-on-surface">$2,150.00</p>
          <p className="mt-4 text-xs text-slate-400 font-medium italic">Next payout: April 15, 2024</p>
        </div>
      </div>
    </div>
  );
};

// --- Target View ---
const TargetView = ({ role, currentUser, targets, setTargets }: { role: UserRole, currentUser: User, targets: PerformanceTarget[], setTargets: React.Dispatch<React.SetStateAction<PerformanceTarget[]>> }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTarget, setNewTarget] = useState<Partial<PerformanceTarget>>({
    category: 'Sales',
    period: 'Monthly',
    unit: '$',
    target: 0,
    current: 0,
    userRole: 'Agent'
  });

  const filteredTargets = role === 'Super Admin' 
    ? targets 
    : targets.filter(t => t.userId === currentUser.id);

  const handleAddTarget = () => {
    if (!newTarget.userName || !newTarget.target) return;
    
    const target: PerformanceTarget = {
      id: `T-${Date.now()}`,
      userId: `U-${Math.floor(Math.random() * 1000)}`,
      userName: newTarget.userName || '',
      userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      userRole: newTarget.userRole || 'Agent',
      category: newTarget.category || 'Sales',
      current: newTarget.current || 0,
      target: newTarget.target || 0,
      unit: newTarget.unit || '$',
      period: newTarget.period || 'Monthly'
    };

    setTargets([target, ...targets]);
    setShowAddModal(false);
    setNewTarget({
      category: 'Sales',
      period: 'Monthly',
      unit: '$',
      target: 0,
      current: 0,
      userRole: 'Agent'
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-headline font-extrabold tracking-tight text-on-surface">Performance Targets</h2>
          <p className="text-slate-500 font-medium">
            {role === 'Super Admin' 
              ? "Manage and track performance goals across the organization." 
              : "Track your personal progress towards your assigned goals."}
          </p>
        </div>
        {role === 'Super Admin' && (
          <button 
            onClick={() => setShowAddModal(true)}
            className="bg-primary text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-primary/20"
          >
            <Plus size={20} />
            Set New Target
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {filteredTargets.map((target) => {
          const percentage = Math.min(Math.round((target.current / target.target) * 100), 100);
          const isCompleted = percentage >= 100;
          
          return (
            <motion.div 
              key={target.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[32px] border border-slate-200 p-6 lg:p-8 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  {role === 'Super Admin' ? (
                    <div className="relative">
                      <img src={target.userAvatar} alt="" className="w-12 h-12 rounded-2xl object-cover" />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100">
                        {target.userRole === 'Agent' ? <Users size={10} className="text-primary" /> : <BadgeCheck size={10} className="text-tertiary" />}
                      </div>
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                      <Target size={24} />
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-bold text-on-surface">
                      {role === 'Super Admin' ? target.userName : `${target.category} Goal`}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{target.period}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{target.category}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className={cn(
                    "text-2xl font-headline font-extrabold",
                    isCompleted ? "text-tertiary" : "text-primary"
                  )}>
                    {percentage}%
                  </p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Progress</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={cn(
                      "h-full rounded-full",
                      isCompleted ? "bg-tertiary shadow-[0_0_8px_rgba(0,107,95,0.4)]" : "bg-primary"
                    )}
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Current</p>
                    <p className="text-sm font-bold text-on-surface">
                      {target.unit === '$' ? `$${target.current.toLocaleString()}` : `${target.current} ${target.unit}`}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Target</p>
                    <p className="text-sm font-bold text-on-surface">
                      {target.unit === '$' ? `$${target.target.toLocaleString()}` : `${target.target} ${target.unit}`}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Remaining</p>
                    <p className={cn(
                      "text-sm font-bold",
                      isCompleted ? "text-tertiary" : "text-error"
                    )}>
                      {isCompleted ? 'Goal Met' : (target.unit === '$' ? `$${(target.target - target.current).toLocaleString()}` : `${target.target - target.current} ${target.unit}`)}
                    </p>
                  </div>
                </div>
              </div>

              {role === 'Super Admin' && (
                <div className="mt-6 pt-6 border-t border-slate-100 flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 text-slate-400 hover:text-primary transition-colors"><Edit2 size={16} /></button>
                  <button className="p-2 text-slate-400 hover:text-error transition-colors"><XCircle size={16} /></button>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Add Target Modal */}
      <AnimatePresence>
        {showAddModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAddModal(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-lg rounded-[40px] p-8 lg:p-10 shadow-2xl relative z-10 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-10 -mt-10 blur-2xl"></div>
              
              <div className="relative">
                <div className="flex justify-between items-center mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <Target size={24} />
                  </div>
                  <button onClick={() => setShowAddModal(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                    <X size={20} />
                  </button>
                </div>

                <h3 className="text-2xl font-headline font-extrabold text-on-surface mb-2">Set Performance Target</h3>
                <p className="text-slate-500 text-sm mb-8">Define a new goal for an agent or employee.</p>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Assign To</label>
                      <input 
                        type="text" 
                        placeholder="Name"
                        value={newTarget.userName || ''}
                        onChange={(e) => setNewTarget({...newTarget, userName: e.target.value})}
                        className="bg-slate-50 border-none rounded-2xl py-3.5 px-4 text-sm focus:ring-2 focus:ring-primary/20 outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Role</label>
                      <select 
                        value={newTarget.userRole}
                        onChange={(e) => setNewTarget({...newTarget, userRole: e.target.value as UserRole})}
                        className="bg-slate-50 border-none rounded-2xl py-3.5 px-4 text-sm focus:ring-2 focus:ring-primary/20 outline-none appearance-none"
                      >
                        <option value="Agent">Agent</option>
                        <option value="Employee">Employee</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Category</label>
                      <select 
                        value={newTarget.category}
                        onChange={(e) => setNewTarget({...newTarget, category: e.target.value as any})}
                        className="bg-slate-50 border-none rounded-2xl py-3.5 px-4 text-sm focus:ring-2 focus:ring-primary/20 outline-none appearance-none"
                      >
                        <option value="Sales">Sales</option>
                        <option value="Leads">Leads</option>
                        <option value="Retention">Retention</option>
                        <option value="Underwriting">Underwriting</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Period</label>
                      <select 
                        value={newTarget.period}
                        onChange={(e) => setNewTarget({...newTarget, period: e.target.value as any})}
                        className="bg-slate-50 border-none rounded-2xl py-3.5 px-4 text-sm focus:ring-2 focus:ring-primary/20 outline-none appearance-none"
                      >
                        <option value="Monthly">Monthly</option>
                        <option value="Quarterly">Quarterly</option>
                        <option value="Yearly">Yearly</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Target Value</label>
                      <input 
                        type="number" 
                        value={newTarget.target || ''}
                        onChange={(e) => setNewTarget({...newTarget, target: Number(e.target.value)})}
                        className="bg-slate-50 border-none rounded-2xl py-3.5 px-4 text-sm focus:ring-2 focus:ring-primary/20 outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Unit</label>
                      <input 
                        type="text" 
                        placeholder="e.g. $, Leads, %"
                        value={newTarget.unit || ''}
                        onChange={(e) => setNewTarget({...newTarget, unit: e.target.value})}
                        className="bg-slate-50 border-none rounded-2xl py-3.5 px-4 text-sm focus:ring-2 focus:ring-primary/20 outline-none"
                      />
                    </div>
                  </div>

                  <button 
                    onClick={handleAddTarget}
                    className="w-full bg-primary text-white py-4 rounded-2xl font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/20 mt-4"
                  >
                    Create Target
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App Component ---
export default function App() {
  const [currentUser, setCurrentUser] = useState<User>(DEMO_USERS['Super Admin']);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [policies, setPolicies] = useState<Policy[]>(MOCK_POLICIES);
  const [leads, setLeads] = useState<Lead[]>(MOCK_LEADS);
  const [tasks, setTasks] = useState<Task[]>(MOCK_TASKS);
  const [targets, setTargets] = useState<PerformanceTarget[]>(MOCK_TARGETS);

  const getNavItems = (role: UserRole) => {
    const items = [
      { name: 'Dashboard', icon: LayoutDashboard, roles: ['Super Admin', 'Customer', 'Agent', 'Employee'] },
      { name: 'CRM Leads', icon: Users, roles: ['Super Admin', 'Agent', 'Employee'] },
      { name: 'Policies', icon: ShieldCheck, roles: ['Super Admin', 'Customer', 'Agent', 'Employee'] },
      { name: 'Tasks', icon: ClipboardCheck, roles: ['Super Admin', 'Employee'] },
      { name: 'HRMS', icon: BadgeCheck, roles: ['Super Admin', 'Employee'] },
      { name: 'Payroll', icon: CreditCard, roles: ['Super Admin', 'Employee'] },
      { name: 'Renewal', icon: RotateCw, roles: ['Customer'] },
      { name: 'Documents', icon: FileText, roles: ['Customer'] },
      { name: 'Commission', icon: DollarSign, roles: ['Agent'] },
      { name: 'Target', icon: Target, roles: ['Super Admin', 'Agent', 'Employee'] },
    ];
    return items.filter(item => item.roles.includes(role));
  };

  const navItems = getNavItems(currentUser.role);

  const switchRole = (role: UserRole) => {
    setCurrentUser(DEMO_USERS[role]);
    setActiveTab('Dashboard');
  };

  return (
    <div className="flex min-h-screen bg-background overflow-x-hidden">
      {/* Sidebar Overlay for Mobile */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={cn(
        "fixed lg:sticky left-0 top-0 h-screen w-64 flex flex-col p-4 bg-slate-100 border-r border-slate-200 z-[70] transition-transform duration-300 lg:translate-x-0",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="mb-10 px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h2 className="font-headline font-extrabold text-blue-900 leading-tight">Management</h2>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Enterprise Suite</p>
            </div>
          </div>
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden p-2 text-slate-500 hover:bg-slate-200 rounded-lg"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setActiveTab(item.name);
                setIsSidebarOpen(false);
              }}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium tracking-wide",
                activeTab === item.name 
                  ? "text-blue-700 bg-white shadow-sm font-bold translate-x-1" 
                  : "text-slate-600 hover:text-blue-600 hover:translate-x-1"
              )}
            >
              <item.icon size={18} />
              <span>{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-6 flex flex-col gap-1 border-t border-slate-200/60">
          <button 
            onClick={() => setActiveTab('Policies')}
            className="w-full mb-6 bg-gradient-to-br from-primary to-primary-dim text-white py-3.5 px-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:opacity-90 transition-all active:scale-95"
          >
            <Plus size={18} />
            <span>New Policy</span>
          </button>
          <button className="flex items-center gap-3 px-4 py-2.5 text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">
            <HelpCircle size={18} />
            <span>Support</span>
          </button>
          <button className="flex items-center gap-3 px-4 py-2.5 text-slate-500 hover:text-error transition-colors text-sm font-medium">
            <LogOut size={18} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-slate-50/80 backdrop-blur-xl border-b border-slate-200/50 px-4 lg:px-8 py-4 flex justify-between items-center gap-4">
          <div className="flex items-center gap-3 lg:gap-8 flex-1 min-w-0">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 text-slate-500 hover:bg-slate-200 rounded-lg shrink-0"
            >
              <Menu size={20} />
            </button>
            <h1 className="text-lg lg:text-xl font-bold tracking-tighter text-blue-900 font-headline truncate shrink-0">Assurance Ledger</h1>
            <div className="relative w-full max-w-md hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search data points, policies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-200/50 border-none rounded-2xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-1 lg:gap-4 shrink-0">
            <button className="p-2 rounded-xl hover:bg-slate-200/50 transition-colors text-slate-500 md:hidden"><Search size={20} /></button>
            <button className="p-2 rounded-xl hover:bg-slate-200/50 transition-colors text-slate-500 relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full ring-2 ring-white"></span>
            </button>
            <button className="p-2 rounded-xl hover:bg-slate-200/50 transition-colors text-slate-500 hidden sm:block"><Settings size={20} /></button>
            <div className="h-8 w-px bg-slate-200 mx-1 lg:mx-2" />
            <div className="flex items-center gap-2 lg:gap-3 pl-1 lg:pl-2">
              <div className="text-right hidden lg:block">
                <div className="flex flex-col items-end">
                  <p className="text-xs font-bold text-on-surface leading-tight">{currentUser.name}</p>
                  <select 
                    value={currentUser.role}
                    onChange={(e) => switchRole(e.target.value as UserRole)}
                    className="text-[10px] text-slate-500 font-medium bg-transparent border-none p-0 focus:ring-0 cursor-pointer hover:text-primary transition-colors"
                  >
                    <option value="Super Admin">Super Admin</option>
                    <option value="Customer">Customer</option>
                    <option value="Agent">Agent</option>
                    <option value="Employee">Employee</option>
                  </select>
                </div>
              </div>
              <img 
                src={currentUser.avatar} 
                alt="Profile" 
                className="w-10 h-10 rounded-xl object-cover ring-2 ring-white shadow-sm"
              />
            </div>
          </div>
        </header>

        {/* View Container */}
        <div className="p-6 lg:p-10 max-w-[1600px] mx-auto w-full pb-24 lg:pb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 'Dashboard' && <DashboardView role={currentUser.role} policies={policies} leads={leads} tasks={tasks} setActiveTab={setActiveTab} />}
              {activeTab === 'Payroll' && <PayrollView employees={MOCK_EMPLOYEES} />}
              {activeTab === 'HRMS' && <PayrollView employees={MOCK_EMPLOYEES} />}
              {activeTab === 'Policies' && <PolicyView role={currentUser.role} currentUser={currentUser} policies={policies} setPolicies={setPolicies} searchQuery={searchQuery} />}
              {activeTab === 'CRM Leads' && <CRMLeadsView role={currentUser.role} currentUser={currentUser} leads={leads} setLeads={setLeads} searchQuery={searchQuery} />}
              {activeTab === 'Tasks' && <TasksView role={currentUser.role} currentUser={currentUser} tasks={tasks} setTasks={setTasks} searchQuery={searchQuery} />}
              {activeTab === 'Renewal' && <RenewalView policies={policies} setPolicies={setPolicies} />}
              {activeTab === 'Documents' && <DocumentsView />}
              {activeTab === 'Commission' && <CommissionView />}
              {activeTab === 'Target' && <TargetView role={currentUser.role} currentUser={currentUser} targets={targets} setTargets={setTargets} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-50 flex items-center justify-around py-3 px-2 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
        {navItems.slice(0, 4).map((item) => (
          <button 
            key={item.name}
            onClick={() => setActiveTab(item.name)}
            className={cn(
              "flex flex-col items-center gap-1 transition-colors",
              activeTab === item.name ? "text-primary" : "text-slate-500"
            )}
          >
            <item.icon size={20} />
            <span className="text-[10px] font-bold">{item.name.split(' ')[0]}</span>
          </button>
        ))}
        <div className="-mt-10">
          <button className="w-12 h-12 bg-primary rounded-full shadow-lg flex items-center justify-center text-white active:scale-90 transition-transform">
            <Plus size={24} />
          </button>
        </div>
      </nav>
    </div>
  );
}
