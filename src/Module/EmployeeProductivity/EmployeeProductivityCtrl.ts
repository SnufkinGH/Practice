import * as express from "express";
import { EmployeeProductivityM } from "./Model/EmployeeProductivityM";
import { EmployeeProductivityR as R } from "./EmployeeProductivityR";

const router = express.Router();

export class EmployeeProductivityCtrl {

    employeeProductivityM: EmployeeProductivityM;

    constructor() {
        this.employeeProductivityM = new EmployeeProductivityM();
    }

}

router.post(
    R.getEmployeePoints.route,
    async (req: express.Request, res: express.Response) => {
        try {
            const ctrl = new EmployeeProductivityCtrl();
            const out = await ctrl.employeeProductivityM.getEmployeePoints(req.body);
            res.send(out);
        }catch(e){
            console.log(e);
            res.send('ОШИБКА');
        }
        
    }
);

export { router };