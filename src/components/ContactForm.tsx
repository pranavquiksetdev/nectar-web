"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { CONTACT_EMAIL } from "@/lib/contact";

const field =
  "w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-base outline-none focus:border-accent focus:ring-2 focus:ring-accent/25";

// There is no server behind this site yet, so the form opens the visitor's email app with the
// message filled in and addressed to CONTACT_EMAIL.
export default function ContactForm() {
  const order = useSearchParams().get("order");
  const [name, setName] = useState("");
  const [message, setMessage] = useState(order ? `I'd like to order: ${order}` : "");

  const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    order ? `Order: ${order}` : "Hello Nectar",
  )}&body=${encodeURIComponent(`${message}\n\n${name}`)}`;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = href;
      }}
      className="flex flex-col gap-4"
    >
      <label className="flex flex-col gap-1.5 text-sm font-medium">
        Your name
        <input className={field} value={name} onChange={(e) => setName(e.target.value)} required autoComplete="name" />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-medium">
        Message
        <textarea
          className={`${field} min-h-36`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </label>
      <button type="submit" className="self-start rounded-full bg-cocoa px-7 py-3 font-medium text-cream hover:bg-tile">
        Send by email
      </button>
    </form>
  );
}
