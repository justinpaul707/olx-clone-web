

import React from 'react';
import FeaturedItems from '@app/features/ads/components/adsListing';
import type { AdsInfo } from '@app/types/ads';
import AdsCount from '@app/features/ads/components/adsCount';
import { Container } from '@mui/material';

const Ads: React.FC = () => {
    const ads:AdsInfo[]= [
        {
            id: 1,
            title: '2019 Honda City - Excellent Condition',
            price: '₹8,50,000',
            location: 'Mumbai, Maharashtra',
            posted: '2 days ago',
            expires: '28 days',
            views: 234,
            chats: 12,
            favorites: 8,
            status: ['ACTIVE', 'FEATURED'],
            image: '🚗',
        },
        {
            id: 2,
            title: 'iPhone 13 Pro - 128GB, Like New',
            price: '₹75,000',
            location: 'Delhi, India',
            posted: '1 day ago',
            expires: '29 days',
            views: 156,
            chats: 8,
            favorites: 12,
            status: ['ACTIVE'],
            image: '📱',
        },
        {
            id: 3,
            title: 'Samsung Galaxy S24 Ultra',
            price: '₹1,10,000',
            location: 'Bangalore, Karnataka',
            posted: '3 days ago',
            expires: '27 days',
            views: 98,
            chats: 5,
            favorites: 4,
            status: ['ACTIVE'],
            image: '📱',
        },
        {
            id: 4,
            title: 'Royal Enfield Classic 350',
            price: '₹1,75,000',
            location: 'Pune, Maharashtra',
            posted: '5 days ago',
            expires: '25 days',
            views: 210,
            chats: 9,
            favorites: 10,
            status: ['ACTIVE', 'FEATURED'],
            image: '🏍️',
        },
        {
            id: 5,
            title: 'Sony Bravia 55" 4K TV',
            price: '₹45,000',
            location: 'Hyderabad, Telangana',
            posted: '4 days ago',
            expires: '26 days',
            views: 67,
            chats: 2,
            favorites: 1,
            status: ['ACTIVE'],
            image: '📺',
        },
        {
            id: 6,
            title: 'Apple MacBook Air M2',
            price: '₹95,000',
            location: 'Chennai, Tamil Nadu',
            posted: '6 days ago',
            expires: '24 days',
            views: 120,
            chats: 7,
            favorites: 6,
            status: ['ACTIVE'],
            image: '💻',
        },
        {
            id: 7,
            title: 'Tata Nexon EV',
            price: '₹14,50,000',
            location: 'Ahmedabad, Gujarat',
            posted: '7 days ago',
            expires: '23 days',
            views: 80,
            chats: 3,
            favorites: 2,
            status: ['ACTIVE', 'FEATURED'],
            image: '🚙',
        },
    ];

    return (
      <>
        <Container sx={{flex:1}}>
          <AdsCount />
          <FeaturedItems ads={ads} />
        </Container>
      </>
    );
};

export default Ads;