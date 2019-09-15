// TODO: Add scroll to show/hide border bottom of navigation
import Link from 'next/link'
import Logo from '../Logo'
import Menu from './Menu'
// TODO: CLean up, og sørg for at meny og logo er skjult om siden reloades med scroll forbi punktet
// ikke animer på reload heller
import { useEffect, useState, createRef } from 'react'

const Index = () => {

  const [isScrolled, setIsScrolled] = useState(false)
  var ref = createRef<HTMLImageElement>()

  useEffect(() => {
    setIsScrolled(document.documentElement.scrollTop > 250)
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    setIsScrolled(document.documentElement.scrollTop > 250)
  }

return (
  <div className='navigation'>
    <nav className='navigation__container'>

      <Link href='/'>
        <a className='navigation__logo'>
          <div className={`hamburger ${ isScrolled ? "scrolled" : "not-scrolled"}`}>
      <Logo />
    </div>
        </a>
      </Link>

      <Menu />

      </nav>

    <style jsx>{`
      .navigation {
        //border-bottom: solid 1px rgb(242, 242, 247);
        position: sticky;
        top: 0;
        //background-color: rgba(0, 0, 0, 0.75);
        //backdrop-filter: blur(15px);
        z-index: 1;
      }

      .navigation__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        margin: 0 auto;
        max-width: 900px;
        box-sizing: border-box;
      }

      .navigation__logo {
        height: 20px;
      }

      .navigation__item {
        color: black;
        text-decoration: none;
        font-size: 15px;
        font-weight: 700;
        //border-bottom: solid 5px rgba(0, 0, 0, 0);
        transition: color 350ms ease-in-out;
        //height: calc(1em - 2px);
        padding: 0 0 0 5px;
        margin-left: 30px;
      }
      .navigation__item:hover {
        // border-bottom: solid 5px #FFDB4C;
        color: #999;
      }

      .hamburger {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        //background-color: white;
        border-radius: 30px;
        padding: 10px;
        //background-color: rgba(255, 255, 255, 0.75);
        //backdrop-filter: blur(10px);
        //transform: translateX(-50px);
      }

      .scrolled {
        animation-name: example;
          animation-duration: 500ms;
          animation-fill-mode: forwards;
          animation-timing-function: cubic-bezier(0.445, 2.045, 0.585, 0.815);
      }

      .not-scrolled {
        animation-name: example2;
          animation-duration: 500ms;
          animation-fill-mode: forwards;
          animation-timing-function: cubic-bezier(0.445, 2.045, 0.585, 0.815);
      }

      @keyframes example {
          0% {
            opacity: 1;
            transform: translateY(0px);
          }
          30% {
            transform: translateY(20px);
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(-100px);

          }
        }

        @keyframes example2 {
          0% {
            opacity: 0;
            transform: translateY(-100px);
          }
          40% {
            transform: translateY(20px);
            opacity: 1;
          }
          100% {
            opacity: 1;
            transform: translateY(0px);

          }
        }

      .hamburger img {
        width: 100%;
      }
    `}</style>
  </div>
)
}

export default Index;
