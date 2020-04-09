module.exports = {
    context: __dirname,
    entry: {
        background: "./src/actions/background.ts",
        content: "./src/actions/content.ts",
    },
    output: {
        path: __dirname + "/dist/js",
        filename: "[name].js",
    },
    resolve: {
        extensions: [
            '.ts',
        ]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {
                    loader: 'ts-loader'
                },
            }
        ]
    }
};
