import express from 'express';

import * as EmployeeProductivityCtrl from './Module/EmployeeProductivity/EmployeeProductivityCtrl';

const PORT = 5111;

const app = express();

app.use(express.json());
app.use('/api', EmployeeProductivityCtrl.router)

app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT));