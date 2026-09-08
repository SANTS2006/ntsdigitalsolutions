import { useState } from 'react';

export default function CookieNotice() {
  const [show, setShow] = useState(() => {
    try {
      return localStorage.getItem('nts-cookie-choice') !== 'accepted';
    } catch {
      return false;
    }
  });

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[90] mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 p-5 shadow-2xl">
      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
        This website may use essential browser storage for preferences and form drafts. We do not ask you to submit passwords or sensitive credentials through public forms.
      </p>
      <button
        type="button"
        onClick={() => {
          try {
            localStorage.setItem('nts-cookie-choice', 'accepted');
          } catch {
            // Storage may be unavailable; the notice can still be dismissed.
          }
          setShow(false);
        }}
        className="mt-4 rounded-xl bg-white dark:bg-black px-4 py-2 text-sm font-bold text-white"
      >
        Got it
      </button>
    </div>
  );
}
