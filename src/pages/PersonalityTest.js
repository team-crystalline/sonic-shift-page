import React, { useState, useEffect } from 'react';
import { charactersData, shuffleArray, mainStoryLine, questions, shuffleQuestions } from "../globalVars"; 

export const PersonalityTest = () => {
    const [result, setResult] = useState(null);
    const [leader, setLeader] = useState(null);
    const [currentCharacter, setCurrentCharacter] = useState(null);
    const [previousCharacter, setPreviousCharacter] = useState(null);
    const [opacity, setOpacity] = useState(1);
    const [answers, setAnswers] = useState({
        'Sonic the Hedgehog': 0,
        'Miles "Tails" Prower': 0,
        'Knuckles the Echidna': 0,
        'Shadow the Hedgehog': 0,
        'Amy Rose the Hedgehog': 0,
        'Rouge the Bat': 0,
    });
    
    const [shuffledQuestions, setShuffledQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    useEffect(() => {
        // Shuffle the questions and set the initial question
        const shuffled = shuffleQuestions(questions);
        setShuffledQuestions(shuffled);
        setCurrentQuestion(shuffled[0]);
        console.log(`Picked ${shuffled.length} questions.`);
        console.log(shuffled)
    }, []);

    useEffect(() => {
        const total = Object.values(answers).reduce((a, b) => a + b, 0);
        if (total > 0) {
            const newCharacter = Object.keys(answers).find((character) => {
                const maxScore = Math.max(...Object.values(answers));
                return answers[character] === maxScore;
            });
            if (newCharacter !== currentCharacter) {
                setPreviousCharacter(currentCharacter);
                setCurrentCharacter(newCharacter);
            }
        }
    }, [answers, currentCharacter]);

    const handleChange = (questionId, answer) => {
        setOpacity(0);
        setTimeout(() => {
            setAnswers(prevAnswers => {
                const updatedAnswers = { ...prevAnswers };
                if (answer.increment) {
                    answer.increment.forEach(character => {
                        updatedAnswers[character] = (updatedAnswers[character] || 0) + 1;
                    });
                }
                const nextIndex = currentQuestionIndex + 1;
                if (nextIndex < shuffledQuestions.length) {
                    const nextQuestion = shuffledQuestions[nextIndex];
                    nextQuestion.options = shuffleArray(nextQuestion.options);
                    setCurrentQuestion(nextQuestion);
                    setCurrentQuestionIndex(nextIndex); // Update the current question index
                } else {
                    handleSubmit(updatedAnswers);
                }

                const maxScore = Math.max(...Object.values(updatedAnswers));
                const leaders = Object.keys(updatedAnswers).filter(character => updatedAnswers[character] === maxScore);
                setLeader(leaders[0]);

                return updatedAnswers;
            });
            setOpacity(1);
        }, 1000);
    };

    const handleSubmit = (finalAnswers) => {
        let highestScore = 0;
        let highestCharacter = '';
        const topCharacters = [];
        for (const character in finalAnswers) {
            if (finalAnswers[character] > highestScore) {
                highestScore = finalAnswers[character];
                topCharacters.length = 0; // Clear the array
                topCharacters.push(character);
            } else if (finalAnswers[character] === highestScore) {
                topCharacters.push(character);
            }
        }
        highestCharacter = topCharacters[Math.floor(Math.random() * topCharacters.length)];
        setResult(() => highestCharacter);
    };

    if (result) {
        const character = charactersData.find((character) => character.name === result);
        return (
            <div>
                <h1 className={`title sonic-title ${character.url}`}> {character.name}</h1>
                <div className="content storyParagraph">
                    <img src={character.icon} alt={character.name} className="smallimage float-left pad-right"/>
                    <div className="content">
                    {/* <p>You burst forth from the void into a vibrant new world... and now, you're <strong>{character.name}</strong>!</p> */}
                    {
                        `You got ${character.name}! This will be important later on, so stay tuned.`
                    }
                    <p>Character Scores:</p>
                    <ul>
                        <li>Sonic: {answers["Sonic the Hedgehog"]}</li>
                        <li>Tails: {answers['Miles "Tails" Prower']}</li>
                        <li>Knuckles: {answers["Knuckles the Echidna"]}</li>
                        <li>Amy: {answers["Amy Rose the Hedgehog"]}</li>
                        <li>Shadow: {answers["Shadow the Hedgehog"]}</li>
                        <li>Rouge: {answers["Rouge the Bat"]}</li>
                    </ul>

                    {
                            // character.plotBio.map((paragraph, index) => (
                            //     <p key={index}>{paragraph}</p>
                            // ))
                        }
                    </div>
                    <div className="content">
                        <a className="tag is-info is-dark is-medium" href={`/characters/${character.url}`}>
                            <i className="fa fa-arrow-right pad-right"></i> Learn more about {character.name}
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <img className="pulsate" src={`/images/characters/${previousCharacter ? previousCharacter.split(" ")[0].toLowerCase() : 'blank'}-silo.png`} alt="Background Image - Prev" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                objectFit: 'contain',
                opacity: previousCharacter ? ((currentQuestion.id / shuffledQuestions.length).toFixed(1)) / 3 : 0,
                zIndex: -1,
                transition: '1s'
            }} />

            <img className="pulsate" src={`/images/characters/${currentCharacter ? currentCharacter.split(" ")[0].toLowerCase() : "blank"}-silo.png`} alt="Background Image - Current" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                objectFit: 'contain',
                opacity: currentCharacter ? ((currentQuestion.id / shuffledQuestions.length).toFixed(1)) / 3 : 0,
                zIndex: -1,
                transition: '1s'
            }} />
            <div className="content">
                {
                    // mainStoryLine.map((para, i) => {
                    //     return (<p key={i} className="text-indent">{para}</p>)
                    // })
                }
            </div>
            <div style={{ transition: "0.5s", opacity: opacity }}>
                <h1 className="title is-4">{currentQuestion.text}</h1>
                <div className="buttons">
                    {
                        (currentQuestion.options).map((option) => (
                            <button key={option.answer} className='button is-dark' onClick={() => handleChange(currentQuestion.id, option)}>
                                {option.answer}
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
