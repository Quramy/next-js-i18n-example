import type { GetServerSideProps } from "next";

import { useTranslation } from "../../../lib/i18n";

type Props = {
  readonly params: {
    readonly lng: string;
  };
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  params,
}) => {
  return {
    props: {
      params: {
        lng: params?.lng as string,
      },
    },
  };
};

export default function Page({ params: { lng } }: Props) {
  const { t } = useTranslation(lng, "/pages-router/index");
  return (
    <div>
      <h1>{t("title")}</h1>
    </div>
  );
}
