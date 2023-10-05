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
    const workbook = XLSX.readFile(excel[0].filepath, {cellDates:true});
    return XLSX.utils.sheet_to_json(
        workbook.Sheets[workbook.SheetNames[0]]
    )
}

const buildBody = async({calendar, premises, start_date, end_date}: FormType) => {
    const calendarData = getExcelData(calendar);
    const premisesData = getExcelData(premises);
    const request = await axios.get(REQUEST_URL)
    return {
        discount_calendar: calendarData,
        premises: premisesData,
        request_period:{
            start_date,
            end_date
        }
    }
}

export const makeRequest = async ({calendar, premises, start_date, end_date}: FormType) => {
    const data =  await buildBody({calendar, premises, start_date, end_date});
    console.log(data);
    const _response  = await axios.get(REQUEST_URL);
    return RESPONSE_MOCK.data;
};
