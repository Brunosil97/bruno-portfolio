/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GITHUB_TOKEN: string;
  readonly BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

export {}

declare global {
  // This represents the UI error types that could occur
  type UIError = string | Error | Record<string, unknown> | undefined;
}