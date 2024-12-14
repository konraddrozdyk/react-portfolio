export interface TimelineItem {
  date: string;
  title: string;
  description?: string;
}

const timelineData: TimelineItem[] = [
  {
    date: "2018-2019",
    title: "Campus Telge - Software testing vocational education",
    description:
      "Completed a two-date vocational education focused on test automation, test strategy, and project models.",
  },
  {
    date: "2019",
    title: "ISTQB Foundation Level",
  },
  {
    date: "2019-2020",
    title: "Technical Testing consultant at Sogeti",
    description:
      "Worked as a technical testing consultant at Sogeti, focusing on test automation, performance testing, and security testing.",
  },
  {
    date: "2019",
    title: "Consultancy at Swedbank, manual testing",
    description:
      "Worked as a manual tester at Swedbank, focusing on manual testing.",
  },
  {
    date: "2019-2020",
    title: "Consultancy at Swedbank, test analyst",
    description:
      "Worked as a test analyst at Swedbank, focusing on test automation and performance testing.",
  },
  {
    date: "2019-2020",
    title: "Consultancy at Swedbank, test automation engineer",
    description:
      "Worked as a test automation engineer at Swedbank, focusing on test automation and performance testing.",
  },
  {
    date: "2021",
    title: "Bokadirekt.se - Test automation",
    description:
      "Worked as a test automation consultant at Bokadirekt.se, focusing on test automation and performance testing.",
  },
  {
    date: "2022",
    title: "Sabbatår",
  },
  {
    date: "2023",
    title: "Interflora - Test automation",
    description:
      "Worked as a test automation consultant at Interflora, focusing on test automation and performance testing.",
  },
  {
    date: "2024-2025",
    title: "SALT - Full stack .NET developer",
    description:
      "Worked as a full stack .NET developer at SALT, focusing on web development and cloud services.",
  },
  {
    date: "Future",
    title: "Software Developer or test automation engineer",
    description: "We will see what the future holds.",
  },
];

export default timelineData;
