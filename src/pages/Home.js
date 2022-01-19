import { useContext } from 'react';
import { Context } from '../store';

export const Home = () => {
  const [state, dispatch] = useContext(Context);

  return (
    <div className='page home-page'>
      <div className='container'>
        <h2>Home</h2>
      </div>
      <div className='container'>
        <p>Welcome Home to Template</p>
        <p>Context test: {state.text} </p>
        <p>
          <button
            onClick={() =>
              dispatch({ type: 'UPDATE_TEXT', payload: 'new text' })
            }
          >
            Update text
          </button>
        </p>
      </div>
    </div>
  );
};
