import ImageDesign from "../assets/images/design.jpg";
import ImageDevelopment from "../assets/images/development.jpg";
import ImageMarketing from "../assets/images/marketing.jpg";

export const mockEvent = {
  id: 1,
  image: ImageDesign,
  title: "UX/UI design workshop",
  location: "Hodnik FOI-a",
  date: "14.10. (9:00-12:00h)",
  attendance: 15,
  maxAttendance: 60,
  company: "Speck",
};

export const mockTopEvents = [
  {
    id: 1,
    image: ImageDesign,
    title: "UX/UI design workshop",
    description:
      "Learn how to solve big problems and test new ideas based on Google Sprint methodology..",
  },
  {
    id: 2,
    image: ImageDevelopment,
    title: "Frontend best practices",
    description:
      "Best frontend practices for developers. Learn advanced CSS techniques and much more...",
  },
  {
    id: 3,
    image: ImageMarketing,
    title: "Digital marketing workshop",
    description:
      "Learn how to use Google Ads and social networks to gain customers for your digital product...",
  },
];

export const mockEvents = [
  {
    id: 1,
    title: "UX/UI design workshop",
    location: "Hodnik FOI-a",
    date: "14.10. (9:00-12:00h)",
    attendance: 15,
    maxAttendance: 60,
    company: "Speck",
  },
  {
    id: 2,
    title: "Frontend best practices",
    location: "Hodnik FOI-a",
    date: "14.10. (10:00-11:00h)",
    attendance: 10,
    maxAttendance: 60,
    company: "Infinum",
  },
  {
    id: 3,
    title: "Digital marketing workshop",
    location: "Hodnik FOI-a",
    date: "15.10. (8:00-10:00h)",
    attendance: 22,
    maxAttendance: 60,
    company: "Arbona",
  },
  {
    id: 4,
    title: "Microservices",
    location: "Hodnik FOI-a",
    date: "15.10. (9:00-12:00h)",
    attendance: 50,
    maxAttendance: 60,
    company: "Span",
  },
  {
    id: 5,
    title: "MVVM Arhitektura",
    location: "Hodnik FOI-a",
    date: "16.10. (9:00-11:00h)",
    attendance: 41,
    maxAttendance: 60,
    company: "In2",
  },
  {
    id: 6,
    title: "Blazor",
    location: "Hodnik FOI-a",
    date: "16.10. (10:00-11:00h)",
    attendance: 60,
    maxAttendance: 60,
    company: "Infinum",
  },
  {
    id: 7,
    title: "Social marketing workshop",
    location: "Hodnik FOI-a",
    date: "16.10. (8:00-10:00h)",
    attendance: 44,
    maxAttendance: 60,
    company: "Arbona",
  },
  {
    id: 8,
    title: "React vs Vue",
    location: "Hodnik FOI-a",
    date: "16.10. (9:00-12:00h)",
    attendance: 40,
    maxAttendance: 60,
    company: "Span",
  },
];
