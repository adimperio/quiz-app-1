/**
 * GoHighLevel Automation & Nurture Email Sequence Definitions
 * 5 Emails over 9 Days
 */

export const EMAIL_SEQUENCE = [
  {
    day: 0,
    emailId: 'email_1',
    subject: 'Your result: {{quiz_result_band}}',
    purpose: 'Deliver full personalized result based on score.',
    cta: 'BEGIN A CONVERSATION',
    getContent: (firstName, bandTitle, resultSummary) => `
Hi ${firstName},

Here is your full personalized result from the Brand Diagnostic: ${bandTitle}.

${resultSummary}

If you are ready to review your brand positioning and see whether the structure underneath still fits your business, let's talk.

[BEGIN A CONVERSATION]

Best,
Heather
`
  },
  {
    day: 1,
    emailId: 'email_2',
    subject: 'The part nobody says out loud',
    purpose: "Name the fear directly: 'What if the business I built isn't working anymore?' Frame rebuilding as a normal response to a changed market.",
    cta: 'BEGIN A CONVERSATION',
    getContent: (firstName) => `
Hi ${firstName},

What if the business you built isn't working the way it used to?

Most founders hesitate to admit that out loud. They assume it means they failed, or that they made a mistake somewhere along the line.

It doesn't.

Markets change. Buying behavior shifts. AI alters client expectations. Rebuilding your positioning isn't an admission of failure — it's the normal, necessary response to an evolving market.

If you're feeling that shift, let's look at what changed.

[BEGIN A CONVERSATION]

Best,
Heather
`
  },
  {
    day: 3,
    emailId: 'email_3',
    subject: 'Twenty-three years in that house',
    purpose: "Tell Heather's house story with restrained, personal writing.",
    cta: 'BEGIN A CONVERSATION',
    getContent: (firstName) => `
Hi ${firstName},

I stood in front of my own house after twenty-three years in it and did not want to start over.

I didn't want to rebuild. I wanted my house back.

But it had burned down, and wanting it back wasn't one of the options.

So you rebuild. On the same ground. For the business you actually run now. For a market that exists now. That's the whole job. And it's the only thing that works.

[BEGIN A CONVERSATION]

Heather
`
  },
  {
    day: 5,
    emailId: 'email_4',
    subject: "Why more marketing didn't fix it",
    purpose: 'Explain that marketing amplifies underlying structure. Reference Q7 website hesitation.',
    cta: 'BEGIN A CONVERSATION',
    getContent: (firstName) => `
Hi ${firstName},

Marketing amplifies the structure underneath it.

If your positioning is outdated or your message is unclear, spending more money on marketing simply sends more people to the exact same problem.

If you hesitate before sending someone to your own website, more traffic isn't the first problem to solve. Your website is supposed to make the conversation easier — not be something you have to overcome.

Let's fix the structure first.

[BEGIN A CONVERSATION]

Best,
Heather
`
  },
  {
    day: 9,
    emailId: 'email_5',
    subject: 'What a rebuild actually looks like',
    purpose: "Explain Heather's 3 engagement levels (STANDOUT, STANDALONE, UNMISTAKABLE) without pricing.",
    cta: 'BEGIN A CONVERSATION',
    getContent: (firstName) => `
Hi ${firstName},

When clients work with me to rebuild their brand foundation, it takes one of three forms:

1. STANDOUT — I rebuild the strategy and give you clear direction. You or your team execute it.
2. STANDALONE — I rebuild the strategy, and my team builds the new brand and presence. Your team takes over from there.
3. UNMISTAKABLE — We rebuild it, my team builds it, and we run the marketing engine with you.

If you'd like to see which approach fits where you are right now, let's connect.

[BEGIN A CONVERSATION]

Best,
Heather
`
  }
];

export const GHL_AUTOMATION_RULES = {
  onSubmission: {
    STRUCTURALLY_SOUND: {
      scoreRange: '0-6',
      tag: 'quiz-brand-structurally-sound',
      action: 'Send Email 1-5 sequence. If not booked after Day 9, transition to Heather\'s monthly email list.'
    },
    YOU_SMELL_SMOKE: {
      scoreRange: '7-14',
      tag: 'quiz-brand-smell-smoke',
      action: 'Send Email 1-5 sequence. Primary CTA: BEGIN A CONVERSATION.'
    },
    ITS_ALREADY_BURNED: {
      scoreRange: '15-21',
      tag: 'quiz-brand-already-burned',
      action: 'Send Email 1-5 sequence. If completed without booking, create a task in GHL for Heather to personally follow up (human outreach).'
    }
  },
  onBooking: {
    rule: 'Immediately exit contact from quiz nurture sequence. Do not continue sending awareness emails to someone who has already booked.'
  }
};
