import Project from './Project'

const Index = () => (
  <div className='projects'>

    <div className='projects__project'>
      <Project />
    </div>

    <div className='projects__project'>
      <Project />
    </div>

    <div className='projects__project'>
      <Project />
    </div>

    <div className='projects__project'>
      <Project />
    </div>

    <style jsx global>{`
      .projects {
        // display: flex;
        overflow-x: auto;
        white-space: nowrap;
        padding-bottom: 10px;
        box-sizing: border-box;
        -webkit-overflow-scrolling: touch;
        //z-index: 1;
        margin-left: -20px;
      }
      .projects::-webkit-scrollbar {
        //display: none;
      }

      .projects__project {
        display: inline-block;
        width: 400px;
        height: 300px;
        margin: 10px;
        box-sizing: border-box;
        border-radius: 10px;
        overflow: hidden;
        transition: transform 200ms cubic-bezier(.55, 1.49, .83, .67);
        cursor: pointer;
        will-change: transform; // So blur effect also will be cropped
      }
      .projects__project:first-of-type {
        margin-left: 20px;
      }
      .projects__project:last-of-type {
        margin-right: 0;
      }
      .projects__project:hover {
        transform: scale(1.04);
      }
    `}</style>
  </div>
);

export default Index;
