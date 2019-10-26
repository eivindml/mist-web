const Index = () => (
  <div className='hero'>
    <p className='hero__tagline'>
    <span>Hello.</span>I'm an Apple ecosystem developer from Norway, and this is my one-man studio.
    </p>

    <style jsx global>{`
      .hero__tagline {
        text-align: center;
        font-size: 48px;
        line-height: 1.4em;
        font-weight: 700;
      }

      span {
        font-size: 144px;
        display: block;
        line-height: 1em;
      }
      span:after {
        position: absolute;
        content: '👋🏻';
      }
    `}</style>
  </div>
);

export default Index;
