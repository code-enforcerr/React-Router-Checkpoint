import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './Components/MovieList/movielist';
import Filter from './Components/Filter/filter';
import AddMovie from './Components/AddMovie/addmovie';
import MovieDescription from './Components/MovieDesc/moviedesc';
import { Container } from 'react-bootstrap';
import './App.css'

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      posterURL: 'https://imgs.search.brave.com/ewibJwgPR-UwtznSPey5xuPBdlBdQxnzqS2L8aOMFbc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pcnMu/d3d3Lndhcm5lcmJy/b3MuY29tL2tleWFy/dC1qcGVnL2luY2Vw/dGlvbl9rZXlhcnQu/anBn',
      rating: 4.8,
      trailerURL: 'https://www.youtube.com/embed/YoHD9XEInc0',
    },

    {
      title: 'House of Gaa',
      description: 'At the height of the Oyo Empire, the ferocious Bashorun Gaa became more powerful than the kings he enthroned, only to be undone by his own blood',
      posterURL: 'https://imgs.search.brave.com/3IJqumI_LdEABoDIV45Pw1hPeXUkzjfjeDb_h5wIaFE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93aGF0/a2VwdG1ldXAuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI0/LzA3L3dwLTE3MjI0/MjI0MTE1NTE5MDc0/OTI1MTgzNzkyOTMw/MjQyLTY4M3gxMDI0/LmpwZw',
      rating: 3.8,
      trailerURL: 'https://www.youtube.com/embed/49bbecqx88E',
    },

    {
      title: 'SUPACELL',
      description: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      posterURL: 'https://imgs.search.brave.com/LnWHjExaxbUB7eLj4OnjQxjy5gjwxFBq4HGlc4ctu6M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnJl/ZGQuaXQvd2R0NjIx/cXpldmVkMS5qcGVn',
      rating: 4.8,
      trailerURL: 'https://www.youtube.com/embed/Frmk94Etedo',
    },

    {
      title: 'The Rookie',
      description: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      posterURL: 'https://imgs.search.brave.com/yIF0XEqsY4EQPIbPW1Ci1BZ4RxOh4VVJBFcbnj6EEg8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDUvdGhlLXJvb2tp/ZS10di1wb3N0ZXIu/anBn',
      rating: 3.8,
      trailerURL: 'https://www.youtube.com/embed/_HgC1TN8FVk',
    },

    {
      title: 'The Union',
      description: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      posterURL: 'https://imgs.search.brave.com/UIkY7PEpc_WdHyn6b0lrbA42vfZAIbwL9es_LKiBAI8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlkySTBZbU5p/Tm1FdE5XSTJNeTAw/TkRVNUxXSXdaV0l0/TldOa05qRm1ZV0pq/TlRNeFhrRXlYa0Zx/Y0djQC5qcGc',
      rating: 2.8,
      trailerURL: 'https://www.youtube.com/embed/vea9SdnRMyg',
    },
    
    {
      title: 'The Good Doctor',
      description: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      posterURL: 'https://imgs.search.brave.com/hOLq9nlxuSS_4aENcWS0NpW9A-XPpV3DWBHrPQoeZpU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/MzQ4MTkwMy9waG90/by90aGUtZ29vZC1k/b2N0b3ItYWJjcy10/aGUtZ29vZC1kb2N0/b3Itc3RhcnMtZnJl/ZGRpZS1oaWdobW9y/ZS1hcy1kci1zaGF1/bi1tdXJwaHkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVpK/anNwb2FkaThGUHVZ/bFVWZVJHdmh3Ni0t/ZU4wTmVuVmF0NXNI/RHplV2c9',
      rating: 2.8,
      trailerURL: 'https://www.youtube.com/embed/lnY9FWUTY84',
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  // const handleFilter = ({ title, rating }) => {
  //   const filtered = movies.filter((movie) => {
  //     return (
  //       (title === '' || movie.title.toLowerCase().includes(title.toLowerCase())) &&
  //       (rating === '' || movie.rating >= parseFloat(rating))
  //     );
  //   });
  //   setFilteredMovies(filtered);
  // };

  const handleFilter = ({ title, rating }) => {
    const parsedRating = parseFloat(rating);
  
    const filtered = movies.filter((movie) => {
      return (
        (title === '' || movie.title.toLowerCase().includes(title.toLowerCase())) &&
        (isNaN(parsedRating) || movie.rating >= parsedRating)
      );
    });
  
    setFilteredMovies(filtered);
  };

  const addMovie = (newMovie) => {
    const updatedMovies = [...movies, newMovie];
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  };

  return (
    <Router>
      <Container>
        <h1 className="my-4">My Movie App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter onFilter={handleFilter} />
                <AddMovie onAddMovie={addMovie} />
                <MovieList movies={filteredMovies} />
              </>
            }
          />
          <Route
            path="/movie/:title"
            element={<MovieDescription movies={movies} />}
          />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
