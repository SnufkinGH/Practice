import * as express from 'express';
import { EmployeeProductivityR as R } from '../EmployeeProductivityR';

export class EmployeeProductivityM {
    
    public async getEmployeePoints(data: R.getEmployeePoints.RequestI): Promise<R.getEmployeePoints.ResponseI>{

        return {
            employee_id: 1,
            cnt_points: 100
        }
    }
}