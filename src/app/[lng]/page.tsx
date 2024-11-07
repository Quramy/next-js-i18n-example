import Link from "next/link";
import { useTranslation } from "../i18n";

type Props = {
  readonly params: {
    readonly lng: string;
  };
};

export default async function Home({ params: { lng } }: Props) {
  const { t, i18n } = await useTranslation(lng, "/page");
  return (
    <>
      <h1>{t("title")}</h1>
      <ul>
        <li>
          <Link href={`/${lng}/second-page`}>{t("toSecondPage")}</Link>
        </li>
        <li>
          <Link href={`/${lng}/pages-router`}>{t("toPagesRouterPage")}</Link>
        </li>
      </ul>
    </>
  );
}
