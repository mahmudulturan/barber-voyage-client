import React from 'react';
import HostShopForm from './components/HostShopForm/HostShopForm';

const HostShopPage = () => {
    return (
        <div className='page-wrapper min-h-screen'>
            <div className='my-6 border-l-4 border-primaryCol rounded pl-2'>
                <h3 className='text-4xl font-semibold uppercase text-seconderyCol'>Host Your Shop</h3>
                <p className='text-seconderyCol/90 max-w-2xl'>Set up your shop on our platform and connect with clients seeking your expertise. Expand your reach and build your barbering empire.</p>
            </div>
            <div>
                <HostShopForm />
            </div>
        </div>
    );
};

export default HostShopPage;