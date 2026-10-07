"use client";

import { FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase-browser";

export default function AspirasiForm() {
  const [anonymous, setAnonymous] = useState(true);
  const [category, setCategory] = useState("Saran");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [className, setClassName] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  async function submit(e: FormEvent) {
    e.preventDefault();
    setResult("");
    if (message.trim().length < 5) return setResult("Aspirasi minimal 5 karakter.");
    if (!anonymous && (!name.trim() || !className)) return setResult("Isi nama dan kelas jika memilih publik.");

    setLoading(true);
    const supabase = createClient();
    const { error } = await supabase.from("aspirations").insert({
      category,
      message: message.trim(),
      is_anonymous: anonymous,
      student_name: anonymous ? null : name.trim(),
      student_class: anonymous ? null : className
    });
    setLoading(false);

    if (error) {
  console.error("SUPABASE ERROR:", error);
  return setResult(`Gagal: ${error.message}`);
}
    setMessage(""); setName(""); setClassName("");
    setResult("Aspirasi berhasil dikirim. Terima kasih sudah menyampaikan suara kamu.");
  }

  return (
    <form onSubmit={submit}>
      <h2>Form Aspirasi</h2>
      <p className="muted">Pilih anonim jika tidak ingin nama dan kelas disimpan.</p>

      <label>Kategori</label>
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option>Saran</option><option>Kritik</option><option>Fasilitas</option>
        <option>Kegiatan OSIS</option><option>Akademik</option><option>Lainnya</option>
      </select>

      <label>Aspirasi</label>
      <textarea value={message} onChange={e => setMessage(e.target.value)}
        placeholder="Contoh: Saya menyarankan agar..." rows={7} maxLength={2000} required />

      <label>Identitas pengirim</label>
      <div className="identity-choice">
        <button type="button" className={anonymous ? "identity active" : "identity"} onClick={() => setAnonymous(true)}>
          <b>Anonim</b><small>Nama & kelas tidak disimpan</small>
        </button>
        <button type="button" className={!anonymous ? "identity active" : "identity"} onClick={() => setAnonymous(false)}>
          <b>Publik</b><small>Nama & kelas ditampilkan admin</small>
        </button>
      </div>

      {!anonymous && <div className="identity-grid">
        <div><label>Nama</label><input value={name} onChange={e => setName(e.target.value)} maxLength={100} required /></div>
        <div><label>Kelas</label><select value={className} onChange={e => setClassName(e.target.value)} required>
          <option value="">Pilih</option><option>X</option><option>XI</option><option>XII</option>
        </select></div>
      </div>}

      <button className="submit" disabled={loading}>{loading ? "Mengirim..." : "Kirim Aspirasi"}</button>
      {result && <p className={result.startsWith("Aspirasi berhasil") ? "result" : "error"}>{result}</p>}
    </form>
  );
}
