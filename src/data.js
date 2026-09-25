import {
  FaRegFaceFrown,
  FaRegFaceMeh,
  FaRegFaceSmile,
  FaRegFaceLaugh,
} from "react-icons/fa6";

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export const emojis = [
  {
    value: "Very Bad",
    icon: FaRegFaceFrown,
    color: "red",
  },
  {
    value: "Bad",
    icon: FaRegFaceFrown,
    color: "orange",
  },
  {
    value: "Okay",
    icon: FaRegFaceMeh,
    color: "yellow",
  },
  {
    value: "Good",
    icon: FaRegFaceSmile,
    color: "blue",
  },
  {
    value: "Excellent",
    icon: FaRegFaceLaugh,
    color: "green",
  },
];

export const feedbackIcon = {
  Very_Bad: [FaRegFaceFrown, "red"],
  Bad: [FaRegFaceFrown, "orange"],
  Okay: [FaRegFaceMeh, "yellow"],
  Good: [FaRegFaceSmile, "blue"],
  Excellent: [FaRegFaceLaugh, "green"],
};

export const feedbacksData = [
  {
    id: 1,
    feedbackRating: "Excellent",
    feedbackText:
      "Everything works perfectly. I especially love the clean interface and fast loading speed.",
    date: "May 15, 2024",
    time: "10:30 AM",
    edited: false,
  },
  {
    id: 2,
    feedbackRating: "Good",
    feedbackText:
      "I really like how easy the app is to use. The design is clean and everything feels smooth. Great experience so far.",
    date: "May 8, 2024",
    time: "2:15 PM",
    edited: false,
  },
  {
    id: 3,
    feedbackRating: "Okay",
    feedbackText:
      "The app is good overall, but some sections were a little confusing at first. Maybe add a quick tutorial for new users.",
    date: "Apr 28, 2024",
    time: "9:45 AM",
    edited: true,
  },
  {
    id: 4,
    feedbackRating: "Bad",
    feedbackText:
      "The app froze a few times while using it, and I had to refresh the page. Please improve performance.",
    date: "Apr 5, 2024",
    time: "2:05 AM",
    edited: false,
  },
  {
    id: 5,
    feedbackRating: "Very Bad",
    feedbackText:
      "The experience was frustrating because some buttons didn’t respond properly on mobile.",
    date: "Mar 10, 2024",
    time: "3:40 PM",
    edited: false,
  },
  {
    id: 6,
    feedbackRating: "Good",
    feedbackText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit ani.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ni.",
    date: "Dec 10, 2025",
    time: "3:20 AM",
    edited: false,
  },
];
