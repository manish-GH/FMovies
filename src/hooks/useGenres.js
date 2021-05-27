const useGenres = (selectedGenres) => {
  if (selectedGenres.length < 1) return "";

  const genresIds = selectedGenres.map((item) => item.id);
  return genresIds.toString();
};

export default useGenres;
