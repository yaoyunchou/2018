function assertHttp (result) {
  if (result.data.code === 0) {
    return result.data.data
  } else {
    throw new Error(result.data.msg)
  }
}

function unpackError (err, cb) {
  if (typeof err === 'string') {
    cb(err)
  } else if (err instanceof Error) {
    cb(err.message)
  }
}

function doThrow (err) {
  if (process.env.NODE_ENV === 'test') {
    return err
  }
  if (typeof err === 'string') {
    throw new Error(err)
  } else if (err instanceof Error) {
    throw err
  } else {
    throw new Error(err)
  }
}

export default {assertHttp, unpackError, doThrow}
