import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaConnectdevelop } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import diag from "@/public/diag.png";
import Filtre from "@/public/Filtre.png";
import horloge from "@/public/horloge.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
type Section = {
  title: string;
  content: string;
  image?: string;
  githubLink?: string;
};

type Project = {
  title: string;
  slug: string;
  images: string[];
  githubLink?: string;
  sections: Section[];
  tags: string[];
};
export const experiencesData = [

  {
    title: "Technical Internship - Development of a Medical Liquid Mixer <Dialysate>",
    location: "Fès ,Morocco",
    description:
      "Designed and developed a dialysate mixer for medical applications, ensuring compliance with medical standards and creating an automated test bench for clinical validation.",
    icon: React.createElement(FaConnectdevelop),
    date: "2022 ",
  },
  {
    title: "Engineer assistant : Current Sensor Development and Testing",
    location: "Annecy ,France",
    description:
      "Led the enhancement and testing of an innovative current measurement concept. Responsibilities included analyzing an existing prototype and specification, designing a control PCB (schematics + documentation), adapting a test/calibration bench, and programming a microcontroller to validate system performance. Developed and executed a detailed test plan to evaluate sensor characteristics such as gain, noise, bandwidth, and thermal drift. Analyzed results, proposed design improvements, and documented the full development and testing process.",
    icon: React.createElement(FaConnectdevelop),
    date: "2025 ",
  },
] as const;

