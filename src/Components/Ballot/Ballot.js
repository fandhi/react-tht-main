import React, { Fragment, useEffect, useState } from 'react';
import api from '../../Api/Api';
import Card from '../Organisms/Card';
import Dialog from '../Organisms/Dialog';

const Ballot = () => {
  const [movies, setMovies] = useState({
    loading: false,
    data: [],
  });
  const [selectedMovies, setSelectedMovies] = useState([])
  const [visible, setvisible] = useState(false);
  
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

  const sdfs = (value) => {
    console.log(`value`, value)
    setSelectedMovies(
      selectedMovies.concat(value)
    );
  };

  const handleSubmit = () => {
    setvisible(true);
  }

  const handleClose = () => {
    setvisible(false);
  }

  return (
    <div className="container">
      <div className="ballot">
        <h1 className="ballot__heading">AWARDS 2021</h1>
        {movies.loading ? (
          <p>loading</p>
        ) : (
          <>
            {movies.data.map(
              (item, index) =>
                item.id === categoryName[index] && (
                  <Fragment key={index}>
                    <h2 className="ballot__header">{item.title}</h2>

                    <div className="grid-container">
                      {item.items.map((itemB, i) => (
                        <Card
                          title={itemB.title}
                          image={itemB.photoUrL}
                          selectedItem={sdfs}
                          data={itemB}
                          onclick={(itemB) => sdfs(itemB)}
                          key={i}
                        />
                      ))}
                    </div>
                  </Fragment>
                )
            )}
          </>
        )}
        <button className="ballot__submit" onClick={() => handleSubmit()}>Submit</button>
        </div>
        <Dialog visible={visible} onclose={handleClose} data={selectedMovies} />
    </div>
  );
};

export default Ballot;
