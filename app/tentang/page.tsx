import Image from "next/image";
import Link from "next/link";

export default function Tentang() {
  return (
    <main>
      <header className="site-header">
        <Link href="/" className="brand">
          <Image src="/logo-osis.jpg" alt="Logo OSIS" width={64} height={64} />
          <div><strong>DWITAKA CARAKA</strong><span>OSIS SMA NEGERI 6 TANJUNGPINANG</span></div>
        </Link>
        <nav><Link href="/">Beranda</Link><Link href="/aspirasi">Kotak Aspirasi</Link><Link href="/tentang">Tentang OSIS</Link></nav>
      </header>
      <section className="about-page">
        <div>
          <span className="eyebrow">TENTANG</span>
          <h1>OSIS<br /><em>Dw itaka Caraka</em></h1>
          <p>
            Kotak Aspirasi ini menjadi salah satu ruang komunikasi antara siswa
            dan OSIS SMA Negeri 6 Tanjungpinang. Kritik, saran, dan ide yang
            masuk dapat menjadi bahan evaluasi dan pertimbangan dalam kegiatan
            organisasi.
          </p>
          <Link className="btn primary" href="/aspirasi">Sampaikan Aspirasi</Link>
        </div>
        <Image className="about-logo" src="/logo-osis.jpg" alt="Logo Dw itaka Caraka" width={420} height={420} />
      </section>
    </main>
  );
}