export const projectsData :readonly Project[]  = [
  {
    title: "12-bit Digital Low-Pass Filter in VHDL and Schematic on AMS 0.35µm Technology",
    slug: "digital-low-pass-filter",
    images: [
      "/Filtre.png", 
    ],
    
    githubLink:"",
    sections: [
      {
        title: "Introduction",
        
        content: "This project focuses on designing a digital low-pass filter for integrated circuits. The objective is to create an efficient digital filter that processes signals while minimizing noise and distortion."
    },
    {
        title: "Filter Design Principles",
        content: "The digital filter is based on a first-order low-pass response. The impulse response follows the equation h(t) = e^(-t/τ). Sampling this response at period Te gives a discrete-time sequence that can be transformed into the Z-domain, resulting in the transfer function H(z). This forms the basis for the filter's implementation."
    },
    {
        title: "Implementation in Logic Gates",
        content: "The implementation of the filter starts with creating a dedicated project library. A half-adder schematic is then designed, followed by generating its symbol. The next step involves developing a 1-bit adder and testing its functionality to ensure proper operation. Once validated, the design is extended to an N-bit adder to support more complex computations. The filter is then implemented using synchronous registers to synchronize the system, ensuring reliable data processing. Finally, a coefficient storage system is designed to allow dynamic adjustment of the filter parameters, enabling adaptability to different input signals."
    },
    {
        title: "VHDL Implementation",
        content: "The filter is also implemented in VHDL, starting with the coding of all functional blocks. A testbench is created to validate the filter's performance under different conditions. The design is then synthesized, and timing constraints are verified to ensure it meets the required specifications. Post-synthesis simulations are conducted to validate the correctness of the synthesized circuit. Finally, place-and-route is performed to finalize the circuit layout, optimizing it for integration into a physical chip."
    },
    {
        title: "Simulation and Optimization",
        content: "The filter undergoes rigorous validation through various simulation steps. Behavioral simulation ensures that the filter operates correctly, processing signals as expected. Post-synthesis timing analysis is performed to verify the speed and efficiency of the design. The layout is generated, and physical verification is conducted to confirm the correctness of the implementation. Additionally, simulations with real-world signal inputs are executed to test the effectiveness of the filter in practical applications."
    },
    {
        title: "Conclusion",
        content: "The digital filter design project successfully implemented a functional low-pass filter using both logic gates and VHDL. The synthesized circuit met performance criteria, demonstrating feasibility for integration into larger digital systems. Further optimizations could enhance speed and power efficiency, making the filter a viable solution for advanced signal processing applications."
    }
    ],
    tags: ["VHDL", "Cadence", "logic gates", "NC-Verilog", "Simulation"],
  },

  {
    "title": "Digital Control System on FPGA for Mobile Robot Control",
    "slug": "digital-control-fpga",
    images: [
      "/diag.png",
    ],
    githubLink: "https://github.com/boc4021/PSOC-Robot-Navigation",
    sections: [
      {
        "title": "Introduction | Part one : speed control",
        "content":
          "This project falls within the field of digital control systems for robotic systems. The main objective is the design and implementation of a real-time digital control system on FPGA for precise speed control of a robot. We use the Zynq Z7 board, which offers an ideal platform for real-time processing required for this type of application. The approach follows a methodical progression in several stages: generation of control signals, development of a speed measurement system, implementation of a PI controller, and integration of all these elements to achieve controlled trajectories."
      },
      {
        "title": "PWM Signal Generation",
        "content":
          "The first step was to generate a PWM signal to control the DC motors. The speed variation depends on the voltage variation that powers the motors. We implemented a counting block of 100 that receives a duty cycle value as input. By comparing the count value with the duty cycle value, the block provides a binary output to control motor speed. The PWM control pins and direction pins were identified in the documentation and declared in the constraints file to establish the connection between the PWM generator and the motors."
      },
      {
        "title": "Implementation of Non-Controlled Trajectory",
        "content":
          "This part of the project is dedicated to creating the main components necessary for the robot's operation. We start with the frequency divider, which establishes the time base to synchronize the entire system. The Zynq Z7 board has an internal clock of 125 MHz, which we divide to obtain a system clock of 1 MHz. Next, we developed a state machine to control the motors by alternating between moving forward and turning, thus forming a trajectory approximating a square."
      },
      {
        "title": "Speed Measurement",
        "content":
          "To control motor speed, we created a 'speed measurement' component that uses the PedagoBot's encoders. The principle is based on analyzing two signals A and B offset by 90 degrees from each other. The sequence in which these signals change from 0 to 1 determines the direction of rotation. To measure speed, we count the number of pulses on one of the two signals during a defined time interval. The higher the pulse frequency, the faster the rotation speed. Tests confirmed that the signal period is inversely proportional to the motor speed, thus validating our measurement system.",
        "image": "/asservissement/COD.png"
      },
      {
        "title": "Data Transmission via UART",
        "content":
          "To display speed in a readable format on a PC, we established a serial connection from the board to the PC using an IP-RS232 module for UART communication. We created a 'DecodBinASCII' component that converts the 32-bit binary speed into a 40-bit ASCII output (5 bytes): 3 bytes for the value digits, one byte for the sign, and a final byte for the line break. This conversion allows displaying speed values in real-time on a terminal, facilitating monitoring and analysis of system performance.",
        "image": "/asservissement/Capturesimbin.png"
      },
      {
        "title": "Development and Simulation of the PI Controller",
        "content":
          "To test the relationship between duty cycle and speed, we first set a target speed of 300. Then, we observe the evolution of the duty cycle while the actual speed gradually increases from 0 until it exceeds the target value. This observation allowed us to verify if the duty cycle increases when the static error is positive and decreases when the static error is negative.",
        "image": "/asservissement/Simulation.png"
      },
      {
        "title": "Tuning and Experimental Results",
        "content":
          "The tuning of Kp and Ki gains was done methodically. We first progressively increased Kp (with Ki set to zero) until obtaining a fast response, then introduced Ki to eliminate static error. Tests showed that increasing Kp increases the speed amplitude with a slight decrease in rise time. With Ki=1 and Kp=8, we obtained speed stabilization at the target value (300), but with a 20% overshoot. By reducing Kp to 6, the system became more stable with an overshoot of less than 20% while maintaining zero static error. These adjustments optimized the system to offer an excellent compromise between speed, accuracy, and stability.",
        "image": "/asservissement/Capturekpki.png"
      },
      {
        "title": "Conclusion",
        "content":
          "This FPGA-based digital control project successfully implemented a complete robotic control system. The initial objectives were achieved through several major accomplishments: establishing a functional foundation with PWM signal generation, developing a precise speed measurement system, and successfully implementing a digital PI controller. The experimental results demonstrated the system's effectiveness with stable speed control showing less than 20% overshoot and zero static error. This implementation perfectly illustrates the benefit of FPGAs for real-time control of robotic systems."
      },
      {
        "title": "Part 2 | Line follower : Hardware-Software Distribution",
        "content": "The system functionality is distributed between Programmable Logic (PL) and Processing System (PS) components:\n\nProgrammable Logic (PL):\n- Real-time sensor data acquisition from line sensors and collision sensors\n- Data formatting and transmission to the PS via AXI interface\n- Implementation of hardware components for speed measurement\n\nProcessing System (PS):\n- Line following algorithms implementation\n- Motor control decision-making\n- Obstacle avoidance strategies\n- Overall system coordination"
    },
    {
        "title": "Line Following Functionality",
        "content": "The robot uses three infrared sensors positioned at the bottom to detect white lines on a dark background. The PL component captures binary values (1 or 0) from these sensors, which are then processed by the PS to determine the appropriate movement:\n\n- When the center sensor detects a white line while the lateral sensors detect black, the robot moves forward\n- When a lateral sensor detects a white line, the robot turns toward that side"
    },
    {
        "title": "Obstacle Detection",
        "content": "The robot is equipped with two collision sensors at the front to detect potential obstacles. When an obstacle is detected:\n\n- An interrupt is generated from PL to PS\n- The robot temporarily suspends line following\n- The motors are reversed to avoid collision\n- The robot returns to its previous behavior once the obstacle is cleared",
        "image": "/asservissement/diagramchoc.png"
      },
    {
        title: "State Machine Implementation",
        content: "The robot's behavior is implemented as a finite state machine with three main states:\n\n- Line Following: The primary state where the robot follows a white line\n- Object Following: Activated when no line is detected, using infrared sensors to follow moving objects\n- Collision Management: Triggered by interrupts from collision sensors",
        "image": "/asservissement/diagram.png"
      },

    {
        title: "Conclusion",
        content: "This FPGA-based digital control project successfully implemented a complete robotic control system. The initial objectives were achieved through several major accomplishments: establishing a functional foundation with PWM signal generation, developing a precise speed measurement system, and successfully implementing a digital PI controller. The experimental results demonstrated the system's effectiveness with stable speed control showing less than 20% overshoot and zero static error. This implementation perfectly illustrates the benefit of FPGAs for real-time control of robotic systems, especially when combined with line-following capabilities and obstacle avoidance for autonomous navigation."
    },
    ],
    tags: ["FPGA", "VHDL", "Zynq Z7", "PS/PL", "PWM", "PI Controller", "UART", "Encodeurs", "Vivado", "Simulations","C"],
  },
  {
    title: "Design and Implementation of an Advanced Digital Clock on FPGA",
    slug: "advanced-digital-clock",
    images: [
      "/horloge.png", 
    ],
    githubLink :"",
    sections: [
      {
        title: "Introduction",
        content: "This project involves the design and implementation of a digital clock on the ZYBO Z7-20 board and its extension board. The objective is to apply the VHDL concepts learned in the SIN 401 module to develop a fully functional clock system. The digital clock must include hour, minute, and second display, simple time adjustment, accelerated mode, 12h/24h mode selection, an adjustable alarm function, a stopwatch with tenths and hundredths of a second, and a date display."
    },
    {
      title: "Current Structure and Functionalities Implemented",
      content: "The primary functionality of this project is time display. While the base modules existed, modifications were needed to adapt them for our specific project. We configured six cascaded counters to separate hours, minutes, and seconds into tens and units, facilitating additional functionalities such as different display modes. To prevent errors in hour counting (e.g., jumping from 14 to 20), we adjusted the counter modulus and added a component that resets the system at 24 hours. Additionally, modifications were made to the multiplexer to ensure proper digit cycling, allowing smooth and accurate display updates.",
      image : "/clock/Clockdiag.png"
      },

    {
        title: "Accelerated Mode",
        content: "The accelerated mode validates the correct functionality of the clock. Two acceleration options, 100x and 1000x, were implemented. The base time generator produces signals with different frequencies, one of which has a 1000ms period, used for the 1000x acceleration. A new signal was introduced for the 100x acceleration by adjusting the bit-width configuration in the time base module. However, controlling multiple timing signals simultaneously proved challenging, requiring a decoder component to dynamically select the appropriate signal based on user input. The decoder allows users to toggle acceleration modes using switches."
    },
    {
      title:"Stopwatch function ",
      content: "Incorporating separate counters for seconds, tenths, and hundredths of a second, with dedicated buttons for start, reset, and pause functionalities."
    },
    {
      title :"12h/24h mode selection",
      content:"Requires modifying the state of switch to accommodate hour format conversion"
    },
    {
        title: "Conclusion",
        content: "Throughout this project, we analyzed the essential requirements for a digital clock, including accuracy, display functionality, and usability. We developed necessary components and structured the system based on logical design principles and previous lab experiences. While significant progress has been made, further refinements are needed to optimize the system and finalize missing features. Future work will focus on implementing the 12h/24h mode, completing the stopwatch function, and ensuring the stability of all functionalities without introducing new errors."
    }
    ],
    tags: ["Vivado", "VHDL", "FPGA", "IP"],
  },

  {
    title: "Face Tracking Device with Python and Arduino",
    slug: "face-tracking-python-arduino",
    images: [
      "/facetrackin/facetracking.png",
    ],
    githubLink: "https://github.com/boc4021/Face-Tracking-System",
    sections: [
      {
        title: "Introduction",
        content:
          "This project is about building a face-tracking device using Python and OpenCV, integrated with an Arduino UNO to control a camera. The device tracks the position of my face in real-time and adjusts the camera's orientation accordingly.",
      },
      {
        title: "Required Components",
        content:
          "The following components were used for this project: Arduino UNO, 2x Servo Motors (e.g., Tower Pro SG90), Web Camera, Python & OpenCV libraries.",
      },
      {
        title: "Installation and Setup",
        content:
          "First, install Python and OpenCV. You can install Python from python.org and use the command pip install opencv-python to install OpenCV. Make sure the Haar cascade file remains in the same folder as your Python program to enable facial detection.",
      },
      {
        title: "Understanding Facial Recognition",
        content:
          "This project uses Haar Cascade Classifiers for real-time face detection. Haar Classifiers are machine learning objects that help identify features in images and video. The classifier detects faces from the webcam feed and calculates the coordinates of the detected face in real-time.",
      },
      {
        title: "Python Code Implementation",
        content:
          "The Python script captures video frames, detects faces, and sends commands to the Arduino to adjust the camera position. The coordinates of the detected face are used to control the servos for moving the camera left, right, up, or down.",

      },
      {
        title: "Arduino Programming",
        content:
          "The Arduino receives serial data from Python and uses servo motors to move the camera. The servo angles are adjusted based on the face's position in the frame. The code includes commands to move the camera in different directions based on the face's detected coordinates.",

      },
      {
        title: "Conclusion",
        content:
          "This project demonstrates how to combine Python, OpenCV, and Arduino to create a real-time face-tracking device. The camera can be moved automatically based on facial recognition, providing an interesting and practical application of computer vision and robotics.",
      },
    ],
    tags: ["Python", "OpenCV", "Arduino", "Face Tracking", "Servo Motors", "Computer Vision", "Real-time Tracking"],
  },
  {
    title: "Smart Cart System",
    slug: "smart-cart-system",
    images: [],
    githubLink: "https://github.com/boc4021/Smart-Cart-System",
    sections: [
      {
        "title": "Introduction",
        "content": "Developed on Raspberry Pi (Ubuntu) using OpenCV for barcode scanning, with a Python/PyQt interface for managing purchases and real-time product data processing."
    },
    {
        "title": "OpenCV Development",
        "content": "The system uses OpenCV to scan barcodes and manage products."
    },
    {
        "title": "Python/PyQt Interface",
        "content": "The user interface is developed with PyQt to facilitate user interaction."
    },
    {
        "title": "Results",
        "content": "The system is capable of processing purchases in real time and providing product information."
    },
    ],
    tags: ["Python", "Linux", "OpenCV", "RaspberryPi"],
  },
] as const;

export const skillsData = [
  "C/C++",
  "Python",
  "Assembly",
  "Micropython",
  "VHDL",
  "FPGA",
  "RTOS",
  "Linux",
  "Verilog",
  "Labview",
  "Simulink",
  "Bus CAN",
  "UART",
  "SPI",
  "I2C",
  "Matlab",
  "Cadence",
  "Kicad",
  "Raspberry PI",
  "STM32",
  "ZYBO Z7",
  "CMSIS/FreeRTOS",
] as const;