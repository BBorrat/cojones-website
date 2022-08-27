import Link from "next/link";
import Image from "next/image";
import { useHover } from "../utils/customHooks";

export function LinkButtonTargetBlank(props) {
  const [hoverRef, isHovered] = useHover();
  return (
    <Link href={props.href}>
      <a target="_blank">
        <div className="cta__button__image__container" ref={hoverRef}>
        {isHovered && props.srcHover ?
          <Image src={props.srcHover}/>
        :
          <Image src={props.src}/>
        }
        </div>
      </a>
    </Link>
  );
}
