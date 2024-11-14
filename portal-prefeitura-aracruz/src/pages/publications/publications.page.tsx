import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Breadcrumbs,
  Grid,
  Link,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import { BreadCrumsContainer } from "components/breadCrumb";
import { PageTitle } from "components/pageTitle";
import TabPanel from "components/tabPanel";
import { Wrapper } from "components/wrapper";
import { publicationsTabs } from "mocked/publicationsTabs";
import { TabsContainer } from "./publications.styles";
import { DiaryTabContent } from "./tabsContents/diaryTabContent.component";
import { CovidTabContent } from "./tabsContents/covidTabContent.component";
import { useParams } from "react-router";

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const tabsMapping = [
  {
    index: 0,
    value: "diario-oficial",
  },
  {
    index: 1,
    value: "covid-19",
  },
];

export const PublicationsPage = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const { tab } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (tab) {
      setActiveTab(tabsMapping.filter((item) => item.value === tab)[0].index);
    }
  }, [tab]);

  const handleChangeTab = (_event: ChangeEvent<{}>, value: number) => {
    setActiveTab(value);
  };

  return (
    <>
      <BreadCrumsContainer>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            Página inicial
          </Link>
          <Typography color="textPrimary">Publicações</Typography>
        </Breadcrumbs>
      </BreadCrumsContainer>
      <PageTitle>Publicações</PageTitle>
      <Wrapper>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TabsContainer>
              <Tabs
                value={activeTab}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                onChange={handleChangeTab}
              >
                {publicationsTabs.map((item: any, index: number) => (
                  <Tab
                    label={item.name}
                    key={index}
                    value={index}
                    {...a11yProps(index)}
                  />
                ))}
              </Tabs>
            </TabsContainer>
          </Grid>
          <Grid item xs={12}>
            <TabPanel key={"diario-oficial"} value={activeTab} index={0}>
              <DiaryTabContent />
            </TabPanel>
            <TabPanel key={"covid-19"} value={activeTab} index={1}>
              <CovidTabContent />
            </TabPanel>
          </Grid>
        </Grid>
      </Wrapper>
    </>
  );
};
