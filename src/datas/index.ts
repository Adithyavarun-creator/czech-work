import {
  faBuilding,
  faCircleCheck,
  faComment,
  faHandHoldingDollar,
  faHeadset,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

interface SliderData {
  id: number;
  imageUrl: string;
  title: string;
  subtitle: string;
}

interface IdentityData {
  id: number;
  title: string;
  description: string;
  icon: any;
}

export const sliderDatas: SliderData[] = [
  {
    id: 1,
    imageUrl:
      "https://www.pzmokna.cz/wp-content/uploads/2020/09/u1-640x427.jpg",
    title: "plastic windows and doors",
    subtitle:
      "Plastic windows and doors Ekosun, Salamander, Aluplast, Gealan and Brugman",
  },
  {
    id: 2,
    imageUrl:
      "https://www.pzmokna.cz/wp-content/uploads/2020/09/aaauvodkavrata-640x427.jpg",
    title: "SECTIONAL AND INDUSTRIAL DOORS",
    subtitle: "Modern sectional and industrial garage doors of all sizes.",
  },
  {
    id: 3,
    imageUrl:
      "https://www.pzmokna.cz/wp-content/uploads/2020/09/dvereee-640x427.jpg",
    title: "INTERIOR DOORS AND COVERS",
    subtitle:
      "Interior doors and linings of the brands Erkado, VERTE, DRE, PORTA Door and CAG.",
  },
  {
    id: 4,
    imageUrl:
      "https://www.pzmokna.cz/wp-content/uploads/2020/09/u6-640x427.jpg",
    title: "LODGE AND WINTER GARDENS",
    subtitle:
      "It expands the useful area of ​​the apartment and naturally increases the comfort of living.",
  },
  {
    id: 5,
    imageUrl:
      "https://www.pzmokna.cz/wp-content/uploads/2023/06/pergoly-640x427-1.jpg",
    title: "PERGOLAS",
    subtitle: "Make yourself comfortable on the terrace or in the garden.",
  },
  {
    id: 6,
    imageUrl:
      "https://www.pzmokna.cz/wp-content/uploads/2023/03/posuvne-dvere-640x427.jpg",
    title: "SLIDING SYSTEMS FROM PVC",
    subtitle:
      "Patio sliding systems – PSK, Aluplast HST 85, Salamander EvolutionDrive 82, EkoSun HST, Gealan HST",
  },
  {
    id: 7,
    imageUrl:
      "https://www.pzmokna.cz/wp-content/uploads/2020/09/u4-640x427.jpg",
    title: "SECURITY DOOR",
    subtitle:
      "They are designed to protect your apartment from smoke, fire, noise, etc.",
  },
  {
    id: 8,
    imageUrl:
      "https://www.pzmokna.cz/wp-content/uploads/2020/09/u5-640x427.jpg",
    title: "SHIELDING TECHNOLOGY",
    subtitle: "Shading and blackout systems are an integral part of our homes.",
  },
  {
    id: 9,
    imageUrl:
      "https://www.pzmokna.cz/wp-content/uploads/2020/12/louver-930187_640-640x427.jpg",
    title: "Additional assortment for windows",
    subtitle:
      "We supply an additional assortment for windows, which includes window sills.",
  },
];

export const identityDatas: IdentityData[] = [
  {
    id: 1,
    title: "Reliability",
    description:
      "We strictly adhere to all deadlines and what we agreed on with the customer.",
    icon: faCircleCheck,
  },
  {
    id: 2,
    title: "Quality",
    description:
      "You can choose from a wide range of goods that you can touch in our sample stores.",
    icon: faStar,
  },
  {
    id: 3,
    title: "Complex solution",
    description:
      "We offer complete execution of orders, from planning and solving technical issues to the construction itself.",
    icon: faComment,
  },
  {
    id: 4,
    title: "Expertise",
    description:
      "We meet all norms and industry standards that are required of us.",
    icon: faHeadset,
  },
  {
    id: 5,
    title: "Experience",
    description:
      "We have more than 20 years of industry experience, which we are happy to share with you.",
    icon: faBuilding,
  },
  {
    id: 6,
    title: "Wholesale",
    description:
      "We also sell all products wholesale to self-employed people and companies.",
    icon: faHandHoldingDollar,
  },
];
