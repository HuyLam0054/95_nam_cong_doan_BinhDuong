"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import Image from "next/image";
import {
  FaBirthdayCake,
  FaHome,
  FaMailBulk,
  FaPhoneAlt,
  FaUserCircle,
  FaUserGraduate,
} from "react-icons/fa";
import { Achievement } from "./achievement_card";

export interface InfoProps {}

export function Info(props: InfoProps) {
  return (
    <div className="bg-white dark:bg-gray-900 dark:border-gray-900 rounded-lg p-8 md:p-12">
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-row items-center justify-center w-full z-[20]"
      >
        <div className="h-full w-full flex flex-col justify-center m-auto text-start">
          {/* title */}
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-5 my-12 text-3xl md:text-5xl font-bold text-gray-800 dark:text-white max-w-[600px] w-auto h-auto"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Personal Info
            </span>
          </motion.div>
          {/* avt img */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={slideInFromTop(0.8)}
              className="w-full h-full justify-center items-center flex mt-3 md:mt-0 rounded-full"
            >
              <Image
                src="/avt_1.jpg"
                alt="work icons"
                height={450}
                width={450}
                className="rounded-full"
              />
            </motion.div>
            {/* information */}
            <div>
              <motion.p
                variants={slideInFromLeft(1.5)}
                className="text-2xl text-gray-700 dark:text-gray-300 mb-5 max-w-[600px]"
              >
                <span className="text-gray-800 dark:text-gray-50 font-bold">
                  Lâm Quang Huy
                </span>
              </motion.p>

              <motion.p
                variants={slideInFromLeft(1.6)}
                className="text-sm text-gray-700 dark:text-gray-300 mb-2 max-w-[600px]"
              >
                <span className="text-gray-800 dark:text-gray-50 flex flex-row">
                  <FaUserCircle className="mr-2 w-4 h-4" />
                  Male
                </span>
              </motion.p>
              <motion.p
                variants={slideInFromLeft(1.7)}
                className="text-sm text-gray-700 dark:text-gray-300 mb-2 max-w-[600px]"
              >
                <span className="text-gray-800 dark:text-gray-50 flex flex-row">
                  <FaBirthdayCake className="mr-2 w-4 h-4" />
                  12 / 11 / 2000
                </span>
              </motion.p>
              <motion.p
                variants={slideInFromLeft(1.8)}
                className="text-sm text-gray-700 dark:text-gray-300 mb-2 max-w-[600px]"
              >
                <span className="text-gray-800 dark:text-gray-50 flex flex-row">
                  <FaPhoneAlt className="mr-2 w-4 h-4" />
                  (+84) 383 780 054
                </span>
              </motion.p>
              <motion.p
                variants={slideInFromLeft(1.9)}
                className="text-sm text-gray-700 dark:text-gray-300 mb-2 max-w-[600px]"
              >
                <span className="text-gray-800 dark:text-gray-50 flex flex-row">
                  <FaMailBulk className="mr-2 w-4 h-4" />
                  huy.lam.0054@gmail.com
                </span>
              </motion.p>
              <motion.p
                variants={slideInFromLeft(2)}
                className="text-sm text-gray-700 dark:text-gray-300 mb-2 max-w-[600px]"
              >
                <span className="text-gray-800 dark:text-gray-50 flex flex-row">
                  <FaHome className="mr-2 w-4 h-4" />
                  Long Thanh, Dong Nai province
                </span>
              </motion.p>
              <motion.p
                variants={slideInFromLeft(2.1)}
                className="text-sm text-gray-700 dark:text-gray-300 mb-2 max-w-[600px]"
              >
                <span className="text-gray-800 dark:text-gray-50 flex flex-row">
                  <FaUserGraduate className="mr-2 w-4 h-4" />
                  Graduated from Thu Dau Mot University (8/2019 - 12/2023)
                </span>
              </motion.p>
            </div>
          </div>

          <motion.div
            variants={slideInFromLeft(2.2)}
            className="text-base md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-5 max-w-[600px] py-3"
          >
            <span className="font-bold">My Achievement</span>
            <Achievement
              name={`Classification of lung CT scans using machine learning`}
              type={`Department-level scientific research`}
              date={`2023`}
              description={`The project is the result of applying machine learning to 
              image analysis and classification to produce the desired results`}
            />
            <Achievement
              name={`Outstanding Impact Idea Award in Information Security Competition`}
              type={`Information Security Competition`}
              date={`2023`}
              description={`Prize for Information Security Idea, project involves 
              creating a virus capable of stealing user data through an .exe file extension.`}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
