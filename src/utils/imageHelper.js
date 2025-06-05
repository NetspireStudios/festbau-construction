// Image Helper Utility for Project Folders

// Function to get project images from folder structure
export const getProjectImages = (category, projectName) => {
  const basePath = `/images/${category}/${projectName}`;
  
  // Common image extensions to check
  const extensions = ['jpg', 'jpeg', 'png', 'webp', 'avif'];
  
  // Try to load images with common naming patterns
  const imagePatterns = [
    'main',
    'hero', 
    'primary',
    'featured',
    'cover',
    '1',
    '01',
    'image1',
    'img1'
  ];
  
  // Function to check if image exists (placeholder for now)
  const checkImageExists = (imagePath) => {
    // This would normally check if the image exists
    // For now, return a placeholder
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f8f9fa'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial, sans-serif' font-size='14' fill='%236c757d'%3E${encodeURIComponent(projectName)}%3C/text%3E%3C/svg%3E`;
  };
  
  // Try to find the first available image
  for (const pattern of imagePatterns) {
    for (const ext of extensions) {
      const imagePath = `${basePath}/${pattern}.${ext}`;
      // In a real implementation, you'd check if file exists
      // For now, return the placeholder
      return checkImageExists(imagePath);
    }
  }
  
  // Return placeholder if no image found
  return checkImageExists();
};

// Function to get all images from a project folder
export const getAllProjectImages = (category, projectName) => {
  // This would scan the folder for all images
  // For now, return array with placeholder
  return [getProjectImages(category, projectName)];
};

// Project data with correct folder mapping
export const commercialProjects = [
  {
    title: "Fence Project For Niagara region",
    folderName: "Fence Project For Niagara region",
    location: "Niagara Region, ON",
    description: "Comprehensive fencing solution providing security and aesthetic appeal for commercial properties throughout the Niagara region.",
    category: "Infrastructure",
    features: ["Commercial Fencing", "Security Solutions", "Regional Coverage", "Durable Materials"]
  },
  {
    title: "BarBurrito in Fort Erie",
    folderName: "BarBurrito in Fort Erie",
    location: "Fort Erie, ON", 
    description: "Complete restaurant buildout featuring modern kitchen design, customer seating area, and brand-compliant interior finishes.",
    category: "Restaurant",
    features: ["Kitchen Design", "Dining Area", "Brand Compliance", "Health Code Standards"]
  },
  {
    title: "Dairy Queen in Niagara Falls",
    folderName: "Dairy Queen in Niagara Falls",
    location: "Niagara Falls, ON",
    description: "Flagship restaurant construction with specialized equipment installation, drive-thru design, and high-traffic layout optimization.",
    category: "Restaurant",
    features: ["Drive-Thru Design", "Equipment Installation", "High-Traffic Layout", "Brand Standards"]
  },
  {
    title: "BarBurrito in Shelburn",
    folderName: "BarBurrito in Shelburn",
    location: "Shelburn, ON",
    description: "Modern fast-casual restaurant featuring efficient kitchen workflow, comfortable dining space, and contemporary design elements.",
    category: "Restaurant", 
    features: ["Fast-Casual Design", "Efficient Kitchen", "Modern Finishes", "Comfortable Seating"]
  },
  {
    title: "Tokyo Smoke in Port Elgin",
    folderName: "Tokyo Smoke in Port Elgin",
    location: "Port Elgin, ON",
    description: "Specialized retail space with secure storage, compliance features, and modern customer experience areas.",
    category: "Retail",
    features: ["Retail Space", "Secure Design"]
  },
  {
    title: "BarBurrito in Stoufville",
    folderName: "BarBurrito in Stoufville",
    location: "Stoufville, ON",
    description: "Complete restaurant construction with open kitchen concept, contemporary styling, and efficient service flow design.",
    category: "Restaurant",
    features: ["Open Kitchen", "Contemporary Style", "Service Flow", "Brand Integration"]
  },
  {
    title: "BarBurrito in Belleville",
    folderName: "BarBurrito in Belleville",
    location: "Belleville, ON",
    description: "Strategic restaurant buildout featuring optimized layout for high customer volume and streamlined operations.",
    category: "Restaurant",
    features: ["High Volume Design", "Streamlined Operations", "Strategic Layout", "Efficient Systems"]
  },
  {
    title: "Brewing Brokers",
    folderName: "Brewing Brokers",
    location: "Ontario, ON",
    description: "Specialized brewing and distribution facility with temperature-controlled environments and industrial-grade equipment installation.",
    category: "Industrial", 
    features: ["Temperature Control", "Industrial Equipment", "Distribution Systems", "Specialized Construction"]
  },
  {
    title: "Eggmania",
    folderName: "Eggmania",
    location: "Ontario, ON",
    description: "Unique restaurant concept featuring custom kitchen design, specialized equipment installation, and innovative dining layout.",
    category: "Restaurant",
    features: ["Custom Kitchen", "Specialized Equipment", "Innovative Layout", "Unique Concept"]
  }
];

export const residentialProjects = [
  {
    title: "Condo renovation in North York",
    folderName: "Condo renovation in North York",
    location: "North York, ON",
    description: "Complete condo transformation featuring modern kitchen renovation, bathroom upgrades, and open-concept living space design with premium finishes.",
    category: "Condo Renovation",
    features: ["Modern Kitchen", "Bathroom Upgrades", "Open Concept", "Premium Finishes"]
  },
  {
    title: "Basement renovation in London",
    folderName: "Basement renovation in London",
    location: "London, ON", 
    description: "Comprehensive basement finishing project creating a multi-functional family space with entertainment area, home office, and additional bedroom suite.",
    category: "Basement Renovation",
    features: ["Entertainment Area", "Home Office", "Bedroom Suite", "Multi-Functional"]
  },
  {
    title: "Elements designs & renovations cambridge",
    folderName: "Elements designs & renovations cambridge",
    location: "Cambridge, ON",
    description: "Sophisticated whole-home renovation incorporating modern design elements, sustainable materials, and smart home technology integration.",
    category: "Whole Home Renovation", 
    features: ["Modern Design", "Sustainable Materials", "Smart Home Tech", "Elements Integration"]
  }
];

export const additionalServicesProjects = [
  {
    title: "Deck in Waterloo",
    folderName: "Deck in Waterloo",
    location: "Waterloo, ON",
    description: "A stunning multi-level deck with integrated lighting and premium composite materials, creating the perfect outdoor entertainment space.",
    category: "Deck Construction",
    features: ["Multi-level design", "Integrated lighting", "Composite materials", "Built-in seating"]
  },
  {
    title: "Deck in Elmira",
    folderName: "Deck in Elmira",
    location: "Elmira, ON",
    description: "A beautiful cedar deck with custom railings and pergola, providing both privacy and style for this family home.",
    category: "Deck Construction",
    features: ["Cedar construction", "Custom railings", "Pergola integration", "Privacy design"]
  }
];

// Helper function to get project with image
export const getProjectWithImage = (project, category) => {
  return {
    ...project,
    image: getProjectImages(category, project.folderName)
  };
}; 