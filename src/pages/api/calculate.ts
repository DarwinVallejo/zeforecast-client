import { NextApiRequest, NextApiResponse } from "next";
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
    const form = formidable({});
    const _form = await form.parse(req);
    const {premises, initial, final} = _form[0];
    const {calendar} = _form[1];
    const {valid, msn} = validateForm({calendar, premises, initial, final});
    if(!valid){
        return res.status(400).json({valid, msn});
    }
    const body = buildBody({calendar, premises, initial, final});
    console.log({body});
  } 
    return res.status(400).end();
}
