from openpyxl.worksheet.table import Table,TableStyleInfo
import openpyxl
import base64 

excel_data = [
    {
        "name":"----" ,
        "data": [
            ('VOLUMEN', "ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE", "TOTAL"),
            ('BLUE HS', 163, 291, 406, 389, 747, 435, 459, 650, 381, 470, 1446, 381, 6218),
            ('COLCHONES BASICS 1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
            ('COLCHONES BASICS 2', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
            ('COLCHONES BASICS X', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
            ('COLCHONES BLUE', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
            ('COLCHONES LUUNA', 673, 1086, 2096, 1582, 1981, 1651, 1689, 2093, 1325, 1730, 3458, 1325, 20689),
            ('COLCHONES AIR', 71, 157, 213, 200, 222, 187, 203, 252, 186, 215, 308, 186, 2400),
            ('COLCHONES SIGNATURE', 4, 15, 23, 17, 24, 19, 19, 28, 16, 25, 50, 16, 256),
            ('COLCHONES ONE', 77, 192, 329, 236, 377, 257, 271, 410, 230, 275, 761, 230, 3645),
            ('ONE PLUS', 30, 81, 151, 138, 175, 175, 193, 217, 153, 197, 368, 153, 2031),
            ('ONE SNOW', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
            ('ONE SNOW PLUS', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
            ('COLCHONES NATIV', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
            ('ORIGINAL PLUS', 180, 462, 644, 508, 757, 562, 590, 841, 461, 605, 1388, 461, 7459),
            ('JUEGO BOX + COLCHÓN ORIGINAL PLUS', 0, 253, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 253),
            ('JUEGO BOX + COLCHÓN ONE', 0, 147, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1),
        ]
    },
    {
        "name":"other" ,
        "data": [
            ('VOLUMEN', "ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE", "TOTAL"),
            ('BASES ELÉCTRICAS', 163, 291, 406, 389, 747, 435, 459, 650, 381, 470, 1446, 381, 6218),
            ('BASES JALISCOS', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
            ('BASES GDL', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
            ('BASES MÉRIDA', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
        ]
    }, 
    {
        "name":"totals" ,
        "data": [
            ('TIPO', "TOTAL ENERO", "TOTAL FEBRERO", "TOTAL MARZO", "TOTAL ABRIL", "TOTAL MAYO", "TOTAL JUNIO", "TOTAL JULIO", "TOTAL AGOSTO", "TOTAL SEPTIEMBRE", "TOTAL OCTUBRE", "TOTAL NOVIEMBRE", "TOTAL DICIEMBRE", "TOTAL"),
            ('VOLUMEN', 1354,2687,4408,3678,5999, 4130, 4350 , 5802 , 3519 , 4457 , 9930 , 3543 , 5857),
            ('VALOR', 1354,2687,4408,3678,5999, 4130, 4350 , 5802 , 3519 , 4457 , 9930 , 3543 , 5857),
        ]
    },
]

def save_data_in_excel(workbook, sheet, data, name):
    num_rows1 = len(data)
    num_cols1 = len(data[0])

    for row in data:
        sheet.append(row)

    table = Table(displayName="table_"+name, ref=f"A1:{chr(ord('A') + num_cols1 - 1)}{num_rows1}")
    sheet.add_table(table)
    space(sheet)

def space(sheet):
    sheet.append([""])
    sheet.append([""])
    sheet.append([""])

def run():
    workbook = openpyxl.Workbook()
    sheet = workbook.active
    for table in excel_data:
        save_data_in_excel(workbook, sheet, table.get("data"), table.get("name"))

    workbook.save('tabla.xlsx')

    filepath = 'tabla.xlsx'
    workbook = openpyxl.load_workbook(filepath)

    binary_data = None
    with open(filepath, "rb") as file:
        binary_data = file.read()
    base64_data = base64.b64encode(binary_data).decode()
    print(base64_data)

run()