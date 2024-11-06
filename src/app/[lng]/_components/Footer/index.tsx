"use client";
import { useTranslation } from "../../../i18n/client";

type Props = {
  readonly lng: string;
};

export function Footer({ lng }: Props) {
  const { t } = useTranslation(lng, "/_components/Footer/index");

  return (
    <div>
      <p>{t("comment")}</p>
    </div>
  );
}
