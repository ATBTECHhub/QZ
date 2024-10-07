import testIcon from "../assets/testIcon.svg";
import analyticsIcon from "../assets/analyticsIcon.svg";
import gradeIcon from "../assets/gradeIcon.svg";

import HeroOne from "../assets/heroImg1.svg";
import HeroTwo from "../assets/heroImg2.svg";
import alfred from "../assets/alfred.svg";
import emmanuella from "../assets/emmanuella.svg";
import bola from "../assets/bola.svg";

import dashboardIcon from "../assets/dashboardIcon.svg";
import userManagementIcon from "../assets/userManagementIcon.svg";
import testManagementIcon from "../assets/testManagementIcon.svg";
import administratorIcon from "../assets/administratorIcon.svg";
import resultIcon from "../assets/resultIcon.svg";
import logoutIcon from "../assets/logoutIcon.svg";

import widgetOne from "../assets/widgetOne.svg";
import widgetTwo from "../assets/widgetTwo.svg";
import widgetThree from "../assets/widgetThree.svg";

import quicklinkCreateTest from "../assets/quicklinkCreateTest.svg";
import quicklinkReport from "../assets/quicklinkReport.svg";
import quicklinkAnalytics from "../assets/quicklinkAnalytics.svg";
import quicklinkScheduledTest from "../assets/quicklinkScheduledTest.svg";
import quicklinkCreateUser from "../assets/quicklinkCreateUser.svg";
import quicklinkOngoingTest from "../assets/quicklinkOngoingTest.svg";

import testIcon1 from "../assets/testIcon1.svg"
import resultIcon1 from "../assets/resultIcon1.svg"
import profileIcon from "../assets/profileIcon.svg"

import timeIcon from "../assets/timeIcon.svg"
import questionIcon from "../assets/questionIcon.svg"
import dateIcon from "../assets/dateIcon.svg"
import markedIcon from "../assets/markedIcon.svg"
import scoreIcon from "../assets/scoreIcon.svg"
import roundIcon from "../assets/roundIcon.svg"




export const features = [
  {
    value: "800",
    title: "Test Creator",
  },
  {
    value: "1,700+",
    title: "Test Taker",
  },
  {
    value: "520",
    title: "Active Users",
  },
];

export const aboutUs = [
  {
    image: testIcon,
    title: "Test Administration",
    content: "Design and customize your test with ease",
  },
  {
    image: analyticsIcon,
    title: "Analytics",
    content: "Access performance insight and track progress",
  },
  {
    image: gradeIcon,
    title: "Grading System",
    content:
      "With our instant automated grading and detailed analytics you save a lot of time",
  },
];
export const aboutUsTwo = [
  {
    image: testIcon,
    title: "User Friendly interface",
    content: "Seamlessly navigate through questions and submit answers",
  },
  {
    image: analyticsIcon,
    title: "Analytics",
    content: "Get immediate result and see detailed performace metrics",
  },
  {
    image: gradeIcon,
    title: "Grading System",
    content: "Get immediate result and see detailed performace metrics",
  },
];
export const heroSlider = [
  {
    image: HeroOne,
  },
  {
    image: HeroTwo,
  },
];
export const testimonials = [
  {
    id: 1,
    image: alfred,
    name: "Alfred Swaniker",
    position: "CEO, Chell Academy",
    review:
      "The user interface is smooth, I love that I get instant feedback on my performance",
  },
  {
    id: 2,
    image: emmanuella,
    name: "Emmanuella John",
    position: "Admin Officer OGPC",
    review:
      "This platform has transformed how I handle exams. The automated grading is a game changer",
  },
  {
    id: 3,
    image: bola,
    name: "Bolatito Bankole",
    position: "Senior Consultant  ATB TECH HUB",
    review:
      "The user interface is smooth, I love that I get instant feedbackon my performance",
  },
];
export const instructorDashboard = [
  {
    text: "Dashboard",
    to: "/instructor-dashboard",
    icon: dashboardIcon,
  },
  {
    text: "User Management",
    to: "/instructor-dashboard",
    icon: userManagementIcon,
    sublinks: [
      { text: "Create User", to: "/instructor-dashboard/create-user" },
      { text: "Manage User", to: "/instructor-dashboard/manage-user" },
      {
        text: "Create and Manage Groups",
        to: "/instructor-dashboard/groups",
      },
    ],
  },
  {
    text: "Test Management",
    to: "/instructor-dashboard",
    icon: testManagementIcon,
    sublinks: [
      { text: "Create Test", to: "/instructor-dashboard/create-test" },
      { text: "Manage Test", to: "/instructor-dashboard/manage-test" },
      { text: "Question Bank", to: "/instructor-dashboard/questions" },
    ],
  },
  {
    text: "Test Administration",
    to: "/instructor-dashboard",
    icon: administratorIcon,
    sublinks: [
      {
        text: "Configure & Administer Test ",
        to: "/instructor-dashboard/administer-test",
      },
      { text: "Monitor Test", to: "/instructor-dashboard/monitor-test" },
    ],
  },
  {
    text: "Reports and Results",
    to: "/instructor-dashboard",
    icon: resultIcon,
    sublinks: [
      { text: "View Results", to: "/instructor-dashboard/results" },
      { text: "Generate Reports", to: "/instructor-dashboard/reports" },
      { text: "Analytics", to: "/instructor-dashboard/analytics" },
    ],
  },
  {
    text: "Log out ",
    to: "/instructor-dashboard",
    icon: logoutIcon,
  },
];
export const dashboardWidget = [
  {
    title: "Number of Tests",
    value: 45,
    icon: widgetOne,
    color: "bg-[#104573]",
  },
  {
    title: "Completed Tests",
    value: 45,
    icon: widgetTwo,
    color: "bg-[#008000B2]",
  },
  {
    title: "In Progress...",
    value: 45,
    icon: widgetThree,
    color: "bg-[#F3B855]",
  },
];

