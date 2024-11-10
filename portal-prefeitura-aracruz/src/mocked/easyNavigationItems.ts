import Book from "../assets/icons/book.svg";
import Computer from "../assets/icons/computer.svg";
import Servers from "../assets/icons/servers.svg";
import Onbudsman from "../assets/icons/onbudsman.svg";
import Document from "../assets/icons/document.svg";
import Info from "../assets/icons/info.svg";

export const easyNavigationItems = [
  {
    label: "DIÁRIO OFICIAL",
    icon: Book,
    route: "/portais/diario-oficial",
  },
  {
    label: "TRANSPARÊNCIA",
    icon: Computer,
    route: "/portais/transparencia",
  },
  {
    label: "SERVIDORES",
    icon: Servers,
    route: "/servidores",
  },
  {
    label: "OUVIDORIA",
    icon: Onbudsman,
    route: "/ouvidoria",
  },
  {
    label: "LICITAÇÕES",
    icon: Document,
    route: "/licitacoes",
  },
  {
    label: "E-SIC",
    icon: Info,
    route: "/portais/e-sic",
  },
];
