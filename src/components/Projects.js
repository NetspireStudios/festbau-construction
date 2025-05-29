import React from 'react';
import ImageSection from './ImageSection';

const Projects = () => {
  const featuredProjects = [
    {
      src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
      title: 'Modern Office Complex',
      description: 'Contemporary office building with sustainable design features and premium finishes.',
      category: 'Commercial',
      alt: 'Modern Office Complex'
    },
    {
      src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop',
      title: 'Luxury Residential Home',
      description: 'Custom family home featuring open-concept design and smart home integration.',
      category: 'Residential',
      alt: 'Luxury Residential Home'
    },
    {
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      title: 'Historic Building Renovation',
      description: 'Careful restoration of heritage building while adding modern amenities.',
      category: 'Renovation',
      alt: 'Historic Building Renovation'
    },
    {
      src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop',
      title: 'Restaurant Construction',
      description: 'Modern restaurant build-out with custom kitchen and dining design.',
      category: 'Commercial',
      alt: 'Restaurant Construction'
    },
    {
      src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop',
      title: 'Kitchen Renovation',
      description: 'Complete kitchen transformation with premium appliances and custom cabinetry.',
      category: 'Interior',
      alt: 'Kitchen Renovation'
    },
    {
      src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop',
      title: 'Bathroom Remodel',
      description: 'Luxury bathroom renovation with modern fixtures and elegant design.',
      category: 'Interior',
      alt: 'Bathroom Remodel'
    }
  ];

  return (
    <ImageSection
      title="Recent <span class='gold-text'>Projects</span>"
      subtitle="Explore our portfolio of exceptional construction and renovation projects that showcase our commitment to quality, innovation, and client satisfaction."
      images={featuredProjects}
      columns={3}
      className="projects-section"
    />
  );
};

export default Projects; 