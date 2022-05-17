import React, { useEffect, useState } from 'react';
import api from '../../Api/Api';
import Card from '../Organisms/Card';

const Ballot = () => {
  const [movies, setMovies] = useState({
    loading: false,
    data: [],
  });
  useEffect(() => {
    getFetch();
  }, []);
  const getFetch = async () => {
    setMovies({ loading: true, data: [] });
    try {
      const ada = await api.getBallotData();
      setMovies({ loading: false, data: ada.items });
    } catch (error) {
      setMovies({ loading: false, data: [] });
    }
  };

  const categoryName = movies.data
    .map(function (e) {
      return e.id;
    })
    .filter(function (d, i, a) {
      return a.indexOf(d) === i;
    });

  return (
    <div class="container">
      <div className="ballot">
        <h1 className="ballot__heading">AWARDS 2021</h1>
        {movies.loading ? (
          <p>loading</p>
        ) : (
          <>
            {movies.data.map(
              (item, index) =>
                item.id === categoryName[index] && (
                  <>
                    <h2 className="ballot__header">{item.title}</h2>

                    <div className="grid-container">
                      {item.items.map((itemB, i) => (
                        <Card
                          title={itemB.title}
                          image={itemB.photoUrL}
                          // selected={}
                          onchange={() => console.log(itemB.id)}
                          // onClick={props.onClick}
                          key={i}
                        />
                      ))}
                    </div>
                  </>
                )
            )}
          </>
        )}
        <button className="ballot__submit">Submit</button>
        </div>
    </div>
  );
};

export default Ballot;
