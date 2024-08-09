export default eventHandler(async (event) => {
  return {
    statusCode: 200,
    body: {
      message: "Welcome to Ike's API",
    },
  };
});
