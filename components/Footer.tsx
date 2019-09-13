// TODO: Collect and define som fonts and colors globally.

const Index = () => (
  <footer className='footer'>
    <p>Eivind Lindbråten</p>
    <p>eivindml@icloud.com</p>

    <style jsx global>{`
      .footer {
        // border-top: solid 1px rgb(242, 242, 247);
        padding: 80px;
        text-align: center;
        color: rgb(142, 142, 147);
        //position: fixed;
        //width: 100%;
        //bottom: 0;
        background-color: rgba(0, 0, 0, 0.9);
        height: 100%;

      }

      .footer p {
        font-size: 0.85em;
      }
    `}</style>
  </footer>
);

export default Index;
