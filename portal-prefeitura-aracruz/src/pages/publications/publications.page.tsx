import React, { ChangeEvent, useState } from "react";
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
import { ContentComponent } from "./components/content.component";

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

export const PublicationsPage = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

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
            {publicationsTabs.map((item, i) => (
              <TabPanel key={i} value={activeTab} index={i}>
                <ContentComponent title={item.name} />
              </TabPanel>
            ))}
          </Grid>
        </Grid>
      </Wrapper>
    </>
  );
};
