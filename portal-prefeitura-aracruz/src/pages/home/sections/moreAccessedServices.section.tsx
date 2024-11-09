import React from "react";
import {
  AllServicesButton,
  MoreAccessedService,
  MoreAccessedServiceDescription,
  MoreAccessedServicesButtonContainer,
  MoreAccessedServicesContainer,
  MoreAccessedServiceTitle,
  Section,
  SectionTitle,
} from "../homePage.styles";
import Document from "../../../assets/icons/services-icons/document.svg";
import Money from "../../../assets/icons/services-icons/money-paper.svg";
import Phone from "../../../assets/icons/services-icons/phone.svg";
import Bulb from "../../../assets/icons/services-icons/bulb.svg";
import Users from "../../../assets/icons/services-icons/users.svg";
import Home from "../../../assets/icons/services-icons/home.svg";
import Paper from "../../../assets/icons/services-icons/paper.svg";
import { useNavigate } from "react-router";

const MoreAccessedServicesSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Protocolo Municipal",
      description: "Abertura e consulta de processos digitais",
      icon: Document,
    },
    {
      title: "Atendimento SAC",
      description: "Atendimento ao Cidadão",
      icon: Phone,
    },
    {
      title: "Análise de Projetos",
      description: "Abertura e Consulta de Projetos/Alvarás Digitais",
      icon: Document,
    },
    {
      title: "Iluminação Pública",
      description: "Solicitação de reparo de iluminação pública",
      icon: Bulb,
    },
    {
      title: "PAT - Vagas de Emprego",
      description: "Consulta das vagas de emprego disponíveis",
      icon: Users,
    },
    {
      title: "Inscrição Habilitação",
      description: "Cadastro Habitacional do Município",
      icon: Home,
    },
    {
      title: "Emissão de Taxas",
      description: "Guia de pagamento para taxas e preços públicos",
      icon: Money,
    },
    {
      title: "IPTU",
      description: "Guias do Imposto Predial e Territorial Urbano",
      icon: Money,
    },
    {
      title: "ITBI",
      description: "Imposto sobre a Transmissão de Bens Imóveis",
      icon: Money,
    },
    {
      title: "Multas de Trânsito",
      description: "Consulta, 2ª via, recurso e indicação de condultor",
      icon: Money,
    },
    {
      title: "Nota Fiscal Eletrônica",
      description: "NFS-e - Nota Fiscal de Serviços Eletrônica",
      icon: Paper,
    },
    {
      title: "Concurso Público",
      description: "Editais e publicações de concursos públicos",
      icon: Document,
    },
  ];

  return (
    <Section>
      <SectionTitle>Serviços mais acessados</SectionTitle>
      <MoreAccessedServicesContainer>
        {services.map((service) => (
          <MoreAccessedService key={service.title}>
            <img src={service.icon} alt="" />
            <div>
              <MoreAccessedServiceTitle>
                {service.title}
              </MoreAccessedServiceTitle>
              <MoreAccessedServiceDescription>
                {service.description}
              </MoreAccessedServiceDescription>
            </div>
          </MoreAccessedService>
        ))}
      </MoreAccessedServicesContainer>
      <MoreAccessedServicesButtonContainer>
        <AllServicesButton onClick={() => navigate("/services")}>
          Todos os serviços
        </AllServicesButton>
      </MoreAccessedServicesButtonContainer>
    </Section>
  );
};

export default MoreAccessedServicesSection;
