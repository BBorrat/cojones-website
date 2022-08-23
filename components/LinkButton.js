import Link from 'next/link'
import Image from 'next/image'


export function LinkButton(props) {
  return (
    <Link href={props.href}>
      <div className="cta__button__image__container">
        <Image
          src={props.src}
        />
      </div>
    </Link>
  )
};