import { Suspense } from "react";
import ContactClient from "./ContactClient";

export default function ContactPageDa() {
  return (
    <Suspense fallback={null}>
      <ContactClient />
    </Suspense>
  );
}
