import { createClient } from "@/lib/utils";

export default async function Home() {
  const supabase = createClient();
  const { data: articles } = await supabase.from("articles").select("*");

  return (
    <div>
      {articles?.map((article) => (
        <div
          key={article.id}
          className="p-4 border-b border-gray-200 bg-blue-900"
        >
          <h2>
            {article.title} (article numéro : {article.id})
          </h2>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
}
