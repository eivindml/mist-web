// TODO: Collect and define som fonts and colors globally.

const Index = () => (
  <div className='footer'>
    <p>Eivind Lindbråten</p>
    <p>eivindml@icloud.com</p>

    <style jsx global>{`
      .footer {
        border-top: solid 1px rgb(242, 242, 247);
        padding: 20px;
        text-align: center;
        color: rgb(142, 142, 147);
      }

      .footer p {
        font-size: 0.85em;
      }
    `}</style>
  </div>
);

export default Index;
