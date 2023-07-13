
export namespace EmployeeProductivityR {

    export namespace getEmployeePoints {

        export const route = '/employee-productivity/get-employee-points';

        export interface RequestI {
            employee_name: string; // Имя сотрудника
            sprint: string; // Название спринта
        }

        export interface ResponseI {
            employee_name: string; // Имя сотрудника
            cnt_points: number; // Количество баллов сотрудника
        }
}
}
