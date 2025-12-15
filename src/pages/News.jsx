

const newsPosts = [
  {
    id: 'n1',
    title: 'Black Ops 6 launches with new dynamic ops',
    category: 'Shooter',
    date: 'Dec 10, 2025',
    image:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80',
    excerpt:
      'Treyarch brings a darker narrative and revamped multiplayer maps with high fidelity destruction.',
  },
  {
    id: 'n2',
    title: 'Next-gen consoles get ray-traced remasters',
    category: 'Tech',
    date: 'Dec 8, 2025',
    image:
      'https://images.unsplash.com/photo-1486401899868-0e435ed85128?auto=format&fit=crop&w=900&q=80',
    excerpt:
      'Studios tease fully path-traced experiences and AI-driven physics for 2025 flagships.',
  },
  {
    id: 'n3',
    title: 'Esports prize pools hit new highs',
    category: 'Esports',
    date: 'Dec 5, 2025',
    image:
      'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?auto=format&fit=crop&w=900&q=80',
    excerpt:
      'Major leagues commit to multi-million circuits with revamped formats and anti-cheat pipelines.',
  },
  {
    id: 'n4',
    title: 'Indie gems dominate winter sales',
    category: 'Indie',
    date: 'Dec 2, 2025',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80',
    excerpt:
      'Narrative-driven experiences and cozy sims headline the storefront, backed by stellar reviews.',
  },
];

const News = () => (
  <div className="space-y-8 mt-5">
    <div>
      <p className="text-sm uppercase tracking-[0.2em] text-yellow-600">News</p>
      <h1 className="text-3xl font-bold text-white">Gaming insights</h1>
      <p className="text-[#cfcfcf]">
        Fresh drops, esports, tech deep dives, and behind-the-scenes from your favorite studios.
      </p>
    </div>
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {newsPosts.map((post) => (
        <article
          key={post.id}
          className="overflow-hidden rounded-2xl bg-[#111111] transition hover:-translate-y-1"
        >
          <div className="h-48 w-full overflow-hidden">
            <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
          </div>
          <div className="space-y-2 p-4">
            <div className="flex items-center justify-between text-xs text-[#cfcfcf]">
              <span className="rounded-full bg-[#171717] px-3 py-1 text-yellow-600">
                {post.category}
              </span>
              <span>{post.date}</span>
            </div>
            <h3 className="text-xl font-semibold text-white">{post.title}</h3>
            <p className="text-sm text-[#cfcfcf]">{post.excerpt}</p>
            <button
              type="button"
              className="text-sm font-semibold text-yellow-600 transition hover:text-white"
            >
              Read more →
            </button>
          </div>
        </article>
      ))}
    </div>
  </div>
);

export default News;
