interface ImportMetaEnv {
  readonly VITE_GITHUB_TOKEN: string;
  readonly BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}