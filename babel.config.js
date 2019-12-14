module.exports = {
    presets: [
        "@babel/preset-env", // Altera as reponsabilidades do javascript
        "@babel/preset-react"// Transpila as coisas que o navegador não entende do react
    ],
    plugins: [
        '@babel/plugin-proposal-class-properties'
    ]
};