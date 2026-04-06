import express from 'express';
import cors from 'cors';
import { Pool } from 'pg';

const app = express();
const PORT = 3001;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL?.includes('localhost') ? false : { rejectUnauthorized: false }
});

app.use(cors());
app.use(express.json());

// ─── LEADS ──────────────────────────────────────────────────────────────────

app.get('/api/leads', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM leads ORDER BY created_at DESC');
    const leads = result.rows.map(r => ({
      id: r.id,
      name: r.name,
      email: r.email,
      phone: r.phone,
      location: r.location,
      avatar: r.avatar,
      status: r.status,
      timeAgo: r.time_ago,
      type: r.type,
      source: r.source,
      campaign: r.campaign,
      adSet: r.ad_set,
      formData: r.form_data,
      quoteAmount: r.quote_amount,
      assignedTo: {
        name: r.assigned_to_name,
        role: r.assigned_to_role,
        avatar: r.assigned_to_avatar
      }
    }));
    res.json(leads);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/leads', async (req, res) => {
  try {
    const { id, name, email, status, timeAgo, type, source, campaign, adSet, formData, assignedTo } = req.body;
    const result = await pool.query(
      `INSERT INTO leads (id, name, email, status, time_ago, type, source, campaign, ad_set, form_data, assigned_to_name, assigned_to_role, assigned_to_avatar)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) RETURNING *`,
      [id, name, email, status || 'New Lead', timeAgo || 'Just now', type, source || 'Manual Entry', campaign || '', adSet || '', formData || '', assignedTo?.name, assignedTo?.role, assignedTo?.avatar]
    );
    const r = result.rows[0];
    res.json({
      id: r.id, name: r.name, email: r.email, status: r.status,
      timeAgo: r.time_ago, type: r.type, source: r.source,
      campaign: r.campaign, adSet: r.ad_set, formData: r.form_data,
      assignedTo: { name: r.assigned_to_name, role: r.assigned_to_role, avatar: r.assigned_to_avatar }
    });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

app.put('/api/leads/:id', async (req, res) => {
  try {
    const { status, assignedTo } = req.body;
    await pool.query(
      `UPDATE leads SET status=$1, assigned_to_name=$2, assigned_to_role=$3, assigned_to_avatar=$4 WHERE id=$5`,
      [status, assignedTo?.name, assignedTo?.role, assignedTo?.avatar, req.params.id]
    );
    res.json({ success: true });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

app.delete('/api/leads/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM leads WHERE id=$1', [req.params.id]);
    res.json({ success: true });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

// ─── POLICIES ────────────────────────────────────────────────────────────────

app.get('/api/policies', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM policies ORDER BY created_at DESC');
    const policies = result.rows.map(r => ({
      id: r.id,
      policyNumber: r.policy_number,
      holderName: r.holder_name,
      holderAvatar: r.holder_avatar,
      holderAge: r.holder_age,
      holderLocation: r.holder_location,
      type: r.type,
      subType: r.sub_type,
      status: r.status,
      renewalDate: r.renewal_date,
      termLength: r.term_length,
      faceAmount: r.face_amount,
      cashValue: r.cash_value,
      issueDate: r.issue_date,
      beneficiary: r.beneficiary_name ? {
        name: r.beneficiary_name,
        relationship: r.beneficiary_relationship,
        share: r.beneficiary_share,
        avatar: r.beneficiary_avatar
      } : undefined,
      premium: r.premium_amount ? {
        amount: r.premium_amount,
        frequency: r.premium_frequency,
        nextPayment: r.premium_next_payment,
        method: r.premium_method,
        paidPercentage: r.premium_paid_pct
      } : undefined
    }));
    res.json(policies);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/policies', async (req, res) => {
  try {
    const p = req.body;
    const result = await pool.query(
      `INSERT INTO policies (id, policy_number, holder_name, holder_avatar, holder_age, holder_location, type, sub_type, status, renewal_date, term_length, face_amount, cash_value, issue_date, beneficiary_name, beneficiary_relationship, beneficiary_share, beneficiary_avatar, premium_amount, premium_frequency, premium_next_payment, premium_method, premium_paid_pct)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23) RETURNING *`,
      [p.id, p.policyNumber, p.holderName, p.holderAvatar, p.holderAge || 0, p.holderLocation,
       p.type, p.subType, p.status, p.renewalDate, p.termLength, p.faceAmount, p.cashValue, p.issueDate,
       p.beneficiary?.name, p.beneficiary?.relationship, p.beneficiary?.share, p.beneficiary?.avatar,
       p.premium?.amount, p.premium?.frequency, p.premium?.nextPayment, p.premium?.method, p.premium?.paidPercentage || 0]
    );
    res.json(result.rows[0]);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

app.put('/api/policies/:id', async (req, res) => {
  try {
    const { status, renewalDate } = req.body;
    await pool.query(
      `UPDATE policies SET status=$1, renewal_date=$2 WHERE id=$3`,
      [status, renewalDate, req.params.id]
    );
    res.json({ success: true });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

app.delete('/api/policies/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM policies WHERE id=$1', [req.params.id]);
    res.json({ success: true });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

// ─── TASKS ───────────────────────────────────────────────────────────────────

app.get('/api/tasks', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tasks ORDER BY created_at DESC');
    const tasks = result.rows.map(r => ({
      id: r.id,
      title: r.title,
      description: r.description,
      category: r.category,
      status: r.status,
      priority: r.priority,
      dueDate: r.due_date,
      assignedTo: { name: r.assigned_to_name, avatar: r.assigned_to_avatar }
    }));
    res.json(tasks);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/tasks', async (req, res) => {
  try {
    const { id, title, description, category, status, priority, dueDate, assignedTo } = req.body;
    const result = await pool.query(
      `INSERT INTO tasks (id, title, description, category, status, priority, due_date, assigned_to_name, assigned_to_avatar)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *`,
      [id, title, description, category, status || 'To Do', priority || 'Medium', dueDate, assignedTo?.name, assignedTo?.avatar]
    );
    const r = result.rows[0];
    res.json({ id: r.id, title: r.title, description: r.description, category: r.category, status: r.status, priority: r.priority, dueDate: r.due_date, assignedTo: { name: r.assigned_to_name, avatar: r.assigned_to_avatar } });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

app.put('/api/tasks/:id', async (req, res) => {
  try {
    const { status } = req.body;
    await pool.query('UPDATE tasks SET status=$1 WHERE id=$2', [status, req.params.id]);
    res.json({ success: true });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

app.delete('/api/tasks/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM tasks WHERE id=$1', [req.params.id]);
    res.json({ success: true });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

// ─── TARGETS ─────────────────────────────────────────────────────────────────

app.get('/api/targets', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM targets ORDER BY created_at DESC');
    const targets = result.rows.map(r => ({
      id: r.id,
      userId: r.user_id,
      userName: r.user_name,
      userAvatar: r.user_avatar,
      userRole: r.user_role,
      category: r.category,
      current: Number(r.current_value),
      target: Number(r.target_value),
      unit: r.unit,
      period: r.period
    }));
    res.json(targets);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/targets', async (req, res) => {
  try {
    const { id, userId, userName, userAvatar, userRole, category, current, target, unit, period } = req.body;
    const result = await pool.query(
      `INSERT INTO targets (id, user_id, user_name, user_avatar, user_role, category, current_value, target_value, unit, period)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *`,
      [id, userId, userName, userAvatar, userRole, category, current || 0, target, unit, period]
    );
    const r = result.rows[0];
    res.json({ id: r.id, userId: r.user_id, userName: r.user_name, userAvatar: r.user_avatar, userRole: r.user_role, category: r.category, current: Number(r.current_value), target: Number(r.target_value), unit: r.unit, period: r.period });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

app.delete('/api/targets/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM targets WHERE id=$1', [req.params.id]);
    res.json({ success: true });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

// ─── EMPLOYEES ───────────────────────────────────────────────────────────────

app.get('/api/employees', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM employees ORDER BY created_at DESC');
    const employees = result.rows.map(r => ({
      id: r.id,
      name: r.name,
      email: r.email,
      role: r.role,
      status: r.status,
      salary: r.salary,
      commission: r.commission,
      avatar: r.avatar
    }));
    res.json(employees);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/employees', async (req, res) => {
  try {
    const { id, name, email, role, status, salary, commission, avatar } = req.body;
    const result = await pool.query(
      `INSERT INTO employees (id, name, email, role, status, salary, commission, avatar)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`,
      [id, name, email, role, status || 'Active', salary, commission, avatar]
    );
    res.json(result.rows[0]);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

// ─── LEAVE REQUESTS ──────────────────────────────────────────────────────────

app.get('/api/leave-requests', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM leave_requests ORDER BY created_at DESC');
    const requests = result.rows.map(r => ({
      id: r.id,
      employeeName: r.employee_name,
      employeeAvatar: r.employee_avatar,
      type: r.type,
      duration: r.duration,
      status: r.status
    }));
    res.json(requests);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

app.put('/api/leave-requests/:id', async (req, res) => {
  try {
    const { status } = req.body;
    await pool.query('UPDATE leave_requests SET status=$1 WHERE id=$2', [status, req.params.id]);
    res.json({ success: true });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/leave-requests', async (req, res) => {
  try {
    const { id, employeeName, employeeAvatar, type, duration, status } = req.body;
    const result = await pool.query(
      `INSERT INTO leave_requests (id, employee_name, employee_avatar, type, duration, status)
       VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`,
      [id, employeeName, employeeAvatar, type, duration, status || 'Pending']
    );
    const r = result.rows[0];
    res.json({ id: r.id, employeeName: r.employee_name, employeeAvatar: r.employee_avatar, type: r.type, duration: r.duration, status: r.status });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

// ─── HEALTH ──────────────────────────────────────────────────────────────────

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
