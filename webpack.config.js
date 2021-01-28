module.exports = {
  entry: './bin/mgp-cli.ts',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader']
      }
    ]
  },
  resolve: {
    modules: [
      "node_modules", // node_modules 内も対象とする
    ],
    extensions: ['.tsx', '.ts', '.js']
  }
};

