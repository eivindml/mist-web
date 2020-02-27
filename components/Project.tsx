import Image from './Image'

const Index = () => (
  <div className='project'>
    <Image />
    <div className='project__text-box'>
      <p>Tidtager for iOS og macOS</p>
      <h3>Minutes</h3>
    </div>
    
    <style jsx>{`
      .project {
        width: 100%;
        height: 100%;
        position: relative;
      }

      .project__text-box {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(50, 50, 50, .85);
        padding: 20px;
        backdrop-filter: blur(10px);
      }
      .project__text-box h3 {
        color: white;
        font-weight: 700;
        font-size: 22px;
        line-height: 1em;
        margin: 0;
        margin-top: .5em;
      }
      .project__text-box p {
        line-height: 1em;
        margin: 0;
        color: rgb(130, 130, 130);
        font-weight: 500;
        text-transform: uppercase;
        font-size: 13px;
      }

      img {
        width: 100%;
      }
    `}</style>
  </div>
);

export default Index;
