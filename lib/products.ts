import { Product } from './store'

// Sample product data - In production, this would come from your database/CMS
export const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Kashmiri Red Chili Powder',
    nameHindi: 'कश्मीरी लाल मिर्च पाउडर',
    price: 299,
    originalPrice: 399,
    discount: 25,
    image: '/images/products/kashmiri-chili.jpg',
    images: [
      '/images/products/kashmiri-chili.jpg',
      '/images/products/kashmiri-chili-2.jpg',
      '/images/products/kashmiri-chili-pack.jpg'
    ],
    description: 'Authentic Kashmiri red chili powder with vibrant color and mild heat. Perfect for adding beautiful red color to your dishes without overpowering spice.',
    origin: 'Kashmir Valley, Jammu & Kashmir',
    harvestDate: 'October 2024',
    batchNumber: 'KRC-2024-10-001',
    purityPercentage: 99.8,
    flavorProfile: ['Mild Heat', 'Sweet', 'Smoky', 'Vibrant Color'],
    heatLevel: 2,
    weight: '100g',
    inStock: true,
    stockQuantity: 150,
    category: 'Chili Powders',
    labTestUrl: '/certificates/kashmiri-chili-lab-report.pdf',
    farmerStory: 'Sourced directly from Mohammad Ashraf\'s organic farm in Pampore, Kashmir. His family has been growing premium chilies for over 50 years.',
    usageInstructions: 'Use 1-2 tsp for curries, marinades, and tandoori preparations. Store in cool, dry place.',
    shelfLife: '18 months from manufacture date',
    certifications: ['FSSAI Certified', 'Organic India', 'Lab Tested']
  },
  {
    id: '2',
    name: 'Organic Turmeric Powder',
    nameHindi: 'जैविक हल्दी पाउडर',
    price: 199,
    originalPrice: 249,
    discount: 20,
    image: '/images/products/turmeric.jpg',
    images: [
      '/images/products/turmeric.jpg',
      '/images/products/turmeric-2.jpg',
      '/images/products/turmeric-pack.jpg'
    ],
    description: 'High curcumin content organic turmeric powder with golden color and earthy aroma. Known for its anti-inflammatory properties and authentic taste.',
    origin: 'Erode, Tamil Nadu',
    harvestDate: 'February 2024',
    batchNumber: 'TUR-2024-02-003',
    purityPercentage: 99.9,
    flavorProfile: ['Earthy', 'Bitter', 'Warm', 'Golden Color'],
    weight: '100g',
    inStock: true,
    stockQuantity: 200,
    category: 'Basic Spices',
    labTestUrl: '/certificates/turmeric-lab-report.pdf',
    farmerStory: 'Grown by Raman Krishnan using traditional organic methods passed down through generations in the turmeric capital of India.',
    usageInstructions: 'Use 1/2 tsp for curries, milk, and face masks. Mix with black pepper for better absorption.',
    shelfLife: '24 months from manufacture date',
    certifications: ['FSSAI Certified', 'USDA Organic', 'Lab Tested', 'Fair Trade']
  },
  {
    id: '3',
    name: 'Whole Green Cardamom',
    nameHindi: 'हरी इलायची',
    price: 899,
    originalPrice: 999,
    discount: 10,
    image: '/images/products/cardamom.jpg',
    images: [
      '/images/products/cardamom.jpg',
      '/images/products/cardamom-2.jpg',
      '/images/products/cardamom-pack.jpg'
    ],
    description: 'Premium grade green cardamom pods with intense aroma and flavor. Hand-picked from the Western Ghats for the finest quality.',
    origin: 'Idukki, Kerala',
    harvestDate: 'November 2024',
    batchNumber: 'CAR-2024-11-002',
    purityPercentage: 99.5,
    flavorProfile: ['Intense Aroma', 'Sweet', 'Citrusy', 'Cooling'],
    weight: '50g',
    inStock: true,
    stockQuantity: 75,
    category: 'Whole Spices',
    labTestUrl: '/certificates/cardamom-lab-report.pdf',
    farmerStory: 'Harvested from Suresh Kumar\'s sustainable cardamom plantation in the misty hills of Idukki, where each pod is hand-picked at perfect ripeness.',
    usageInstructions: 'Use 2-3 pods for tea, desserts, and biryanis. Crush lightly to release maximum flavor.',
    shelfLife: '12 months from manufacture date',
    certifications: ['FSSAI Certified', 'Spices Board Certified', 'Lab Tested']
  },
  {
    id: '4',
    name: 'Black Mustard Seeds',
    nameHindi: 'काली सरसों',
    price: 149,
    originalPrice: 179,
    discount: 17,
    image: '/images/products/mustard-seeds.jpg',
    images: [
      '/images/products/mustard-seeds.jpg',
      '/images/products/mustard-seeds-2.jpg',
      '/images/products/mustard-seeds-pack.jpg'
    ],
    description: 'Premium black mustard seeds with sharp, pungent flavor. Essential for tempering and South Indian cuisine.',
    origin: 'Rajasthan',
    harvestDate: 'March 2024',
    batchNumber: 'MUS-2024-03-001',
    purityPercentage: 99.7,
    flavorProfile: ['Pungent', 'Sharp', 'Nutty when cooked'],
    weight: '100g',
    inStock: true,
    stockQuantity: 120,
    category: 'Seeds & Lentils',
    labTestUrl: '/certificates/mustard-lab-report.pdf',
    farmerStory: 'Sourced from Rajesh Sharma\'s fields in Rajasthan, where traditional farming methods ensure the highest oil content and flavor.',
    usageInstructions: 'Heat in oil until they splutter for tempering. Use 1 tsp for most dishes.',
    shelfLife: '18 months from manufacture date',
    certifications: ['FSSAI Certified', 'Lab Tested']
  },
  {
    id: '5',
    name: 'Garam Masala Blend',
    nameHindi: 'गरम मसाला',
    price: 249,
    originalPrice: 299,
    discount: 17,
    image: '/images/products/garam-masala.jpg',
    images: [
      '/images/products/garam-masala.jpg',
      '/images/products/garam-masala-2.jpg',
      '/images/products/garam-masala-pack.jpg'
    ],
    description: 'Traditional garam masala blend with perfect balance of warming spices. Made from whole spices ground fresh in small batches.',
    origin: 'Multi-origin blend',
    harvestDate: 'December 2024',
    batchNumber: 'GAR-2024-12-001',
    purityPercentage: 99.6,
    flavorProfile: ['Warm', 'Aromatic', 'Complex', 'Balanced'],
    weight: '100g',
    inStock: true,
    stockQuantity: 180,
    category: 'Spice Blends',
    labTestUrl: '/certificates/garam-masala-lab-report.pdf',
    farmerStory: 'A carefully crafted blend using spices from our partner farmers across India, following a 100-year-old family recipe.',
    usageInstructions: 'Add 1/2 to 1 tsp at the end of cooking for best flavor. Perfect for curries, rice, and vegetables.',
    shelfLife: '12 months from manufacture date',
    certifications: ['FSSAI Certified', 'Lab Tested', 'Traditional Recipe']
  },
  {
    id: '6',
    name: 'Organic Coriander Seeds',
    nameHindi: 'जैविक धनिया',
    price: 179,
    originalPrice: 199,
    discount: 10,
    image: '/images/products/coriander.jpg',
    images: [
      '/images/products/coriander.jpg',
      '/images/products/coriander-2.jpg',
      '/images/products/coriander-pack.jpg'
    ],
    description: 'Organic coriander seeds with fresh, citrusy aroma. Perfect for grinding fresh or using whole in tempering.',
    origin: 'Gujarat',
    harvestDate: 'April 2024',
    batchNumber: 'COR-2024-04-002',
    purityPercentage: 99.8,
    flavorProfile: ['Citrusy', 'Fresh', 'Mild', 'Aromatic'],
    weight: '100g',
    inStock: true,
    stockQuantity: 160,
    category: 'Whole Spices',
    labTestUrl: '/certificates/coriander-lab-report.pdf',
    farmerStory: 'Grown organically by Patel Brothers in Gujarat using sustainable farming practices and natural pest control methods.',
    usageInstructions: 'Dry roast before grinding for enhanced flavor. Use whole in tempering or ground in curries.',
    shelfLife: '18 months from manufacture date',
    certifications: ['FSSAI Certified', 'USDA Organic', 'Lab Tested']
  }
]

export const getProducts = (): Product[] => {
  return sampleProducts
}

export const getProduct = (id: string): Product | undefined => {
  return sampleProducts.find(product => product.id === id)
}

export const getProductsByCategory = (category: string): Product[] => {
  return sampleProducts.filter(product => product.category === category)
}

export const getFeaturedProducts = (): Product[] => {
  return sampleProducts.slice(0, 4)
}

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase()
  return sampleProducts.filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.nameHindi?.includes(query) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery)
  )
}

export const getCategories = (): string[] => {
  const categories = sampleProducts.map(product => product.category)
  return [...new Set(categories)]
}