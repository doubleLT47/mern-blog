const userRouter = require('./user.route');
const authRouter = require('./auth.route');
const postRouter = require('./post.route');
const categoryRouter = require('./category.route');

const route = (app) => {
    app.use("/api/user", userRouter);
    app.use('/api/auth', authRouter);
    app.use('/api/post', postRouter);
    app.use('/api/category', categoryRouter);
}


module.exports = route;
