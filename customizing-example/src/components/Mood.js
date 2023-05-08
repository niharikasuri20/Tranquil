import React, { useState } from "react";
function Mood() {
  const [showMood, setMood] = useState(false);
  const [personScore, setScore] = useState(0);
  const [CurrentQuestion, setCurrentQuestion] = useState(0);
  const [mood, setMoodNow] = useState("");
  const optionClicked = (increScore) => {
    setScore(personScore + increScore);
    if (CurrentQuestion + 1 < questions.length)
      setCurrentQuestion(CurrentQuestion + 1);
    else {
      setMood(true);
      if (personScore < 8)
        setMoodNow("You're experiencing low mood and struggling with isolation. You are in dire need of so much self love and care and we want you to know that you're not alone and it's important to take care of yourself in a situation like this. Please prioritize yourself and talk to a friend or a mental health professionalist, if needed. Sending you good energy and healing. Please eat well and take care of your physical and mental health. Tranquil is here to support all your self care needs.");
      if (personScore >= 8 && personScore <= 16) {
        setMoodNow(
          "You may be experiencing a low mood and It's important to take care of yourself and prioritize self care. Please remember that you're enough and amazing and do everything that makes you feel better. Tranquil is here to support all your self care needs. Please eat well and take care of your physical and mental health."
        );
      } else if (personScore >= 17 && personScore <= 22)
        setMoodNow(
          "You're likely experiencing a moderate mood and that is completely alright. We all have good and bad days and it's very important to support ourselves on bad ones. Please continue loving yourself and Tranquil is always here to support all your self care needs. Please eat well and take care of your physical and mental health."
        );
      else if (personScore >= 22 && personScore <= 25)
        setMoodNow(
          "We're glad that you're doing well and in content with your life right now. Please continue loving yourself and caring about yourself in abundance. Sending you so much love and positivity. Tranquil is here to support all your self care needs. Please eat well and take care of your physical and mental health."
        );
    }
  };

  const moodRecheck = () => {
    setScore(0);
    setCurrentQuestion(0);
    setMood(0);
  };

  const questions = [
    {
      text: "On a scale of 1-10, how happy are you right now?",
      options: [
        { id: 0, text: "1-3: Not very happy", isCorrect: false, score: 1 },
        { id: 1, text: "4-6: Somewhat happy", isCorrect: false, score: 2 },
        { id: 2, text: "7-10: Very happy", isCorrect: false, score: 3 },
      ],
    },
    {
      text: "How would you describe your energy level today?",
      options: [
        { id: 0, text: "Low energy, feeling tired", isCorrect: true, score: 1 },
        {
          id: 1,
          text: "Moderate energy, feeling okay",
          isCorrect: false,
          score: 2,
        },
        {
          id: 2,
          text: "High energy, feeling great",
          isCorrect: false,
          score: 3,
        },
      ],
    },
    {
      text: "Are you feeling stressed or anxious today?",
      options: [
        { id: 0, text: "Yes, very much so", isCorrect: true, score: 1 },
        {
          id: 1,
          text: "Somewhat, but I can manage it",
          isCorrect: false,
          score: 2,
        },
        {
          id: 2,
          text: "Not really, I feel pretty relaxed",
          isCorrect: false,
          score: 3,
        },
      ],
    },
    {
      text: "Have you experienced any significant changes or events in your life recently?",
      options: [
        {
          id: 0,
          text: "Yes, a major change or event has happened",
          isCorrect: false,
          score: 1,
        },
        {
          id: 1,
          text: "Somewhat, there have been some minor changes or events",
          isCorrect: true,
          score: 2,
        },
        {
          id: 2,
          text: "No, everything has been relatively stable",
          isCorrect: false,
          score: 3,
        },
      ],
    },
    {
      text: "How well have you been sleeping lately?",
      options: [
        {
          id: 0,
          text: "Poorly, I'm not getting enough sleep or quality sleep",
          isCorrect: false,
          score: 1,
        },
        {
          id: 1,
          text: "Okay, I'm sleeping enough but not always well",
          isCorrect: true,
          score: 2,
        },
        {
          id: 2,
          text: " Well, I'm getting enough and good quality sleep",
          isCorrect: true,
          score: 3,
        },
      ],
    },
    {
      text: "Do you feel like you're able to enjoy the things you normally enjoy?",
      options: [
        {
          id: 0,
          text: "No, I'm not really able to enjoy anything right now",
          isCorrect: false,
          score: 1,
        },
        {
          id: 1,
          text: "Somewhat, but it's been a little harder than usual",
          isCorrect: true,
          score: 2,
        },
        {
          id: 2,
          text: "Yes, I'm still able to enjoy the things I normally do",
          isCorrect: true,
          score: 3,
        },
      ],
    },
    {
      text: "How have your eating habits been lately?",
      options: [
        {
          id: 0,
          text: "Poor, I'm not eating well or regularly",
          isCorrect: false,
          score: 1,
        },
        {
          id: 1,
          text: "Okay, but there have been some unhealthy choices",
          isCorrect: true,
          score: 2,
        },
        {
          id: 2,
          text: "Good, I'm eating a balanced and healthy diet",
          isCorrect: true,
          score: 3,
        },
      ],
    },
    {
      text: "Are you feeling connected to the people around you?",
      options: [
        {
          id: 0,
          text: "No, I feel very isolated and disconnected",
          isCorrect: false,
          score: 1,
        },
        {
          id: 1,
          text: "Somewhat, but I could use more connection",
          isCorrect: true,
          score: 2,
        },
        {
          id: 2,
          text: "Yes, I feel well-connected to the people in my life",
          isCorrect: true,
          score: 3,
        },
      ],
    },
  ];
  return (
    <div className="App text-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <img src="/quiz.png" className="w-full " style={{borderRadius:"10px"}}/></div>
    </div>
      <br></br><br/>
      <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Take a deep breath!
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            The following quiz consists of 8 questions that have been curated to help you process how you're feeling in the moment. You're advised to take a deep breath, calm down and answer the questions with honesty for accurate results. It's okay to feel overwhelmed by your thoughts, it will be alright! We're here for you!
          </p>
        </div>
        <br/><br/>
      {showMood ? (
        <div className="final-results">
          <h2 className="Heading text-4xl">Your Mood:</h2>
          <br></br>
          <hr></hr>
          <h2 className="mood-analysed text-3xl">
            {mood}

            <br></br>
            <br></br>
            <button onClick={() => moodRecheck()}>Start Again</button>
          </h2>
        </div>
      ) : (
        <div className="question-card">
          <h2 className="text-3xl">
            Question {CurrentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text text-3xl">
            {questions[CurrentQuestion].text}
          </h3>
          <ul>
            {questions[CurrentQuestion].options.map((option) => {
              return (
                <li
                  className="options"
                  onClick={() => optionClicked(option.score)}
                  key={option.id}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Mood;
