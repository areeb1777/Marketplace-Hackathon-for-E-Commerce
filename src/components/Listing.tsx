import React from 'react';
import Link from 'next/link';
import ClientImage from './ClientImage'; // Import the ClientImage component

const DEFAULT_IMAGE = '/images/default-image.jpg'; // Path to a default image

const ListingsSection: React.FC<{ latestProducts: any[] }> = ({ latestProducts }) => {
  return (
    <div className="w-full h-auto relative bg-white py-10 md:py-20 px-6 md:px-20">
      <div className="text-[#2a254b] text-[32px] mb-10 md:mb-20">New Ceramics</div>
      <div className="flex flex-wrap justify-center md:justify-between gap-8 md:flex-nowrap">
        {latestProducts.map(product => {
          const imageUrl = product.image?.asset?.url || DEFAULT_IMAGE; // Use default image if URL is missing

          return (
            <div key={product._id} className="flex flex-col items-start gap-4 w-[163px] md:w-[305px]">
              <div className="w-full relative pb-[125%]"> {/* Aspect Ratio */}
                <Link href={`/products/${product.slug.current}`} passHref>
                  <div className="absolute top-0 left-0 w-full h-full">
                    <ClientImage
                      src={imageUrl}
                      alt={product.name}
                      fallbackSrc={DEFAULT_IMAGE}
                      className="object-cover w-full h-full rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                      priority
                    />
                  </div>
                </Link>
              </div>
              <div className="text-[#2a254b] text-xl leading-7">{product.name}</div>
              <div className="text-[#2a254b] text-lg leading-[27px]">£{product.price}</div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-10">
        <Link href="/products">
          <div className="px-8 py-4 bg-[#f9f9f9] border text-[#2a254b] text-base leading-normal cursor-pointer hover:bg-[#e6e6e6] transition duration-300">
            View collection
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ListingsSection;
