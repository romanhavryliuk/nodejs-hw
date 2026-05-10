import createHttpError from 'http-errors'

export const notFoundHandler = (req, res) => {
  res.status(404).json({ message: 'Route not found' });
};