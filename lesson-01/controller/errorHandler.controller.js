const notFound = (res) => {
  res.writeHead(404, { "Content-Type": "application/json" });
  res.write(
    JSON.stringify({
      message: {
        error: "route not found!",
      },
    })
  );
  res.end();
};
const ErrorHandler = {
  notFound,
};
module.exports = { ErrorHandler };
