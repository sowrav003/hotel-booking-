

const Title = ({title,subTitle,align,font}) => {
  return (
    <div>
        <h1 className={`text-4xl md:text-[40px] text-${font} ${align === 'center' ? 'text-center' : 'text-left'}`}>{title}</h1>
        <p className={`text-${font} ${align === 'center' ? 'text-center' : 'text-left'}`}>{subTitle}</p>
    </div>
  )
}

export default Title