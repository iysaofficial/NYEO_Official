import Link from 'next/link'
import '../assets/css/Footer.css'

const FooterComp = () =>{
    return(
    <>
    <footer>
      <div className="container">
        <div className="wrapper">
          <div className="footer-widget">
            <h6 className='logo'>National Youth Economy Olympiad</h6>
            <p className="desc">
             
            </p>
            <ul className="socials">
                <li>
                    <Link href="https://www.facebook.com/profile.php?id=100063979907207" target='_blank'>
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                </li>
                <li>
                    <Link href="https://www.instagram.com/nyeo.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'>
                        <i className="fab fa-instagram"></i>
                    </Link>
                </li>
                <li>
                    <Link href="https://www.youtube.com/@IYSAOfficial" target='_blank'>
                        <i className="fab fa-youtube"></i>
                    </Link>
                </li>
                <li>
                    <Link href="https://www.tiktok.com/@iysa.official" target='_blank'>
                        <i className="fab fa-tiktok"></i>
                    </Link>
                </li>
                <li>
                    <Link href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" target='_blank'>
                        <i className="fab fa-linkedin"></i>
                    </Link>
                </li>
            </ul>
          </div>
          <div className="footer-widget">
            <h6>Link Informasi</h6>
            <ul className="links">
                <li><Link href="/#contact-section">Kontak</Link></li>
                <li><Link href="https://iysa.or.id" target='_blank'>Website Utama IYSA</Link></li>
                <li><Link href="https://iysaolympiad.or.id" target='_blank'>Website IYSA Olympiad</Link></li>
            </ul>
          </div>
          <div className="footer-widget">
            <h6>Navigasi</h6>
            <ul className="links">
                <li><Link href="/">Utama</Link></li>
                <li><Link href="/#about-section">Tentang</Link></li>
                <li><Link href="/#category-section">Kategori</Link></li>
                {/* <li><a href="#">Buku Panduan</a></li> */}
                <li><Link href="/#contact-section">Kontak</Link></li>
            </ul>
          </div>
          <div className="footer-widget">
            <h6>Office</h6>
            <ul className="links">
                <li><Link href="https://wa.me/+6283870026877">+6283870026877</Link></li>
                {/* <br /> */}  
                <li><Link href="mailto:iysa.olympiad@gmail.com">iysa.olympiad@gmail.com</Link></li>
                {/* <br /> */}
                <li><Link href="https://goo.gl/maps/9x18coXGCmSscKec6">Jl. Kemang No. 63 RT 03 RW 06</Link></li>
            </ul>
          </div>
        </div>
       
      </div>
    </footer>
    <div className="copyright-wrapper">
        <p>
            Copyright © 2024 NYEO Official. All rights reserved
        </p>
    </div>
    </>
    )
}

export default FooterComp