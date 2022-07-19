import { Link } from "react-router-dom";
import FindUs from "../templates/FindUs";
import Mailing from "../templates/Mailing";
import Mars from "../templates/Mars";

function About() {
  return (
    <>
      <div className="flex gap-8 md:w-[90%] md:px-0 w-full lg:flex-row flex-col mx-auto lg:my-10 my-4">
        <div className="flex flex-col lg:px-8 px-4 py-4 bg-white shadow rounded-xl w-[100%] h-max dark:bg-[#222222]">
          <h1 className="text-2xl pb-4 border-b text-teal-600"># About</h1>
          <div className="flex flex-col items-center mt-20">
            <img src="/assets/img/ppisudan.png" alt="logo" className="w-40" />
            <h1 className="text-5xl mb-8 text-[#51A274] font-semibold mt-6">PPISUDAN</h1>
            <p className="text-xl font-thin text-black">اتحاد الطلبة الإندونيسيين بالسودان</p>
            <p className="text-xl font-thin">Indonesian Students Association in Sudan</p>
            <p className="text-xl">Persatuan Pelajar Indonesia Sudan</p>
          </div>
          <div className="flex flex-col pt-28 pb-16 border-b">
            <h3 className="text-teal-600">PPI SUDAN</h3>
            <h1 className="md:text-3xl text-2xl font-bold my-3">Story of PPI Sudan</h1>
            <p className="mb-8 first-letter:ml-10 mt-10">Sejarah rantai peradaban sangat ditentukan dengan peralihan generasi. Tentunya generasi-generasi pilihan yang akan sanggup mengusung dan meneruskan peradaban para pendahulunya. Mereka yang secara intelektual, stamina dan psikologis seiring sejalan. Inilah tujuan agung dari proses pendidikan yang paripurna. Pendidikan yang menghasilkan generasi cerdas, kuat dan stabil. Keberadaan youth generation menjadi penentu baik dan buruknya sebuah peradaban. Ditambah tugas para generasi muda kita sebagai Agent of Change bukanlah tugas yang mudah.</p>
            <p className="mb-8 first-letter:ml-10">Keberadaan PPI Sudan sebagai wadah mahasiswa Indonesia di Sudan sangat penting adanya. Keberadaanya menjadi sarana untuk meningkatkan intelektual, membangun dan mengembangkan sumber daya manusia unggul, bertakwa dan berbudi pekerti luhur. Atas dasar itulah pada tanggal 15 Februari 1982 M bertepatan dengan tanggal 21 Rabi'ul Akhir 1402 H di Khartoum Perhimpunan Pelajar Indonesia mulai diinisiasi oleh sekelompok mahasiswa Indonesia di Sudan. Tujuannya tak lebih adalah sebagai wadah komunikasi, silaturrahmi dan pengembangan diri selama menempuh studi di Sudan dalam berbagai jenjang. Terlebih pada tahun yang sama, perwakilan RI masih belum ada di Sudan, sehingga wadah ini sangat diperlukan untuk mewadahi para mahasiswa di Sudan.</p>
            <p className="mb-8 first-letter:ml-10">Pada tahun 1994, Sudan semakin memikat para pelajar Indonesia untuk melanjutkan studi sarjana dan pasca sarjananya. Jumlah mahasiswa Indonesia yang datang, baik itu dari Mesir maupun dari Indonesia secara langsung meningkat secara drastis. Akhirnya pada bulan Februari tahun 1995, di kota Omdurman, Persatuan Pelajar Indonesia | Sudan atau disingkat PPI Sudan berdiri secara resmi dengan para inisiator diantaranya Bapak Dr. M. Khaeruddin Hamsin, M.A. (Ketua pertama), Bapak Dr. Lalu Ahmad Busyairi, M.A. (Ketua kedua), Bapak Dr. Subhan Amier Chaf, M.A. dan Almarhum Bapak Ujang Tatang Wahyudin.</p>
            <p className="mb-8 first-letter:ml-10">Pada Musyawarah Tahunan Anggota tahun 2011 nama Persatuan Pelajar Indonesia – Sudan mengalami perubahan nama yaitu menjadi Persatuan Pelajar Mahasiswa Indonesia – Sudan atau disingkat PPMI Sudan. Hal ini seiring dengan terjadinya amandemen ADART dalam musyawarah tersebut. pada tahun 2014, nama PPMI Sudan kembali mengalami perubahan dan kembali ke nama sebelumnya yaitu Persatuan Pelajar Indonesia – Sudan (PPI Sudan) dengan harapan bahwa organisasi ini tidak hanya menghimpun para mahasiswa, tetapi lebih menjadi sarana persatuan para mahasiswa yang berasal dari hampir seluruh provinsi Indonesia.</p>
            <p className="mb-8 first-letter:ml-10">Organisasi mahasiswa yang sudah berumur 39 tahun ini, kian hari kian dirasakan manfaatnya terutama yang berhubungan dengan kelancaran akademis mahasiswa Indonesia di Sudan. Selain itu PPI Sudan telah menjadi jembatan birokrasi antara mahasiswa Indonesia dengan berbagai instansi, baik swasta atau pemerintahan setempat. Kedutaan Besar Republik Indonesia  (KBRI) Khartoum dan PPI Sudan saling bahu membahu untuk mempromosikan dan memperjuangkan nama baik Indonesia. Di bidang pendidikan banyaknya para mahasiswa yang mendapatkan nilai dengan predikat memuaskan di berbagai universitas internasional adalah bukti bahwa putra tanah air dapat bersaing di kancah internasional. Dibidang sosial dan budaya telah beberapa kali para mahasiswa diundang untuk mengadakan tampilan seni, Tari Rantak Sumatera Barat, Tari Saman Aceh, Pencak Silat dan Angklung telah ditampilkan dalam berbagai acara. Usaha-usaha mahasiswa tak hanya berhenti sampai disini, kini kerjasama antara KBRI Khartoum terus mengalami peningkatan antara Sudan dan Indonesia yang berdampak sangat baik bagi para pelajar Indonesia di Sudan.</p>
            <p className="mb-8 first-letter:ml-10">Saat ini usaha dan perjuangan organisasi PPI Sudan mulai dirasakan lewat peran para alumni-alumninya. Dahulu, ketika mendengar nama Sudan, yang ada di benak banyak orang adalah negara yang tertinggal dan menyeramkan. Kini sudah lebih dari 1200 orang mahasiswa Indonesia sedang menempuh studi di Negara bagian utara Afrika yang juga masih masuk wilayah Negara Arab. Saat ini ada sekitar 2000 orang lebih penduduk Indonesia yang berdomisili di sini. Kurang lebih tahun kemarin ada 1500 orang lebih pendaftar seleksi ujian masuk International University of Africa Khartoum Sudan. Peningkatan ini sangat pesat, dikarenakan tahun-tahun sebelumnya hanya berkisar 500-600 orang pendaftar.</p>
          </div>
          <div className="flex flex-col pt-28">
            <h3 className="text-teal-600">LOGO PPI SUDAN</h3>
            <h1 className="md:text-3xl text-2xl font-bold my-3">Phylosophy of Logo</h1>
            <ul className="mt-12">
              <img src="/assets/img/ppisudan.png" alt="logo" className="w-52 h-52 mx-auto mb-16" />
              <li>1. Pena berwarna hitam dan bermata keemasan bermakna pendidikan dan keilmuan.</li>
              <li>2. Bulan sabit berwarna kuning interpretasi kemuliaan nilai-nilai Islam.</li>
              <li>3. Bendera merah putih interpretasi nasionalisme dan nilai kebangsaan Indonesia.</li>
              <li>4. Ayat واعتصموا بحبل الله جميعا ولا تفرقوا keberagaman dalam persatuan.</li>
              <li>5. Dasar hijau berbentuk lingkaran interpretasi nilai universal Islam yang sesuai untuk semua golongan, suku, ras lintas tempat dan waktu.</li>
              <li>6. Tulisan "Persatuan Pelajar Indonesia" di bagian atas, dan "PPI Sudan" di bagian bawah sebagai identitas organisasi.</li>
            </ul>
          </div>
          <div className="flex flex-col pt-28 pb-16">
            <h3 className="text-teal-600">OTHER LOGO</h3>
            <h1 className="md:text-3xl text-2xl font-bold my-3">Autonomous</h1>
            <div className="mt-12 flex-col gap-10 flex md:flex-row justify-around md:items-end">
              <div className="flex flex-col items-center gap-10 pb-10 md:pb-0 md:border-0 border-b">
                <img src="/assets/img/pppisudan.png" alt="logo" className="md:w-36 w-48 mx-auto" />
                <Link to="/blogs/category/pppi"><h3 className="text-teal-600 font-bold text-2xl hover:underline">PPPI Sudan</h3></Link>
              </div>
              <div className="flex flex-col items-center gap-10">
                <img src="/assets/img/elnilein.png" alt="logo" className="md:w-36 w-48 mx-auto" />
                <a target="_blank" href="https://www.majalahelnilein.com/"><h3 className="text-teal-600 font-bold text-2xl hover:underline">El Nilein</h3></a>
              </div>
            </div>
          </div>
        </div>

        {/* sidebar */}

        <div className="flex flex-col lg:w-[45%] w-full lg:mx-0 gap-8">

          <FindUs />

          <div className="p-4 bg-white shadow rounded-xl dark:bg-[#222222]">
            <h1 className="text-2xl pb-4 font-bold border-b">Mars PPI Sudan</h1>
            <p className="italic mt-4">Persatuan Pelajar Indonesia <br />
              Singsingkan lengan <br />
              Kencangkan ikat pinggang <br />
              Bangun bersama negeri kita tercinta <br /><br />
              Indonesia tanah air jaya <br />
              Persatuan intelektual muda <br />
              Harapan agama, nusa, dan bangsa <br />
              Arahkan arus, goreskan sejarah <br /><br />
              Nabi Muhammad sebagai uswah <br />
              Sambut prestasi pilihan generasi <br />
              Berbakti pada masyarakat pertiwi <br />
              Jelang kesuksesan dengan pengorbanan <br /><br />
              Ikhlas beramal sebagai pegangan <br />
              Negeri Sudan medan penempaan <br />
              Tegar tanamkan arti kesabaran <br />
              Wujudkan cita-cita tinggi mulia <br />
              Alqur'an pedoman abadi kita <br /><br />
              Persatuan Pelajar Indonesia <br />
              Singsingkan lengan <br />
              Kencangkan ikat pinggang <br />
              Bangun bersama negeri kita tercinta <br /><br />
              Indonesia tanah air jaya <br />
              Persatuan intelektual muda <br />
              Harapan agama, nusa, dan bangsa <br />
              Arahkan arus, goreskan sejarah <br /><br />
              Nabi Muhammad sebagai uswah <br />
              Sambut prestasi pilihan generasi <br />
              Berbakti pada masyarakat pertiwi <br />
              Jelang kesuksesan dengan pengorbanan <br /><br />
              Ikhlas beramal sebagai pegangan <br />
              Bebaskan kreasi penuh inovasi <br />
              Ditengah panasnya terik matahari <br />
              Rubah tantangan jadikan peluang <br />
              Hanyalah Allah sebagai tujuan <br />
              Hanyalah Allah sebagai tujuan</p>
          </div>

          <div className="mx-auto w-full">
            <Mars />
          </div>

          <Mailing />
        </div>
      </div>
    </>
  );
}

export default About;