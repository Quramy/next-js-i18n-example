import Link from "next/link";
import { useTranslation } from "../../i18n";

type Props = {
  readonly params: {
    readonly lng: string;
  };
};

export default async function Page({ params: { lng } }: Props) {
  const { t } = await useTranslation(lng, "/second-page/page");
  return (
    <>
      <h1>{t("title")}</h1>
      <Link href={`/${lng}`}>{t("back-to-home")}</Link>
    </>
  );
}
