export const SERVICES = [
  { key: "private", label: "Privat rengøring" },
  { key: "commercial", label: "Kontor- og erhvervsrengøring" },
  { key: "moveout", label: "Fraflytningsrengøring" },
  { key: "deep", label: "Hovedrengøring" },
  { key: "construction", label: "Rengøring efter byggeri" },
  { key: "painting", label: "Malerarbejde" },
  { key: "stairs", label: "Trappevask" },
  { key: "outdoor", label: "Udendørs- og ekstra ydelser" },
  { key: "windows", label: "Vinduespudsning" },
  { key: "custom", label: "Anden / specialrengøring" },
] as const;

export type ServiceKey = typeof SERVICES[number]["key"];
