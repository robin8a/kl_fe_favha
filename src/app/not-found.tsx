"use client";

import Error from "next/error";

/** Rutas fuera del middleware (p. ej. archivos no localizados). Ver next-intl “non-localized requests”. */
export default function GlobalNotFound() {
  return (
    <html lang="es">
      <body>
        <Error statusCode={404} />
      </body>
    </html>
  );
}
