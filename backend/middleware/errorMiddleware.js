let errorHandler = (err, req, res, next) =>{
  let statutCode = res.statusCode ? res.statusCode : 500

  res.status(statutCode)

  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  })
}

module.exports = {
    errorHandler,
}