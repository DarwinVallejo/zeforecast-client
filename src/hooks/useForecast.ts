import { ForecastSchema } from "@/schemas/forecast.schema";
import dayjs from "dayjs";
import { useState } from "react";

const useForecast = () => {
  const [loading, setLoading] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [fileData, setFileData] = useState<string | null>(null);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  const onCalculate = async (data: ForecastSchema) => {
    setLoading(true);
    try {
      const form = new FormData();
      form.append("initial", dayjs(data.startDate).toString());
      form.append("final", dayjs(data.endDate).toString());
      form.append("calendar", data.calendar as any);
      form.append("premises", data.premises as any);

      const response = await fetch("/api/calculate", {
        method: "POST",
        body: form,
      });

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      setFileData(url);
      setLoading(false);
      setOpenAlert(true);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return {
    loading,
    openAlert,
    handleClose,
    onCalculate,
    fileData,
  };
};

export default useForecast;
