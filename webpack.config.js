const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  // Вход, файл выполняется при выполнении команды Сборки.
  // Entrance: Executing a file when executing a Webpack command. Initial build file. 
  output: {
    // Выход, название и расположение файла после выполнения сборки.
    // Output: The name and location of the file after the build.
    filename: 'bundle.js', // Folder dist
    path: path.resolve(__dirname, 'dist')
  },

  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({}), // Оптимизация для CSS // Optimizing for CSS
      new UglifyJsPlugin({}) // Оптимизация для JS // Optimizing for JS
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'] // При импорте, расширения включенные в данный массив можно не указывать
  },

  plugins: [
    new HtmlWebpackPlugin({
      // Плагин для работы с шаблонами HTML
      // Plugin for working with HTML templates
      filename: 'index.html', // Folder dist
      // Выход, название файла после выполнения сборки
      // Output: filename after build
      template: './src/template/index.html'
      // Вход, путь до файла, для выполнения сборки
      // Entrance: path to the file to build
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css'
      // Выход, название файла после выполнения сборки
      // Output: filename after build

      // Файл с которого будет собираться webpack необходимо импортировать в ./src/index.js
      // The file from which the webpack will be built must be imported into ./src/index.js
    })
  ],

  devServer: {
    contentBase: path.join(__dirname, 'dist'), 
    port: 9000
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(js|ts)$/, // Файлы с расширением js и ts проходят через babel-loader
        //Files with js and ts extension go through babel-loader
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i, // Файлы с расширениями png|jpg|gif проходят через dile-loader
        // Files with png | jpg | gif extensions go through the dile-loader
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]', // Название файла после выполнения сборки // File name after build execution
              outputPath: './img/', // Путь файла в папке dist // File path in folder 'dist'
            }
          },
          {
            loader: 'image-webpack-loader', // Оптимизация и минимизация фотографий //Optimizing and minimizing photos
            options: {
              mozjpeg: {
                progressive: true, // Способ загружаемых изображений // Image upload method
                quality: 70 // Качество загружаемых изображений // Quality of uploaded images
              }
            }
          }
        ],
      },
    ],
  },
}