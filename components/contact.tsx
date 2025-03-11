"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  const handleSubmit = async (formData: FormData) => {
    try {
      const { data, error } = await sendEmail(formData);

      if (error) {
        toast.error(error); // Show error toast
        return;
      }

      toast.success("Email sent successfully!"); // Show success toast
    } catch (error) {
      toast.error("There was an error sending your message."); // Show error if something goes wrong
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:Mohamed.Bouchenti@etu.univ-grenoble-alpes.fr">
        Mohamed.Bouchenti@etu.univ-grenoble-alpes.fr
        </a>{" "}
      </p>

    </motion.section>
  );
}
