const filePath = './example.txt';

readFileContents(filePath)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
