/**
 * Generates and returns a random color hex string
 *
 * @returns {string} Color Hex string
 */
export const getRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
};

/**
 * Extracts and returns formatted data for a scatter chart
 *
 * @param {Array} songsData - The object containing songs data
 * @param {string} xLabel - The label for the x-axis data
 * @param {string} yLabel - The label for the y-axis data
 *
 * @returns {Array} x and y values for the scatter chart
 */
export const extractScatterData = (songsData, xLabel, yLabel) => {
  const columns = songsData[0],
    songs = songsData.slice(1),
    data = [];

  const xLabelIndex = columns?.findIndex((i) => i == xLabel);
  const yLabelIndex = columns?.findIndex((i) => i == yLabel);

  for (const song of songs) {
    const x = song[xLabelIndex];
    const y = song[yLabelIndex];
    data.push({ x, y });
  }
  return data;
};

/**
 * Extracts and returns formatted data for a bar chart
 *
 * @param {Array} songsData - The object containing songs data
 * @param {string} xLabel - The label for the x-axis data
 * @param {string} yLabel - The label for the y-axis data
 *
 * @returns {object} x and y values for the bar chart
 *
 */
export const extractBarData = (songsData, xLabel, yLabel) => {
  const columns = songsData[0],
    songs = songsData.slice(1);

  const xLabelIndex = columns?.findIndex((i) => i == xLabel);
  const yLabelIndex = columns?.findIndex((i) => i == yLabel);

  const xData = [],
    yData = [];

  for (const song of songs) {
    xData.push(song[xLabelIndex]);
    yData.push(song[yLabelIndex]);
  }

  return { xData, yData };
};

/**
 * Extracts and returns formatted data for a histogram
 *
 * @param {Array} songsData - The object containing songs data
 * @param {string} xLabel - The label for the x-axis data
 *
 * @returns {object} x and y values for the histogram chart
 *
 */
export const extractHistogramData = (songsData, xLabel) => {
  const columns = songsData[0],
    songs = songsData.slice(1);

  let xLabelIndex = columns?.findIndex((i) => i == xLabel);

  // Converting duration values to seconds from milliseconds
  const xData = songs.map((row) => Math.floor(row[xLabelIndex] / 1000));
  xData.sort((a, b) => a - b);

  const frequencyBins = new Map();
  const binSize = 30;

  // Counting the frequency of each bin
  for (const duration of xData) {
    // Creating frequency bucket/bins
    const binStart = Math.floor(duration / binSize) * binSize;
    const binEnd = binStart + binSize;

    const binLabel = `${binStart}-${binEnd}s`;

    if (!frequencyBins.has(binLabel)) {
      frequencyBins.set(binLabel, 1);
    } else {
      frequencyBins.set(binLabel, frequencyBins.get(binLabel) + 1);
    }
  }

  // Extracting bin keys and frequencies for histogram data
  const frequencyBinLabels = [...frequencyBins.keys()];
  const frequencyBinValues = [...frequencyBins.values()];

  return { xData: frequencyBinLabels, yData: frequencyBinValues };
};

export {
  handleChangeUtil,
  handleSearchUtil,
  handleRatingChangeUtil,
} from "@/utils/eventHandlers";
