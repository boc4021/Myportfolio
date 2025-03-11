import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import toast from "react-hot-toast"; // For showing notifications

export default function SubmitBtn() {
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track submission status
  const [isSuccess, setIsSuccess] = useState(false); // State to track success or error

  // Handle form submission feedback
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true); // Set submitting state to true
    setIsSuccess(false); // Reset success state

    // Simulate form submission (replace with actual form submission logic)
    try {
      // Simulating a form submission process
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate 2 seconds of delay

      setIsSubmitting(false); // Reset submitting state
      setIsSuccess(true); // Set success state to true

      // Show success message
      toast.success("Email sent successfully!");
    } catch (error) {
      setIsSubmitting(false); // Reset submitting state
      toast.error("Failed to send email.");
    }
  };

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
      disabled={isSubmitting} // Disable the button during submission
      onClick={handleSubmit} // Attach the submit handler to button click
    >
      {isSubmitting ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div> // Show spinner when submitting
      ) : isSuccess ? (
        <span>Submitted</span> // Show "Submitted" text if success
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}
