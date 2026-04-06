const BASE = '/api';

async function request<T>(method: string, path: string, body?: unknown): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers: body ? { 'Content-Type': 'application/json' } : {},
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) throw new Error(`API ${method} ${path} failed: ${res.statusText}`);
  return res.json();
}

// Leads
export const getLeads = () => request<any[]>('GET', '/leads');
export const createLead = (lead: any) => request<any>('POST', '/leads', lead);
export const updateLead = (id: string, data: any) => request<any>('PUT', `/leads/${id}`, data);
export const deleteLead = (id: string) => request<any>('DELETE', `/leads/${id}`);

// Policies
export const getPolicies = () => request<any[]>('GET', '/policies');
export const createPolicy = (policy: any) => request<any>('POST', '/policies', policy);
export const updatePolicy = (id: string, data: any) => request<any>('PUT', `/policies/${id}`, data);
export const deletePolicy = (id: string) => request<any>('DELETE', `/policies/${id}`);

// Tasks
export const getTasks = () => request<any[]>('GET', '/tasks');
export const createTask = (task: any) => request<any>('POST', '/tasks', task);
export const updateTask = (id: string, data: any) => request<any>('PUT', `/tasks/${id}`, data);
export const deleteTask = (id: string) => request<any>('DELETE', `/tasks/${id}`);

// Targets
export const getTargets = () => request<any[]>('GET', '/targets');
export const createTarget = (target: any) => request<any>('POST', '/targets', target);
export const deleteTarget = (id: string) => request<any>('DELETE', `/targets/${id}`);

// Employees
export const getEmployees = () => request<any[]>('GET', '/employees');

// Leave Requests
export const getLeaveRequests = () => request<any[]>('GET', '/leave-requests');
export const updateLeaveRequest = (id: string, status: string) => request<any>('PUT', `/leave-requests/${id}`, { status });
export const createLeaveRequest = (lr: any) => request<any>('POST', '/leave-requests', lr);

// Users
export const getUsers = () => request<any[]>('GET', '/users');
export const createUser = (user: any) => request<any>('POST', '/users', user);
export const updateUser = (id: string, data: any) => request<any>('PUT', `/users/${id}`, data);
export const deleteUser = (id: string) => request<any>('DELETE', `/users/${id}`);

// Auth
export const login = (email: string, password: string) => request<any>('POST', '/auth/login', { email, password });
