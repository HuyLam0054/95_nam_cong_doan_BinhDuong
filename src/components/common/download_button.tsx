import * as React from "react";
import { FaDownload } from "react-icons/fa";

export interface IDownloadButtonProps {
  url_download: string;
  file_name: string;
  align: string;
}

export function DownloadButton(props: IDownloadButtonProps) {
  return (
    <>
      <a href={props.url_download} download={props.file_name}>
        <button
          className={`z-40 relative flex flex-row items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 ${props.align}`}
        >
          <div className="flex relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <FaDownload className="mt-0.5 mr-2 " />
            <span>Tải về</span>
          </div>
        </button>
      </a>
    </>
  );
}