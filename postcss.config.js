module.exports = {
    plugins: {
        tailwindcss: require('tailwindcss'),
        autoprefixer: require('autoprefixer'),
        'postcss-preset-env': {
            features: {
                'custom-properties': false,
            },
        },
    },
};  