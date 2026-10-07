import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link href="/" className="brand">
          <Image src="/logo-osis.jpg" alt="Logo Dw itaka Caraka OSIS SMA Negeri 6 Tanjungpinang" width={74} height={74} priority />
          <div>
            <strong>DWITAKA CARAKA</strong>
            <span>OSIS SMA NEGERI 6 TANJUNGPINANG</span>
          </div>
        </Link>
        <nav>
          <Link href="/">Beranda</Link>
          <Link href="/aspirasi">Kotak Aspirasi</Link>
          <Link href="/tentang">Tentang OSIS</Link>
          <Link href="/admin/login">Admin</Link>
        </nav>
      </header>

      <section className="hero-home">
        <div className="hero-content">
          <span className="eyebrow">SUARA SISWA • AKSI OSIS</span>
          <h1>Suaramu,<br /><em>Perubahan Kita.</em></h1>
          <p>
            Sampaikan kritik, saran, ide, atau masukan untuk SMA Negeri 6
            Tanjungpinang. Kamu dapat mengirimnya secara anonim maupun
            mencantumkan identitas.
          </p>
          <div className="hero-actions">
            <Link className="btn primary" href="/aspirasi">Sampaikan Aspirasi</Link>
            <Link className="btn light" href="/tentang">Tentang OSIS</Link>
          </div>
        </div>
        <div className="hero-mark">
          <Image src="/logo-osis.jpg" alt="Logo OSIS Dw itaka Caraka" width={330} height={330} />
        </div>
      </section>

      <section className="feature-section">
        <div className="section-heading">
          <span className="eyebrow">CARA KERJA</span>
          <h2>Sampaikan. Kami dengarkan. Kami tindak lanjuti.</h2>
        </div>
        <div className="features">
          <article><b>01</b><h3>Tulis Aspirasi</h3><p>Jelaskan kritik, saran, atau ide dengan bahasa yang jelas dan sopan.</p></article>
          <article><b>02</b><h3>Pilih Identitas</h3><p>Kirim secara anonim atau tampilkan nama dan kelas jika kamu ingin.</p></article>
          <article><b>03</b><h3>Diproses OSIS</h3><p>Pengurus dapat memantau aspirasi dan memperbarui status tindak lanjut.</p></article>
        </div>
      </section>

      <section className="cta">
        <div>
          <span className="eyebrow">KOTAK ASPIRASI</span>
          <h2>Punya ide untuk sekolah?</h2>
          <p>Jangan hanya dibicarakan. Sampaikan melalui kanal resmi OSIS.</p>
        </div>
        <Link className="btn gold" href="/aspirasi">Kirim Sekarang</Link>
      </section>

      <footer className="site-footer">
        <div>DWITAKA CARAKA — OSIS SMA NEGERI 6 TANJUNGPINANG</div>
        <div>© 2026 OSIS SMA Negeri 6 Tanjungpinang</div>
      </footer>
    </main>
  );
}