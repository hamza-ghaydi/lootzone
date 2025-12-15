const Contact = () => (
  <div className="space-y-6 mt-5">
    <div>
      <p className="text-sm uppercase tracking-[0.2em] text-yellow-600">Support</p>
      <h1 className="text-3xl font-bold text-white">Contact us</h1>
      <p className="text-[#cfcfcf]">
        Reach our premium support for partnerships, billing, or community programs.
      </p>
    </div>
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="bg-[#111111] rounded-3xl p-6">
        <form className="space-y-4">
          <div>
            <label className="text-sm text-[#cfcfcf]">Name</label>
            <input
              className="mt-1 w-full rounded-xl border border-white/5 bg-black/30 px-4 py-3 text-white placeholder:text-[#555] focus:border-yellow-600 focus:outline-none"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-sm text-[#cfcfcf]">Email</label>
            <input
              className="mt-1 w-full rounded-xl border border-white/5 bg-black/30 px-4 py-3 text-white placeholder:text-[#555] focus:border-yellow-600 focus:outline-none"
              placeholder="you@example.com"
              type="email"
            />
          </div>
          <div>
            <label className="text-sm text-[#cfcfcf]">Message</label>
            <textarea
              rows="4"
              className="mt-1 w-full rounded-xl border border-white/5 bg-black/30 px-4 py-3 text-white placeholder:text-[#555] focus:border-yellow-600 focus:outline-none"
              placeholder="Tell us about your request..."
            />
          </div>
          <button
            type="button"
            className="w-full rounded-full bg-gradient-to-r from-yellow-600 to-[#dda545] px-6 py-3 font-semibold text-white cursor-pointer transition hover:shadow-2xl"
          >
            Send message
          </button>
        </form>
      </div>
      <div className="rounded-3xl bg-[#111111] p-6">
        <h3 className="text-xl font-semibold text-white">Visit our HQ</h3>
        <p className="mt-2 text-sm text-[#cfcfcf]">
          9 Edge Entertainment Ave, Night City, NC 2049
        </p>
        <div className="mt-4 space-y-3 text-sm text-[#cfcfcf]">
          <p>Support: support@loot.gg</p>
          <p>Partnerships: partners@loot.gg</p>
          <p>Press: press@loot.gg</p>
          <p>Discord: discord.gg/loot</p>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-[#0b0c0d] p-4">
            <p className="text-xs uppercase text-[#dda545]">Response time</p>
            <p className="text-2xl font-bold text-white">~2h</p>
          </div>
          <div className="rounded-xl bg-[#0b0c0d] p-4">
            <p className="text-xs uppercase text-[#dda545]">Priority queue</p>
            <p className="text-2xl font-bold text-[#a8ff60]">Active</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
