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
        to: "/instructor-dashboard/manage-groups",
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
