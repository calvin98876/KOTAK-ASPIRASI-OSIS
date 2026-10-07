import Link from "next/link";
import Image from "next/image";
import AspirasiForm from "../ui/AspirasiForm";

export default function AspirasiPage() {
  return (
    <main>
      <header className="site-header">
        <Link href="/" className="brand">
          <Image src="/logo-osis.jpg" alt="Logo OSIS" width={64} height={64} />
          <div><strong>DWITAKA CARAKA</strong><span>OSIS SMA NEGERI 6 TANJUNGPINANG</span></div>
        </Link>
        <nav><Link href="/">Beranda</Link><Link href="/aspirasi">Kotak Aspirasi</Link><Link href="/tentang">Tentang OSIS</Link></nav>
      </header>
      <section className="form-page">
        <div className="form-intro">
          <span className="eyebrow">KOTAK ASPIRASI OSIS</span>
          <h1>Sampaikan<br /><em>aspirasimu.</em></h1>
          <p>Setiap masukan adalah bahan evaluasi. Tulis dengan jelas agar OSIS dapat memahami dan menindaklanjutinya.</p>
          <div className="privacy-note"><b>Privasi terjaga</b><br />Jika memilih anonim, nama dan kelas tidak disimpan di database.</div>
        </div>
        <div className="card form-card"><AspirasiForm /></div>
      </section>
    </main>
  );
}