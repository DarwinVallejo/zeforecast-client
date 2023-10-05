import { ForecastSchema } from "@/schemas/forecast.schema";
import dayjs from "dayjs";
import { useState } from "react";

const useForecast = () => {
  const [loading, setLoading] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

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
      form.append("calendar", data.calendar);
      form.append("premises", data.premises);

      const response = await fetch("/api/calculate", {
        method: "POST",
        body: form,
      });

      const responseData = await response.json();

      console.log(responseData);
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
  };
};

export default useForecast;
