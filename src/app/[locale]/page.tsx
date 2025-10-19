import HomeContent from "@/components/HomeContent";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return <HomeContent locale={locale} />;
}
