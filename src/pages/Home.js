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
        <p>
          <b>Text from Context:</b> "{state.text}"{' '}
        </p>
        <p>
          <button
            onClick={() =>
              dispatch({ type: 'UPDATE_TEXT', payload: 'Updated text!' })
            }
          >
            UPDATE TEXT
          </button>
        </p>
      </div>
    </div>
  );
};
