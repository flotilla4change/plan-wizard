document.addEventListener('DOMContentLoaded', () => {
  const quizContainer = document.getElementById('quiz-container');
  const questionElement = document.getElementById('question');
  const answersElement = document.getElementById('answers');
  let currentQuestionIndex = 0;
  let questions = [
    {
      id: 'areYouABoatOwner',
      question:
        'Are you a boat owner/captain wanting to sail your boat with us?',
      answers: [
        {
          text: 'Yes',
          nextQuestionId: 'isCommercial',
        },
        {
          text: 'No',
          nextQuestionId: 'areYouAnOrganisation',
        },
      ],
    },
    {
      id: 'isCommercial',
      question: 'Is the vessel registered as commercial?',
      answers: [
        {
          text: 'Yes',
          nextQuestionId: 'howManyBerths',
        },
        {
          text: 'No',
          nextQuestionId: 'nonCommercialBoatPlan',
        },
      ],
    },
    {
      id: 'areYouAnOrganisation',
      question: 'Do you represent an organisation?',
      answers: [
        {
          text: 'Yes',
          nextQuestionId: 'howManyEmployees',
        },
        {
          text: 'No',
          nextQuestionId: 'areYouAnUnderRepresentedGroup',
        },
      ],
    },
    {
      id: 'howManyBerths',
      question: 'How many total berths does she have?',
      answers: [
        {
          text: 'Under 12',
          nextQuestionId: 'commercialBoatPlanLessThan12',
        },
        {
          text: '12 and over',
          nextQuestionId: 'commercialBoatPlanMoreThan12',
        },
      ],
    },
    {
      id: 'howManyEmployees',
      question: 'How many employees does your organisation have?',
      answers: [
        {
          text: 'Under ten employees',
          nextQuestionId: 'smallOrganisationPlan',
        },
        {
          text: 'Ten to 25 employees',
          nextQuestionId: 'mediumOrganisationPlan',
        },
        {
          text: 'Over 25 employees',
          nextQuestionId: 'largeOrganisationPlan',
        },
      ],
    },
    {
      id: 'areYouAnUnderRepresentedGroup',
      question:
        'Do you identify as, or feel underrepresented, in the sailing world or at COP30?',
      answers: [
        {
          text: 'Yes',
          nextQuestionId: 'bursaryPlan',
        },
        {
          text: 'No',
          nextQuestionId: 'crewPassengerPlan',
        },
        {
          text: "Yes, but I have a bit of money I'd like to contribute to the flotilla.",
          nextQuestionId: 'crewPassengerPlan',
        },
      ],
    },

    {
      id: 'nonCommercialBoatPlan',
      question: 'Click here to go to the :',
      answers: [
        {
          text: 'COP30 non-commercial boat plan',
          redirectUrl: 'https://flotilla4change.mn.co/plans/1496671',
        },
      ],
    },
    {
      id: 'commercialBoatPlanLessThan12',
      question: 'Click here to go to the :',
      answers: [
        {
          text: 'COP30 commercial boat <12 berths plan',
          redirectUrl: 'https://flotilla4change.mn.co/plans/1496674',
        },
      ],
    },
    {
      id: 'commercialBoatPlanMoreThan12',
      question: 'Click here to go to the :',
      answers: [
        {
          text: 'COP30 commercial boat >12 berths plan',
          redirectUrl: 'https://flotilla4change.mn.co/plans/1496675',
        },
      ],
    },
    {
      id: 'smallOrganisationPlan',
      question: 'Click here to go to the :',
      answers: [
        {
          text: 'COP30 small organisation plan',
          redirectUrl: 'https://flotilla4change.mn.co/plans/1496685',
        },
      ],
    },
    {
      id: 'mediumOrganisationPlan',
      question: 'Click here to go to the :',
      answers: [
        {
          text: 'COP30 medium organisation plan',
          redirectUrl: 'https://flotilla4change.mn.co/plans/1496688',
        },
      ],
    },
    {
      id: 'largeOrganisationPlan',
      question: 'Click here to go to the :',
      answers: [
        {
          text: 'COP30 large organisation plan',
          redirectUrl: 'https://flotilla4change.mn.co/plans/1496692',
        },
      ],
    },
    {
      id: 'crewPassengerPlan',
      question: 'Click here to go to the :',
      answers: [
        {
          text: 'COP30 crew & passenger plan',
          redirectUrl: 'https://flotilla4change.mn.co/plans/1496680',
        },
      ],
    },
    {
      id: 'bursaryPlan',
      question: 'Click here to go to the :',
      answers: [
        {
          text: 'COP30 bursary plan',
          redirectUrl: 'https://flotilla4change.mn.co/plans/1496724',
        },
      ],
    },
  ];

  displayQuestion();

  function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersElement.innerHTML = '';

    currentQuestion.answers.forEach((answer) => {
      const answerDiv = document.createElement('div');
      answerDiv.className = 'answer';
      const button = document.createElement('button');
      button.textContent = answer.text;
      button.onclick = () => handleAnswer(answer);
      button.className = 'button';
      answerDiv.appendChild(button);
      answersElement.appendChild(answerDiv);
    });
  }

  function handleAnswer({ redirectUrl, nextQuestionId }) {
    if (nextQuestionId) {
      currentQuestionIndex = questions.findIndex(
        (question) => question.id === nextQuestionId
      );
      displayQuestion();
    } else if (redirectUrl) {
      window.open(redirectUrl, '_blank').focus();
      //   window.location.href = redirectUrl;
    }
  }
});
