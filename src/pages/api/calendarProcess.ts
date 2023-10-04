import formidable from "formidable";
import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const form = formidable({});
    try {
      const [, files] = await form.parse(req);
      const excelFile = files;

      if (!excelFile.file) {
        res.status(400).json({ error: "No file uploaded" });
        return;
      }
      console.log(excelFile.file);

      const XLSX = require("xlsx");
      const workbook = XLSX.readFile(excelFile.file[0].filepath, {
        cellDates: true,
        dateNF: "dd/mm/yy",
      });
      const jsonData = XLSX.utils.sheet_to_json(
        workbook.Sheets[workbook.SheetNames[0]]
      );

      // Return the JSON data in the response
      res.status(200).json({
        message: "File uploaded and processed successfully",
        data: jsonData,
      });
    } catch (error) {
      console.error("Error parsing form:", error);
      res.status(500).json({ error: "Error parsing form" });
      return;
    }
  } else {
    res.status(405).end();
  }
}
