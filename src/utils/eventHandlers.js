/**
 * Handles the change event of some input element and sets the search text state
 *
 * @param {object} e - The event object
 * @param {function} setSearchText - The function to set the search text state
 */

export const handleChangeUtil = (e, setSearchText) => {
  setSearchText(e.target.value);
};

/**
 * Handles the search action; fetches data and focuses on the search input
 * when called
 *
 * @param {string} searchText - The text to search for
 * @param {function} fetchData - Function to fetch data
 * @param {object} searchInputRef - Reference to the search input element
 */
export const handleSearchUtil = (searchText, fetchData, searchInputRef) => {
  fetchData(searchText);

  if (searchInputRef.current) {
    searchInputRef.current.focus();
  }
};

/**
 * Updates a song's rating by making an API call and updating the state
 *
 * @param {string} songId - The ID of the song to rate
 * @param {number} newRating - The new rating
 * @param {number} x - Row of the song that needs to be updated
 * @param {number} y - Collumn of the song that needs to be updated
 * @param {Array} allSongsData - The current songs data
 * @param {function} rateSong - Function to rate song
 * @param {function} setSongsData - Function to set the songs data state
 */
export const handleRatingChangeUtil = (
  songId,
  newRating,
  x,
  y,
  allSongsData,
  rateSong,
  setSongsData
) => {
  const updateCellValue = (rowIndex, colIndex, newValue) => {
    // Creating a shallow copy of the songs data
    const data = [...allSongsData];

    // Updating the row in the data
    data[rowIndex + 1][colIndex] = newValue;

    // Updating the data's state
    setSongsData(data);
  };
  rateSong(songId, newRating, x, y, updateCellValue);
};
