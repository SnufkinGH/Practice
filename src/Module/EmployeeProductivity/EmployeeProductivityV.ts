import { EmployeeProductivityR as R } from './EmployeeProductivityR';
export class EmployeeProductivityV {
    
    public static getEmployeePoints(data: R.getEmployeePoints.RequestI): R.getEmployeePoints.RequestI {
        
        if (typeof data.employee_name != 'string' || (<string>data.employee_name).length < 0){
            throw new Error('employee_name должно быть не пустым string');
        }
        if (typeof data.sprint != 'string' || (<string>data.sprint).length < 0){
            throw new Error('sprint должно быть не пустым string');
        }

        return data;
    }
}