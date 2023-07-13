import * as express from 'express';
import { EmployeeProductivityR as R } from '../EmployeeProductivityR';
import Axios from 'axios';

export class EmployeeProductivityM {
    
    public async getEmployeePoints(data: R.getEmployeePoints.RequestI): Promise<R.getEmployeePoints.ResponseI>{

        const sUrl = 'https://snufkin.youtrack.cloud/api/issues';

        const vAxiosResponse = await Axios({
            method: 'get',
            url: sUrl,
            responseType: 'json',
            timeout: 20000,
            params: {
                fields: 'id,tags(name)',
                query: `#${data.employee_name} #Завершено #{${data.sprint}}`
            },
            headers: {
                'Authorization': 'Bearer 1689261284877.a819b89f-0243-4d73-9d14-d586c8ad0b13.86ee826b-43c8-4a03-adb7-9da19d0e730e.a819b89f-0243-4d73-9d14-d586c8ad0b13 0-0-0-0-0;1.MC0CFQCF53Uhj7T+JZ8elce2ruhZVpnFLAIUe66AUtvNDzA2bMsACf2NceWf8fE='
            }
        })

        const avIssues = vAxiosResponse.data;

        let cntPoints = 0;

        for (let i = 0; i < avIssues.length; i++){
            const vIssue = avIssues[i];
            const avTags = vIssue.tags;

            for(let j = 0; j < avTags.length; j++){
                const vTag = avTags[j];

                switch(vTag.name){
                    case 'Текущая':
                        cntPoints += 1;
                        break;
                    case 'Маленькая':
                        cntPoints += 4;
                        break;
                    case 'Средняя':
                        cntPoints += 20;
                        break;
                    case 'Стратегическая':
                        cntPoints += 100;
                        break;
                }
            }
        }

        return {
            cnt_points: cntPoints
        }
    }
}