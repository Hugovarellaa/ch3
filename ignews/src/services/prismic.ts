import Prismic from "@prismicio/client";

const endpointprismic = process.env.PRISMIC_ENDPOINT;
const accessToken = process.env.PRISMIC_ACCESS_TOKEN;

export function GetPrismicClient(req?: unknown) {
  const prismic = Prismic.client(endpointprismic, { req, accessToken });
  return prismic;
}
