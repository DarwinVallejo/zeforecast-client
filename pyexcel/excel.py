import openpyxl

excel_data = [
    {
        "name":"----" ,
        "headers": ["VOLUMEN", "ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE", "TOTAL"],
        "data": [
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
            ('JUEGO BOX + COLCHÓN ONE', 0, 147, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 147)
        ]
    }
]

def save_data_in_excel(workbook, sheet, headers, data):
    sheet.append(headers)
    
    for fila in range(len(data)):
        for columna in range(len(data[fila])):
            sheet.cell(row=fila + 2, column=columna + 1, value=data[fila][columna])

    workbook.save('tabla_.xlsx')


def run():
    workbook = openpyxl.Workbook()
    sheet = workbook.active
    for table in excel_data:
        save_data_in_excel(workbook, sheet, table.get("headers"), table.get("data"))

run()