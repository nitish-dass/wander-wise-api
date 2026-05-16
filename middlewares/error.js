const errorMiddleware = async(err, req, res, next) => {
    const statusCode = err.status ?? res.statusCode ?? 500;
    res.status(statusCode).json({
        success: false,
        message: err.message || "Something went wrong",
        stack: process.env.NODE_ENV === "production" ? null: err.stack,
        ...(err.errors?.length > 0 && {         //json object ma kunai property halnu pare ...() use garxum tyo ni with property    
            errors: err.errors.map((error) => ({        //map is a array function in js through which we can modify the array
                field: error.path,
                message: error.msg,
            })),
        }),
    });
}

// just need to create once , and only need to make little changes further

export default errorMiddleware;

