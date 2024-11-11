import { Breadcrumbs, Link, Typography } from "@material-ui/core";
import { BreadCrumsContainer } from "components/breadCrumb";
import { PageTitle } from "components/pageTitle";
import { news } from "mocked/news";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  NewDetailsImage,
  NewDetailsInfo,
  NewDetailsText,
  NewDetailsTitle,
} from "./newDetails.styles";

export function NewDetailsPage() {
  const [newDetails, setNewDetails] = useState<any>({});
  let { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setNewDetails(news.filter((item) => item.id.toString() === id)[0]);
  }, [id]);

  useEffect(() => {
    console.log(newDetails);
  }, [newDetails]);

  return (
    <>
      <BreadCrumsContainer>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            Página inicial
          </Link>
          <Link color="inherit" href="/noticias">
            Notícias
          </Link>
          <Typography color="textPrimary">{newDetails.theme}</Typography>
        </Breadcrumbs>
      </BreadCrumsContainer>
      <PageTitle>NOTÍCIAS</PageTitle>
      <div>
        <NewDetailsTitle>{newDetails.title}</NewDetailsTitle>
        <NewDetailsText>{newDetails.description}</NewDetailsText>
        <NewDetailsInfo>
          Publicado em {newDetails.date} às {newDetails.time} <br /> Por{" "}
          {newDetails.author}
        </NewDetailsInfo>
        <NewDetailsImage src={newDetails.image} alt={newDetails.title} />
        <NewDetailsText>
          <span
            dangerouslySetInnerHTML={{
              __html: newDetails.text,
            }}
          ></span>
        </NewDetailsText>
      </div>
    </>
  );
}
