import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Residencial Pacaembu — Casa de Repouso para Idosos em São Paulo" },
      { name: "description", content: "Casa de repouso no bairro Pacaembu, Zona Oeste de SP. 40 anos de experiência, enfermagem 24h, home care e estrutura 100% adaptada para idosos." },
      { name: "author", content: "Residencial Pacaembu" },
      { property: "og:title", content: "Residencial Pacaembu — Casa de Repouso para Idosos em São Paulo" },
      { property: "og:description", content: "Casa de repouso no bairro Pacaembu, Zona Oeste de SP. 40 anos de experiência, enfermagem 24h, home care e estrutura 100% adaptada para idosos." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Residencial Pacaembu — Casa de Repouso para Idosos em São Paulo" },
      { name: "twitter:description", content: "Casa de repouso no bairro Pacaembu, Zona Oeste de SP. 40 anos de experiência, enfermagem 24h, home care e estrutura 100% adaptada para idosos." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2fae3239-de82-44d4-a08a-162c4f148431/id-preview-11198bb6--f1873df2-4633-4b3a-ba2f-a5c0ab6db7a9.lovable.app-1777676898847.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2fae3239-de82-44d4-a08a-162c4f148431/id-preview-11198bb6--f1873df2-4633-4b3a-ba2f-a5c0ab6db7a9.lovable.app-1777676898847.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
