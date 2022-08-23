import Image from 'next/image'
import logoCojones from '../public/images/logo_cojones.svg'

export function Header() {
    return (
        <header className="header">
            <div className="header__items__container">
                <Image 
                    className="header__logo"
                    src={logoCojones}
                    alt="Co.Jones logotype"                    
                />
                <h1 className="header__value__proposal">Independent Hispanic Ad Agency</h1>
            </div>
        </header>
    )
};