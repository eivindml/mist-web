// TODO: Add scroll to show/hide border bottom of navigation
import Link from 'next/link'
import Logo from './Logo'

const Index = () => (
  <div className='navigation'>
    <nav className='navigation__container'>
      <Link href='/'>
        <a className='navigation__logo'>
          <Logo />
        </a>
      </Link>

      <Link href='/#apps'>
        <a className='navigation__item'>Apps</a>
      </Link>

      <Link href='/#work'>
        <a className='navigation__item'>Work</a>
      </Link>

      <Link href='/blog'>
        <a className='navigation__item'>Blog</a>
      </Link>
    </nav>

    <style jsx global>{`
      .navigation {
        border-bottom: solid 1px rgb(242, 242, 247);
        position: sticky;
        top: 0;
        background-color: rgba(255, 255, 255, 0.75);
        backdrop-filter: blur(15px);
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
        font-weight: 600;
        //border-bottom: solid 5px rgba(0, 0, 0, 0);
        transition: color 350ms ease-in-out;
        //height: calc(1em - 2px);
        padding: 0 0 0 5px;
      }
      .navigation__item:hover {
        //border-bottom: solid 5px #FFDB4C;
        color: #999;
      }
    `}</style>
  </div>
);

export default Index;
