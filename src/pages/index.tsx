import Head from "next/head";
import Layout from "@/components/layout";
import { Box, Button, Stack } from "@mui/material";
import Section from "@/components/section";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { CloudUpload, Settings } from "@mui/icons-material";
import ZeTable from "@/components/table";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Box>
          <Section
            title="Calendario"
            description="You can set discount calendar date in excel format"
            icon={<CalendarMonthIcon fontSize="large" />}
          >
            <Stack direction={"row"} gap={2}>
              <Button variant="contained" startIcon={<CloudUpload />}>
                Subir archivo
              </Button>

            </Stack>
          </Section>
          <Section
            title="Configuración"
            icon={<Settings fontSize="large" />}
          >
            <Box className="table">
              <ZeTable/>
            </Box>
          </Section>
          <Section
            title="Extras"
            icon={<Settings fontSize="large" />}
          >
            <Stack direction={"row"} gap={2}>
              <Button variant="contained" startIcon={<CloudUpload />}>
                Subir archivo
              </Button>
            </Stack>
          </Section>
        </Box>
      </Layout>
    </>
  );
}
