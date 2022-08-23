import Image from 'next/image'

export function BackgroundImage(props) {
  return (
    <div className={'image__container image__container-' + props.imgHeight} >
      <Image 
        className='image' 
        alt={props.alt} 
        src={props.src} 
        layout='fill'
        objectFit='cover'
        objectPosition={props.objectPosition}
        quality={100}
        width={props.width}
        height={props.height}
        />
    </div>
  )
};