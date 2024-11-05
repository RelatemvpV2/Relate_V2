// SubscriptionPlans.js
import React, { useState } from 'react';
import SubscriptionPlanCard from './SubscriptionPlanCard';
import './subscriptionCard.css';
import DashboardLayout from '../dashboardLayout/DashboardLayout';
import Text from '../text/Text';
import Button from '../button/Button';

const SubscriptionsPage = () => {
    const [selectedCard, setSelectedCard] = useState("threeCategories");

    const categories = [
        "Communication",
        "Intimacy",
        "Economy",
        "Values",
        "Child rearing",
        "Trust",
        "Boundaries",
        "Everyday Life"
    ]

    /* const handleCardSelect = (card) => {
        setSelectedCard(card === selectedCard ? null : card);
    }; */

    // Select a card only if it's not already selected
    const handleCardSelect = (cardName) => {
        if (selectedCard !== cardName) {
            setSelectedCard(cardName);
        }
    };

    const handleSaveSelection = (card, selectedCategories) => {
        alert(`Categories saved for ${card}: ${selectedCategories.join(", ")}`);
    };

    return (
        <DashboardLayout>
            <Text type="h3" className='user-dashboard-heading h3' >My relation with</Text>
            <Text className='user-partnerName'>James Samuelson</Text>

            {/* Divider */}
            <div className="divider-horizantal"></div>


            <div className="subscription-plans">
                <div classname="card-group">


                    <SubscriptionPlanCard

                        title="Preventive check-in"
                        description="With this plan you and your relation will have scheduled check-ins."
                        description2="Keep up the good work. Continously work to strengthen your relation with scheduled check-ins"
                        price="50 dkk/month"
                        priceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
                        isSelected={selectedCard === 'checkin'}
                        onSelect={() => handleCardSelect('checkin')}
                        onSaveSelection={(selectedCategories) => handleSaveSelection('checkin', selectedCategories)}
                    />
                    <Button className='learn-more-btn'>Learn more</Button>
                </div>
                <div classname="card-group">
                    <SubscriptionPlanCard
                        isRecommended={true}
                        title="Work with 3 categories"
                        description="With this plan, you and your relation work to strengthen your relation in 3 chosen categories."
                        price="100 dkk/month"
                        link="Click to see other categories or to swap to other categories"
                        priceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
                        categories={categories}
                        maxCategories={3}
                        isSelected={selectedCard === 'threeCategories'}
                        onSelect={() => handleCardSelect('threeCategories')}
                        onSaveSelection={(selectedCategories) => handleSaveSelection('threeCategories', selectedCategories)}
                    />

                    <Button className='learn-more-btn'>Learn more</Button>

                </div>
                <div classname="card-group"> <SubscriptionPlanCard
                    title="Work with all categories"
                    description="With this plan all our categories are unlocked."
                    price="300 dkk/month"
                    priceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
                    categories={categories}
                    maxCategories={8} // All categories can be selected
                    isSelected={selectedCard === 'allCategories'}
                    onSelect={() => handleCardSelect('allCategories')}
                    onSaveSelection={(selectedCategories) => handleSaveSelection('allCategories', selectedCategories)}
                />
                    <Button className='learn-more-btn'>Learn more</Button>
                </div>
                
            </div>
            <Text type='p' className='subscription-end-para'>If you wish to proceed with our recommended categories and work to strengthen your relation,
                    we will take you through a series of online questions, guides and exercises. </Text>
            <Text type="a" className='choose-later links-text'>Choose later</Text>
        </DashboardLayout>
    );
};

export default SubscriptionsPage;
