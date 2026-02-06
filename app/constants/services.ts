export const SERVICES = [
  { key: "private", label: "Residential cleaning" },
  { key: "commercial", label: "Office & commercial cleaning" },
  { key: "moveout", label: "Move-out cleaning" },
  { key: "deep", label: "Deep cleaning" },
  { key: "construction", label: "Post-construction cleaning" },
  { key: "painting", label: "Painting" },
  { key: "stairs", label: "Stairwell cleaning" },
  { key: "outdoor", label: "Outdoor & extra services" },
  { key: "windows", label: "Windows cleaning" },
  { key: "custom", label: "Other / custom cleaning" },
] as const;

export type ServiceKey = typeof SERVICES[number]["key"];
