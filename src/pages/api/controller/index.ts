import * as XLSX from 'xlsx';

export const validateForm = ({calendar, premises, initial, final}: FormType) => {
    if(calendar === undefined){
        return {valid: false, msn: "Introduce a calendar file"}
    }
    if(premises === undefined){
        return {valid: false, msn: "Introduce a premises file"}
    }
    if(initial === undefined){
        return {valid: false, msn: "Introduce initial date"}
    }
    if(final === undefined){
        return {valid: false, msn: "Introduce final date"}
    }
    return {valid: true, msn: undefined}
}
const getExcelData = (excel:any) => {
    const workbook = XLSX.readFile(excel[0].filepath, {
        cellDates: true,
        dateNF: "dd/mm/yy",
      });
      return XLSX.utils.sheet_to_json(
        workbook.Sheets[workbook.SheetNames[0]]
      );}

export const buildBody = ({calendar, premises, initial, final}: FormType) => {
    const calendarData = getExcelData(calendar);
    const premisesData = getExcelData(premises);
    return {
        calendar: calendarData,
        premises: premisesData,
        initial,
        final
    }
}