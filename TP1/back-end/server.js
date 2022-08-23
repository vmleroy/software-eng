import app from './src/app.js'

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server listen http://localhost:${port}`)
})