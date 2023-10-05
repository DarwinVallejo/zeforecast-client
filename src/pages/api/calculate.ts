import type { NextApiRequest, NextApiResponse } from "next";
import { buildBody, downloadFile, makeRequest, validateForm } from "./controller";
import formidable from "formidable";

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
    const form = formidable({ multiples: true, maxFiles: 2 });
    const [field, files] = await form.parse(req);
    const { initial, final } = field;
    const { calendar, premises } = files;
    const start_date = initial && initial[0];
    const end_date = final && final[0] ;
    const { valid, msn } = validateForm({calendar,premises,start_date,end_date});
    
    if (!valid) { return res.status(400).json({ valid, msn }); }
    
    const {file} = await makeRequest({calendar,premises,start_date, end_date});
    downloadFile(file).then(() => {
      return res.status(200).json({ok:true, msn:"Forecast downloaded"});
    }).catch((err) => {
      return res.status(400).json({ok:false, err});
    })
  }
}
