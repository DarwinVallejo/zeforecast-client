import dayjs from "dayjs";
import * as yup from "yup";

export const forecastSchema = yup.object().shape({
  startDate: yup
    .date()
    .typeError("Campo requerido")
    .required("Campo requerido"),
  endDate: yup
    .date()
    .typeError("Campo requerido")
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
  premises: yup.mixed(),

  calendar: yup.mixed(),
});

export type ForecastSchema = yup.InferType<typeof forecastSchema>;