export const tests = [
  {
    no: 1,
    title: "Networking Basics",
    dueDate: "7 Sept, 2024",
    duration: "10:00am - 12:00pm",
  },
  {
    no: 2,
    title: "Basic Computing",
    dueDate: "2 Aug, 2024",
    duration: "8:30am - 9:45am",
  },
  {
    no: 3,
    title: "Cyber Security",
    dueDate: "15 July, 2024",
    duration: "9:15am - 9:45am",
  },
  {
    no: 4,
    title: "Java Script Foundation",
    dueDate: "23 Aug, 2024",
    duration: "4:00pm - 5:30pm",
  },
];

export const recentlyCreatedTests = [
  { id: 1, title: "Basic Computing", dateCreated: "24 Aug, 2024" },
  { id: 2, title: "Java script Foundation", dateCreated: "23 Aug, 2024" },
];

export const creatorUpcomingTests = [
  {
    id: 1,
    title: "Basic Computing",
    scheduledDate: "23 Aug, 2024 - 30 Aug, 2024",
  },
];

export const creatorQuickLinks = [
  { title: "Create Test", icon: quicklinkCreateTest, link: "/create-test" },
  { title: "Reports", icon: quicklinkReport, link: "/reports" },
  { title: "Analytics", icon: quicklinkAnalytics, link: "/analytics" },
  {
    title: "Scheduled Test",
    icon: quicklinkScheduledTest,
    link: "/scheduled-test",
  },
  { title: "Create User", icon: quicklinkCreateUser, link: "/create-user" },
  {
    title: "Ongoing Tests",
    icon: quicklinkOngoingTest,
    link: "/ongoing-tests",
  },
];

export const creatorTracker = [
  {
    id: 1,
    name: "James Jacob",
    test: "Basic Computing",
    date: "2 Aug, 2024",
    status: "Completed",
  },
  {
    id: 2,
    name: "Sarah Doe",
    test: "Advanced Math",
    date: "5 Aug, 2024",
    status: "Pending",
  },
  {
    id: 3,
    name: "Michael Smith",
    test: "Physics Basics",
    date: "10 Aug, 2024",
    status: "Missed",
  },
];
export const testTakerDashboard = [
  {
    text: "Dashboard",
    to: "/instructor-dashboard",
    icon: dashboardIcon,
  },
  {
    text: "User Management",
    to: "/instructor-dashboard",
    icon: userManagementIcon,
    sublinks: [
      { text: "Create User", to: "/instructor-dashboard/create-user" },
      { text: "Manage User", to: "/instructor-dashboard/manage-user" },
      {
        text: "Create and Manage Groups",
        to: "/instructor-dashboard/groups",
      },
    ],
  },
  {
    text: "Test Management",
    to: "/instructor-dashboard",
    icon: testManagementIcon,
    sublinks: [
      { text: "Create Test", to: "/instructor-dashboard/create-test" },
      { text: "Manage Test", to: "/instructor-dashboard/manage-test" },
      { text: "Question Bank", to: "/instructor-dashboard/questions" },
    ],
  },
  {
    text: "Test Administration",
    to: "/instructor-dashboard",
    icon: administratorIcon,
    sublinks: [
      {
        text: "Configure & Administer Test ",
        to: "/instructor-dashboard/administer-test",
      },
      { text: "Monitor Test", to: "/instructor-dashboard/monitor-test" },
    ],
  },
  {
    text: "Reports and Results",
    to: "/instructor-dashboard",
    icon: resultIcon,
    sublinks: [
      { text: "View Results", to: "/instructor-dashboard/results" },
      { text: "Generate Reports", to: "/instructor-dashboard/reports" },
      { text: "Analytics", to: "/instructor-dashboard/analytics" },
    ],
  },
  {
    text: "Log out ",
    to: "/instructor-dashboard",
    icon: logoutIcon,
  },
];

