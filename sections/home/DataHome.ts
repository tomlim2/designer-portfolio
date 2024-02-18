export type TypeTag = {
  tagName: string;
};

export interface IfItemWork {
  id: number | string;
  title: string;
  url: string;
  thumbnailUrl: string;
  jobTitle: string;
  tags: TypeTag[];
  isPassword: boolean;
}

export const ListWork: IfItemWork[] = [
  {
    id: 1,
    title: "Media arts",
    thumbnailUrl: "/assets",
    tags: [
      { tagName: "Javascript" },
      { tagName: "P5" },
      { tagName: "Blender"},
      { tagName: "Figma"},
      { tagName: "Adobe Creative"},
    ],
    jobTitle: "Creative developer",
    url: "/about",
    isPassword: true,
  },
  {
    id: 1,
    title: "FLFI",
    thumbnailUrl: "/assets",
    tags: [
      { tagName: "Typescript" },
      { tagName: "Vue3&Nuxt" },
      { tagName: "Cinema4D" },
      { tagName: "Adobe Creative" },
    ],
    jobTitle: "Front-end engineer & 3d generalist",
    url: "/about",
    isPassword: true,
  },
  {
    id: 1,
    title: "Varo Bank",
    thumbnailUrl: "/assets",
    tags: [{ tagName: "Freelance" }],
    jobTitle: "UX Engineer",
    url: "/about",
    isPassword: true,
  },
  {
    id: 0,
    title: "OCI",
    thumbnailUrl: "/assets",
    tags: [{ tagName: "Branding" }],
    jobTitle: "job title",
    url: "/about",
    isPassword: false,
  },
  {
    id: 2,
    title: "VR",
    thumbnailUrl: "/assets",
    tags: [{ tagName: "Freelance" }],
    jobTitle: "Creative developer",
    url: "/about",
    isPassword: false,
  },
];
