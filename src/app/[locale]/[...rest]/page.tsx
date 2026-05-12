import { notFound } from "next/navigation";

/** Captura rutas desconocidas bajo `/es/...` o `/en/...` y muestra `[locale]/not-found`. */
export default function CatchAllPage() {
  notFound();
}
