import { HttpError } from "http-errors";

export const errorHandler = (err, req, res, next) => {
    console.error("Error Middleware:", err);

    if (err instanceof HttpError) {
    return res.status(err.status).json({
      message: err.message || err.name,
    });
    };

    const status = err.status || err.statusCode || 500;

    res.status(status).json({
    message: err.message || 'Internal Server Error',
  });
};