// SubscriptionPlans.js
import React, { useState, useEffect } from 'react';
import SubscriptionPlanCard from './SubscriptionPlanCard';
import './subscriptionCard.css';
import DashboardLayout from '../dashboardLayout/DashboardLayout';
import Text from '../text/Text';
import Button from '../button/Button';
import { getRecommendationsForAssessment } from '../../services/api/recommendationApi';

const SubscriptionsPage = () => {

    const [data, setData] = useState(null); // State for storing API data
    const [loading, setLoading] = useState(true); // State for loading status
    const [error, setError] = useState(null); // State for error handling
    const [hoveredCard, setHoveredCard] = useState("Work with 3 categories");

    // State to toggle between views in recommended and More categories
    const [showAllCategories, setShowAllCategories] = useState(false);
    const handleHover = (id) => {
        setHoveredCard(id);
    };

    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
            try {
                setLoading(true); // Start loading
                const response = await getRecommendationsForAssessment(sessionStorage.getItem('current_assesment_id'));
                if (!response) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                setData(response.data); // Store data
            } catch (err) {
                setError(err.message); // Store error message
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchData(); // Call the function on mount
    }, [])


    const categories = [
        "Communication",
        "Intimacy",
        "Economy",
        "Values",
        "Child Rearing",
        "Trust",
        "Boundaries",
        "Everyday life"
    ]

    const handleSaveSelection = (card, selectedCategories) => {
        alert(`Categories saved for ${card}: ${selectedCategories.join(", ")}`);
    };

    return (
        <DashboardLayout>
            <Text type="h3" className='user-dashboard-heading h3' >My relation with</Text>
            <Text className='user-partnerName'>James Samuelson</Text>

            {/* Divider */}
            <div className="divider-horizantal"></div>


            <div className={`${showAllCategories ? 'extendedCardStyle' : 'subscription-plans'}`}>

                <div className="card_group">
                    <SubscriptionPlanCard
                        id="Preventive check-in"
                        title="Preventive check-in"
                        description="With this plan you and your relation will have scheduled check-ins."
                        description2="Keep up the good work. Continously work to strengthen your relation with scheduled check-ins"
                        price="50 dkk/month"
                        priceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
                        isHovered={"Preventive check-in" === hoveredCard}
                        onSaveSelection={(selectedCategories) => handleSaveSelection('checkin', selectedCategories)}
                        handleHover={handleHover}
                    />
                    <Button className='learn-more-btn'>Learn more</Button>
                </div>

                <div className="card_group">
                    {
                        data && data.categories.length > 0 ?
                            <>
                                <SubscriptionPlanCard
                                    id="Work with 3 categories"
                                    isRecommended={true}
                                    title="Work with 3 categories"
                                    description="With this plan, you and your relation work to strengthen your relation in 3 chosen categories."
                                    price="100 dkk/month"
                                    link="Click to see other categories or to swap to other categories"
                                    priceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
                                    categories={data.categories}
                                    maxCategories={3}
                                    isHovered={"Work with 3 categories" === hoveredCard}
                                    handleHover={handleHover}
                                    showAllCategories={showAllCategories}
                                    setShowAllCategories={setShowAllCategories}
                                    onSaveSelection={(selectedCategories) => handleSaveSelection('threeCategories', selectedCategories)}
                                />
                            </>
                            :
                            <></>
                    }
                    <Button className='learn-more-btn'>Learn more</Button>

                </div>
                <div className="card_group"> <SubscriptionPlanCard
                    id="Work with all categories"
                    title="Work with all categories"
                    description="With this plan all our categories are unlocked."
                    price="300 dkk/month"
                    priceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
                    categories={categories}
                    maxCategories={8} // All categories can be selected
                    isHovered={"Work with all categories" === hoveredCard}
                    handleHover={handleHover}

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
