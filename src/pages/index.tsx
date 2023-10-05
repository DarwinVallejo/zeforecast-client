import Head from "next/head";
import Image from "next/image";

import Layout from "@/components/layout";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import Section from "@/components/section";

import { Controller, useForm } from "react-hook-form";
import { ForecastSchema, forecastSchema } from "@/schemas/forecast.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { blue, green } from "@mui/material/colors";
import { MuiFileInput } from "mui-file-input";
import useForecast from "@/hooks/useForecast";
import dayjs from "dayjs";
import { Download } from "@mui/icons-material";

export default function Home() {
  const { loading, handleClose, onCalculate, openAlert, fileData } =
    useForecast();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ForecastSchema>({
    resolver: yupResolver(forecastSchema),
    defaultValues: {
      calendar: null,
      premises: null,
    },
  });

  return (
    <>
      <Head>
        <title>ZeForecast</title>
        <meta name="description" content="ZeForecast" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://zebrands.mx/wp-content/uploads/2021/07/cropped-WEB-ZEB-11-32x32.png"
          sizes="32x32"
        />
      </Head>
      <Layout>
        <form onSubmit={handleSubmit(onCalculate)}>
          <Grid container columnGap={6} justifyContent={"center"}>
            <Grid item xs={8}>
              <Section
                title="ZeForecast"
                icon={
                  <Image
                    src={"/logo.png"}
                    alt={"section logo"}
                    width={50}
                    height={50}
                  />
                }
              >
                <Grid container>
                  <Grid item xs={6}>
                    <FormControl className="inputDate">
                      <FormLabel>Fecha inicial</FormLabel>
                      <Input
                        type="date"
                        {...register("startDate")}
                        error={!!errors.startDate}
                      />
                      {!!errors.startDate && (
                        <FormHelperText error>
                          {errors.startDate?.message}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl className="inputDate">
                      <FormLabel>Fecha final</FormLabel>
                      <Input
                        type="date"
                        {...register("endDate")}
                        error={!!errors.endDate}
                      />
                      {!!errors.endDate && (
                        <FormHelperText error>
                          {errors.endDate?.message}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={6} sx={{ marginTop: 5 }}>
                    <FormControl className="inputDate">
                      <FormLabel>Calendario de promociones</FormLabel>
                      <Controller
                        control={control}
                        rules={{
                          required: true,
                        }}
                        render={({
                          field: { onChange, value },
                          fieldState,
                        }) => (
                          <MuiFileInput
                            value={value}
                            onChange={onChange}
                            placeholder="Subir archivo excel"
                            error={fieldState.invalid}
                            helperText={
                              fieldState.invalid ? "Campo requerido" : ""
                            }
                          />
                        )}
                        name="calendar"
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={6} sx={{ marginTop: 5 }}>
                    <FormControl className="inputDate">
                      <FormLabel>Premisas</FormLabel>
                      <Controller
                        control={control}
                        rules={{
                          required: true,
                        }}
                        render={({
                          field: { onChange, value },
                          fieldState,
                        }) => (
                          <MuiFileInput
                            value={value}
                            onChange={onChange}
                            placeholder="Subir archivo excel"
                            error={fieldState.invalid}
                            helperText={
                              fieldState.invalid ? "Campo requerido" : ""
                            }
                          />
                        )}
                        name="premises"
                      />
                    </FormControl>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    justifyContent={"left"}
                    sx={{ marginTop: 8 }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      disabled={loading}
                      sx={{ width: "300px", backgroundColor: blue[800] }}
                      type="submit"
                    >
                      Procesar
                    </Button>
                  </Grid>
                  {fileData && (
                    <Grid
                      item
                      xs={6}
                      justifyContent={"left"}
                      sx={{ marginTop: 8 }}
                    >
                      <Button
                        variant="contained"
                        color="secondary"
                        download={`forecast_${dayjs().unix()}.xlsx`}
                        href={fileData}
                        disabled={loading}
                        sx={{
                          width: "300px",
                          backgroundColor: green[800],
                          "&:hover": {
                            backgroundColor: green[700],
                          },
                        }}
                        type="submit"
                        endIcon={<Download />}
                      >
                        Descargar
                      </Button>
                    </Grid>
                  )}
                </Grid>
              </Section>
            </Grid>
          </Grid>
        </form>
      </Layout>
      <Dialog open={loading}>
        <DialogContent>
          <Stack alignContent={"center"} alignItems={"center"} gap={2}>
            <CircularProgress sx={{ color: blue[500] }} />
            <Typography>Calculando</Typography>
          </Stack>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{
          horizontal: "right",
          vertical: "bottom",
        }}
      >
        <Alert
          onClose={handleClose}
          variant="filled"
          severity="success"
          sx={{ width: "100%" }}
        >
          Proceso realizado correctamente
        </Alert>
      </Snackbar>
    </>
  );
}
