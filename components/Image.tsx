import { createRef, useEffect } from 'react'

const Image = () => {

  var ref = createRef<HTMLImageElement>()

  useEffect(() => {
    setTimeout(() => {
    ref.current.src = '/static/project.png'
    //ref.current.style = 'transition: filter 1000ms ease-out'
    // TODO: Legg inn en cross fade blur også, ellers blir det en litt hard transition
    ref.current.style.transition = 'filter 100ms ease-out'
    ref.current.style.filter = 'blur(0px)'

  }, 50)
  }, [])

  return (
    <>
      <img ref={ref} src="data:image/png;base64,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" />
      <style jsx>{`
        img {
          object-fit: contain;
          width: 100%;
          height: 100%;
          filter: blur(30px);
        }
      `}</style>
    </>
  )
}

export default Image