// TEST TAKER DASHBOARD
export const testTakerDashboard1 = [
  {
    text: "Dashboard",
    to: "/taker-dashboard",
    icon: dashboardIcon,
  },
  {
    text: "Tests ",
    to: "/taker-dashboard",
    icon: testIcon1,
    sublinks: [
      { text: "Available Tests", to: "/taker-dashboard/test" },
      { text: "Ongoing Tests", to: "/taker-dashboard/ongoing" },
      {
        text: "Completed Tests",
        to: "/taker-dashboard/completed",
      },
    ],
  },
  {
    text: "Results",
    to: "/taker-dashboard",
    icon: resultIcon1,
    sublinks: [
      { text: "Test Results", to: "/taker-dashboard/result" },
      {
        text: "Performance Analysis",
        to: "/taker-dashboard/performance-analysis",
      },
    ],
  },
  {
    text: "Profile",
    to: "/taker-dashboard",
    icon: profileIcon,
    sublinks: [
      {
        text: "View Profile",
        to: "/taker-dashboard/view-profile",
      },
      { text: "Edit Profile", to: "/taker-dashboard/edit-profile" },
    ],
  },
  {
    text: "Log out ",
    to: "/taker-dashboard",
    icon: logoutIcon,
  },
];
export const takerDashboardWidget = [
  {
    title: "Number of Tests",
    value: 20,
    icon: widgetOne,
    color: "bg-[#104573]",
  },
  {
    title: "Completed Tests",
    value: 20,
    icon: widgetTwo,
    color: "bg-[#008000B2]",
  },
  {
    title: "In Progress...",
    value: 20,
    icon: widgetThree,
    color: "bg-[#F3B855]",
  },
];
export const takerTests = [
  {
    no: 1,
    title: "Networking Basics",
    dueDate: "7 Sept, 2024",
    duration: "10:00am - 12:00pm",
    status: "Upcoming",
    result: "--",
    statusColor: "text-[#F3B855]",
  },
  {
    no: 2,
    title: "Basic Computing",
    dueDate: "2 Aug, 2024",
    duration: "8:30am - 9:45am",
    status: "Completed",
    result: "65%",
    statusColor: "text-[#008000]",
  },
  {
    no: 3,
    title: "Cyber Security",
    dueDate: "15 July, 2024",
    duration: "9:15am - 9:45am",
    status: "Missed",
    result: "0%",
    statusColor: "text-[#FF0000]",
  },
  {
    no: 4,
    title: "Java Script Foundation",
    dueDate: "23 Aug, 2024",
    duration: "4:00pm - 5:30pm",
    status: "Completed",
    result: "75%",
    statusColor: "text-[#008000]",
  },
];
export const takerQuickLinks = [
  {
    title: "Available Tests",
    icon: quicklinkCreateTest,
    link: "/available-tests",
  },
  {
    title: "Ongoing Tests",
    icon: quicklinkScheduledTest,
    link: "/ongoing-tests",
  },
  {
    title: "Recent Results",
    icon: quicklinkAnalytics,
    link: "/recent-results",
  },
  { title: "Analytics", icon: quicklinkReport, link: "/analytics" },
];
export const completedTests = [
  {
    id: 1,
    title: "Basic Computing",
    status: "Completed",
    statusColor: "text-[#008000]",
    dateTaken: "24 Aug, 2024",
    result: "65%"
  },
  {
    id: 2,
    title: "Java script Foundation",
    status: "Completed",
    statusColor: "text-[#008000]",
    dateTaken: "23 Aug, 2024",
    result: "75%"
  },
];



export const takerUpcomingTests = [
  {
    id: 1,
    title: "Basic Computing",
    dueDate: "7 Sept, 2024",
    duration: "10:00am - 12:00pm",
  },
];

export const testProgress = [
  {
    id: 4,
    title: "Java Script Foundation",
    status: "Started!",
    statusColor: "{#F3B855}",
    date: "23 Aug, 2024",
    progressBar: 20,
    result: "20%",
  },
];
export const availableTest =[
{
icon : timeIcon,
word1: "Time Limit:",
word2: "90 mins",}
,

{icon: questionIcon,
word1: "No of Questions:",
word2: 50}
,

{icon: dateIcon,
word1: "Due Date:",
word2: "24th Aug 2024",
},
];
export const completedTest =[
  {icon:  dateIcon,
   word1:"Date Completed :",
   word2:"24th Aug 2024",
  },
  {
   icon:  markedIcon,
   word1:"Remarks:",
   word2:"Passed",
  },
  {
   icon:  scoreIcon,
   word1:"score:",
   word2:"70%",
  },
  
];

export const testReslt = [
  {
    icon: roundIcon,
    title: "Total Score:",
    status: "70/100",
  },
  {
    icon: roundIcon,
    title: "Passing Score:",
    status: "70",
  },
  {
    icon: roundIcon,
    title: "Status:",
    status: "Passed",
  },
  {
    icon: roundIcon,
    title: "Time Taken:",
    status: "45 minutes",
  },
];



