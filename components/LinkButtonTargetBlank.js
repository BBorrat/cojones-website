import Link from "next/link";
import Image from "next/image";

export function LinkButtonTargetBlank(props) {
  return (
    <Link href={props.href}>
      <a target="_blank">
        <div className="cta__button__image__container">
          <Image src={props.src} />
        </div>
      </a>
    </Link>
  );
}
