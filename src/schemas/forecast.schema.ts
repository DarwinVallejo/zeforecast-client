import dayjs from "dayjs";
import * as yup from "yup";

export const forecastSchema = yup.object().shape({
  startDate: yup.date().required("Campo requerido"),
  endDate: yup
    .date()
    .required("Campo requerido")
    .nullable()
    .default(undefined)
    .test(
      "",
      "La fecha de inicio no puede ser mayor a la de fin",
      (val, props) => {
        const to = dayjs(val);
        const from = dayjs(props.parent.startDate);

        if (!from.isAfter(to)) {
          return true;
        }
      }
    ),
  settingFile: yup.mixed(),

  calendarFile: yup.mixed(),
});

export type ForecastSchema = yup.InferType<typeof forecastSchema>;
