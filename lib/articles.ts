interface ArticleContent {
  intro: string;
  sections: { heading: string; body: string }[];
  takeaway: string;
}

const contentMap: Record<string, ArticleContent> = {
  '5-steps-strong-financial-plan': {
    intro:
      'A strong financial plan isn\'t about predicting the future — it\'s about making your intentions concrete enough to act on. Here are five steps that turn vague money goals into a plan you can actually follow.',
    sections: [
      {
        heading: '1. Define what you\'re planning for',
        body: 'Start with specific goals: a home, retirement, your child\'s education, or simply building wealth. Each goal needs a number and a timeline. "Save more" isn\'t a goal — "₹75L for a home down payment in 6 years" is.',
      },
      {
        heading: '2. Understand where you stand today',
        body: 'List your income, expenses, assets and liabilities. You can\'t plan a route without knowing your starting point. This snapshot doesn\'t need to be perfect — it needs to be honest.',
      },
      {
        heading: '3. Prioritize your goals',
        body: 'Not every goal can come first. Rank them by urgency and importance. Retirement may be decades away, but starting early matters more than starting big.',
      },
      {
        heading: '4. Build a monthly action plan',
        body: 'Translate each goal into a monthly contribution. A plan that lives only in your head won\'t survive contact with a busy month. Automate what you can.',
      },
      {
        heading: '5. Review every year',
        body: 'Life changes. Income changes. Markets change. A plan reviewed annually stays relevant — one that\'s never reviewed quietly becomes irrelevant.',
      },
    ],
    takeaway:
      'A financial plan is a living document. The point isn\'t to get it perfect on day one — it\'s to keep moving in a direction you chose on purpose.',
  },
  'understanding-risk-before-you-invest': {
    intro:
      'Risk is often reduced to "how much could this drop?" — but that\'s only one face of it. Before you invest, it\'s worth understanding the several shapes risk can take.',
    sections: [
      {
        heading: 'Market risk',
        body: 'The most visible kind: the value of your holdings moves up and down with markets. It\'s unavoidable for growth-oriented investing, but it reduces with time horizon.',
      },
      {
        heading: 'Inflation risk',
        body: 'The quiet one. Money that earns too little over time loses purchasing power. Avoiding market risk entirely often means accepting inflation risk instead.',
      },
      {
        heading: 'Liquidity risk',
        body: 'Some investments can\'t be easily converted to cash when you need them. Match your investments to when you\'ll actually need the money.',
      },
      {
        heading: 'Behavior risk',
        body: 'Often the most expensive. Selling in fear and buying in enthusiasm can cost more than any market downturn. A plan helps you stay grounded.',
      },
    ],
    takeaway:
      'You can\'t eliminate risk — you can only choose which kinds to accept. Understanding them is the first step to choosing well.',
  },
  'setting-meaningful-financial-goals': {
    intro:
      'Most financial goals fail not because they\'re too ambitious, but because they\'re too abstract. Here\'s how to set goals that actually connect to your life.',
    sections: [
      {
        heading: 'Start with the life, not the number',
        body: 'Before asking "how much do I need?", ask "what kind of life do I want?" A number without a reason won\'t motivate you through a tough month.',
      },
      {
        heading: 'Make it specific and time-bound',
        body: 'Replace "save for retirement" with "build a ₹3Cr retirement corpus by age 60." Clarity turns a wish into a target.',
      },
      {
        heading: 'Break it into milestones',
        body: 'A 20-year goal can feel distant. A 12-month milestone feels real. Milestones keep you engaged between now and the finish line.',
      },
      {
        heading: 'Write it down',
        body: 'Goals that live only in your head drift. Writing them down makes them real — and makes it easier to review them later.',
      },
    ],
    takeaway:
      'Meaningful goals connect money to life. When you know why you\'re saving, the how becomes much easier.',
  },
  'building-long-term-investment-strategy': {
    intro:
      'A long-term investment strategy isn\'t about being clever — it\'s about being consistent. Here are the principles that make the biggest difference over time.',
    sections: [
      {
        heading: 'Start early, stay consistent',
        body: 'Time does more heavy lifting than timing. Small amounts invested consistently over decades often outperform larger amounts invested late.',
      },
      {
        heading: 'Diversify deliberately',
        body: 'Don\'t put everything in one place. A spread across asset classes reduces the chance that any single setback derails your plan.',
      },
      {
        heading: 'Keep costs low',
        body: 'Fees compound too. Over decades, even small differences in cost can meaningfully change your outcome.',
      },
      {
        heading: 'Resist the urge to tinker',
        body: 'The most common mistake is reacting to short-term news. A strategy you stick with beats one you constantly adjust.',
      },
    ],
    takeaway:
      'Consistency beats prediction. A simple strategy followed for decades will outperform a clever one abandoned at the first dip.',
  },
  'preparing-for-retirement-early': {
    intro:
      'Retirement can feel too distant to plan for — but that distance is exactly what makes starting early so powerful. Here\'s how to begin, even modestly.',
    sections: [
      {
        heading: 'Estimate your retirement needs',
        body: 'A rough estimate of your future monthly expenses, adjusted for inflation, gives you a target to work toward. Precision isn\'t required — direction is.',
      },
      {
        heading: 'Start with what you have',
        body: 'Even a small monthly contribution, started early, benefits from years of compounding. Increase the amount as your income grows.',
      },
      {
        heading: 'Account for inflation',
        body: 'A retirement corpus isn\'t a fixed number — it needs to grow with inflation. Plan in today\'s terms, but understand tomorrow\'s costs will be higher.',
      },
      {
        heading: 'Review your trajectory',
        body: 'Once a year, check whether you\'re on track. Small course corrections early beat large ones later.',
      },
    ],
    takeaway:
      'The best time to start planning for retirement was years ago. The second best time is now.',
  },
  'why-financial-reviews-matter': {
    intro:
      'A financial plan isn\'t something you set once and forget. Regular reviews are what keep it working as your life changes.',
    sections: [
      {
        heading: 'Life changes, and so should your plan',
        body: 'New job, new family, new goals — each life change shifts your financial picture. A review keeps your plan aligned with your actual life.',
      },
      {
        heading: 'Markets drift your allocation',
        body: 'Over time, market movements shift your asset mix away from where you started. A periodic rebalance brings it back in line.',
      },
      {
        heading: 'Goals evolve',
        body: 'What mattered to you five years ago may not matter the same way today. Reviews let you retire goals that no longer fit and add new ones.',
      },
      {
        heading: 'Small adjustments compound',
        body: 'A small increase in contributions, caught early, makes a bigger difference than a large one made late. Reviews surface those opportunities.',
      },
    ],
    takeaway:
      'A plan you review is a plan that grows with you. Set it once, but don\'t forget it.',
  },
};

export function getArticleContent(slug: string): ArticleContent | null {
  return contentMap[slug] ?? null;
}
