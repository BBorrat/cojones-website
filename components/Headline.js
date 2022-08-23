export function Headline(props) {
    return (
      
      <div className="headline__background__container">
        <div className='headline__background'>
          <div className='headline__container'>
            {props.children}
          </div>
        </div>
      </div>
    )
};