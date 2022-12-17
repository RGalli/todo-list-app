module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: '.',
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          alias: {
            '@components': './src/components',
            '@models': './src/models',
            "@screens": ["./src/screens"],
            "@styles": ["./src/styles"],
            "@assets": ["./assets"]
          },
        },
      ],
    ],
  };
};
