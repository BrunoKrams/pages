import Header from './components/Header'
import Article from './components/Article'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import { articles, galleryItems } from './data/data'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      
      <section className="articles-section">
        {articles.map((article) => (
          <Article
            key={article.id}
            title={article.title}
            content={article.content}
            image={article.image}
          />
        ))}
      </section>

      <Gallery galleryItems={galleryItems} />
      
      <Footer />
    </div>
  )
}

export default App
