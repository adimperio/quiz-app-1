export const QUIZ_METADATA = {
  id: 'brand-diagnostic',
  name: 'Is Your Brand Still Standing?',
  author: 'Heather Schaefer',
  badge: 'A TWO-MINUTE BRAND DIAGNOSTIC',
  title: 'Is Your Brand Still Standing?',
  subtitle: 'Seven questions about what the last eighteen months have done to your business.',
  introParagraphs: [
    'The market changed.',
    'AI changed what clients expect.',
    'Buying behavior changed.',
    'Referrals changed.',
    'Competition changed.',
    "The question isn't whether your business survived the last eighteen months. It's whether the brand underneath it still fits the business you're running now.",
    'Seven questions. Under two minutes. No fluff.',
    "You'll see your initial result before we ask for your email."
  ]
};

export const QUIZ_QUESTIONS = [
  {
    id: 'q1',
    key: 'q1_inquiries',
    number: 1,
    question: 'In the last eighteen months, have client inquiries slowed down?',
    options: [
      { text: 'No, steady or growing.', score: 0 },
      { text: 'A little quieter than usual.', score: 1 },
      { text: "Noticeably slower, and I can't fully explain it.", score: 2 },
      { text: "Yes, and it's the thing I think about at night.", score: 3 }
    ]
  },
  {
    id: 'q2',
    key: 'q2_ai',
    number: 2,
    question: 'Are prospects asking whether AI can do what you do?',
    options: [
      { text: 'Never come up.', score: 0 },
      { text: 'Once or twice.', score: 1 },
      { text: 'Regularly, and I have an answer ready.', score: 2 },
      { text: "Yes — and I've started wondering the same thing.", score: 3 }
    ]
  },
  {
    id: 'q3',
    key: 'q3_positioning_age',
    number: 3,
    question: 'When did you last change how you describe what you do?',
    options: [
      { text: 'This year.', score: 0 },
      { text: 'Within the last two years.', score: 1 },
      { text: 'Three to five years ago.', score: 2 },
      { text: "I honestly can't remember. It's been the same for years.", score: 3 }
    ]
  },
  {
    id: 'q4',
    key: 'q4_brand_relevance',
    number: 4,
    question: 'Does your brand describe the business you run today, or the one you started?',
    options: [
      { text: "Today's business, accurately.", score: 0 },
      { text: 'Mostly today. A few things are out of date.', score: 1 },
      { text: 'It describes who I was a few years ago.', score: 2 },
      { text: "It describes a business I don't run anymore.", score: 3 }
    ]
  },
  {
    id: 'q5',
    key: 'q5_pricing',
    number: 5,
    question: 'When you quote your price, what usually happens?',
    options: [
      { text: 'They say yes.', score: 0 },
      { text: 'Some negotiation, but we land.', score: 1 },
      { text: "I've started quoting lower than I want to.", score: 2 },
      { text: 'I get compared to people charging a fraction of what I do.', score: 3 }
    ]
  },
  {
    id: 'q6',
    key: 'q6_client_sources',
    number: 6,
    question: 'Where did your last five clients come from?',
    options: [
      { text: 'A mix of sources, including people who found me.', score: 0 },
      { text: 'Mostly referrals, some inbound.', score: 1 },
      { text: 'Almost entirely referrals and people I already knew.', score: 2 },
      { text: "I've been going back to the same well, and it's running dry.", score: 3 }
    ]
  },
  {
    id: 'q7',
    key: 'q7_website_confidence',
    number: 7,
    question: 'Do you hesitate before sending a new prospect to your website?',
    options: [
      { text: 'No, I send it happily.', score: 0 },
      { text: "I send it, but I'd change a few things.", score: 1 },
      { text: "I'd rather get them on a call first.", score: 2 },
      { text: "I avoid sending it. I'd rather they just talked to me.", score: 3 }
    ]
  }
];

