export type TypeTag = {
  tagName: string;
};

export type TypeCompanyName =
  | "FLFI"
  | "Varo Bank"
  | "Cinamon"
  | "TBD"
  | "Filomine"
  | "March Square"
  | "Freelance"
  | "CCA";

export interface IfItemWork {
  id: number | string;
  projectName: string;
  url: string;
  thumbnailUrl: string;
  jobTitle: string;
  tags: TypeTag[];
  isPassword: boolean;
  companyName: TypeCompanyName;
}

export const ListWork: IfItemWork[] = [
  {
    id: 1,
    projectName: "Casual System",
    thumbnailUrl: "assets",
    tags: [{ tagName: "Unreal engine5" }, { tagName: "Python" }],
    jobTitle: "Technical Artist",
    url: "cnm-casual",
    isPassword: true,
    companyName: "Cinamon",
  },
  {
    id: 1,
    projectName: "Character Customizing System Prototype",
    thumbnailUrl: "assets",
    tags: [
      { tagName: "Unreal engine5" },
      { tagName: "Blueprint" },
      { tagName: "Structure" },
      { tagName: "Python" },
    ],
    jobTitle: "Technical Artist",
    url: "cnm-ccsp",
    isPassword: true,
    companyName: "Cinamon",
  },
  {
    id: 1,
    projectName: "Media Arts",
    thumbnailUrl: "assets",
    tags: [
      { tagName: "Javascript" },
      { tagName: "P5" },
      { tagName: "ChatGPT" },
      { tagName: "Blender" },
      { tagName: "Figma" },
      { tagName: "Adobe Creative" },
    ],
    jobTitle: "Creative Developer",
    url: "about",
    isPassword: true,
    companyName: "Freelance",
  },
  {
    id: 1,
    projectName: "OG Community",
    thumbnailUrl: "assets",
    tags: [{ tagName: "Typescript" }, { tagName: "Vue3" }],
    jobTitle: "Front-end Engineer",
    url: "toon-shader-ue5",
    isPassword: true,
    companyName: "FLFI",
  },
  {
    id: 1,
    projectName: "OG Community Launching Sequnce",
    thumbnailUrl: "assets",
    tags: [{ tagName: "Adobe Creative" }],
    jobTitle: "Motion Designer",
    url: "about",
    isPassword: true,
    companyName: "FLFI",
  },
  {
    id: 1,
    projectName: "NFT Terminal",
    thumbnailUrl: "assets",
    tags: [
      { tagName: "Typescript" },
      { tagName: "Vue3" },
      { tagName: "Discord" },
    ],
    jobTitle: "Front-end Engineer",
    url: "about",
    isPassword: true,
    companyName: "FLFI",
  },
  {
    id: 1,
    projectName: "Tax Refund Guide",
    thumbnailUrl: "assets",
    tags: [
      { tagName: "Adobe Creative" },
      { tagName: "Educational Advertising" },
    ],
    jobTitle: "UX Engineer",
    url: "about",
    isPassword: true,
    companyName: "Varo Bank",
  },
  {
    id: 1,
    projectName: "Varo Future App",
    thumbnailUrl: "assets",
    tags: [{ tagName: "Adobe Creative" }, { tagName: "Lottie Files" }],
    jobTitle: "UX Engineer",
    url: "about",
    isPassword: true,
    companyName: "Varo Bank",
  },
  {
    id: 1,
    projectName: "In-App Graphic Animation",
    thumbnailUrl: "assets",
    tags: [{ tagName: "Adobe Creative" }, { tagName: "Lottie Files" }],
    jobTitle: "UX Engineer",
    url: "about",
    isPassword: true,
    companyName: "Varo Bank",
  },
  {
    id: 0,
    projectName: "OCI Design System",
    thumbnailUrl: "assets",
    tags: [{ tagName: "Branding" }],
    jobTitle: "Graphic Designer",
    url: "about",
    isPassword: false,
    companyName: "TBD",
  },
  {
    id: 2,
    projectName: "VR",
    thumbnailUrl: "assets",
    tags: [{ tagName: "VR" }, { tagName: "Unreal Engine4" }],
    jobTitle: "Creative Developer",
    url: "about",
    isPassword: false,
    companyName: "CCA",
  },
];
