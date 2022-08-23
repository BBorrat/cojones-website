import Image from 'next/image'
import Link from 'next/link'
import linkedinIcon from '../public/images/linkedin-icon.svg'
import instagramIcon from '../public/images/instagram-icon.svg'
import facebookIcon from '../public/images/facebook-icon.svg'
import logoCojonesWhite from '../public/images/logo_cojones_white.svg'

export function Footer() {

    return (    
        <footer className="footer">
            <div className="logo-and-copyright__container">
                
                <Image 
                    className="footer__logo"
                    src={logoCojonesWhite}
                    width='220'
                    height='29.48'
                />

                <div className="footer__copyright__container">
                    <p className='footer__copyright__copy'>&copy; Co.Jones {new Date().getFullYear()} </p>
                </div>
            </div>
            <div className='footer__email__copy__container'>
                <p className='footer__email__copy'>max@showcojones.com</p>
            </div>
            <div className="footer__social-media__icons__container">
                <Link href={"https://www.linkedin.com/company/co-jones-creative-marketing-communicatios/"} >
                    <a target={"_blank"}>
                        <Image 
                            className="footer__social-media__icon"
                            src={linkedinIcon}
                            alt="LinkedIn icon"
                            width="28"
                            height="28" 
                        />
                    </a>
                </Link>
                <Link href={"https://www.instagram.com/co.jonescreative/"} >
                    <a target={"_blank"}>
                        <Image 
                            className="footer__social-media__icon"
                            src={instagramIcon}
                            alt="Instagram icon"
                            width="28"
                            height="28" 
                        />
                    </a>
                </Link>
                <Link href={"https://www.facebook.com/cojonescreative"} >
                    <a target={"_blank"}>
                        <Image 
                            className="footer__social-media__icon"
                            src={facebookIcon}
                            alt="Facebook icon"
                            width="28"
                            height="28" 
                        />
                    </a>
                </Link>
            </div>

        </footer>
    )
}