import Express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as http from 'http';
import * as os from 'os';
import cookieParser from 'cookie-parser';
import swaggerify from './swagger';
import l from './logger';
import helmet from 'helmet';
const Webpack = require('webpack');
const webpackConfig = require('../../webpack.config');
const compiler = Webpack(webpackConfig);


const app = new Express();

export default class ExpressServer {
    constructor() {
        const root = path.normalize(`${__dirname}/../..`);
        app.set('appPath', `${root}src`);
        app.use(helmet());
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(cookieParser(process.env.SESSION_SECRET));
        app.use(Express.static(`${root}/dist`));
        app.use(Express.static(`${root}/public`));
        app.use(require('webpack-dev-middleware')(compiler, {
            publicPath: webpackConfig.output.publicPath,
            contentBase: helpers('src'),
            hot: true,
            inline: true,
            quiet: false,
            noInfo: false,
            lazy: false,
            stats: {
                chunks: false,
                chunkModules: false,
                colors: true
            }
        }))

        app.use(require('webpack-hot-middleware')(compiler, {
            path: '/__webpack_hmr'
        }))
    }

    router(routes) {
        swaggerify(app, routes);
        return this;
    }

    listen(port = process.env.PORT) {
        const welcome = p => () => l.info(`up and running in ${process.env.NODE_ENV || 'development'} @: ${os.hostname()} on port: ${p}}`);
        http.createServer(app).listen(port, welcome(port));
        return app;
    }
}