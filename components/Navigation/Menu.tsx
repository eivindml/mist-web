// TODO: Add scroll to show/hide border bottom of navigation
import Link from 'next/link'
// TODO: CLean up, og sørg for at meny og logo er skjult om siden reloades med scroll forbi punktet
// ikke animer på reload heller
// TODO: Kanskje dele kode mellom index.tsx og Menu
import { useEffect, useState, createRef } from 'react'

export default () => {

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
    <nav className='menu'>

      <div className={`menu__items ${ isScrolled ? "scr" : "nscr"}`}>
        <Link href='/#apps'>
          <a className='menu__item'>Apps</a>
        </Link>

        <Link href='/#work'>
          <a className='menu__item'>Work</a>
        </Link>

        <Link href='/blog'>
          <a className='menu__item'>Blog</a>
        </Link>
       </div>

      <div
        className={`menu__hamburger ${ isScrolled ? "scrolled" : "not-scrolled"}`}
      >
        <img src='/static/menu.svg' />
      </div>

      <style jsx>{`
        .menu {
          display: flex;
          align-items: center;
          height: 50px;
          padding-left: 75px;
          //overflow: hidden;
        }

        .menu__items {
          transform: translateX(50px);
        }

        .scr {
          animation-name: scr;
          animation-duration: 1000ms;
          animation-fill-mode: forwards;
          animation-timing-function: cubic-bezier(0.445, 2.045, 0.585, 0.815);
        }

        .nscr {
          animation-name: scr2;
          animation-duration: 800ms;
          animation-fill-mode: forwards;
          animation-timing-function: cubic-bezier(0.445, 2.045, 0.585, 0.815);
        }

        @keyframes scr {
          0% {
            opacity: 1;
          }
          25% {
            transform: translateX(-50px) scaleX(1.0);
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateX(100px) scaleX(0.3);
          }
        }

        @keyframes scr2 {
          0% {
            opacity: 0;
            //transform: translateX(-50px);
          }
          25% {
            transform: translateX(-25px);
            //opacity: 0;
          }
          100% {
            opacity: 1;
            transform: translateX(50px);
          }
        }


        .menu__item {
          color: black;
          text-decoration: none;
          font-size: 15px;
          font-weight: 700;
          transition: color 350ms ease-in-out;
        }
        .menu__item:not(:first-of-type) {
          margin-left: 20px;
        }
        .menu__item:hover {
          color: #999;
        }

        .menu__hamburger {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 30px;
          height: 30px;
          border-radius: 30px;
          padding: 10px;
          background-color: rgba(255, 255, 255, 0.75);
          background-color: rgba(0, 0, 0, .15);
          backdrop-filter: blur(15px);
          //box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
        .not-scrolled {
          //opacity: 0;
          animation-name: example2;
          animation-duration: 500ms;
          animation-fill-mode: forwards;
          //animation-direction: alternate;

          animation-timing-function: cubic-bezier(0.445, 2.045, 0.585, 0.815);
        }
        .scrolled {
          //opacity: 1;
          //animation-delay: 500ms;
          //background-color: red;
          //opacity: 0;
          animation-name: example;
          animation-duration: 500ms;
          animation-fill-mode: forwards;
          animation-timing-function: cubic-bezier(0.445, 2.045, 0.585, 0.815);
        }

        @keyframes example {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1.0);

          }
        }

        @keyframes example2 {
          from {
            opacity: 1;
            transform: scale(1.0);
          }
          to {
            opacity: 0;
            transform: scale(0);

          }
        }

        .menu__hamburger img {
          width: 100%;
        }
      `}</style>
    </nav>
  )
};
