var flipAndInvertImage = function (image) {
  const length = image[0].length;

  // loop through each inner array
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < length / 2; j++) {
      let curr = image[i][j];
      console.log(curr);
      image[i][j] = !image[i][length - 1 - j];
      image[i][length - 1 - j] = !curr;
    }
  }

  return image;
};
