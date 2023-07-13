
export namespace EmployeeProductivityR {

    export namespace getEmployeePoints {

        export const route = '/employee-productivity/get-employee-points';

        export interface RequestI {
            employee_id: number; // ID сотрудника
            date_start: string; // Начало срока
            date_end?: string; // Конец срока
        }

        export interface ResponseI {
            employee_id: number; // ID сотрудника
            cnt_points: number; // Количество баллов сотрудника
        }
}
}