export const RESULT_BANDS = {
  STRUCTURALLY_SOUND: {
    minScore: 0,
    maxScore: 6,
    title: 'STRUCTURALLY SOUND',
    tag: 'quiz-brand-structurally-sound',
    teaser: `Your brand is holding.\nThat's rarer than you'd think right now.\nUnlock the full read to see what you should watch next.`,
    fullResult: {
      headline: 'STRUCTURALLY SOUND',
      lead: "Your brand is holding. That's rarer than you'd think right now.",
      watchSectionTitle: 'WHAT YOU SHOULD WATCH',
      watchText: "The market is moving faster than most brands are updated, and the businesses getting hurt right now didn't see it coming either — they just hadn't looked in a while.\n\nThe work here isn't a rebuild. It's a check on the foundation before anything shifts under it.",
      subtleSectionTitle: 'WHAT THIS MEANS',
      subtleText: "You do not need to manufacture urgency here.\nYour brand is doing its job.\nThe question is whether it will continue doing that as your business and market evolve.",
      cta: 'BEGIN A CONVERSATION',
      secondaryMicrocopy: "Not ready? That's okay. We'll keep you in Heather's monthly insights so you know what to watch."
    }
  },
  YOU_SMELL_SMOKE: {
    minScore: 7,
    maxScore: 14,
    title: 'YOU SMELL SMOKE',
    tag: 'quiz-brand-smell-smoke',
    teaser: `Something has changed.\nYou can feel it, even if you can't point at it yet.\nGet the full read to see what's likely happening underneath.`,
    fullResult: {
      headline: 'YOU SMELL SMOKE',
      lead: "Something has changed and you can feel it, even if you can't point at it yet.",
      paragraphs: [
        'The inquiries are thinner.',
        'The conversations are harder.',
        "You're explaining yourself more than you used to."
      ],
      underneathTitle: "HERE'S WHAT'S USUALLY HAPPENING UNDERNEATH:",
      underneathPoints: [
        'The business grew and the brand didn’t.',
        "You're describing yourself the way you did three or four years ago, to a market that has moved.",
        "It isn't a marketing problem, which is why more marketing hasn't fixed it.",
        "People are deciding what you're worth before you ever get to speak."
      ],
      editorialStatement: 'THIS IS THE STAGE WHERE A REBUILD IS A DECISION — NOT AN EMERGENCY.',
      supportingLine: 'It gets more expensive from here.',
      cta: 'BEGIN A CONVERSATION',
      microcopy: "Let's look at what changed and whether the structure underneath your brand still fits the business you're building."
    }
  },
  ITS_ALREADY_BURNED: {
    minScore: 15,
    maxScore: 21,
    title: "IT'S ALREADY BURNED",
    tag: 'quiz-brand-already-burned',
    teaser: `You probably knew before you took the quiz.\nSomething isn't working the way it used to.\nGet the full read. This one deserves more than a headline.`,
    fullResult: {
      headline: "IT'S ALREADY BURNED",
      lead: "Let's be straight with each other, because you already know this.",
      points: [
        "The clients aren't coming the way they used to.",
        "You're being compared to people who cost a fraction of what you do.",
        "Your own website is something you'd rather they didn't look at too closely.",
        "And somewhere in the back of your mind you've started wondering whether the thing you built still works."
      ],
      bodyText: [
        "It doesn't. Not in the shape it's in.",
        "And nothing you bolt onto the front of it — more posting, more ads, a new headline — is going to change that, because the problem isn't the marketing.",
        "The structure underneath it is gone."
      ],
      heatherStory: {
        headline: 'TWENTY-THREE YEARS.',
        body1: "I know exactly what I'm asking you to hear, because I stood in front of my own house after twenty-three years in it and did not want to start over.",
        body2: "I didn't want to rebuild. I wanted my house back.",
        body3: "But it had burned down, and wanting it back wasn't one of the options.",
        rebuildLines: [
          'So you rebuild.',
          'On the same ground.',
          'For the business you actually run now.',
          'For a market that exists now.',
          "That's the whole job.",
          "And it's the only thing that works."
        ]
      },
      cta: 'BEGIN A CONVERSATION'
    }
  }
};

export function getResultBand(score) {
  if (score <= 6) return RESULT_BANDS.STRUCTURALLY_SOUND;
  if (score <= 14) return RESULT_BANDS.YOU_SMELL_SMOKE;
  return RESULT_BANDS.ITS_ALREADY_BURNED;
}

export function getPersonalizedInsights(answers) {
  const insights = [];

  if (answers.q7_website_confidence >= 2) {
    insights.push({
      topic: 'Website Confidence',
      score: answers.q7_website_confidence,
      text: "You told us you'd rather get a prospect on a call than send them to your website. Pay attention to that instinct. Your website is supposed to make the conversation easier — not be something you have to overcome."
    });
  }

  if (answers.q5_pricing >= 2) {
    insights.push({
      topic: 'Pricing Pressure',
      score: answers.q5_pricing,
      text: "You're being compared to providers charging a fraction of your price. That's often a perception problem before it's a pricing problem."
    });
  }

  if (answers.q6_client_sources >= 2) {
    insights.push({
      topic: 'Client Referral Dry-Up',
      score: answers.q6_client_sources,
      text: "The same relationships that built the business are being asked to keep feeding it. If that well is running dry, the brand needs to create demand outside the circle that already knows you."
    });
  }

  if (answers.q2_ai >= 2) {
    insights.push({
      topic: 'AI Commodity Threat',
      score: answers.q2_ai,
      text: "You mentioned prospects asking if AI can do what you do. When AI flattens commoditized services, your brand identity and distinct positioning become your strongest moat."
    });
  }

  return insights;
}

export function generateHighestConcernSummary(answers) {
  const concerns = [];
  const map = [
    { key: 'q7_website_confidence', label: 'Website confidence' },
    { key: 'q5_pricing', label: 'Pricing pressure' },
    { key: 'q6_client_sources', label: 'Inbound/referrals' },
    { key: 'q1_inquiries', label: 'Inquiry slowdown' },
    { key: 'q2_ai', label: 'AI competition' },
    { key: 'q3_positioning_age', label: 'Positioning age' },
    { key: 'q4_brand_relevance', label: 'Brand relevance' }
  ];

  map.forEach(item => {
    const val = answers[item.key] || 0;
    if (val > 0) {
      concerns.push({ label: item.label, score: val });
    }
  });

  concerns.sort((a, b) => b.score - a.score);
  return concerns.slice(0, 3).map(c => `${c.label} — ${c.score}`).join(', ');
}
