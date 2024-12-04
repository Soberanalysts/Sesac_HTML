// import ThemeContext from "./ThemeContext";
// import {useState} from "react";

const Pagination = () => {
    return (
        <nav aria-label="Page navigation example">
        {/* <ul class="pagination bg-dark justify-content-center">
          <li class="page-item"><span class={`page-link ${isDarkMode ? } `href="#">&laquo;</span></li>
          <li class="page-item"><span class={`page-link ${isDarkMode ? } `href="#">1</span></li>
          <li class="page-item"><span class={`page-link ${isDarkMode ? } `href="#">2</span></li>
          <li class="page-item"><span class={`page-link ${isDarkMode ? } `href="#">3</span></li>
          <li class="page-item"><span class={`page-link ${isDarkMode ? } `href="#">&raquo;</span></li> */}
        <ul className={`pagination ${isDarkMode ? "bg-dark" : ""} justify-content-center`}>
          <li className="page-item"><span className={`page-link ${isDarkMode ? "bg-dark text-light" : ""}`} href="#">&laquo;</span></li>
          <li className="page-item"><span className={`page-link ${isDarkMode ? "bg-dark text-light" : ""}`} href="#">1</span></li>
          <li className="page-item"><span className={`page-link ${isDarkMode ? "bg-dark text-light" : ""}`} href="#">2</span></li>
          <li className="page-item"><span className={`page-link ${isDarkMode ? "bg-dark text-light" : ""}`} href="#">3</span></li>
          <li className="page-item"><span className={`page-link ${isDarkMode ? "bg-dark text-light" : ""}`} href="#">&raquo;</span></li>
        </ul>
    </nav>
    );
}


export default Pagination;