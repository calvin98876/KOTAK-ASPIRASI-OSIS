"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase-browser";

type Aspiration = {
  id: string; created_at: string; category: string; message: string;
  is_anonymous: boolean; student_name: string | null; student_class: string | null;
  status: "Belum Dibaca" | "Diproses" | "Selesai";
};

const statuses = ["Belum Dibaca", "Diproses", "Selesai"] as const;

export default function AdminPage() {
  const router = useRouter();
  const [items, setItems] = useState<Aspiration[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  async function load() {
    const supabase = createClient();
    const { data: sessionData } = await supabase.auth.getSession();
    if (!sessionData.session) return router.replace("/admin/login");

    const { data, error } = await supabase.from("aspirations").select("*").order("created_at", { ascending: false });
    if (error) setMessage("Tidak dapat memuat data. Pastikan akun ini terdaftar sebagai admin.");
    else setItems((data ?? []) as Aspiration[]);
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  async function updateStatus(id: string, status: Aspiration["status"]) {
    const supabase = createClient();
    const { error } = await supabase.from("aspirations").update({ status }).eq("id", id);
    if (!error) setItems(old => old.map(x => x.id === id ? { ...x, status } : x));
  }

  async function remove(id: string) {
    if (!confirm("Hapus aspirasi ini?")) return;
    const supabase = createClient();
    const { error } = await supabase.from("aspirations").delete().eq("id", id);
    if (!error) setItems(old => old.filter(x => x.id !== id));
  }

  async function logout() {
    await createClient().auth.signOut();
    router.replace("/admin/login");
  }

  const unread = items.filter(x => x.status === "Belum Dibaca").length;
  const processing = items.filter(x => x.status === "Diproses").length;
  const done = items.filter(x => x.status === "Selesai").length;

  if (loading) return <main className="page"><div className="card">Memuat dashboard...</div></main>;

  return <main className="page admin-page">
    <header className="admin-header">
      <div><span className="eyebrow">DASHBOARD OSIS</span><h1>Kelola Aspirasi</h1><p className="muted">Pantau masukan siswa dan tindak lanjutnya.</p></div>
      <button className="secondary" onClick={logout}>Keluar</button>
    </header>

    <div className="stats">
      <div><b>{items.length}</b><span>Total</span></div>
      <div><b>{unread}</b><span>Belum Dibaca</span></div>
      <div><b>{processing}</b><span>Diproses</span></div>
      <div><b>{done}</b><span>Selesai</span></div>
    </div>

    {message && <p className="error">{message}</p>}
    <section className="aspiration-list">
      {items.map(item => <article className="aspiration" key={item.id}>
        <div className="aspiration-top">
          <div><span className="tag">{item.category}</span><span className="tag">{item.is_anonymous ? "Anonim" : `${item.student_name} • ${item.student_class}`}</span></div>
          <small>{new Date(item.created_at).toLocaleString("id-ID")}</small>
        </div>
        <p className="message">{item.message}</p>
        <div className="admin-actions">
          <select value={item.status} onChange={e => updateStatus(item.id, e.target.value as Aspiration["status"])}>
            {statuses.map(s => <option key={s}>{s}</option>)}
          </select>
          <button className="danger" onClick={() => remove(item.id)}>Hapus</button>
        </div>
      </article>)}
      {items.length === 0 && <div className="empty">Belum ada aspirasi masuk.</div>}
    </section>
  </main>;
}