export default function MenaSAInterviewPage() {
  const interviewers = [
    {
      name: "Murad Gawish",
      role: "MENA SA Board Interviewer",
      calendly: "https://calendly.com/your-link-1",
    },
    {
      name: "Interviewer 2",
      role: "MENA SA Board Interviewer",
      calendly: "https://calendly.com/your-link-2",
    },
    {
      name: "Interviewer 3",
      role: "MENA SA Board Interviewer",
      calendly: "https://calendly.com/your-link-3",
    },
    {
      name: "Interviewer 4",
      role: "MENA SA Board Interviewer",
      calendly: "https://calendly.com/your-link-4",
    },
    {
      name: "Interviewer 5",
      role: "MENA SA Board Interviewer",
      calendly: "https://calendly.com/your-link-5",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-stone-100 text-stone-900">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-10 md:py-16">
        <div className="mb-12 rounded-3xl border border-stone-200 bg-white/85 p-8 shadow-sm backdrop-blur md:p-12">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
              MENA SA Board Interviews
            </p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Choose your interviewer and book your interview slot
            </h1>
            <p className="mt-5 text-base leading-7 text-stone-600 md:text-lg">
              Select the interviewer that works best for you. You’ll be taken directly to their booking page to choose an available time.
            </p>
            <div className="mt-6 inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm text-emerald-800 ring-1 ring-emerald-200">
              Interview window: March 12–21 · 10:00 AM–8:00 PM
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {interviewers.map((interviewer) => (
            <a
              key={interviewer.name}
              href={interviewer.calendly}
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-emerald-100 p-3 text-emerald-700">
                    <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="1.8">
                      <path d="M8 7V3m8 4V3M4 11h16M6 5h12a2 2 0 0 1 2 2v11a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a2 2 0 0 1 2-2Z" />
                    </svg>
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold tracking-tight text-stone-900">
                    {interviewer.name}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-stone-500">
                    {interviewer.role}
                  </p>
                </div>
                <div className="rounded-full border border-stone-200 px-3 py-1 text-xs font-medium text-stone-500">
                  Book
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-stone-100 pt-5">
                <span className="text-sm font-medium text-emerald-700">
                  Open booking page
                </span>
                <svg
                  className="h-5 w-5 text-stone-400 transition group-hover:translate-x-1 group-hover:text-emerald-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
          <h3 className="text-lg font-semibold text-stone-900">Before you book</h3>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-stone-600">
            <li>Use your preferred email so the calendar invite reaches you correctly.</li>
            <li>Choose only one interview slot unless you were told otherwise.</li>
            <li>If you need to reschedule, use the confirmation email from Calendly.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
