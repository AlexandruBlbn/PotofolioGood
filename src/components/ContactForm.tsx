"use client";
import { useState } from "react";
import { EMAIL } from "@/content/site";

const field = "w-full border border-line bg-surface px-3.5 py-3 text-[15px] outline-none transition-colors placeholder:text-muted focus:border-ink";

// No backend: the form hands the message to the visitor's own email app.
export default function ContactForm() {
  const [opened, setOpened] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name")).trim();
    const subject = encodeURIComponent(`Hello from ${name}`);
    const body = encodeURIComponent(`${String(form.get("message")).trim()}\n\n${name}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setOpened(true);
  }

  return (
    <form onSubmit={onSubmit} className="border border-line bg-surface p-6">
      <p className="text-[15px] font-medium">Send a message</p>
      <label htmlFor="contact-name" className="mono mt-5 block text-[11px] text-muted">Your name</label>
      <input id="contact-name" name="name" required autoComplete="name" className={`${field} mt-2`} />
      <label htmlFor="contact-message" className="mono mt-4 block text-[11px] text-muted">Message</label>
      <textarea id="contact-message" name="message" required rows={4} className={`${field} mt-2 resize-y`} />
      <button type="submit" className="mt-4 w-full cursor-pointer bg-ink py-3.5 text-[14px] font-medium text-white transition-colors hover:bg-black">
        Write it in my email app →
      </button>
      <p aria-live="polite" className="mt-3 text-[13px] leading-[1.5] text-muted">
        {opened
          ? `Your email app should open with the message ready. If nothing happened, write to ${EMAIL}.`
          : "Opens your email app with the message filled in."}
      </p>
    </form>
  );
}
