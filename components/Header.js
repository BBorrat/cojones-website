import Image from "next/image";
import logoCojones from "../public/images/logo_cojones.svg";

export function Header() {
  return (
    <header className="header">
      <div className="header__items__container">
        <div className="header__logo__container">
          <Image
            className="header__logo"
            src={logoCojones}
            alt="Co.Jones logotype"
          />
        </div>
        <div className="header__value__proposal__container">
          <h1 className="header__value__proposal__copy">
            Independent Hispanic Ad Agency
          </h1>
        </div>
      </div>
    </header>
  );
}
