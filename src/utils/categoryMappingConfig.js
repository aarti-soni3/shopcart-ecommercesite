export const CATEGORY_MAPPING = {
  // Apparel & Accessories
  'mens-shirts': 'apparel',
  'mens-shoes': 'apparel',
  'mens-watches': 'apparel',
  'womens-bags': 'apparel',
  'womens-dresses': 'apparel',
  'womens-jewellery': 'apparel',
  'womens-shoes': 'apparel',
  'womens-watches': 'apparel',
  'tops': 'apparel',
  'sunglasses': 'apparel',
  
  // Electronics
  'smartphones': 'electronics',
  'laptops': 'electronics',
  'tablets': 'electronics',
  'mobile-accessories': 'electronics',
  
  // Home, Kitchen & Furniture
  'furniture': 'home',
  'home-decoration': 'home',
  'kitchen-accessories': 'home',
  
  // Beauty & Personal Care
  'beauty': 'beauty',
  'fragrances': 'beauty',
  'skin-care': 'beauty',
  
  // Sports & Fitness
  'sports-accessories': 'sports',
  
  // Groceries
  'groceries': 'groceries',
  
  // Automotive
  'motorcycle': 'automotive',
  'vehicle': 'automotive',
};

export const CATEGORY_DISPLAY_NAMES = {
  'apparel': 'Apparel & Accessories',
  'electronics': 'Electronics',
  'home': 'Home, Kitchen & Furniture',
  'beauty': 'Beauty & Personal Care',
  'sports': 'Sports & Fitness',
  'groceries': 'Groceries',
  'automotive': 'Automotive',
};

export const getMainCategoryKey = (subcategory) => {
  return CATEGORY_MAPPING[subcategory] || 'other';
};

export const getMainCategoryDisplayName = (categoryKey) => {
  return CATEGORY_DISPLAY_NAMES[categoryKey] || 'Other';
};