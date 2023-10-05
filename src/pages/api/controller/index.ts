import { REQUEST_URL, RESPONSE_MOCK } from '@/utils';
import axios from 'axios';
import * as XLSX from 'xlsx';

export const validateForm = ({calendar, premises, start_date, end_date}: FormType) => {
    if(calendar === undefined){
        return {valid: false, msn: "Introduce a calendar file"}
    }
    if(premises === undefined){
        return {valid: false, msn: "Introduce a premises file"}
    }
    if(start_date === undefined){
        return {valid: false, msn: "Introduce start date"}
    }
    if(end_date === undefined){
        return {valid: false, msn: "Introduce end date"}
    }
    return {valid: true, msn: undefined}
}
const getExcelData = (excel:any) => {
    const workbook = XLSX.readFile(excel[0].filepath, {cellText:true});
    return XLSX.utils.sheet_to_json(
        workbook.Sheets[workbook.SheetNames[0]], { raw:false }
    )
}

export const buildBody = async({calendar, premises, start_date, end_date}: FormType) => {
    const calendarData = getExcelData(calendar);
    const premisesData = getExcelData(premises);
    const request = await axios.get(REQUEST_URL)
    return {
        calendar: calendarData,
        premises: premisesData,
        request_period:{
            start_date,
            end_date
        }
    }
}

export const makeRequest = async ({calendar, premises, start_date, end_date}: FormType) => {
    const data =  await buildBody({calendar, premises, start_date, end_date});
    const _response  = await axios.get(REQUEST_URL);
    return RESPONSE_MOCK.data;
};

export const downloadFile = (file:string) => {
    return new Promise((resolve, rejected) => {
        try{
            const bf = Buffer.from(file);
            const workbook = XLSX.read(bf.toString());
            const now = new Date().toISOString();
            XLSX.writeFile(workbook, `./Dowloads/forcast_${now}.xlsx`);
            resolve(true);
        }catch (err) {
            rejected(err);
        }
       
    })
    
}