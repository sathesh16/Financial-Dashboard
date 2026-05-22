import {
  createDirectus,
  authentication,
  rest,
} from "@directus/sdk";

const DIRECTUS_URL =
  import.meta.env.VITE_DIRECTUS_URL;

const directus = createDirectus(
  DIRECTUS_URL
)
  .with(authentication())
  .with(rest());

export default directus;