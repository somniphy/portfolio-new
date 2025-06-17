// pages/contact.tsx

export default function Contact() {
  return (
    <main className="min-h-screen bg-zinc-900 text-zinc-200 px-4 py-32 flex flex-col items-center">
      <section className="max-w-3xl w-full text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight">
          Let&apos;s Work Together
        </h1>
        <p className="text-zinc-400 text-lg">
          Whether you have a project in mind or just want to say hello, feel
          free to reach out. I’m currently open for freelance work and
          collaborations.
        </p>
      </section>

      <form className="mt-16 w-full max-w-3xl space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="px-4 py-3 bg-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="px-4 py-3 bg-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600"
              required
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2 text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="px-4 py-3 bg-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-8 py-3 bg-zinc-200 text-zinc-900 font-semibold rounded-md hover:bg-white transition"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
