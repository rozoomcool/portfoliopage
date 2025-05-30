"use client"

import styles from './DownloadCVButton.module.scss';
import { useRef } from 'react';

export default function DownloadCVButton() {
    const linkRef = useRef(null);
	const handleClick = async () => {
        // const response = await fetch('/api/cv');
        // const blob = await response.blob();
        // const url = window.URL.createObjectURL(blob);
        const url = "/api/cv";
        const link = linkRef.current as HTMLAnchorElement | null;
        link!.href = url;
        // link.download = 'Umatke';
        link!.click();
        window.URL.revokeObjectURL(url);
      };

  return (
    <>
    <a ref={linkRef} style={{display: "none"}}></a>
    <button onClick={(e) => handleClick()} className={styles.downloadButton}>
    <div>
      <span className={styles.downloadButtonText}>DOWNLOAD CV</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width={18}
        height={18}
      >
        <path
          fillRule="evenodd"
          d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
          clipRule="evenodd"
        />
      </svg>
      </div>
    </button>
    </>
  );
}
