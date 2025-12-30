export default function Home() {
  return (
    <div>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Arial', sans-serif;
          line-height: 1.6;
        }
        
        .container {
          min-height: 100vh;
          background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
          color: white;
        }
        
        .header {
          padding: 20px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 28px;
          font-weight: bold;
        }
        
        .logo-icon {
          width: 50px;
          height: 50px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ff6b35;
          font-weight: bold;
          font-size: 24px;
        }
        
        .nav {
          display: flex;
          gap: 30px;
        }
        
        .nav a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: opacity 0.3s;
        }
        
        .nav a:hover {
          opacity: 0.8;
        }
        
        .hero {
          text-align: center;
          padding: 100px 20px;
          max-width: 900px;
          margin: 0 auto;
        }
        
        .hero h1 {
          font-size: 4rem;
          font-weight: bold;
          margin-bottom: 20px;
          line-height: 1.2;
        }
        
        .hero h2 {
          font-size: 1.8rem;
          margin-bottom: 30px;
          opacity: 0.9;
        }
        
        .hero p {
          font-size: 1.3rem;
          margin-bottom: 40px;
          line-height: 1.6;
          opacity: 0.8;
        }
        
        .btn {
          background: white;
          color: #ff6b35;
          padding: 18px 35px;
          border: none;
          border-radius: 50px;
          font-size: 18px;
          font-weight: bold;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: transform 0.3s;
        }
        
        .btn:hover {
          transform: translateY(-2px);
        }
        
        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          padding: 80px 40px;
          background: rgba(255,255,255,0.1);
        }
        
        .feature-card {
          background: rgba(255,255,255,0.2);
          padding: 40px 30px;
          border-radius: 20px;
          text-align: center;
          backdrop-filter: blur(10px);
          transition: transform 0.3s;
        }
        
        .feature-card:hover {
          transform: translateY(-5px);
        }
        
        .feature-icon {
          font-size: 4rem;
          margin-bottom: 25px;
        }
        
        .feature-title {
          font-size: 1.6rem;
          font-weight: bold;
          margin-bottom: 15px;
        }
        
        .feature-desc {
          opacity: 0.9;
          line-height: 1.5;
          font-size: 1.1rem;
        }
        
        .products {
          padding: 80px 40px;
          background: white;
          color: #333;
        }
        
        .section-title {
          text-align: center;
          font-size: 3.5rem;
          font-weight: bold;
          margin-bottom: 60px;
          color: #ff6b35;
        }
        
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .product-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0,0,0,0.1);
          transition: transform 0.3s;
        }
        
        .product-card:hover {
          transform: translateY(-10px);
        }
        
        .product-image {
          width: 100%;
          height: 220px;
          background: linear-gradient(45deg, #ff6b35, #f7931e);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 5rem;
          color: white;
        }
        
        .product-info {
          padding: 30px;
        }
        
        .product-name {
          font-size: 1.6rem;
          font-weight: bold;
          margin-bottom: 12px;
          color: #333;
        }
        
        .product-price {
          font-size: 1.4rem;
          color: #ff6b35;
          font-weight: bold;
          margin-bottom: 15px;
        }
        
        .product-desc {
          color: #666;
          line-height: 1.6;
          margin-bottom: 25px;
          font-size: 1rem;
        }
        
        .add-to-cart {
          background: #ff6b35;
          color: white;
          border: none;
          padding: 15px 30px;
          border-radius: 30px;
          cursor: pointer;
          font-weight: bold;
          width: 100%;
          font-size: 16px;
          transition: background 0.3s;
        }
        
        .add-to-cart:hover {
          background: #e55a2b;
        }
        
        .footer {
          background: #333;
          color: white;
          padding: 60px 40px;
          text-align: center;
        }
        
        .footer-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin-bottom: 30px;
          font-size: 24px;
          font-weight: bold;
        }
        
        .footer p {
          margin: 15px 0;
          opacity: 0.8;
        }
        
        .whatsapp {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 70px;
          height: 70px;
          background: #25D366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 35px;
          text-decoration: none;
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
          z-index: 1000;
          transition: transform 0.3s;
        }
        
        .whatsapp:hover {
          transform: scale(1.1);
        }
        
        @media (max-width: 768px) {
          .header {
            flex-direction: column;
            gap: 20px;
            padding: 20px;
          }
          
          .nav {
            gap: 20px;
          }
          
          .hero h1 {
            font-size: 2.5rem;
          }
          
          .hero h2 {
            font-size: 1.3rem;
          }
          
          .hero p {
            font-size: 1.1rem;
          }
          
          .features {
            padding: 60px 20px;
          }
          
          .products {
            padding: 60px 20px;
          }
          
          .section-title {
            font-size: 2.5rem;
          }
        }
      `}</style>
      
      <div className="container">
        {/* Header */}
        <header className="header">
          <div className="logo">
            <div className="logo-icon">P</div>
            <div>
              <div>Prayan</div>
              <div style={{fontSize: '14px', opacity: '0.8'}}>Premium Spices</div>
            </div>
          </div>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#products">Shop</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="hero" id="home">
          <h1>Pure. Authentic. Premium.</h1>
          <h2>Single-Origin Spices from India's Finest Farms</h2>
          <p>
            Experience the true essence of Indian spices with our carefully curated collection 
            sourced directly from heritage farms across India.
          </p>
          <a href="#products" className="btn">Shop Premium Spices</a>
        </section>

        {/* Features */}
        <section className="features">
          <div className="feature-card">
            <div className="feature-icon">🔬</div>
            <h3 className="feature-title">Lab Tested</h3>
            <p className="feature-desc">Every batch tested for purity & quality</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3 className="feature-title">Free Shipping</h3>
            <p className="feature-desc">On orders above ₹999</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3 className="feature-title">Premium Quality</h3>
            <p className="feature-desc">Single-origin, Grade A spices</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">❤️</div>
            <h3 className="feature-title">Fair Trade</h3>
            <p className="feature-desc">Direct farmer partnerships</p>
          </div>
        </section>

        {/* Products */}
        <section className="products" id="products">
          <h2 className="section-title">Featured Spices</h2>
          <div className="product-grid">
            <div className="product-card">
              <div className="product-image">🌸</div>
              <div className="product-info">
                <h3 className="product-name">Kashmir Saffron</h3>
                <div className="product-price">₹2,499</div>
                <p className="product-desc">Premium Grade A saffron threads from Kashmir valleys</p>
                <button className="add-to-cart" onClick={() => alert('Kashmir Saffron added to cart!')}>
                  Add to Cart
                </button>
              </div>
            </div>
            
            <div className="product-card">
              <div className="product-image">⚫</div>
              <div className="product-info">
                <h3 className="product-name">Black Pepper</h3>
                <div className="product-price">₹899</div>
                <p className="product-desc">Bold and aromatic black pepper from Malabar coast</p>
                <button className="add-to-cart" onClick={() => alert('Black Pepper added to cart!')}>
                  Add to Cart
                </button>
              </div>
            </div>
            
            <div className="product-card">
              <div className="product-image">🟡</div>
              <div className="product-info">
                <h3 className="product-name">Turmeric Powder</h3>
                <div className="product-price">₹299</div>
                <p className="product-desc">Golden turmeric with high curcumin content</p>
                <button className="add-to-cart" onClick={() => alert('Turmeric Powder added to cart!')}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-logo">
            <div className="logo-icon">P</div>
            <div>
              <div>Prayan Spices</div>
              <div style={{fontSize: '14px', opacity: '0.8'}}>Premium Single-Origin Spices</div>
            </div>
          </div>
          <p>© 2024 Prayan Spices. All rights reserved.</p>
          <p>📞 +91-9876543210 | 📧 hello@prayanspices.com</p>
          <p>🏠 123 Spice Street, Mumbai, Maharashtra 400001, India</p>
        </footer>

        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/919876543210" 
          target="_blank" 
          rel="noopener noreferrer"
          className="whatsapp"
        >
          💬
        </a>
      </div>
    </div>
  )
}