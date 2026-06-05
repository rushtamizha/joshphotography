"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [pack, setPack] = useState("");
  const [details, setDetails] = useState("");

  const phone = "+917338078008";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contact.trim()) {
      alert("Please provide a contact number.");
      return;
    }

    const body = `Enquiry from website:\nName: ${name || "-"}\nContact: ${contact}\nEmail: ${email || "-"}\nEvent Location: ${location || "-"}\nEvent Date: ${date || "-"}\nPackage: ${pack || "-"}\nDetails: ${details || "-"}`;
    const url = `https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(body)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#07040A] py-32">
      <div className="w-full max-w-2xl mx-4 bg-[#0B0712] border border-purple-500/20 rounded-2xl p-6 shadow-lg">
        <Link href="/" className="text-sm text-[#FAF9F6]/70 hover:text-[#FAF9F6]">← Back</Link>

        <h1 className="text-2xl font-semibold text-[#FAF9F6] mt-2">Enquiry</h1>
        <p className="text-sm text-[#FAF9F6]/80 mb-4">Fill the form below to send your enquiry on WhatsApp.</p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3">
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-[#07040A] border border-purple-500/10 text-[#FAF9F6] outline-none"
          />

          <input
            placeholder="Contact No"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-[#07040A] border border-purple-500/10 text-[#FAF9F6] outline-none"
            inputMode="tel"
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-[#07040A] border border-purple-500/10 text-[#FAF9F6] outline-none"
            type="email"
          />

          <input
            placeholder="Event Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-[#07040A] border border-purple-500/10 text-[#FAF9F6] outline-none"
          />

          <input
            placeholder="Event Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-[#07040A] border border-purple-500/10 text-[#FAF9F6] outline-none"
            type="date"
          />

          <select
            value={pack}
            onChange={(e) => setPack(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-[#07040A] border border-purple-500/10 text-[#FAF9F6] outline-none"
          >
            <option value="">Select package / event type</option>
            <option value="Wedding">Wedding</option>
            <option value="Pre/Post Wedding">Pre or Post Wedding</option>
            <option value="Engagement">Engagement</option>
            <option value="Pregnancy & Maternity">Pregnancy / Maternity</option>
            <option value="Birthday">Birthday</option>
            <option value="Baby Shower">Baby Shower</option>
            <option value="House Warming">House Warming</option>
            <option value="Other">Other</option>
          </select>

          <textarea
            placeholder="Share event details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-[#07040A] border border-purple-500/10 text-[#FAF9F6] outline-none resize-none"
          />

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="submit"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-green-600 to-green-500 text-white"
            >
              <FaWhatsapp />
              Send to WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
