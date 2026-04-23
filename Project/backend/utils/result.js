function createResult(err, data, message = null) {
    if (err) {
        return { status: "error", error: err.message }
    }
    return {
        status: "success",
        data: data,
        message: message
    }
}

module.exports = { createResult }