import React, { useState, useEffect } from 'react';
import './assessment.css'; // CSS for custom styles
import SideGreyBg from '../../components/sidegreybg/SideGreyBg';
import SideBar from '../../components/sideBar/SideBar';
import MainContainer from '../../components/maincontainer/Maincontainer';
import LightBgMain from '../../components/lightBgMain/LightBgMain';
import QuesionairModule from '../../components/questionaireModule/QuesionairModule';
import { getAllCategories, getCategoryById } from '../../services/api/categoryApi';
import Text from '../../components/text/Text'
import Button from '../../components/button/Button'
import { saveAnswer } from '../../services/api/answerApi';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Assessment = () => {
  const [rating, setRating] = useState(null);
  const [data, setData] = useState(null); // State for storing API data
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [assessmentId, setAssessmentId] = useState(sessionStorage.getItem('current_assesment_id'))

  const [searchParams] = useSearchParams();
  const paramValue = searchParams.get('assessment-type');

  const navigate = useNavigate();

  // Save answer function to call API and update state
  const handleSaveAnswer = async () => {
    if (answer == null) {
      return
    }
    try {
      if (answer) {
        await saveAnswer(assessmentId, answer.categoryId, answer.questionId, answer); // Call save answer API with the current answer
      }
    } catch (error) {
      console.error("Error saving answer:", error);
      return;
    }
    if (currentQuestionIndex < data.length - 1 && paramValue !== "edit" && paramValue !== "tryQ") {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setAnswer(null); // Reset answer state for the next question
    }
    else if (paramValue === "tryQ") {

      currentQuestionIndex < 1 ?
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
        : navigate('/dashboard');

      setAnswer(null); // Reset answer state for the next question
    }
    else {
      if(paramValue !== "edit") {
        alert("All questions answered!");
      }
      handleSummary();
    }
  };

  // Update answer when receiving input from AnswerComponent
  const handleAnswerChange = (newAnswer) => {
    setAnswer(newAnswer);
  };

  const handleSummary = () => {
    navigate('/level1/yourSummary')
  };

  const handleGoBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    } else {
      alert("All questions answered!");
    }
  };

  useEffect(() => {

    if (paramValue !== "tryQ" && !sessionStorage.getItem('current_assesment_id')) {
      navigate("/dashboard");
    }

    // Function to fetch data
    const fetchData = async () => {
      try {
        setLoading(true); // Start loading
        const response = await getAllCategories(); // Replace with your proxy endpoint 
        if (!response) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        setData(response?.data); // Store data
      } catch (err) {
        setError(err.message); // Store error message
      } finally {
        setLoading(false); // Stop loading
      }
    };

    // Function to fetch data
    const fetchCategory = async (catid) => {
      try {
        setLoading(true); // Start loading
        const response = await getCategoryById(catid); // Replace with your proxy endpoint 
        if (!response) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        setData([response?.data]);
      } catch (err) {
        setError(err.message); // Store error message
      } finally {
        setLoading(false); // Stop loading
      }
    };

    if (!paramValue || paramValue === "tryQ") {
      fetchData(); // Call the function on mount
    }
    if (paramValue === "edit") {
      console.log(localStorage.getItem("selected_question_edit"));

      fetchCategory(localStorage.getItem("selected_question_edit"))
    }
  }, []); // Empty dependency array ensures it only runs once on mount

  return (
    <div className="assessment-layout">
      < SideBar />

      <LightBgMain>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : data && data[currentQuestionIndex] ? (
          <>
            <QuesionairModule
              categoryData={data ? data[currentQuestionIndex] : null}
              currentIndex={currentQuestionIndex}
              total={paramValue !== "tryQ" ? data.length : 2}
              onAnswerChange={handleAnswerChange} // Pass handler to child
            />
            <div className="question-description">
              When considering your answer think of bla bla bla. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            </div>
            <Button className="loginpage-button" onClick={handleSaveAnswer}>Continue</Button>
          </>
        ) : (
          <p>No data available</p>
        )}

        {/* Divider */}
        <div className="divider-horizantal"></div>

        <div className="links-textcontainer">
          <Text type="a" className="links-text" style={{ fontSize: "12px" }} onClick={handleGoBack}>
            Go back
          </Text>
        </div>
      </LightBgMain>

    </div>
  );
};

export default Assessment;
