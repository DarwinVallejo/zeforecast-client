import Head from "next/head";
import Layout from "@/components/layout";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Stack,
} from "@mui/material";
import Section from "@/components/section";

import InputFileUpload from "@/components/file";
import { useForm } from "react-hook-form";
import { ForecastSchema, forecastSchema } from "@/schemas/forecast.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { blue } from "@mui/material/colors";

export default function Home() {
  const { register, handleSubmit } = useForm<ForecastSchema>({
    resolver: yupResolver(forecastSchema),
  });

  const onSubmit = (data: ForecastSchema) => {
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container columnGap={6} justifyContent={"center"}>
            <Grid item xs={8}>
              <Section title="Forecast">
                <Grid container>
                  <Grid item xs={6}>
                    <FormControl className="inputDate" fullWidth>
                      <FormLabel>Fecha inicial</FormLabel>
                      <Input fullWidth type="date" {...register("startDate")} />
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl className="inputDate" fullWidth>
                      <FormLabel>Fecha final</FormLabel>
                      <Input fullWidth type="date" {...register("endDate")} />
                    </FormControl>
                  </Grid>
                </Grid>
              </Section>
            </Grid>
            <Grid item container xs={8}>
              <Grid item xs={6}>
                <div className="">
                  <Stack direction={"row"} gap={2}>
                    <InputFileUpload {...register("calendarFile")} />
                  </Stack>
                </div>
              </Grid>
              <Grid item xs={6} display={"flex"}>
                <div>
                  <Stack direction={"row"} gap={2}>
                    <InputFileUpload {...register("settingFile")} />
                  </Stack>
                </div>
              </Grid>
            </Grid>
            <Grid
              xs={8}
              display={"flex"}
              justifyContent={"center"}
              paddingTop={8}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{ width: "300px", backgroundColor: blue[500] }}
                type="submit"
              >
                Procesar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Layout>
    </>
  );
}
