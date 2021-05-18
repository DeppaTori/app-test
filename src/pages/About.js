import Header from '../components/Header';

const About = () => {
    const dataCV = {
        nama:'Tommy',
        alamat:'Tangerang',
        sekolah:[
            {
                nama:'SD YPPSB'
            },
            {
                nama:'SLTP YPPSB'
            },
            {
                nama:'SMA 1'
            },
            {
                nama:'STMIK'
            }
        ],
        organisasi:[

        ],
        riwayatKerja:[
            {
                perusahaan:'PT. Mitrais',
                job:'Software Engineer',
                description:'Melakukan pengembangan aplikasi'
            }
        ]
    }
    return (
        <div>
            <h3>About</h3>
            <Header />
            <div>
                <p>Nama : {dataCV.nama}</p>
                <p>Alamat : {dataCV.alamat}</p>
                <p>Sekolah : <br/>
                    {dataCV.sekolah.map((sek)=>(
                        <div>
                            <>{sek.nama}</>
                        </div>
                    ))}
                </p>
                <p>Organisasi : <br/> 
                        {dataCV.organisasi.length===0?"Tidak ada organisasi": "Ada organisasi"}
                </p>
                <p>Riwayat Pekerjaan : <br/>
                    {dataCV.riwayatKerja.map((rk)=>(
                        <div>
                            <span>Nama Perusahaan: {rk.perusahaan}</span><br/>
                            <span>Pekerjaan : {rk.job}</span><br/>
                            <span>Deskripsi Pekerjaan{rk.description}</span><br/>
                        </div>
                    ))}
                </p>
            </div>
            <a href="/">Go Back</a>
        </div>
    )
}

export default About
