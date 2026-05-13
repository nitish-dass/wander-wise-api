const errorMiddleware = async(err, req, res, next) => {
    const statusCode = err.statusCode ?? res.statusCode ?? 500;
    res.status(statusCode).json({
        success: false,
        message: err.message || "Something went wrong",
        stack: process.env.NODE_ENV === "production" ? null: err.stack,
    });
}

// just need to create once , and only need to make little changes further

export default errorMiddleware;
