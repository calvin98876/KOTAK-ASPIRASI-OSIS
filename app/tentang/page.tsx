import Image from "next/image";
import Link from "next/link";

export default function Tentang() {
return ( <main>
{/* HEADER */} <header className="site-header"> <Link href="/" className="brand"> <Image
         src="/logo-osis.jpg"
         alt="Logo OSIS"
         width={64}
         height={64}
       /> <div> <strong>DWITAKA CARAKA</strong> <span>OSIS SMA NEGERI 6 TANJUNGPINANG</span> </div> </Link>

```
    <nav>
      <Link href="/">Beranda</Link>
      <Link href="/aspirasi">Kotak Aspirasi</Link>
      <Link href="/tentang">Tentang OSIS</Link>
    </nav>
  </header>

  {/* TENTANG OSIS */}
  <section className="about-page">
    <div>
      <span className="eyebrow">TENTANG</span>

      <h1>
        OSIS
        <br />
        <em>Dwitaka Caraka</em>
      </h1>

      <p>
        Kotak Aspirasi ini menjadi salah satu ruang komunikasi antara
        siswa dan OSIS SMA Negeri 6 Tanjungpinang. Kritik, saran, dan
        ide yang masuk dapat menjadi bahan evaluasi dan pertimbangan
        dalam kegiatan organisasi.
      </p>

      <Link className="btn primary" href="/aspirasi">
        Sampaikan Aspirasi
      </Link>
    </div>

    <Image
      className="about-logo"
      src="/logo-osis.jpg"
      alt="Logo Dw itaka Caraka"
      width={420}
      height={420}
    />
  </section>

  {/* VISI OSIS */}
  <section className="about-page">
    <div>
      <span className="eyebrow">VISI OSIS</span>

      <h2>Visi</h2>

      <p>
        Mewujudkan OSIS sebagai wadah yang aktif, kreatif, dan peduli
        dalam mengembangkan potensi siswa, mempererat persaudaraan,
        serta menciptakan lingkungan sekolah yang nyaman dan positif.
      </p>
    </div>
  </section>

  {/* MISI OSIS */}
  <section className="about-page">
    <div>
      <span className="eyebrow">MISI OSIS</span>

      <h2>Misi</h2>

      <ol>
        <li>
          Meningkatkan keaktifan siswa melalui kegiatan OSIS yang
          menarik dan melibatkan seluruh siswa.
        </li>

        <li>
          Menyediakan ruang bagi siswa untuk mengembangkan potensi,
          minat, bakat, dan kreativitasnya.
        </li>

        <li>
          Memperkuat rasa persaudaraan dan kerja sama antarsiswa
          melalui kegiatan yang membangun kebersamaan.
        </li>

        <li>
          Meningkatkan kepedulian siswa terhadap lingkungan dan
          sesama melalui kegiatan sosial dan lingkungan.
        </li>

        <li>
          Menciptakan lingkungan sekolah yang nyaman dan positif
          dengan menampung serta menindaklanjuti aspirasi siswa.
        </li>
      </ol>
    </div>
  </section>

  {/* PROGRAM KERJA OSIS */}
  <section className="about-page">
    <div>
      <span className="eyebrow">PROGRAM KERJA</span>

      <h2>Program Kerja OSIS</h2>

      <h3>🌱 Green School</h3>
      <p>
        Meningkatkan kepedulian siswa terhadap kebersihan dan
        kelestarian lingkungan sekolah.
      </p>

      <h3>🗣️ Suara Siswa</h3>
      <p>
        Menyediakan wadah bagi siswa untuk menyampaikan aspirasi,
        saran, dan kritik.
      </p>

      <h3>⏰ Gerakan Disiplin Siswa</h3>
      <p>
        Membangun kebiasaan disiplin dalam waktu, aturan, kebersihan,
        dan tanggung jawab.
      </p>

      <Link className="btn primary" href="/aspirasi">
        Sampaikan Aspirasi
      </Link>
    </div>
  </section>
</main>
```

);
}
