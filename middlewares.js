import routes from './routes'

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = 'WeTube'
  res.locals.routes = routes
  res.locals.user = {
    inAuthenticated: true,
    id: 1,
  }
  next()
}
