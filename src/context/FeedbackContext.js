// Custom Components

// Utility Functions


// Built-in Components
import { createContext, useState, useEffect, useRef, useCallback } from "react";
import { useSearchParams } from "react-router-dom";

// Context

// Data
import { feedbackIcon } from "../data";

// const API_URL = "https://support-desk-7jpg.onrender.com/api/feedbacks";
const API_URL = import.meta.env.API_URL + "/api/feedbacks" || "/api/feedbacks";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showEditFeedbackForm, setShowEditFeedbackForm] = useState(false);
  const [showFeedbackDetails, setShowFeedbackDetails] = useState(false);
  const [activeFeedback, setActiveFeedback] = useState({
    feedbackRating: "Excellent",
    feedbackText: "",
  });

  const [formData, setFormData] = useState({
    feedbackRating: "Excellent",
    feedbackText: "",
  });

  const [editFormData, setEditFormData] = useState({
    feedbackRating: "",
    feedbackText: "",
  });

  const topRef = useRef(null);

  // Pagination state
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page")) || 1,
  );
  const itemsPerPage = 5;

  // Fetch Feedback

  // In React, functions defined inside a component are recreated as a completely new object on every render. 
  // When you pass fetchFeedback into a useEffect dependency array, 
  // React detects a new function reference every time, 
  // causing the effect to re-run in an infinite loop or on every keystroke.
  // Wrapping it in useCallback caches the function and only updates its reference if the dependencies you specify actually change.

  const fetchFeedback = useCallback(async () => {
    const response = await fetch(
      `${API_URL}?page=${currentPage}&limit=${itemsPerPage}`,
    );
    const data = await response.json();

    setTotalPages(data.totalPages);
    setFeedbacks(data.feedbacks);
    setIsLoading(false);
    // console.log(data);
  }, [currentPage]);

  useEffect(() => {
    fetchFeedback();

    topRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [fetchFeedback]);

  // console.log(feedbackToEdit);
  // console.log(activeFeedback);

  const updateFeedback = async (id, editFormdata) => {

    const updatedFeedback = {
      ...editFormData,
      edited: true,
    };

    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFeedback),
    });

    const data = await response.json();

    setFeedbacks(
      feedbacks.map((feedback) => {
        if (feedback._id === id) {
          return { ...data };
        } else {
          return feedback;
        }
      }),
    );

    setShowEditFeedbackForm(false);
    setActiveFeedback({ feedbackRating: "Excellent", feedbackText: "" });
  };

  const submitFeedback = async (e) => {
    // Prevent page reload
    e.preventDefault();

    const newFeedback = {
      ...formData,
    };

    const response = await fetch(`${API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedbacks((prev) => {
      return [data, ...prev];
    });

    setFormData({ feedbackRating: "Excellent", feedbackText: "" });

    fetchFeedback()
  };

  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
    }
    setShowFeedbackDetails(false);

    fetchFeedback();
  };

  const showEditForm = (feedback) => {
    setShowFeedbackDetails(false);
    setShowEditFeedbackForm(true);
    setActiveFeedback({
      ...feedback,
    });
  };

  const showDetails = (feedback) => {
    setShowFeedbackDetails(true);
    setActiveFeedback({ ...feedback });
  };

  const getRatingIconAndColor = (feedback) => {
    const ratingText = feedback.feedbackRating.replace(" ", "_");
    const RatingIcon = feedbackIcon[ratingText][0];
    const iconColor = feedbackIcon[ratingText][1];

    return { RatingIcon, iconColor };
  };

  return (
    <FeedbackContext.Provider
      value={{
        // States
        feedbacks,
        activeFeedback,
        formData,
        editFormData,
        showFeedbackDetails,
        isLoading,
        totalPages,
        topRef,
        currentPage,

        // Setter Functions
        setFeedbacks,
        showEditFeedbackForm,
        setActiveFeedback,
        setFormData,
        setEditFormData,
        setShowFeedbackDetails,
        setShowEditFeedbackForm,
        setCurrentPage,
        setSearchParams,

        // Functions
        submitFeedback,
        deleteFeedback,
        showEditForm,
        updateFeedback,
        showDetails,
        getRatingIconAndColor,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
