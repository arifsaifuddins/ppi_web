import { Title } from "react-head";
import { Link } from "react-router-dom";
import FindUs from "../templates/FindUs";
import Mailing from "../templates/Mailing";
import Mars from "../templates/Mars";

function About() {
  return (
    <>
      <Title>PPI Sudan - Tentang</Title>
      <div className="flex gap-8 md:w-[90%] md:px-0 w-full lg:flex-row flex-col mx-auto lg:my-10 my-4">
        <div className="flex flex-col lg:px-8 px-4 py-4 bg-white shadow rounded-xl w-full lg:w-[68%] h-max dark:bg-[#222222]">
          <h1 className="text-2xl pb-4 border-b text-teal-600"># Tentang</h1>
          <div className="flex flex-col items-center mt-20 w-max mx-auto">
            <img src="/assets/img/ppisudan.png" alt="logo" className="w-40" />
            <h1 className="text-5xl mb-8 text-[#51A274] font-semibold mt-6">PPISUDAN</h1>
            <p className="md:text-xl text-center font-thin text-slate-500">اتحاد الطلبة الإندونيسيين بالسودان</p>
            <p className="md:text-xl text-center font-thin">Indonesian Students Association in Sudan</p>
            <p className="md:text-xl text-center">Persatuan Pelajar Indonesia Sudan</p>
          </div>
          <div className="flex flex-col py-20 mt-20 border-y">
            <h3 className="text-teal-600">PPI SUDAN</h3>
            <h1 className="md:text-3xl text-2xl font-bold my-3">Sejarah PPI Sudan</h1>
            <p className="mb-8 first-letter:ml-5 text-justify mt-12">Sejarah rantai peradaban sangat ditentukan dengan peralihan generasi. Tentunya generasi-generasi
              pilihan yang akan sanggup mengusung dan meneruskan peradaban para pendahulunya. Mereka
              yang secara intelektual, stamina dan psikologis seiring sejalan. Inilah tujuan agung dari proses
              pendidikan yang paripurna.</p>
            <p className="mb-8 first-letter:ml-5 text-justify ">Pendidikan yang menghasilkan generasi cerdas, kuat dan stabil. Keberadaan <i>Youth Generation</i>
              menjadi penentu baik dan buruknya sebuah peradaban. Ditambah tugas para generasi muda kita
              sebagai <i>Agent of Change</i> bukanlah tugas yang mudah.</p>
            <p className="mb-8 first-letter:ml-5 text-justify">Keberadaan PPI Sudan sebagai wadah mahasiswa Indonesia di Sudan sangat penting adanya.
              Keberadaanya menjadi sarana untuk meningkatkan intelektual, membangun dan mengembangkan
              sumber daya manusia unggul, bertakwa dan berbudi pekerti luhur.</p>
            <p className="mb-8 first-letter:ml-5 text-justify ">Atas dasar itulah pada tanggal 15 Februari 1982 M bertepatan dengan tanggal 21 Rabi'ul Akhir 1402
              H di Khartoum, Perhimpunan Pelajar Indonesia dibentuk, yang diinisiasi oleh sekelompok mahasiswa
              Indonesia di Sudan.</p>
            <p className="mb-8 first-letter:ml-5 text-justify ">Tujuannya tak lebih adalah sebagai wadah komunikasi, silaturahim, dan pengembangan diri selama
              menempuh studi di Sudan dalam berbagai jenjang. Terlebih pada tahun yang sama, perwakilan RI
              masih belum ada di Sudan, sehingga wadah ini sangat diperlukan untuk mewadahi para mahasiswa
              di Sudan.</p>
            <p className="mb-8 first-letter:ml-5 text-justify">Pada tahun 1994, Sudan semakin memikat para pelajar Indonesia untuk melanjutkan studi sarjana
              dan pasca sarjananya. Jumlah mahasiswa Indonesia yang datang, baik itu dari Mesir maupun dari
              Indonesia secara langsung meningkat secara drastis.</p>
            <p className="mb-8 first-letter:ml-5 text-justify ">Akhirnya pada bulan Februari tahun 1995, di kota Omdurman, Persatuan Pelajar Indonesia Sudan
              atau disingkat PPI Sudan berdiri secara resmi dengan para inisiator diantaranya Bapak Dr. M.
              Khaeruddin Hamsin, M.A. (Ketua pertama), Bapak Dr. Lalu Ahmad Busyairi, M.A. (Ketua kedua),
              Bapak Dr. Subhan Amier Chaf, M.A., dan Bapak Ujang Tatang Wahyudin.</p>
            <p className="mb-8 first-letter:ml-5 text-justify">Pada Musyawarah Tahunan Anggota tahun 2011 nama Persatuan Pelajar Indonesia Sudan
              mengalami perubahan nama yaitu menjadi Persatuan Pelajar Mahasiswa Indonesia Sudan atau
              disingkat PPMI Sudan. Hal ini seiring dengan terjadinya amandemen AD/ART dalam musyawarah
              tersebut.</p>
            <p className="mb-8 first-letter:ml-5 text-justify ">Di tahun 2014, nama PPMI Sudan kembali mengalami perubahan dan kembali ke nama sebelumnya
              yaitu Persatuan Pelajar Indonesia Sudan (PPI Sudan) dengan harapan bahwa organisasi ini tidakhanya menghimpun para mahasiswa, tetapi lebih menjadi sarana persatuan para mahasiswa yang
              berasal dari hampir seluruh provinsi Indonesia.</p>
            <p className="mb-8 first-letter:ml-5 text-justify">Organisasi mahasiswa yang sudah berumur 39 tahun ini, kian hari kian dirasakan manfaatnya
              terutama yang berhubungan dengan kelancaran akademis mahasiswa Indonesia di Sudan. Selain itu
              PPI Sudan semoga terusbmenjadi jembatan birokrasi antara mahasiswa Indonesia dengan berbagai
              instansi, baik swasta atau pemerintahan setempat.</p>
            <p className="mb-8 first-letter:ml-5 text-justify ">Kedutaan Besar Republik Indonesia (KBRI) Khartoum dan PPI Sudan saling bahu membahu untuk
              mempromosikan dan memperjuangkan nama baik Indonesia dengan menjadi wadah pengembangan
              ilmu dan potensi mereka.</p>
            <p className="mb-8 first-letter:ml-5 text-justify">Kini PPI Sudan mulai dirasakan lewat peran para alumni-alumninya. Dahulu, ketika mendengar nama
              Sudan, yang ada di benak banyak orang adalah negara yang tertinggal dan menyeramkan. Saat ini
              justru sudah lebih dari 1200 orang mahasiswa Indonesia sedang menempuh studi di Negara bagian
              utara Afrika yang juga masih masuk wilayah Negara Arab. Saat ini ada sekitar 2000 orang lebih
              penduduk Indonesia yang berdomisili di sini.</p>
            <p className="mb-8 first-letter:ml-5 text-justify">Semoga sebagai organisasi persatuan mahasiswa, PPI Sudan selalu menjadi poros pergerakan yang
              baik untuk semua orang yang bernaung dibawahnya.</p>
          </div>
          <div className="flex flex-col pt-28">
            <h3 className="text-teal-600">LOGO PPI SUDAN</h3>
            <h1 className="md:text-3xl text-2xl font-bold my-3">Filosofi Logo</h1>
            <ul className="mt-16">
              <img src="/assets/img/ppisudan.png" alt="logo" className="w-52 h-52 mx-auto mb-20" />
              <li className="mb-2"><span className="font-bold mr-2">1. </span> Pena berwarna hitam dan bermata keemasan bermakna pendidikan dan keilmuan.</li>
              <li className="mb-2"><span className="font-bold mr-2">2. </span> Bulan sabit berwarna kuning interpretasi kemuliaan nilai-nilai Islam.</li>
              <li className="mb-2"><span className="font-bold mr-2">3. </span> Bendera merah putih interpretasi nasionalisme dan nilai kebangsaan Indonesia.</li>
              <li className="mb-2"><span className="font-bold mr-2">4. </span> Ayat واعتصموا بحبل الله جميعا ولا تفرقوا keberagaman dalam persatuan.</li>
              <li className="mb-2"><span className="font-bold mr-2">5. </span> Dasar hijau berbentuk lingkaran interpretasi nilai universal Islam yang sesuai untuk semua golongan, suku, ras lintas tempat dan waktu.</li>
              <li className="mb-2"><span className="font-bold mr-2">6. </span> Tulisan "Persatuan Pelajar Indonesia" di bagian atas, dan "PPI Sudan" di bagian bawah sebagai identitas organisasi.</li>
            </ul>
          </div>
          <div className="flex flex-col py-20 mt-20 border-t">
            <h3 className="text-teal-600">LOGO LAINNYA</h3>
            <h1 className="md:text-3xl text-2xl font-bold my-3">Otonom</h1>
            <div className="mt-16 flex-col gap-10 flex md:flex-row justify-around md:items-end">
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

        <div className="flex flex-col lg:w-[30%] w-full lg:mx-0 gap-8">

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