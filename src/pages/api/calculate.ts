import type { NextApiRequest, NextApiResponse } from 'next'
import { buildBody, validateForm } from "./controller";
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
    const form = formidable({multiples:true, maxFiles:2});
    const[field, files] = await form.parse(req);
    const {initial, final} = field;
    const {calendar, premises} = files;
    const {valid, msn} = validateForm({calendar, premises, initial: initial[0], final:final[0]});
    if(!valid){
        return res.status(400).json({valid, msn});
    }
    const body = buildBody({calendar, premises, initial:initial[0], final:final[0]});
    return res.status(200).json({data: body})
  } 
    return res.status(400).end();
}
