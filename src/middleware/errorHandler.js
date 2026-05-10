export const errorHandler = (err, req, res, next) => {
    console.error("Error Middleware:", err);

    const status = err.status || err.statusCode || 500;

    res.status(status).json({
    message: err.message || 'Internal Server Error',
  });
};