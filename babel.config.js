// @ts-nocheck

module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        // ['@babel/plugin-transform-typescript', { isTSX: true, allExtensions: true }],
        [
            'module:react-native-dotenv',
            {
                "moduleName": "@env",
                "path": ".env",
                "allowUndefined": false,
                "safe": true,
            }
        ]
    ],
};
