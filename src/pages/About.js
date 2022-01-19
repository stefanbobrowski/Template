export const About = () => {
  return (
    <div className='about-page page'>
      <div className='container'>
        <h2>About</h2>
      </div>
      <div className='container'>
        <p>
          A React template so I don't have to keep stripping down Create React
          Apps and hooking it up with a router, context, scss, etc.
        </p>
        <p>
          Built with{' '}
          <a
            href='https://create-react-app.dev/'
            target='_blank'
            rel='noreferrer'
          >
            Create React App
          </a>
          ,{' '}
          <a href='https://reactrouter.com/' target='_blank' rel='noreferrer'>
            React Router
          </a>
          , and{' '}
          <a
            href='https://reactjs.org/docs/context.html'
            target='_blank'
            rel='noreferrer'
          >
            Context
          </a>
          .
        </p>
        <p>
          Github:{' '}
          <a
            href='https://github.com/stefanbobrowski/Template'
            target='_blank'
            rel='noreferrer'
          >
            https://github.com/stefanbobrowski/Template
          </a>
        </p>
      </div>
    </div>
  );
};
