import type { NextApiRequest, NextApiResponse } from "next";
import { makeRequest, validateForm } from "./controller";
import formidable from "formidable";
import dayjs from "dayjs";

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
    const start_date = initial && dayjs(initial[0]).format("YYYY-MM-DD");
    const end_date = final && dayjs(final[0]).format("YYYY-MM-DD");
    const { valid, msn } = validateForm({
      calendar,
      premises,
<<<<<<< HEAD
      start_date,
      end_date,
=======
      initial: initial?.[0] ?? "",
      final: final?.[0] ?? "",
>>>>>>> 58a077b9f13d636c69704f6998a51b6355ba3737
    });
    if (!valid) {
      return res.status(400).json({ valid, msn });
    }
    const { file } = await makeRequest({
      calendar,
      premises,
<<<<<<< HEAD
      start_date,
      end_date,
=======
      initial: initial?.[0] ?? "",
      final: final?.[0] ?? "",
>>>>>>> 58a077b9f13d636c69704f6998a51b6355ba3737
    });
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="forecast.xlsx"`
    );
    res.end(file, "base64");
  }
}
