export default function Home() {
  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
      color: 'white',
      padding: '0',
      margin: '0'
    },
    header: {
      padding: '20px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(10px)'
    },
    logo: {
      fontSize: '28px',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    logoIcon: {
      width: '40px',
      height: '40px',
      background: 'white',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ff6b35',
      fontWeight: 'bold'
    },
    nav: {
      display: 'flex',
      gap: '30px'
    },
    navLink: {
      color: 'white',
      textDecoration: 'none',
      fontWeight: '500',
      transition: 'color 0.3s'
    },
    hero: {
      textAlign: 'center',
      padding: '100px 20px',
      maxWidth: '800px',
      margin: '0 auto'
    },
    heroTitle: {
      fontSize: '4rem',
      fontWeight: 'bold',
      marginBottom: '20px',
      lineHeight: '1.2'
    },
    heroSubtitle: {
      fontSize: '1.5rem',
      marginBottom: '30px',
      opacity: '0.9'
    },
    heroDescription: {
      fontSize: '1.2rem',
      marginBottom: '40px',
      lineHeight: '1.6',
      opacity: '0.8'
    },
    button: {
      background: 'white',
      color: '#ff6b35',
      padding: '15px 30px',
      border: 'none',
      borderRadius: '50px',
      fontSize: '18px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'transform 0.3s',
      textDecoration: 'none',
      display: 'inline-block'
    },
    features: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '30px',
      padding: '80px 40px',
      background: 'rgba(255,255,255,0.1)'
    },
    featureCard: {
      background: 'rgba(255,255,255,0.2)',
      padding: '30px',
      borderRadius: '15px',
      textAlign: 'center',
      backdropFilter: 'blur(10px)'
    },
    featureIcon: {
      fontSize: '3rem',
      marginBottom: '20px'
    },
    featureTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '15px'
    },
    featureDesc: {
      opacity: '0.9',
      lineHeight: '1.5'
    },
    products: {
      padding: '80px 40px',
      background: 'white',
      color: '#333'
    },
    sectionTitle: {
      textAlign: 'center',
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '50px',
      color: '#ff6b35'
    },
    productGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    productCard: {
      background: 'white',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s'
    },
    productImage: {
      width: '100%',
      height: '200px',
      background: 'linear-gradient(45deg, #ff6b35, #f7931e)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '4rem',
      color: 'white'
    },
    productInfo: {
      padding: '25px'
    },
    productName: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#333'
    },
    productPrice: {
      fontSize: '1.3rem',
      color: '#ff6b35',
      fontWeight: 'bold',
      marginBottom: '15px'
    },
    productDesc: {
      color: '#666',
      lineHeight: '1.5',
      marginBottom: '20px'
    },
    addToCartBtn: {
      background: '#ff6b35',
      color: 'white',
      border: 'none',
      padding: '12px 25px',
      borderRadius: '25px',
      cursor: 'pointer',
      fontWeight: 'bold',
      width: '100%',
      transition: 'background 0.3s'
    },
    footer: {
      background: '#333',
      color: 'white',
      padding: '50px 40px',
      textAlign: 'center'
    },
    whatsapp: {
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      width: '60px',
      height: '60px',
      background: '#25D366',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '30px',
      textDecoration: 'none',
      boxShadow: '0 5px 20px rgba(37, 211, 102, 0.4)',
      zIndex: 1000
    }
  }

  const products = [
    {
      id: 1,
      name: "Kashmir Saffron",
      price: "₹2,499",
      description: "Premium Grade A saffron threads from Kashmir valleys",
      emoji: "🌸"
    },
    {
      id: 2,
      name: "Black Pepper",
      price: "₹899",
      description: "Bold and aromatic black pepper from Malabar coast",
      emoji: "⚫"
    },
    {
      id: 3,
      name: "Turmeric Powder",
      price: "₹299",
      description: "Golden turmeric with high curcumin content",
      emoji: "🟡"
    }
  ]

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>
          <div style={styles.logoIcon}>P</div>
          <div>
            <div>Prayan</div>
            <div style={{fontSize: '12px', opacity: '0.8'}}>Premium Spices</div>
          </div>
        </div>
        <nav style={styles.nav}>
          <a href="#home" style={styles.navLink}>Home</a>
          <a href="#products" style={styles.navLink}>Shop</a>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={styles.hero} id="home">
        <h1 style={styles.heroTitle}>Pure. Authentic. Premium.</h1>
        <h2 style={styles.heroSubtitle}>Single-Origin Spices from India's Finest Farms</h2>
        <p style={styles.heroDescription}>
          Experience the true essence of Indian spices with our carefully curated collection 
          sourced directly from heritage farms across India.
        </p>
        <a href="#products" style={styles.button}>Shop Premium Spices</a>
      </section>

      {/* Features */}
      <section style={styles.features}>
        <div style={styles.featureCard}>
          <div style={styles.featureIcon}>🔬</div>
          <h3 style={styles.featureTitle}>Lab Tested</h3>
          <p style={styles.featureDesc}>Every batch tested for purity & quality</p>
        </div>
        <div style={styles.featureCard}>
          <div style={styles.featureIcon}>🚚</div>
          <h3 style={styles.featureTitle}>Free Shipping</h3>
          <p style={styles.featureDesc}>On orders above ₹999</p>
        </div>
        <div style={styles.featureCard}>
          <div style={styles.featureIcon}>🏆</div>
          <h3 style={styles.featureTitle}>Premium Quality</h3>
          <p style={styles.featureDesc}>Single-origin, Grade A spices</p>
        </div>
        <div style={styles.featureCard}>
          <div style={styles.featureIcon}>❤️</div>
          <h3 style={styles.featureTitle}>Fair Trade</h3>
          <p style={styles.featureDesc}>Direct farmer partnerships</p>
        </div>
      </section>

      {/* Products */}
      <section style={styles.products} id="products">
        <h2 style={styles.sectionTitle}>Featured Spices</h2>
        <div style={styles.productGrid}>
          {products.map(product => (
            <div key={product.id} style={styles.productCard}>
              <div style={styles.productImage}>
                {product.emoji}
              </div>
              <div style={styles.productInfo}>
                <h3 style={styles.productName}>{product.name}</h3>
                <div style={styles.productPrice}>{product.price}</div>
                <p style={styles.productDesc}>{product.description}</p>
                <button 
                  style={styles.addToCartBtn}
                  onClick={() => alert(`${product.name} added to cart!`)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.logo}>
          <div style={styles.logoIcon}>P</div>
          <div>
            <div>Prayan Spices</div>
            <div style={{fontSize: '14px', opacity: '0.8'}}>Premium Single-Origin Spices</div>
          </div>
        </div>
        <p style={{marginTop: '20px', opacity: '0.8'}}>
          © 2024 Prayan Spices. All rights reserved.
        </p>
        <p style={{marginTop: '10px'}}>
          📞 +91-9876543210 | 📧 hello@prayanspices.com
        </p>
      </footer>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noopener noreferrer"
        style={styles.whatsapp}
      >
        💬
      </a>
    </div>
  )
}