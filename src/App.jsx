import './App.module.css'
import 'modern-normalize';

import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal';

import fetchPhotos from './apiService/unsplashApi';
import { useInView } from 'react-intersection-observer';

function App() {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  //modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  //modal img
  const [imgSrc, setImgSrc] = useState('');
  const [imgAlt, setImgAlt] = useState('');

  //infinity scroll
  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    async function callFetchPhotos() {
      try {
        if (!query) {
          return;
        }

        setLoading(true);

        setErr(false);
        const data = await fetchPhotos(query, page);

        if(parseInt(data.total_pages) === parseInt(page) || parseInt(data.total_pages) === 0 || parseInt(data.total_pages) === 1) {
          setLoading(false);
        }

        if (page > 1) {
          setPhotos(prevItems => {
            return [...prevItems, ...data.results];
          });
        } else {
          setPhotos(data.results);
        }
      } catch {
        setErr(true);
      }
    }
    callFetchPhotos();
  }, [query, page]);

  useEffect(() => {
    if (inView) {
      setPage(prevPage => {
        return prevPage + 1;
      });
    }
  }, [inView]);

  function changeQuery(value) {
    setQuery(value);
    setPage(1);
  }

  function handleClose() {
    setIsModalOpen(false);
  }

  function handleOpenModal(currImg, currAlt) {
    setImgSrc(currImg);
    setImgAlt(currAlt);
    setIsModalOpen(prev => !prev);
  }

  return (
    <>
      <SearchBar changeFilter={changeQuery} />

      {err && <ErrorMessage />}
      {!!photos.length && <ImageGallery photos={photos} openModal={handleOpenModal} />}
      {loading && <Loader ref={ref} visible={loading} />}
      {imgSrc && (
        <ImageModal
          isOpen={isModalOpen}
          imgSrc={imgSrc}
          imgAlt={imgAlt}
          handleClose={handleClose}
        />
      )}
    </>
  );
}

export default App;
