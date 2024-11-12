import React, { useState, useEffect } from 'react';
import './assessment.css'; // CSS for custom styles
import SideGreyBg from '../../components/sidegreybg/SideGreyBg';
import MainContainer from '../../components/maincontainer/Maincontainer';
import LightBgMain from '../../components/lightBgMain/LightBgMain';
import QuesionairModule from '../../components/questionaireModule/QuesionairModule';
import { getAllCategories } from '../../services/api/categoryApi';
import Text from '../../components/text/Text'
import Button from '../../components/button/Button'
import { saveAnswer } from '../../services/api/answerApi';
import { useNavigate } from 'react-router-dom';

const Assessment = () => {
  const [rating, setRating] = useState(null);
  const [data, setData] = useState(null); // State for storing API data
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [assessmentId, setAssessmentId] = useState(localStorage.getItem("assessment-id"))

  const navigate = useNavigate();

  // Save answer function to call API and update state
  const handleSaveAnswer = async () => {
    try {
      if (answer) {
        console.log(answer);
        await saveAnswer(assessmentId,answer.categoryId, answer.questionId, answer); // Call save answer API with the current answer
      }
      if (currentQuestionIndex < data.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setAnswer(null); // Reset answer state for the next question
      } else {
        alert("All questions answered!");
        handleSummary();
      }
    } catch (error) {
      console.error("Error saving answer:", error);
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
    // Function to fetch data
    const fetchData = async () => {
      try {
        setLoading(true); // Start loading
        const response = await getAllCategories(); // Replace with your proxy endpoint        
        // if (!response) {
        //   throw new Error(`HTTP error! Status: ${response.status}`);
        // }
        // const result = await response.json();
        setData([
          {
            "id": "categoryID",
            "type": "level-1",
            "name": "Category Name",
            "description": "Description of the main category",
            "introVideo": "url_or_identifier",
            "parentId": null,
            "nextLevelDescription": "next level description",
            "enableIntro": true,
            "enableDescription": true,
            "enablenextDescription": true,
            "sortOrder": 1,
            "questions": [
              {
                "id": "questionID",
                "type": "text/media",
                "questionMedia": "url_or_identifier",
                "question": "What is your favorite category?",
                "description": "A question about color preference",
                "questionType": "multiple choice",
                "answerType": "text/audio/video/file",
                "options": [
                  {
                    "labelText": "Option Aa",
                    "sortOrder": 1
                  },
                  {
                    "labelText": "Option B",
                    "sortOrder": 2
                  },
                  {
                    "labelText": "Option C",
                    "sortOrder": 3
                  },
                  {
                    "labelText": "Option Cc",
                    "sortOrder": 4
                  }
                ],
                "isActive": true,
                "weightage": 10,
                "sortOrder": 1
              }
            ]
          },
          {
            "id": "subcategoryID",
            "type": "level-2",
            "name": "Subcategory Name",
            "description": "Description of the subcategory",
            "introVideo": "url_or_identifier",
            "parentId": "categoryID",
            "nextLevelDescription": "next level description",
            "enableIntro": true,
            "enableDescription": true,
            "enablenextDescription": true,
            "sortOrder": 1,
            "questions": [
              {
                "id": "questionID",
                "type": "text/media",
                "questionMedia": "url_or_identifier",
                "question": "What is your favorite color sub categpry?",
                "description": "A question about color preference",
                "questionType": "multiple choice",
                "answerType": "text/audio/video/file",
                "options": [
                  {
                    "labelText": "Option A",
                    "sortOrder": 1
                  },
                  {
                    "labelText": "Option B",
                    "sortOrder": 2
                  },
                  {
                    "labelText": "Option C",
                    "sortOrder": 3
                  }
                ],
                "isActive": true,
                "weightage": 10,
                "sortOrder": 1
              }
            ]
          },
          {
            "id": "subsubcategoryID",
            "type": "level-3",
            "name": "Sub-subcategory Name",
            "description": "Description of the sub-subcategory",
            "introVideo": "url_or_identifier",
            "parentId": "subcategoryID",
            "nextLevelDescription": "next level description",
            "enableIntro": true,
            "enableDescription": true,
            "enablenextDescription": true,
            "sortOrder": 1,
            "questions": [
              {
                "id": "questionID",
                "type": "text/media",
                "questionMedia": "url_or_identifier",
                "question": "What is your favorite color sub sub ?",
                "description": "A question about color preference",
                "questionType": "multiple choice/fillup/choices/radio/media",
                "answerType": "text/audio/video/file",
                "options": [
                  {
                    "labelText": "Option A",
                    "sortOrder": 1
                  },
                  {
                    "labelText": "Option B",
                    "sortOrder": 2
                  },
                  {
                    "labelText": "Option C",
                    "sortOrder": 3
                  }
                ],
                "isActive": true,
                "weightage": 10,
                "sortOrder": 1
              }
            ]
          }

        ]); // Store data
      } catch (err) {
        setError(err.message); // Store error message
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchData(); // Call the function on mount
    console.log(data);
  }, []); // Empty dependency array ensures it only runs once on mount

  // Monitor `data` changes for debugging
  useEffect(() => {
    if (data) {
      console.log("Data state updated:", data);
    }
  }, [data]);

  return (
    <div className="assessment-layout">
      <SideGreyBg />

      <LightBgMain>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : data && data[currentQuestionIndex] ? (
          <>
            <QuesionairModule
          categoryData={data ? data[currentQuestionIndex] : null}
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



      {/* Right Pink Content */}
      {/* <MainContainer >
        <div className="assessment-container">
          <div className="assessment-header">
            <h2>My relation with</h2>
            <p>John Snow</p>
          </div>

          <div className="assessment-question">
            <h3>Overall relation to your partner</h3>
            <p>How would you rate your overall relation to your partner today?</p>
          </div>

          <div className="rating-options">
            {[7, 6, 5, 4, 3, 2, 1].map((value) => (
              <label key={value} className={`rating-item ${rating === String(value) ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="rating"
                  value={value}
                  onChange={handleRatingChange}
                  checked={rating === String(value)}
                />
                {value}
              </label>
            ))}
          </div>

          <button className="continue-button" onClick={handleSubmit}>Continue</button>
        </div>
      </MainContainer> */}
    </div>
  );
};

export default Assessment;
